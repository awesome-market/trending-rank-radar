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

MAX_WATCH = 5000
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
    WATCHLIST_PATH.write_text(json.dumps(wl, ensure_ascii=False, indent=1), encoding="utf-8")


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
    if best is None:
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
        owner, _, name = fn.partition("/")
        path = REPOS_DIR / f"{owner}__{name}.json"
        existing = {}
        try:
            if path.exists():
                existing = json.loads(path.read_text(encoding="utf-8"))
        except Exception:
            pass
        meta = {
            "description": m.get("description"),
            "homepage": m.get("homepage"),
            "topics": m.get("topics") or [],
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
        path.write_text(json.dumps(meta, ensure_ascii=False), encoding="utf-8")
        written += 1
    return written


def main() -> int:
    ap = argparse.ArgumentParser(description="Collect GitHub repo snapshot")
    ap.add_argument("--max-repos", type=int, default=MAX_WATCH)
    ap.add_argument("--dry-run", action="store_true", help="discover+fetch but don't write")
    args = ap.parse_args()

    at = parse_snapshot_at(os.environ.get("SNAPSHOT_AT"))
    stamp = at.strftime("%Y-%m-%dT%H")
    today = at.astimezone(BEIJING).date().isoformat()
    log(f"snapshot stamp={stamp} (beijing day={today})")

    wl = load_watchlist()
    init_mode = not wl.get("repos")
    if init_mode:
        log("watchlist empty → init mode (seed high-star repos)")

    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if not token and not args.dry_run:
        log("[warn] no GITHUB_TOKEN/GH_TOKEN — API calls will be unauthenticated/rate-limited")
    client = gh.GitHubClient(token=token)

    cand = discover(client, init_mode)
    log(f"discovery candidates: {len(cand)}")

    repos = merge_watchlist(wl, cand, args.max_repos, today)
    names = sorted(repos)
    log(f"watchlist size: {len(names)}")

    # extended metrics once daily: the UTC-14:00 "close" run (or TRR_EXTENDED=1)
    extended = at.hour == 14 or os.environ.get("TRR_EXTENDED") == "1"
    metrics, unresolved = fetch_metrics(client, names, extended=extended)
    log(f"metrics resolved: {len(metrics)}; unresolved: {len(unresolved)}")

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
        "run_at": at.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "repos": repos_arr,
        "errors": unresolved,
    }

    if args.dry_run:
        log(f"dry-run: would write {len(repos_arr)} repos, {len(unresolved)} errors")
        return 0

    SNAP_DIR.mkdir(parents=True, exist_ok=True)
    out = SNAP_DIR / f"{stamp}.json"
    out.write_text(json.dumps(snap, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    log(f"wrote {out} ({out.stat().st_size // 1024} KB)")

    written = write_repo_meta(metrics)
    save_watchlist(wl)
    log(f"repo meta files written: {written}; watchlist saved")

    status = {
        "run_at": at.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "trending_pages_ok": STATS["trending_ok"],
        "trending_pages_failed": STATS["trending_failed"],
        "trending_items": STATS["trending_items"],
        "repos_collected": len(repos_arr),
        "metrics_unresolved": len(unresolved),
    }
    (ROOT / "run_status.json").write_text(
        json.dumps(status, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main())
