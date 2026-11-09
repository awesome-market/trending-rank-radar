#!/usr/bin/env python3
"""Fetch press/news coverage for tracked repos into data/news/.

Sources per repo (all keyless, polite-paced):
  - Hacker News  Algolia search_by_date, URL-exact on github.com/owner/repo
  - Google News  RSS search, zh-CN and en-US locales (links are Google
                 redirect shells; <source> carries the media outlet name)
  - Bing News    RSS search, zh-TW and en-US markets (zh-CN mkt is geo-
                 blocked from non-CN IPs; zh-TW still returns CN media).
                 apiclick links carry the real URL in their url= param,
                 so Bing items resolve to direct article links.

Output: data/news/{owner}__{repo}.json
  {"repo": "o/n", "fetched_at": "...", "items": [
      {"title", "url", "source", "lang" ("zh"|"en"), "date",
       "points"?, "comments"?, "hn"?}]}

Repos with zero items get no file (rank.py treats missing = no news).
A failed source contributes nothing but never erases previously stored
items — the file is only written when at least one source responded.

Modes:
  --board   union of the latest day's board items (default; daily cadence)
  --all     every repo in data/repos/ (weekly backfill)
  --only o/n   single repo, for testing
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
SITE_DATA = ROOT / "site" / "data"
NEWS_DIR = DATA_DIR / "news"
UA = {"User-Agent": "trending-rank-radar news-bot (+https://zhuikan.com)"}
PACE = 0.4          # seconds between HTTP requests
MAX_PER_LANG = 10   # cap stored items per language
GN_LOCALES = {"zh": ("zh-CN", "CN", "CN:zh-Hans"),
              "en": ("en-US", "US", "US:en")}
BING_LOCALES = {"zh": ("zh-TW", "zh-hant"),
                "en": ("en-US", "en-us")}
# Bing rejects the bot UA with a homepage redirect; send a browser one.
BROWSER_UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                            "AppleWebKit/537.36 Chrome/120.0 Safari/537.36"}


def log(msg: str) -> None:
    print(f"[news {datetime.now():%H:%M:%S}] {msg}", flush=True)


def _get(url: str, tries: int = 2, headers: dict | None = None) -> bytes:
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=headers or UA)
            return urllib.request.urlopen(req, timeout=20).read()
        except Exception:
            if i == tries - 1:
                raise
            time.sleep(2)


def fetch_hn(owner: str, name: str) -> list[dict]:
    # relevance search (not search_by_date): notable stories rank first
    q = urllib.parse.quote(f"github.com/{owner}/{name}")
    url = ("https://hn.algolia.com/api/v1/search"
           f"?query={q}&tags=story&hitsPerPage=8")
    d = json.loads(_get(url))
    out = []
    for h in d.get("hits") or []:
        oid = h.get("objectID")
        out.append({
            "title": h.get("title") or "",
            "url": h.get("url")
                   or f"https://news.ycombinator.com/item?id={oid}",
            "hn": f"https://news.ycombinator.com/item?id={oid}",
            "source": "Hacker News", "lang": "en",
            "date": (h.get("created_at") or "")[:10],
            "points": h.get("points"), "comments": h.get("num_comments"),
            "_k": f"hn:{oid}",
        })
    return out


def fetch_gn(owner: str, name: str, lang: str) -> list[dict]:
    hl, gl, ceid = GN_LOCALES[lang]
    q = urllib.parse.quote(f'"{name}" github')
    url = ("https://news.google.com/rss/search"
           f"?q={q}&hl={hl}&gl={gl}&ceid={urllib.parse.quote(ceid)}")
    root = ET.fromstring(_get(url))
    out = []
    for it in root.iter("item"):
        title = (it.findtext("title") or "").strip()
        link = it.findtext("link") or ""
        src = it.find("source")
        src_name = (src.text or "").strip() if src is not None else ""
        pub = it.findtext("pubDate") or ""
        try:
            date = datetime.strptime(
                pub, "%a, %d %b %Y %H:%M:%S %Z").strftime("%Y-%m-%d")
        except ValueError:
            date = pub[:10]
        if not title or not link:
            continue
        out.append({"title": title, "url": link,
                    "source": src_name or "Google News",
                    "lang": lang, "date": date, "_k": f"gn:{link}"})
        if len(out) >= 5:
            break
    return out


def fetch_bing(owner: str, name: str, lang: str) -> list[dict]:
    mkt, setlang = BING_LOCALES[lang]
    q = urllib.parse.quote(f'"{name}" github')
    url = ("https://www.bing.com/news/search"
           f"?q={q}&format=rss&mkt={mkt}&setlang={setlang}")
    root = ET.fromstring(_get(url, headers=BROWSER_UA))
    out = []
    for it in root.iter("item"):
        title = (it.findtext("title") or "").strip()
        link = it.findtext("link") or ""
        src = next((e for e in it.iter() if e.tag.rpartition("}")[2]
                    == "Source"), None)
        src_name = (src.text or "").strip() if src is not None else ""
        pub = it.findtext("pubDate") or ""
        try:
            date = datetime.strptime(
                pub, "%a, %d %b %Y %H:%M:%S %Z").strftime("%Y-%m-%d")
        except ValueError:
            date = pub[:10]
        if not title or not link:
            continue
        # apiclick shells embed the article URL in url=; keep shell only
        # as a fallback when the param is absent
        real = urllib.parse.parse_qs(
            urllib.parse.urlparse(link).query).get("url", [link])[0]
        # a github.com hit is the repo indexing itself, not coverage
        if "github.com" in urllib.parse.urlparse(real).netloc:
            continue
        out.append({"title": title, "url": real,
                    "source": src_name or "Bing News",
                    "lang": lang, "date": date, "_k": f"bing:{real}"})
        if len(out) >= 5:
            break
    return out


def _key(it: dict) -> str:
    if it.get("_k"):
        return it["_k"]
    if it.get("hn"):                       # stored HN item (no _k on disk)
        return f"hn:{it['hn'].rsplit('=', 1)[-1]}"
    u = it.get("url", "")
    # stored items keep the fetcher's key namespace so they dedup against
    # the next fetch (GN shells → gn:, real/direct urls → bing:)
    return ("gn:" if "news.google.com" in u else "bing:") + u


def _norm_title(it: dict) -> str:
    """Strip the trailing '- <source> [- site tagline]' Google News appends
    (spacing varies: ' - ' / '- '), then return a dedup fingerprint."""
    t, s = (it.get("title") or ""), (it.get("source") or "")
    if s:
        m = re.search(r"\s*[-–—]\s*" + re.escape(s), t)
        if m and m.start() >= 5:
            t = t[:m.start()].strip()
    it["title"] = t
    # the fetch-locale lang label lies when an aggregator returns a
    # foreign-language article; CJK presence is the reliable signal
    it["lang"] = "zh" if re.search(r"[一-鿿]", t) else "en"
    return re.sub(r"\W+", "", t).lower()


def merge(old: list | None, new: list) -> list:
    """Dedup (fetch _k, hn id, gn url — plus a title fallback since Google
    redirect URLs can differ between fetches), cap per language, ordered by
    notability (HN points first, then recency)."""
    seen: dict[str, dict] = {}
    for it in (old or []) + new:      # new overwrites stale fields on same _k
        _norm_title(it)
        seen[_key(it)] = it
    by_lang: dict[str, list] = {}
    for it in seen.values():
        by_lang.setdefault(it.get("lang") or "en", []).append(it)
    out = []
    # prefer direct links over Google redirect shells when the same story
    # arrives from both aggregators, then notability (points, date)
    rank = lambda x: ("news.google.com" not in (x.get("url") or ""),
                      x.get("points") or 0, x.get("date") or "")
    for lst in by_lang.values():
        lst.sort(key=rank, reverse=True)
        titles = set()
        keep = []
        for it in lst:
            nt = _norm_title(it)
            if nt in titles:
                continue
            titles.add(nt)
            keep.append(it)
        out += keep[:MAX_PER_LANG]
    for it in out:
        it.pop("_k", None)
    out.sort(key=rank, reverse=True)
    return out


def board_repos() -> list[str]:
    idx = json.loads((SITE_DATA / "index.json").read_text(encoding="utf-8"))
    day = json.loads((SITE_DATA / "days" / f"{idx['latest_day']}.json")
                     .read_text(encoding="utf-8"))
    return sorted({e["full_name"] for b in (day.get("boards") or {}).values()
                   for e in (b.get("items") or [])})


def all_repos() -> list[str]:
    return sorted(p.stem.replace("__", "/")
                  for p in (DATA_DIR / "repos").glob("*.json"))


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    g = ap.add_mutually_exclusive_group()
    g.add_argument("--board", action="store_true", help="board repos (default)")
    g.add_argument("--all", dest="all_", action="store_true",
                   help="every tracked repo")
    g.add_argument("--only", metavar="OWNER/REPO", help="single repo")
    args = ap.parse_args()

    repos = ([args.only] if args.only
             else all_repos() if args.all_ else board_repos())
    log(f"{len(repos)} repos to check "
        f"({'all' if args.all_ else 'single' if args.only else 'board'})")
    NEWS_DIR.mkdir(parents=True, exist_ok=True)

    fetchers = (fetch_hn,
                lambda o, n: fetch_gn(o, n, "zh"),
                lambda o, n: fetch_gn(o, n, "en"),
                lambda o, n: fetch_bing(o, n, "zh"),
                lambda o, n: fetch_bing(o, n, "en"))
    updated = kept = errs = 0
    for i, fn in enumerate(repos):
        if "/" not in fn:
            continue
        owner, name = fn.split("/", 1)
        path = NEWS_DIR / f"{owner}__{name}.json"
        old = {}
        if path.exists():
            try:
                old = json.loads(path.read_text(encoding="utf-8"))
            except Exception:
                pass
        items, ok = [], False
        for fetch in fetchers:
            try:
                items += fetch(owner, name)
                ok = True
            except Exception:
                errs += 1
            time.sleep(PACE)
        if not ok:
            kept += 1          # total failure → old file untouched
            continue
        merged = merge(old.get("items"), items)
        if not merged:
            continue           # nothing to report; no file
        payload = {
            "repo": fn,
            "fetched_at": datetime.now(timezone.utc)
            .strftime("%Y-%m-%dT%H:%M:%SZ"),
            "items": merged,
        }
        path.write_text(json.dumps(payload, ensure_ascii=False, indent=1)
                        + "\n", encoding="utf-8")
        updated += 1
        if (i + 1) % 50 == 0:
            log(f"{i + 1}/{len(repos)} …")
    log(f"done: {updated} files written, {kept} kept (all sources failed), "
        f"{errs} source errors")
    return 0


if __name__ == "__main__":
    sys.exit(main())
