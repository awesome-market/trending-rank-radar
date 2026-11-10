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
import email.utils
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
SITE_DATA = ROOT / "site" / "data"
NEWS_DIR = DATA_DIR / "news"
UA = {"User-Agent": "trending-rank-radar news-bot (+https://zhuikan.com)"}
PACE = 0.4          # seconds between HTTP requests
MAX_PER_LANG = 25   # cap stored items per language (UI shows 10 + <details>)
GN_LOCALES = {"zh": ("zh-CN", "CN", "CN:zh-Hans"),
              "en": ("en-US", "US", "US:en")}
BING_LOCALES = {"zh": ("zh-TW", "zh-hant"),
                "en": ("en-US", "en-us")}
# Bing rejects the bot UA with a homepage redirect; send a browser one.
BROWSER_UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                            "AppleWebKit/537.36 Chrome/120.0 Safari/537.36"}
# Repo names this short or this generic make '"{name}" github' match
# unrelated coverage; such repos need owner/name evidence in the item.
_COMMON_WORDS = set("""
go n re a i we it in on at be do to no so up my he me if of or as an by is us am
free app web api dev hub kit os ai ml db js py rs ts ui io git new now pro max
just cua ink nice run one box key log map set get let try use add all any can
""".split())


def _weak_name(name: str) -> bool:
    n = name.lower()
    return len(n) <= 2 or n in _COMMON_WORDS


def _rss_date(pub: str) -> str:
    """RFC 822 pubDate → YYYY-MM-DD. Handles GMT and numeric zones."""
    try:
        dt = email.utils.parsedate_to_datetime(pub)
        return dt.strftime("%Y-%m-%d") if dt else ""
    except Exception:
        m = re.search(r"\d{4}-\d{2}-\d{2}", pub or "")
        return m.group(0) if m else ""


def _http_url(u: str) -> bool:
    return (u or "").lower().startswith(("http://", "https://"))


def _slug_in(it: dict, owner: str, name: str) -> bool:
    slug = f"{owner}/{name}".lower()
    blob = " ".join(str(it.get(k) or "")
                    for k in ("title", "url", "hn", "_desc")).lower()
    return slug in blob


def _keep(it: dict, owner: str, name: str, is_new: bool) -> bool:
    """Drop links with non-http schemes and items that point at a different
    github repo; weak repo names additionally need owner/name evidence."""
    if not _http_url(it.get("url") or "") and not _http_url(it.get("hn") or ""):
        return False
    slug = f"{owner}/{name}".lower()
    for k in ("url", "hn"):
        u = (it.get(k) or "").lower()
        if "github.com" in urllib.parse.urlparse(u).netloc and slug not in u:
            return False
    if is_new and _weak_name(name) and it.get("source") != "Hacker News":
        return _slug_in(it, owner, name)
    return True


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
    # relevance search (not search_by_date): notable stories rank first.
    # Algolia tokenizes the query, so fuzzy hits on lookalike repo names are
    # common — keep only hits whose story URL contains the exact repo path.
    slug = f"github.com/{owner}/{name}".lower()
    q = urllib.parse.quote(slug)
    url = ("https://hn.algolia.com/api/v1/search"
           f"?query={q}&tags=story&hitsPerPage=8")
    d = json.loads(_get(url))
    out = []
    for h in d.get("hits") or []:
        if slug not in (h.get("url") or "").lower():
            continue
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
        desc = re.sub(r"<[^>]+>", " ", it.findtext("description") or "")
        if not title or not link:
            continue
        out.append({"title": title, "url": link,
                    "source": src_name or "Google News",
                    "lang": lang, "date": _rss_date(pub),
                    "_desc": desc.strip(), "_k": f"gn:{link}"})
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
        desc = re.sub(r"<[^>]+>", " ", it.findtext("description") or "")
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
                    "lang": lang, "date": _rss_date(pub),
                    "_desc": desc.strip(), "_k": f"bing:{real}"})
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


