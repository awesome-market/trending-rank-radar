#!/usr/bin/env python3
"""Collect GitHub repo metrics and write a timestamped snapshot.

Flow (docs/02-data-pipeline.md):
  1. Discovery: trending pages + Search API candidates + existing watchlist
  2. Trim/merge watchlist (cap ~2000, eviction rules)
  3. Fetch metrics for all tracked repos (GraphQL batch, REST fallback)
  4. Write data/snapshots/YYYY-MM-DDTHH.json (UTC timestamp)
  5. Update data/repos/*.json metadata + data/watchlist.json

Env:
  GITHUB_TOKEN / GH_TOKEN  API token (required for real runs)
  SNAPSHOT_AT              optional ISO8601 UTC timestamp override (backfill)

Usage:
  python scripts/collect.py [--max-repos N] [--dry-run]
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import sys
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import gh  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
SNAP_DIR = DATA_DIR / "snapshots"
REPOS_DIR = DATA_DIR / "repos"
WATCHLIST_PATH = DATA_DIR / "watchlist.json"

# Sharded pipeline: --role=plan produces this dir's plan/watchlist artifacts;
# --role=shard drops metrics-K.json here; --role=reduce merges them and does
# all git-visible writes. Artifacts are passed between workflow jobs via
# upload/download-artifact, never through git itself.
PLAN_DIR = DATA_DIR / "collect-plan"
N_SHARDS = int(os.environ.get("TRR_SHARDS", "16"))


def shard_of(full_name: str, n: int) -> int:
    """Deterministic cross-process bucket. md5, not hash() — PYTHONHASHSEED
    randomizes hash() per process, which would break shard assignment."""
    return int(hashlib.md5(full_name.encode()).hexdigest(), 16) % n


def _client() -> gh.GitHubClient:
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if not token:
        log("[warn] no GITHUB_TOKEN/GH_TOKEN — API calls will be unauthenticated/rate-limited")
    return gh.GitHubClient(token=token)

MAX_WATCH = 10000
# Tiered refresh: candidates (trending/search hits) always refetch; repos
# that merely sit in the watchlist only refetch once last_fetch is
# TRR_COLD_DAYS old — the rest of the time their previous snapshot row is
# carried forward. ~1 GraphQL pt per live repo per run, so 10k tracked ≈
# ~3k pts/run, well inside the 5k/hr token budget.
COLD_DAYS = int(os.environ.get("TRR_COLD_DAYS", "3"))
NEW_WINDOW_DAYS = 90
NEW_MIN_STARS = 20
GROWTH_EVICT_DAYS = 14
REST_FALLBACK_LIMIT = 150
CORE_BATCH = 50
EXTENDED_BATCH = 10   # 15-repo extended batches intermittently hit GitHub's
                      # ~10s per-query server timeout (HTTP 502, still billed)
EXTENDED_KEYS = ("watchers", "issues_total", "prs_total", "releases_total", "topics",
                 "issues_open", "issues_closed", "prs_open", "prs_closed", "prs_merged")
SURGE_PUSHED_DAYS = 7
SURGE_BANDS = [(20, 300), (300, 1000), (1000, 5000)]

# Run-level stats consumed by scripts/ci_rescue.py via run_status.json
STATS = {"trending_ok": 0, "trending_failed": 0, "trending_items": 0}

BEIJING = timezone(timedelta(hours=8))
TODAY_UTC = lambda: datetime.now(timezone.utc)  # noqa: E731


def log(msg: str) -> None:
    print(f"[collect {datetime.now(timezone.utc).strftime('%H:%M:%S')}] {msg}", flush=True)


# ---------------------------------------------------------------- watchlist --
def load_watchlist() -> dict:
    if WATCHLIST_PATH.exists():
        try:
            return json.loads(WATCHLIST_PATH.read_text(encoding="utf-8"))
        except Exception as e:
            log(f"watchlist.json unreadable ({e}), starting fresh")
    return {"updated_at": None, "repos": {}}


def save_watchlist(wl: dict) -> None:
    wl["updated_at"] = TODAY_UTC().strftime("%Y-%m-%dT%H:%M:%SZ")
    WATCHLIST_PATH.parent.mkdir(parents=True, exist_ok=True)
    _atomic_write(WATCHLIST_PATH, json.dumps(wl, ensure_ascii=False, indent=1))


def _atomic_write(path: Path, text: str) -> None:
    """tmp+rename — a killed run must never leave a truncated JSON behind."""
    tmp = path.with_name(path.name + ".tmp")
    tmp.write_text(text, encoding="utf-8")
    os.replace(tmp, path)


# ---------------------------------------------------------------- discovery --
def discover(client: gh.GitHubClient, init_mode: bool) -> dict[str, dict]:
    """Return {full_name: {"sources": set, "stars": int|None, "trending": bool}}."""
    cand: dict[str, dict] = {}

    def add(fn: str, source: str, stars: int | None = None, trending: bool = False,
            fork: bool | None = None) -> None:
        if not fn or "/" not in fn:
            return
        if fork:  # forks are never ranked — don't waste watchlist slots
            return
        e = cand.setdefault(fn, {"sources": set(), "stars": None, "trending": False})
        e["sources"].add(source)
        if stars is not None:
            e["stars"] = max(e["stars"] or 0, stars)
        if trending:
            e["trending"] = True

    # 1) Trending pages: main + top languages. Fail fast — when github.com
    # rate-limits datacenter IPs every language page 5xx's identically, so
    # consecutive failures mean the source is down for this run; the watchlist
    # carries discovery continuity instead.
    trending_fails = 0
    for lang in [None] + gh.TRENDING_LANGUAGES:
        if trending_fails >= 2:
            log(f"[warn] trending unreachable ({trending_fails} consecutive failures); "
                "skipping remaining language pages")
            break
        try:
            items = client.trending(lang)
            if not items:
                # HTTP 200 + 0 解析结果 = GitHub 改了页面结构，解析器静默失效。
                # 必须计为失败——否则 ci_rescue 看到 trending_pages_ok>0，
                # 救援通道永远不会触发，trending 发现悄悄死亡。
                raise RuntimeError("0 repos parsed — trending markup changed?")
            trending_fails = 0
            STATS["trending_ok"] += 1
            for it in items:
                add(it["full_name"], "trending", stars=it.get("stars"), trending=True)
            STATS["trending_items"] += len(items)
            log(f"trending {'all' if lang is None else lang}: {len(items)} repos")
        except Exception as e:
            trending_fails += 1
            STATS["trending_failed"] += 1
            log(f"[warn] trending page failed ({lang or 'all'}): {e}")
        time.sleep(0.8)

    # 2) New-repo candidates aligned with the 90-day new-board window
    since = (TODAY_UTC() - timedelta(days=NEW_WINDOW_DAYS)).strftime("%Y-%m-%d")
    try:
        items = client.search_repositories(
            f"created:>{since} stars:>={NEW_MIN_STARS}", pages=2, per_page=100
        )
        for it in items:
            add(it["full_name"], "search_new",
                stars=it.get("stargazers_count"), fork=it.get("fork"))
        log(f"search new (created:>{since} stars:>={NEW_MIN_STARS}): {len(items)}")
    except Exception as e:
        log(f"[warn] new-repo search failed: {e}")

    # 3) Mid-band active repos — approximates "old repos suddenly surging",
    #    the gap left when trending is unreachable: old enough to be outside
    #    the new-repo window, still pushing commits, mid star band. Actual
    #    surge measurement happens downstream in the daily snapshots.
    active = (TODAY_UTC() - timedelta(days=SURGE_PUSHED_DAYS)).strftime("%Y-%m-%d")
    for lo, hi in SURGE_BANDS:
        try:
            items = client.search_repositories(
                f"created:<{since} stars:{lo}..{hi} pushed:>{active}",
                pages=1, per_page=100)
            for it in items:
                add(it["full_name"], "search_surge",
                    stars=it.get("stargazers_count"), fork=it.get("fork"))
            log(f"search surge (stars:{lo}..{hi}): {len(items)}")
        except Exception as e:
            log(f"[warn] surge search failed ({lo}..{hi}): {e}")
        time.sleep(0.8)

    # 4) Cold start only: seed high-star repos so total board has coverage
    if init_mode:
        try:
            items = client.search_repositories("stars:>=2000", pages=10, per_page=100)
            for it in items:
                add(it["full_name"], "seed",
                    stars=it.get("stargazers_count"), fork=it.get("fork"))
            log(f"seed high-star repos: {len(items)}")
        except Exception as e:
            log(f"[warn] seed search failed: {e}")

    return cand


def _snapshot_stars(path: Path) -> dict[str, int]:
    try:
        j = json.loads(path.read_text(encoding="utf-8"))
        return {t[0]: t[1] for t in j.get("repos", []) if isinstance(t, list) and len(t) > 1}
    except Exception:
        return {}


def _growth_over_days(days: int) -> dict[str, int]:
    """stars growth between the ~`days`-old snapshot and the latest one."""
    files = sorted(SNAP_DIR.glob("*.json"))
    if len(files) < 2:
        return {}
    latest = _snapshot_stars(files[-1])
    # pick the file closest to `days` ago by filename timestamp
    target = TODAY_UTC() - timedelta(days=days)
    best, best_dt = None, None
    for f in files[:-1]:
        try:
            dt = datetime.strptime(f.stem, "%Y-%m-%dT%H").replace(tzinfo=timezone.utc)
        except ValueError:
            continue
        diff = abs((dt - target).total_seconds())
        if best_dt is None or diff < best_dt:
            best, best_dt = f, diff
    # reject a file that's wildly off the window — with sparse data the
    # "closest" file could be months old and its growth numbers would then
    # masquerade as e.g. 14-day growth in the eviction check below
    if best is None or best_dt > days * 86400 * 1.5:
        return {}
    old = _snapshot_stars(best)
    return {n: latest.get(n, 0) - old.get(n, 0) for n in latest}


def merge_watchlist(wl: dict, cand: dict[str, dict], max_watch: int,
                    today: str) -> dict:
    repos = wl.setdefault("repos", {})
    for fn, c in cand.items():
        meta = repos.setdefault(fn, {"first_seen": today, "sources": []})
        srcs = set(meta.get("sources") or []) | c["sources"]
        meta["sources"] = sorted(srcs)
        meta["last_seen"] = today
        if c.get("stars") is not None:
            meta["stars"] = c["stars"]
        if c.get("trending"):
            meta["trending_hits"] = int(meta.get("trending_hits") or 0) + 1

    if len(repos) <= max_watch:
        return repos

    # Eviction tier 1: not trending this run AND zero/negative 14d growth → lowest stars first
    growth14 = _growth_over_days(GROWTH_EVICT_DAYS)
    trending_hits = {fn for fn, c in cand.items() if c.get("trending")}
    evictable = [
        n for n in repos
        if n not in trending_hits and growth14.get(n, 0) <= 0
    ]
    evictable.sort(key=lambda n: repos[n].get("stars") or 0)
    need = len(repos) - max_watch
    for n in evictable[:need]:
        del repos[n]

    # Eviction tier 2: still over → drop lowest-star repos
    if len(repos) > max_watch:
        rest = sorted(repos, key=lambda n: repos[n].get("stars") or 0)
        for n in rest[: len(repos) - max_watch]:
            del repos[n]
    return repos


# ------------------------------------------------------------------ metrics --
def fetch_metrics(client: gh.GitHubClient, names: list[str],
                  extended: bool = False) -> tuple[dict, list]:
    """Return ({full_name: metrics}, [[full_name, reason], ...]).

    Two-tier fetch: core scalar fields every run (cheap, batch 50);
    extended connection counts (watchers/issues/prs/releases/topics plus
    issue/PR open/closed/merged splits) only when `extended` — they are
    ~20x more expensive, so collect runs them once daily.
    """
    metrics: dict[str, dict] = {}
    unresolved: list[list] = []

    try:
        res = client.snapshot_metrics(names, batch_size=CORE_BATCH, extended=False)
    except Exception as e:
        log(f"[warn] graphql core pass failed: {e}")
        res = {n: None for n in names}
    for n, m in res.items():
        if m:
            metrics[n] = m
    if client.last_graphql_errors:
        log(f"[warn] graphql partial errors: {str(client.last_graphql_errors)[:200]}")
    log(f"core resolved {len(metrics)}/{len(names)}")

    failed = [n for n in names if n not in metrics]
    log(f"REST fallback for {min(len(failed), REST_FALLBACK_LIMIT)} failures")

    for n in failed[:REST_FALLBACK_LIMIT]:
        owner, _, name = n.partition("/")
        try:
            m = client.repo_rest(owner, name)
        except Exception as e:
            log(f"[warn] rest fallback {n}: {e}")
            m = None
        if m:
            metrics[n] = m
        else:
            unresolved.append([n, "not_found"])
        time.sleep(0.15)

    for n in failed[REST_FALLBACK_LIMIT:]:
        unresolved.append([n, "fallback_skipped"])

    # extended pass — once daily (UTC 14:00 "close" run), resolved repos only
    if extended and metrics:
        log(f"extended metrics pass for {len(metrics)} repos (slow, ~15-20min)")
        t0 = time.time()
        ext: dict[str, dict | None] = {}
        names = list(metrics)
        # Chunked so one mid-pass network failure doesn't discard all prior batches.
        for i in range(0, len(names), 200):
            part = names[i:i + 200]
            try:
                ext.update(client.snapshot_metrics(part, batch_size=EXTENDED_BATCH,
                                                   extended=True))
            except Exception as e:
                log(f"[warn] extended chunk {i}-{i + len(part)} failed: {e}")
            log(f"extended progress: {min(i + 200, len(names))}/{len(names)}")
        merged = 0
        for n, m in ext.items():
            if m and n in metrics:
                for k in EXTENDED_KEYS:
                    if m.get(k) is not None:
                        metrics[n][k] = m[k]
                if m.get("detail"):
                    metrics[n]["detail"] = m["detail"]
                merged += 1
        log(f"extended pass done: {merged} repos in {round(time.time() - t0)}s")

    return metrics, unresolved


SNAP_FIELDS = ("stars", "forks", "watchers", "issues_total", "prs_total",
               "releases_total", "created_at", "language", "is_fork",
               "is_archived", "issues_open", "issues_closed", "prs_open",
               "prs_closed", "prs_merged")


def load_latest_snapshot() -> dict | None:
    """Most recent parseable snapshot file, or None."""
    for f in reversed(sorted(SNAP_DIR.glob("*.json"))):
        try:
            return json.loads(f.read_text(encoding="utf-8"))
        except Exception:
            continue
    return None


def pick_fetches(repos: dict[str, dict], cand: dict[str, dict],
                 day) -> list[str]:
    """Hot set: candidates this run + repos never/stale-fetched."""
    out = []
    for n, meta in repos.items():
        lf = meta.get("last_fetch")
        stale = (lf is None
                 or (day - datetime.fromisoformat(lf).date()).days
                 >= COLD_DAYS)
        if n in cand or stale:
            out.append(n)
    return out


def carry_forward_stale(metrics: dict[str, dict], wanted: list[str],
                        prev_snap: dict) -> int:
    """Fill metrics for skipped cold repos from the previous snapshot row."""
    rows = {r[0]: r for r in prev_snap.get("repos", []) if len(r) >= 3}
    filled = 0
    for n in wanted:
        if n in metrics or n not in rows:
            continue
        r = rows[n]
        metrics[n] = {k: (r[i + 1] if len(r) > i + 1 else None)
                      for i, k in enumerate(SNAP_FIELDS)}
        filled += 1
    return filled


def carry_forward_extended(metrics: dict[str, dict], prev_snap: dict) -> int:
    """Fill missing extended counters from a previous snapshot.

    watchers/issues_total/prs_total/releases_total and the issue/PR state
    splits are cumulative counters, so "latest known value" is honest on
    runs that skipped the expensive extended pass — otherwise every
    non-extended run would erase them from site data.
    """
    prev = {r[0]: r for r in prev_snap.get("repos", []) if len(r) >= 7}
    keymap = (("watchers", 3), ("issues_total", 4), ("prs_total", 5), ("releases_total", 6),
              ("issues_open", 11), ("issues_closed", 12), ("prs_open", 13),
              ("prs_closed", 14), ("prs_merged", 15))
    filled = 0
    for name, m in metrics.items():
        row = prev.get(name)
        if not row:
            continue
        for k, i in keymap:
            # rows predate the 16-column format may lack trailing indexes
            if m.get(k) is None and len(row) > i and row[i] is not None:
                m[k] = row[i]
                filled += 1
    return filled


# -------------------------------------------------------------------- main ---
def parse_snapshot_at(raw: str | None) -> datetime:
    if not raw:
        return TODAY_UTC()
    dt = datetime.fromisoformat(raw.replace("Z", "+00:00"))
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc)


def write_repo_meta(metrics: dict[str, dict]) -> int:
    """Persist low-frequency metadata; returns count of files written."""
    written = 0
    REPOS_DIR.mkdir(parents=True, exist_ok=True)
    for fn, m in metrics.items():
        if "pushed_at" not in m and "description" not in m:
            continue            # carried-forward cold row — keep the file as-is
        owner, _, name = fn.partition("/")
        path = REPOS_DIR / f"{owner}__{name}.json"
        existing = {}
        try:
            if path.exists():
                existing = json.loads(path.read_text(encoding="utf-8"))
        except Exception:
            pass
        # topics come only from the once-daily extended pass — a missing key
        # means "not fetched", carry the stored list; a fetched [] is real
        topics = m.get("topics")
        if topics is None:
            topics = existing.get("topics") or []
        meta = {
            "description": m.get("description"),
            "homepage": m.get("homepage"),
            "topics": topics,
            "pushed_at": m.get("pushed_at"),
            "updated_at": m.get("updated_at"),
        }
        # detail objects come only from the once-daily extended pass — carry the
        # previous file's detail forward so normal runs don't erase it
        detail = m.get("detail") or existing.get("detail")
        if detail:
            meta["detail"] = detail
        if existing == meta:
            continue
        _atomic_write(path, json.dumps(meta, ensure_ascii=False))
        written += 1
    return written


def _finalize(metrics: dict, unresolved: list, names: list, repos: dict,
              wl: dict, stamp: str, run_at: str, today: str,
              live_fetch: int, stats: dict) -> int:
    """Shared tail: stamp last_fetch → carry-forwards → snapshot/meta/
    watchlist/status writes. Used by both standalone runs and the sharded
    reduce role, so git-visible output is identical either way."""
    for n in metrics:
        repos[n]["last_fetch"] = today

    # cold repos keep yesterday's numbers — carry their previous row forward
    prev = load_latest_snapshot()
    if prev:
        filled = carry_forward_stale(metrics, names, prev)
        log(f"carried forward stale repos from {prev.get('date')}: {filled}")

    # Always run carry-forward: on non-extended runs it preserves the counters;
    # on extended runs it backfills whatever the (possibly partially failed)
    # extended pass left as None. Idempotent — a fully successful pass makes it
    # a no-op. 向前找最近一份含扩展字段的快照（本文件尚未写盘，不会命中自己）。
    try:
        for f in reversed(sorted(SNAP_DIR.glob("*.json"))):
            try:
                prev = json.loads(f.read_text(encoding="utf-8"))
            except Exception:
                continue
            if any(len(r) >= 7 and r[3] is not None for r in prev.get("repos", [])):
                n = carry_forward_extended(metrics, prev)
                log(f"carried forward extended fields from {f.name}: {n} values")
                break
        else:
            log("no prior snapshot with extended fields; skipping carry-forward")
    except Exception as e:
        log(f"[warn] carry-forward skipped: {e}")

    repos_arr = []
    for n in sorted(metrics):
        m = metrics[n]
        repos_arr.append([
            n,
            m.get("stars"), m.get("forks"), m.get("watchers"),
            m.get("issues_total"), m.get("prs_total"), m.get("releases_total"),
            m.get("created_at"), m.get("language"),
            bool(m.get("is_fork")), bool(m.get("is_archived")),
            m.get("issues_open"), m.get("issues_closed"),
            m.get("prs_open"), m.get("prs_closed"), m.get("prs_merged"),
        ])

    snap = {
        "date": stamp,
        "run_at": run_at,
        "repos": repos_arr,
        "errors": unresolved,
    }

    SNAP_DIR.mkdir(parents=True, exist_ok=True)
    out = SNAP_DIR / f"{stamp}.json"
    _atomic_write(out, json.dumps(snap, ensure_ascii=False, separators=(",", ":")))
    log(f"wrote {out} ({out.stat().st_size // 1024} KB)")

    written = write_repo_meta(metrics)
    save_watchlist(wl)
    log(f"repo meta files written: {written}; watchlist saved")

    status = {
        "run_at": run_at,
        "trending_pages_ok": stats["trending_ok"],
        "trending_pages_failed": stats["trending_failed"],
        "trending_items": stats["trending_items"],
        "repos_collected": len(repos_arr),
        "repos_live_fetch": live_fetch,
        "metrics_unresolved": len(unresolved),
    }
    _atomic_write(ROOT / "run_status.json",
                  json.dumps(status, ensure_ascii=False, indent=1) + "\n")
    return 0


def role_plan(args) -> int:
    """Global decisions only: discovery → watchlist merge → fetch plan.
    Emits data/collect-plan/{plan.json,watchlist.json} as workflow artifacts —
    shards and the reduce job consume these; nothing here touches git state
    (the staged watchlist is committed by reduce after last_fetch stamps)."""
    at = parse_snapshot_at(os.environ.get("SNAPSHOT_AT"))
    stamp = at.strftime("%Y-%m-%dT%H")
    today = at.astimezone(BEIJING).date().isoformat()
    day = at.date()
    log(f"[plan] snapshot stamp={stamp} (beijing day={today}) shards={N_SHARDS}")

    wl = load_watchlist()
    init_mode = not wl.get("repos")
    if init_mode:
        log("watchlist empty → init mode (seed high-star repos)")
    client = _client()

    cand = discover(client, init_mode)
    log(f"[plan] discovery candidates: {len(cand)}")

    repos = merge_watchlist(wl, cand, args.max_repos, today)
    names = sorted(repos)
    to_fetch = pick_fetches(repos, cand, day)
    log(f"[plan] watchlist={len(names)} tiered_fetch={len(to_fetch)} "
        f"(extended shards fetch all {len(names)})")

    PLAN_DIR.mkdir(parents=True, exist_ok=True)
    _atomic_write(PLAN_DIR / "plan.json", json.dumps({
        "stamp": stamp,
        "run_at": at.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "today": today,
        "n_shards": N_SHARDS,
        "names": names,
        "fetches": to_fetch,
        "stats": dict(STATS),
    }, ensure_ascii=False))
    _atomic_write(PLAN_DIR / "watchlist.json",
                  json.dumps(wl, ensure_ascii=False))
    log("[plan] wrote plan + staged watchlist")
    return 0


def role_shard(args) -> int:
    """Fetch worker — reads plan.json, fetches only md5%N==K names, emits
    metrics-K.json. No git writes; the reduce job merges all shards."""
    plan = json.loads((PLAN_DIR / "plan.json").read_text(encoding="utf-8"))
    n, k = int(plan["n_shards"]), args.shard
    if not (0 <= k < n):
        log(f"[shard] invalid shard {k}/{n}")
        return 2
    extended = os.environ.get("TRR_EXTENDED") == "1"
    # extended runs refresh EVERYTHING — sharding makes full coverage cheap;
    # core-only runs keep the tiered hot+cold-rotation fetch list
    pool = plan["names"] if extended else plan["fetches"]
    mine = [nm for nm in pool if shard_of(nm, n) == k]
    log(f"[shard] k={k}/{n} extended={extended} pool={len(pool)} mine={len(mine)}")

    metrics, unresolved = fetch_metrics(_client(), mine, extended=extended)
    PLAN_DIR.mkdir(parents=True, exist_ok=True)
    _atomic_write(PLAN_DIR / f"metrics-{k}.json", json.dumps(
        {"shard": k, "metrics": metrics, "unresolved": unresolved},
        ensure_ascii=False))
    log(f"[shard] wrote metrics-{k}.json: {len(metrics)} repos, "
        f"{len(unresolved)} unresolved")
    return 0


def role_reduce(args) -> int:
    """Merge shard artifacts → shared finalize tail. All git-visible writes
    happen here, so the pipeline keeps a single writer on data/."""
    plan = json.loads((PLAN_DIR / "plan.json").read_text(encoding="utf-8"))
    wl = json.loads((PLAN_DIR / "watchlist.json").read_text(encoding="utf-8"))
    repos = wl.get("repos") or {}

    metrics: dict[str, dict] = {}
    unresolved: list[list] = []
    got: set[int] = set()
    for f in PLAN_DIR.glob("metrics-*.json"):
        try:
            d = json.loads(f.read_text(encoding="utf-8"))
            got.add(int(d.get("shard", f.stem.rsplit("-", 1)[-1])))
            metrics.update(d.get("metrics") or {})
            unresolved += d.get("unresolved") or []
        except Exception as e:
            log(f"[warn] unreadable {f.name}: {e}")
    missing = sorted(set(range(int(plan["n_shards"]))) - got)
    for k in missing:
        unresolved.append([f"shard:{k}", "shard_failed"])
    log(f"[reduce] shards {len(got)}/{plan['n_shards']} "
        f"missing={missing or 'none'} metrics={len(metrics)}")

    return _finalize(metrics, unresolved, plan["names"], repos, wl,
                     plan["stamp"], plan["run_at"], plan["today"],
                     len(plan["fetches"]), plan["stats"])


def main() -> int:
    ap = argparse.ArgumentParser(description="Collect GitHub repo snapshot")
    ap.add_argument("--max-repos", type=int, default=MAX_WATCH)
    ap.add_argument("--dry-run", action="store_true", help="discover+fetch but don't write")
    ap.add_argument("--role", choices=["standalone", "plan", "shard", "reduce"],
                    default="standalone",
                    help="sharded pipeline role; standalone = classic one-shot")
    ap.add_argument("--shard", type=int, default=-1,
                    help="shard index K (role=shard only)")
    args = ap.parse_args()

    if args.role == "plan":
        return role_plan(args)
    if args.role == "shard":
        return role_shard(args)
    if args.role == "reduce":
        return role_reduce(args)

    at = parse_snapshot_at(os.environ.get("SNAPSHOT_AT"))
    stamp = at.strftime("%Y-%m-%dT%H")
    today = at.astimezone(BEIJING).date().isoformat()
    log(f"snapshot stamp={stamp} (beijing day={today})")

    wl = load_watchlist()
    init_mode = not wl.get("repos")
    if init_mode:
        log("watchlist empty → init mode (seed high-star repos)")
    client = _client()

    cand = discover(client, init_mode)
    log(f"discovery candidates: {len(cand)}")

    repos = merge_watchlist(wl, cand, args.max_repos, today)
    names = sorted(repos)
    log(f"watchlist size: {len(names)}")

    # tiered fetch: hot = candidates this run + never/stale-fetched
    day = at.date()
    to_fetch = pick_fetches(repos, cand, day)
    log(f"tiered fetch: {len(to_fetch)}/{len(names)} live "
        f"(candidates={len(cand)}, cold_days={COLD_DAYS})")

    # extended metrics once daily: the UTC-14:00 "close" run (or TRR_EXTENDED=1)
    extended = at.hour == 14 or os.environ.get("TRR_EXTENDED") == "1"
    metrics, unresolved = fetch_metrics(client, to_fetch, extended=extended)
    log(f"metrics resolved: {len(metrics)}; unresolved: {len(unresolved)}")

    if args.dry_run:
        log(f"dry-run: would write {len(metrics)} repos, {len(unresolved)} errors")
        return 0
    return _finalize(metrics, unresolved, names, repos, wl, stamp,
                     at.strftime("%Y-%m-%dT%H:%M:%SZ"), today,
                     len(to_fetch), STATS)


if __name__ == "__main__":
    sys.exit(main())
