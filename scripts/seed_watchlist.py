#!/usr/bin/env python3
"""One-time seed: grow watchlist toward --target using high-star repos.

Sources:
  - docs/discoverhub/repos.json (enumerated names, if present)
  - GitHub Search API stars buckets (authenticated, 30 req/min)

Merges entries into data/watchlist.json with source "seed"/"discoverhub";
collect.py's merge_watchlist applies the MAX_WATCH cap on the next run,
so seeding beyond the cap is safe — eviction keeps the best-starred.

Usage: GITHUB_TOKEN=$(gh auth token) python3 scripts/seed_watchlist.py [--target 4800]
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WL = ROOT / "data" / "watchlist.json"
DH_REPOS = ROOT / "docs" / "discoverhub" / "repos.json"
SEARCH = "https://api.github.com/search/repositories"
# star buckets chosen so each yields <1000 results (search cap)
BUCKETS = ["stars:>=20000", "stars:10000..19999", "stars:6000..9999",
           "stars:4500..5999", "stars:3500..4499", "stars:2800..3499",
           "stars:2200..2799", "stars:1800..2199", "stars:1400..1799"]


def log(m):
    print(f"[seed {datetime.now():%H:%M:%S}] {m}", flush=True)


def search(q: str, pages: int, tok: str) -> list[dict]:
    out = []
    for p in range(1, pages + 1):
        url = (f"{SEARCH}?q={urllib.parse.quote(q)}&sort=stars"
               f"&order=desc&per_page=100&page={p}")
        req = urllib.request.Request(url, headers={
            "Authorization": f"Bearer {tok}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "trending-rank-radar seed"})
        with urllib.request.urlopen(req, timeout=30) as r:
            out += json.loads(r.read()).get("items") or []
        time.sleep(2.2)                      # search limit: 30 req/min
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", type=int, default=4800)
    args = ap.parse_args()
    tok = os.environ.get("GITHUB_TOKEN") or ""

    wl = json.loads(WL.read_text())
    repos = wl.setdefault("repos", {})
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    log(f"watchlist now: {len(repos)}")

    added = 0
    # 1) discoverhub enumerated names (free — already fetched)
    if DH_REPOS.exists():
        for fn in json.loads(DH_REPOS.read_text()):
            if fn in repos:
                continue
            repos[fn] = {"first_seen": today, "sources": ["discoverhub"],
                         "last_seen": today}
            added += 1
        log(f"+{added} from discoverhub (total {len(repos)})")

    # 2) search API star buckets until target
    if len(repos) < args.target and tok:
        for q in BUCKETS:
            if len(repos) >= args.target:
                break
            try:
                items = search(q, 10, tok)
            except Exception as e:
                log(f"[warn] {q}: {e}")
                break
            n = 0
            for it in items:
                fn = it.get("full_name")
                if not fn or fn in repos or it.get("fork"):
                    continue
                repos[fn] = {"first_seen": today, "sources": ["seed"],
                             "last_seen": today,
                             "stars": it.get("stargazers_count")}
                n += 1
            added += n
            log(f"{q}: +{n} (total {len(repos)})")
    elif len(repos) < args.target:
        log("[warn] no GITHUB_TOKEN — search seeding skipped")

    wl["updated_at"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    WL.write_text(json.dumps(wl, ensure_ascii=False, indent=1) + "\n")
    log(f"done: +{added} → watchlist {len(repos)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