def _fp(t: str) -> str:
    return re.sub(r"\W+", "", t).lower()


def _norm_title(it: dict) -> None:
    """Strip the trailing '- <source> [- site tagline]' Google News appends
    (spacing varies: ' - ' / '- ') and fix lang by CJK presence — the
    fetch-locale lang label lies on foreign-language articles."""
    t, s = (it.get("title") or ""), (it.get("source") or "")
    if s:
        m = re.search(r"\s*[-–—]\s*" + re.escape(s), t)
        if m and m.start() >= 5:
            t = t[:m.start()].strip()
    it["title"] = t
    it["lang"] = "zh" if re.search(r"[一-鿿]", t) else "en"


def merge(old: list | None, new: list, owner: str, name: str) -> list:
    """Dedup (fetch _k, hn id, gn url — plus a title fallback since Google
    redirect URLs can differ between fetches), cap per language, ordered by
    notability (HN points first, then recency)."""
    seen: dict[str, dict] = {}
    for it in (old or []):
        if not _keep(it, owner, name, is_new=False):
            continue
        _norm_title(it)
        seen[_key(it)] = it
    for it in new:                    # new overwrites stale fields on same _k
        if not _keep(it, owner, name, is_new=True):
            continue
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
            nt = _fp(it.get("title") or "")
            if nt in titles:
                continue
            titles.add(nt)
            keep.append(it)
        out += keep[:MAX_PER_LANG]
    for it in out:
        it.pop("_k", None)
        it.pop("_desc", None)
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
    ap.add_argument("--workers", type=int, default=6,
                    help="parallel repo fetches (per-repo pacing preserved)")
    args = ap.parse_args()

    repos = ([args.only] if args.only
             else all_repos() if args.all_ else board_repos())
    log(f"{len(repos)} repos to check "
        f"({'all' if args.all_ else 'single' if args.only else 'board'}, "
        f"workers={args.workers})")
    NEWS_DIR.mkdir(parents=True, exist_ok=True)

    fetchers = (fetch_hn,
                lambda o, n: fetch_gn(o, n, "zh"),
                lambda o, n: fetch_gn(o, n, "en"),
                lambda o, n: fetch_bing(o, n, "zh"),
                lambda o, n: fetch_bing(o, n, "en"))

    def _one(fn: str) -> tuple[int, int]:
        """Returns (wrote, errs). Each repo's files are disjoint so no lock."""
        owner, name = fn.split("/", 1)
        path = NEWS_DIR / f"{owner}__{name}.json"
        old = {}
        if path.exists():
            try:
                old = json.loads(path.read_text(encoding="utf-8"))
            except Exception:
                pass
        items, ok, errs = [], False, 0
        for fetch in fetchers:
            try:
                items += fetch(owner, name)
                ok = True
            except Exception:
                errs += 1
            time.sleep(PACE)
        if not ok:
            return 0, errs     # total failure → old file untouched
        merged = merge(old.get("items"), items, owner, name)
        if not merged:
            return 0, errs     # nothing to report; no file
        payload = {
            "repo": fn,
            "fetched_at": datetime.now(timezone.utc)
            .strftime("%Y-%m-%dT%H:%M:%SZ"),
            "items": merged,
        }
        path.write_text(json.dumps(payload, ensure_ascii=False, indent=1)
                        + "\n", encoding="utf-8")
        return 1, errs

    updated = kept = errs = done = 0
    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        futs = {ex.submit(_one, fn): fn for fn in repos if "/" in fn}
        for fut in as_completed(futs):
            w, e = fut.result()
            updated += w
            errs += e
            kept += (w == 0 and e == len(fetchers))
            done += 1
            if done % 50 == 0:
                log(f"{done}/{len(futs)} …")
    log(f"done: {updated} files written, {kept} kept (all sources failed), "
        f"{errs} source errors")
    return 0


if __name__ == "__main__":
    sys.exit(main())
