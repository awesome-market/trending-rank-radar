#!/usr/bin/env python3
"""Rebuild rankings and site/data JSON from collected snapshots.

Reads data/snapshots/*.json, groups by Beijing (Asia/Shanghai) calendar day
(last run of the day = "close"), computes the 8 boards per docs/03-ranking.md,
and writes:

  site/data/index.json
  site/data/days/YYYY-MM-DD.json
  site/data/months/YYYY-MM.json
  site/data/years/YYYY.json
  site/index.html                — latest landing board SSR'd into #listWrap
  site/sitemap.xml, site/robots.txt

Usage:
  python scripts/rank.py [--site-base URL]
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from bisect import bisect_left, bisect_right
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
SNAP_DIR = DATA_DIR / "snapshots"
REPOS_DIR = DATA_DIR / "repos"
SITE_DIR = ROOT / "site"
SITE_DATA = SITE_DIR / "data"

BEIJING = timezone(timedelta(hours=8))
UTC = timezone.utc

# snapshot tuple indexes (data/snapshots format; 11-column rows predate the
# 16-column format — use _col() for indexes >10)
I_NAME, I_STARS, I_FORKS, I_WATCHERS, I_ISSUES, I_PRS, I_RELEASES = range(7)
I_CREATED, I_LANG, I_IS_FORK, I_IS_ARCH = 7, 8, 9, 10
I_ISSUES_OPEN, I_ISSUES_CLOSED, I_PRS_OPEN, I_PRS_CLOSED, I_PRS_MERGED = 11, 12, 13, 14, 15


def _col(row, i: int):
    """Safe column access for rows written before trailing fields existed."""
    return row[i] if len(row) > i else None

TOPN = 200          # precomputed per board; frontend filters then shows top 100
SERIES_DAYS = 30    # sparkline points
STALE_GRACE_DAYS = 14
NOMINAL = {"daily": 1, "weekly": 7, "monthly": 30}
GROWTH_BOARDS = ["daily", "weekly", "monthly"]
RATE_BOARDS = ["daily_rate", "weekly_rate", "monthly_rate"]
ALL_BOARDS = ["new", "daily", "daily_rate", "weekly", "weekly_rate",
              "monthly", "monthly_rate", "total"]
NEW_WINDOW_DAYS = 90
NEW_MIN_STARS = 20
GROWTH_MIN_STARS = 100
RATE_MIN_BASE = 50

DEFAULT_SITE_BASE = "https://zhuikan.com"


def log(msg: str) -> None:
    print(f"[rank {datetime.now(UTC).strftime('%H:%M:%S')}] {msg}", flush=True)


def parse_run_at(s: str) -> datetime:
    return datetime.fromisoformat(s.replace("Z", "+00:00"))


def d(s: str) -> date:
    return date.fromisoformat(s)


# ------------------------------------------------------------------ loading --
def load_day_closes() -> tuple[dict[str, dict], dict[str, datetime]]:
    """Group snapshots by Beijing day; keep the latest run per day.

    Returns (day_close, run_at) where day_close[bdate] = {repo: tuple}.
    """
    by_day: dict[str, dict] = {}
    run_at: dict[str, datetime] = {}
    files = sorted(SNAP_DIR.glob("*.json")) if SNAP_DIR.exists() else []
    for f in files:
        try:
            j = json.loads(f.read_text(encoding="utf-8"))
        except Exception as e:
            log(f"[warn] skip unreadable snapshot {f.name}: {e}")
            continue
        try:
            rt = parse_run_at(j["run_at"])
        except Exception:
            continue
        bdate = rt.astimezone(BEIJING).date().isoformat()
        cur = by_day.get(bdate)
        if cur is None or rt > run_at[bdate]:
            by_day[bdate] = {t[0]: tuple(t) for t in j.get("repos", []) if isinstance(t, list)}
            run_at[bdate] = rt
    return by_day, run_at


def build_repo_index(day_close: dict[str, dict]) -> dict[str, tuple[list, list]]:
    """repo -> (sorted beijing days, [metric tuples]) — tuples shared, low memory."""
    idx: dict[str, tuple[list, list]] = {}
    for day in sorted(day_close):
        for name, tup in day_close[day].items():
            ent = idx.get(name)
            if ent is None:
                ent = idx[name] = ([], [])
            ent[0].append(day)
            ent[1].append(tup)
    return idx


def load_repo_meta() -> dict[str, dict]:
    meta: dict[str, dict] = {}
    if REPOS_DIR.exists():
        for f in REPOS_DIR.glob("*.json"):
            try:
                j = json.loads(f.read_text(encoding="utf-8"))
            except Exception:
                continue
            owner_name = f.stem
            owner, _, name = owner_name.partition("__")
            if owner and name:
                meta[f"{owner}/{name}"] = j
    return meta


# ------------------------------------------------------------------ helpers --
def closest_day(days: list[str], target: str, before: str | None = None) -> str | None:
    """Valid day closest to `target`; ties → earlier. Optionally require < before."""
    i = bisect_left(days, target)
    cands = []
    if i < len(days) and (before is None or days[i] < before):
        cands.append(days[i])
    if i - 1 >= 0 and (before is None or days[i - 1] < before):
        cands.append(days[i - 1])
    if not cands:
        return None
    td = d(target)
    return min(cands, key=lambda x: (abs((d(x) - td).days), x))


def board_base_day(days: list[str], day: str, nominal: int) -> tuple[str, int, bool]:
    """Return (base_day, window_days, approx_board)."""
    target = (d(day) - timedelta(days=nominal)).isoformat()
    base = closest_day(days, target, before=day)
    if base is None:
        base = days[0]
    window_days = (d(day) - d(base)).days
    return base, window_days, window_days < nominal


def repo_value_at(ridx: dict, name: str, day: str):
    """Latest (day, tuple) for repo with repo-day <= `day`."""
    ds, vs = ridx[name]
    end = bisect_right(ds, day) - 1
    if end < 0:
        return None
    return ds[end], vs[end]


def repo_base_near(ridx: dict, name: str, base_day: str, day: str):
    """Repo day closest to base_day, restricted to days < `day`.

    Returns (repo_base_day, tuple) or None if repo has no usable base.
    """
    ds, vs = ridx[name]
    i = bisect_left(ds, base_day)
    cands = []
    if i < len(ds) and ds[i] < day:
        cands.append(i)
    if i - 1 >= 0 and ds[i - 1] < day:
        cands.append(i - 1)
    if not cands:
        return None
    bd = d(base_day)
    j = min(cands, key=lambda k: (abs((d(ds[k]) - bd).days), ds[k]))
    return ds[j], vs[j]


def series_for(ridx: dict, name: str, day: str, n: int = SERIES_DAYS) -> list[int]:
    ds, vs = ridx[name]
    end = bisect_right(ds, day)
    start = max(0, end - n)
    return [int(v[I_STARS] or 0) for v in vs[start:end]]


def make_entry(name: str, rank: int, cur, meta: dict, *,
               growth=None, rate=None, approx=False, stale=False,
               series=None) -> dict:
    owner, _, repo = name.partition("/")
    m = meta.get(name) or {}
    det = m.get("detail") or {}
    return {
        "rank": rank,
        "owner": owner,
        "name": repo,
        "full_name": name,
        "description": m.get("description"),
        "avatar": det.get("avatar"),
        "homepage": m.get("homepage"),
        "language": cur[I_LANG],
        "stars": cur[I_STARS],
        "forks": cur[I_FORKS],
        "watchers": cur[I_WATCHERS],
        "issues": cur[I_ISSUES],
        "prs": cur[I_PRS],
        "releases": cur[I_RELEASES],
        "created_at": cur[I_CREATED],
        "growth": growth,
        "rate": rate,
        "approx": approx,
        "stale": stale,
        "series": series if series is not None else [],
    }


# ------------------------------------------------------------- repo pages --
def _esc(s) -> str:
    import html as _h
    return _h.escape(str(s or ""), quote=True)


def _plain(text: str, limit: int) -> str:
    text = re.sub(r"\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)", "", text or "")
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"<[^>]+>", "", text)
    return _esc(re.sub(r"[#*`>]", "", text).strip()[:limit])


def _ssr_repo(p: dict) -> str:
    """Server-rendered repo detail HTML — readable by crawlers and no-JS
    clients, mirroring the layout repo.js produces (side card + info column,
    then all content sections; tabs aren't needed for crawlers)."""
    m = p.get("metrics") or {}
    def num(v): return f"{int(v):,}" if isinstance(v, (int, float)) else "–"
    stat_icons = {"stars": "★", "forks": "⑂", "watchers": "👁", "prs": "⑃",
                  "issues": "●", "releases": "▤", "discussions": "◈"}
    stats = "".join(
        f'<span class="rp-stat" title="{k}">{stat_icons[k]} <b>{num(m[k])}</b></span>'
        for k in ("stars", "forks", "watchers", "prs", "issues", "releases", "discussions")
        if m.get(k) is not None)
    topics = "".join(
        f'<a class="rp-topic" href="https://github.com/topics/{_esc(t)}">{_esc(t)}</a>'
        for t in (p.get("topics") or [])[:8])
    bits = [x for x in [
        f'<span class="rp-meta-bit">{_esc(p["language"])}</span>' if p.get("language") else "",
        f'<span class="rp-meta-bit">{_esc(p["license"])}</span>' if p.get("license") else "",
        f'<span class="rp-meta-bit">Created {_esc((p.get("created_at") or "")[:10])}</span>'
        if p.get("created_at") else "",
        (f'<a class="rp-meta-bit rp-home" href="{_esc(p["homepage"])}">'
         f'{_esc(re.sub(r"^https?://", "", p["homepage"])[:60])}</a>'
         if p.get("homepage") else ""),
    ] if x]
    order = ["new", "daily", "daily_rate", "weekly", "weekly_rate",
             "monthly", "monthly_rate", "total", "cumulative"]
    chips = "".join(
        f'<a class="rp-board-chip" href="../?board={b}">{b} <b>#{(p["boards"] or {})[b]}</b></a>'
        for b in order if (p.get("boards") or {}).get(b) is not None)
    growth = p.get("growth") or {}
    def dlt(k):
        g = growth.get(k)
        return f'<span class="rp-delta up">+{num(g["stars"])}</span>' if g else ""
    met_keys = ["stars", "forks", "watchers", "prs", "issues", "releases", "discussions"]
    mets = "".join(
        f'<div class="rp-metric"><div class="rp-metric-num">{num(m[k])}</div>'
        f'<div class="rp-metric-label">{k}</div>'
        + (f'<div class="rp-metric-delta">{dlt("day")}{dlt("week")}{dlt("month")}</div>'
           if k == "stars" else "")
        + '</div>' for k in met_keys if k in m)

    def lst(items, base):
        return "".join(
            f'<a class="rp-item" href="{base}/{i.get("number", "")}">'
            f'<span class="rp-item-num">#{i.get("number", "")}</span>'
            f'<span class="rp-item-title">{_esc(i.get("title"))}</span>'
            f'<span class="rp-item-extra">{i.get("comments", 0)} comments · '
            f'{_esc((i.get("created_at") or "")[:10])}</span></a>'
            for i in (items or [])[:8])

    rel = p.get("latest_release")
    rel_html = ""
    if rel:
        body = _plain(rel.get("body") or "", 600)
        rel_html = (f'<h3 class="rp-ph">Latest release</h3>'
                    f'<a class="rp-rel" href="{_esc(p["url"])}/releases">'
                    f'<b>{_esc(rel.get("name") or rel.get("tag") or "")}</b> '
                    f'<span class="rp-rel-tag">{_esc(rel.get("tag") or "")}</span> '
                    f'<span class="rp-item-extra">{_esc((rel.get("published_at") or "")[:10])}</span></a>'
                    + (f'<pre class="rp-pre">{body}</pre>' if body else ""))
    readme = p.get("readme_excerpt")
    readme_html = (f'<h3 class="rp-ph">README</h3>'
                   f'<pre class="rp-pre rp-readme">{_plain(readme, 1200)}</pre>'
                   if readme else "")
    sec_i = (f'<h3 class="rp-ph">Top issues</h3>'
             f'<div class="rp-list">{lst(p.get("issues"), p["url"] + "/issues")}</div>'
             if p.get("issues") else "")
    sec_d = (f'<h3 class="rp-ph">Discussions</h3>'
             f'<div class="rp-list">{lst(p.get("discussions"), p["url"] + "/discussions")}</div>'
             if p.get("discussions") else "")
    av_url = _esc(p.get("avatar") or "")
    same_links = "".join(
        f'<a class="rp-same-link" href="{_esc(x["full_name"]).replace("/", "__")}.html">'
        f'<img class="rp-same-av" src="{av_url}" alt="" loading="lazy">{_esc(x["name"])}</a>'
        for x in (p.get("same_owner") or [])[:20])
    if same_links:
        same_links = (f'<div class="rp-same-label">TA的项目</div>'
                      f'<div class="rp-same-row">{same_links}</div>')
    page_fn = _esc(p["full_name"]).replace("/", "__") + ".html"
    av_img = (f'<img class="rp-side-av" src="{_esc(p["avatar"])}&s=300" width="300" '
              f'height="300" alt="{_esc(p["owner"])} avatar">' if p.get("avatar")
              else f'<img class="rp-side-av" src="https://github.com/{_esc(p["owner"])}.png?size=300" '
                   f'width="300" height="300" alt="">')
    av = f'<a href="{page_fn}">{av_img}</a>'
    return f"""
<nav class="rp-crumb"><a href="../">Boards</a><span class="rp-crumb-sep">/</span>
<span class="rp-crumb-cur">{_esc(p['full_name'])}</span></nav>
<div class="rp-top">
  <aside class="rp-side">
    {av}
    <div class="rp-side-body card">
      <div class="rp-side-name">{_esc(p['name'])}</div>
      <a class="rp-side-owner" href="https://github.com/{_esc(p['owner'])}">{_esc(p['owner'])}</a>
    </div>
  </aside>
  <div class="rp-main">
    <div class="rp-main-head">
      <h1 class="rp-htitle">
        <a class="rp-owner" href="https://github.com/{_esc(p['owner'])}">{_esc(p['owner'])}</a>
        <span class="rp-sep">/</span><span class="rp-name">{_esc(p['name'])}</span>
      </h1>
      <div class="rp-head-chips">{chips}</div>
    </div>
    <p class="rp-desc">{_esc(p.get('description') or '')}</p>
    <div class="rp-statrow">{stats}</div>
    <div class="rp-topics">{topics}</div>
    <div class="rp-meta">{''.join(bits)}</div>
    <div class="rp-foot-row"><div class="rp-same">{same_links}</div>
      <div class="rp-actions"><a class="rp-btn" href="{_esc(p['url'])}">GitHub ↗</a></div></div>
  </div>
</div>
<section class="rp-panel card"><div class="rp-metric-grid">{mets}</div>
{readme_html}{sec_i}{sec_d}{rel_html}</section>
<p class="rp-meta">Snapshot: {_esc(p.get('snapshot_at'))} · Data license Apache-2.0 ·
<a href="../data/repos/{_esc(p['owner'])}__{_esc(p['name'])}.json">JSON</a></p>"""


# ------------------------------------------------------------ index SSR --
SSR_BEGIN, SSR_END = "<!--SSR-->", "<!--/SSR-->"
# landing-order fallback mirrors app.js (default board = 'new')
SSR_BOARDS = ("new", "total", "daily", "weekly", "monthly")
SSR_LABELS = {"new": "新星榜", "total": "总榜", "daily": "日飙升榜",
              "weekly": "周飙升榜", "monthly": "月飙升榜"}
SSR_TOP = 50


def _ssr_row(e: dict) -> str:
    """Crawler/first-paint row — mirrors app.js .rank-row markup."""
    owner, name = e["owner"], e["name"]
    href = f"repos/{owner}__{name}.html"
    rank = e.get("rank") or 0
    stars = e.get("stars")
    meta = []
    if e.get("language"):
        meta.append(f'<span class="lang-tag">{_esc(e["language"])}</span>')
    for glyph, val, key in (("★", stars, "stars"), ("⑂", e.get("forks"), "forks"),
                            ("👁", e.get("watchers"), "watchers"), ("●", e.get("issues"), "issues"),
                            ("⑃", e.get("prs"), "prs"), ("▤", e.get("releases"), "releases")):
        if isinstance(val, int):
            meta.append(f'<span class="m" title="{key}">{glyph} {val:,}</span>')
    desc = (e.get("description") or "").strip()
    if e.get("growth") is not None:
        side = f'<div class="row-growth"><span class="up-tri">▲</span>+{e["growth"]:,}</div>'
    else:
        side = (f'<div class="row-stars-big">★ {stars:,}</div>'
                if isinstance(stars, int) else "")
    return (f'<div class="rank-row"><span class="row-rank{" top" if rank <= 3 else ""}">{rank}</span>'
            f'<a class="row-avatar" href="{href}"><img src="{_esc(e.get("avatar") or f"https://github.com/{owner}.png?size=96")}" alt="" loading="lazy" width="48" height="48"></a>'
            f'<div class="row-body"><div class="row-name"><a class="row-link" href="{href}">'
            f'<span class="row-owner">{_esc(owner)}</span><span class="row-sep">/</span>'
            f'<span class="row-repo">{_esc(name)}</span></a></div>'
            f'<div class="row-meta">{"".join(meta)}</div>'
            + (f'<div class="row-desc">{_esc(desc)}</div>' if desc else "")
            + f'</div><div class="row-side">{side}</div></div>')


def _inject(html: str, marker: str, block: str) -> tuple[str, int]:
    """Replace the <!--MARK-->...<!--/MARK--> span with marker+block (idempotent)."""
    begin, end = f"<!--{marker}-->", f"<!--/{marker}-->"
    return re.subn(re.escape(begin) + ".*?" + re.escape(end),
                   lambda _: begin + block + end, html, count=1, flags=re.S)


def _ssr_month_top10(days_entries: list) -> str:
    """Latest month's daily Top-10 chips — mirrors app.js .top10-day markup."""
    out = []
    for day in days_entries:
        chips = []
        for e in day.get("items") or []:
            href = f"repos/{e['owner']}__{e['name']}.html"
            g = e.get("growth")
            num = f"+{g:,}" if isinstance(g, int) else (
                f"★{e['stars']:,}" if isinstance(e.get("stars"), int) else "")
            chips.append(f'<span class="top10-chip"><a href="{href}">'
                         f'<span class="row-owner">{_esc(e["owner"])}</span>/{_esc(e["name"])}</a>'
                         + (f" <b>{num}</b>" if num else "") + "</span>")
        out.append(f'<div class="top10-day"><div class="top10-date">{_esc(day["date"])}</div>'
                   f'<div class="top10-items">{"".join(chips)}</div></div>')
    return "".join(out)


def _ssr_month_cards(months: list) -> str:
    """Month-index cards — mirrors app.js .month-card markup."""
    out = []
    for i, m in enumerate(months):
        y, mo = m.split("-")
        partial = (i == len(months) - 1)   # latest month is always in progress
        sub = "本月进行中 / in progress" if partial else "完整月 / full month"
        out.append(f'<div class="month-card{" partial" if partial else ""}">'
                   f'<div class="m-name">{_esc(y)}年{int(mo)}月</div>'
                   f'<div class="m-sub">{sub}</div></div>')
    return "".join(out)


def inject_index_ssr(board: str, items: list, day: str,
                     months: list, daily_top10: dict) -> None:
    """Bake current-data fallbacks into index.html so crawlers (Baidu doesn't
    run JS) and first paint on slow links see real content; app.js overwrites
    each block on hydrate."""
    path = SITE_DIR / "index.html"
    html = path.read_text(encoding="utf-8")

    label = SSR_LABELS.get(board, board)
    note = (f'<p style="color:var(--muted,#8b949e);font-size:13px;margin:0 4px 10px">'
            f'{_esc(day)} · {_esc(label)} Top {len(items)} · 每日快照 / daily snapshot</p>')
    rows = (note + '<div class="rank-list">'
            + "".join(_ssr_row(e) for e in items) + "</div>")
    html, n1 = _inject(html, "SSR", rows)

    n2 = n3 = 0
    if months and daily_top10.get(months[-1]):
        html, n2 = _inject(html, "SSRMT",
                           _ssr_month_top10(daily_top10[months[-1]]))
    if months:
        html, n3 = _inject(html, "SSRMG", _ssr_month_cards(months))

    if n1 + n2 + n3:
        path.write_text(html, encoding="utf-8")
        log(f"index SSR: board={board} rows={len(items)} "
            f"top10_days={bool(n2)} month_cards={bool(n3)}")
    else:
        log("[warn] index.html missing SSR markers; skipped")


def render_repo_page(p: dict, template: str, base: str) -> str:
    """Patch site/repo.html into a per-repo static page: unique title/meta/
    canonical, SSR content, and data-base so repo.js fixes relative paths."""
    fn = p["full_name"]
    fname = f'{p["owner"]}__{p["name"]}'
    canon = f"{base}/repos/{fname}.html"
    desc = ((p.get("description") or "").replace("\n", " ")[:200]
            or f"{fn} — GitHub stars trend, board ranks, issues and releases")
    title = f"{fn} · GitHub Trending Rank Radar"
    ld = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "name": fn,
        "codeRepository": p["url"],
        "url": canon,
        "description": desc,
        "author": {"@type": "Organization", "name": p["owner"],
                   "url": f"https://github.com/{p['owner']}"},
        "isAccessibleForFree": True,
        "license": "https://www.apache.org/licenses/LICENSE-2.0",
    }
    if p.get("language"):
        ld["programmingLanguage"] = p["language"]
    if p.get("created_at"):
        ld["dateCreated"] = str(p["created_at"])[:10]
    if p.get("license") and re.match(r"^[A-Za-z0-9.\-+]+$", str(p["license"])):
        ld["license"] = f"https://spdx.org/licenses/{p['license']}.html"
    if p.get("topics"):
        ld["keywords"] = ",".join(p["topics"][:10])
    ld_block = ('<script type="application/ld+json">'
                + json.dumps(ld, ensure_ascii=False) + "</script>")
    keywords = ", ".join(
        [p["name"], p["owner"], fn, "github stars", "github trending",
         "star growth", "star history", "开源项目", "星标增长"]
        + [t for t in (p.get("topics") or [])[:6]])
    out = template
    out = re.sub(r"<title>.*?</title>", f"<title>{_esc(title)}</title>", out, count=1)
    out = re.sub(r'<meta name="description" content="[^"]*">',
                 f'<meta name="description" content="{_esc(desc)}">', out, count=1)
    out = out.replace('<meta name="robots" content="noindex,follow">',
                      f'<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">\n'
                      f'<meta name="keywords" content="{_esc(keywords)}">\n'
                      f'<link rel="alternate" hreflang="zh" href="{_esc(canon)}">\n'
                      f'<link rel="alternate" hreflang="en" href="{_esc(canon)}">\n'
                      f'<link rel="alternate" hreflang="x-default" href="{_esc(canon)}">')
    out = re.sub(r'<link rel="canonical" href="[^"]*">',
                 f'<link rel="canonical" href="{_esc(canon)}">', out, count=1)
    out = re.sub(r'<meta property="og:title" content="[^"]*">',
                 f'<meta property="og:title" content="{_esc(title)}">', out, count=1)
    out = re.sub(r'<meta property="og:description" content="[^"]*">',
                 f'<meta property="og:description" content="{_esc(desc)}">', out, count=1)
    out = re.sub(r'<meta property="og:url" content="[^"]*">',
                 f'<meta property="og:url" content="{_esc(canon)}">', out, count=1)
    out = out.replace('<meta property="og:type" content="website">',
                      '<meta property="og:type" content="article">', 1)
    out = out.replace("</head>", f"{ld_block}\n</head>", 1)
    out = out.replace('href="assets/', 'href="../assets/')
    out = out.replace('src="assets/', 'src="../assets/')
    out = out.replace('href="manifest.webmanifest"', 'href="../manifest.webmanifest"')
    out = out.replace('href="./"', 'href="../"')
    out = out.replace("<body>", f'<body data-repo="{_esc(fn)}" data-base="../">', 1)
    out = out.replace('<div id="repoContent" class="repo-page"></div>',
                      f'<div id="repoContent" class="repo-page">{_ssr_repo(p)}</div>')
    return out


# ------------------------------------------------------------------ boards --
def eligible(cur) -> bool:
    return not cur[I_IS_FORK] and not cur[I_IS_ARCH]


def compute_boards(day: str, days: list[str], ridx: dict, meta: dict,
                   day_index: dict[str, int]) -> dict:
    """Compute all 8 boards for `day`. Returns {board: {window_start?, window_days?, items}}."""
    i = day_index[day]
    prefix = days[: i + 1]
    cutoff_stale = (d(day) - timedelta(days=STALE_GRACE_DAYS)).isoformat()

    # base days per window (closest valid day to nominal target, < day)
    bases = {}
    for kind, nominal in NOMINAL.items():
        b, w, ap = board_base_day(prefix, day, nominal)
        bases[kind] = (b, w, ap)

    # gather per-repo current values once
    cur_map: dict[str, tuple] = {}       # name -> (cur_day, tuple)
    for name in ridx:
        got = repo_value_at(ridx, name, day)
        if got is None:
            continue
        cday, ctup = got
        if cday < cutoff_stale:
            continue  # dead repo — not tracked anymore at this point in time
        cur_map[name] = (cday, ctup)

    boards: dict[str, dict] = {}

    # ---- growth boards (daily/weekly/monthly + rate variants) -------------
    growth_cands: dict[str, list] = {k: [] for k in GROWTH_BOARDS + RATE_BOARDS}
    for name, (cday, ctup) in cur_map.items():
        if cday != day or not eligible(ctup):
            continue  # stale or fork/arch → never in growth boards
        cur_stars = ctup[I_STARS] or 0
        if cur_stars < GROWTH_MIN_STARS:
            continue
        for kind in GROWTH_BOARDS:
            base_day, window_days, approx_board = bases[kind]
            got = repo_base_near(ridx, name, base_day, day)
            if got is None:
                continue
            repo_base_day, btup = got
            base_stars = btup[I_STARS] or 0
            incr = cur_stars - base_stars
            if incr <= 0:
                continue
            approx = approx_board or (repo_base_day != base_day)
            entry_growth = incr
            rate = None
            if base_stars >= RATE_MIN_BASE:
                rate = int(incr * 100 // base_stars)
            growth_cands[kind].append((incr, name, ctup, approx, entry_growth, rate))
            if rate is not None:
                rate_kind = kind + "_rate"
                growth_cands[rate_kind].append((rate, name, ctup, approx, incr, rate))

    for kind in GROWTH_BOARDS + RATE_BOARDS:
        base_day, window_days, _ = bases[kind.replace("_rate", "")] if kind.endswith("_rate") else bases[kind]
        cands = growth_cands[kind]
        # sort: primary metric desc, tiebreak stars desc
        cands.sort(key=lambda x: (-x[0], -(x[2][I_STARS] or 0), x[1]))
        items = []
        for rank, (metric, name, ctup, approx, growth, rate) in enumerate(cands[:TOPN], 1):
            items.append(make_entry(
                name, rank, ctup, meta,
                growth=growth, rate=rate, approx=approx, stale=False,
                series=series_for(ridx, name, day),
            ))
        boards[kind] = {
            "window_start": base_day,
            "window_days": window_days,
            "items": items,
        }

    # ---- new board ---------------------------------------------------------
    new_cutoff = (d(day) - timedelta(days=NEW_WINDOW_DAYS)).isoformat()
    new_cands = []
    for name, (cday, ctup) in cur_map.items():
        if not eligible(ctup):
            continue
        created = (ctup[I_CREATED] or "")[:10]
        stars = ctup[I_STARS] or 0
        if created >= new_cutoff and stars >= NEW_MIN_STARS:
            new_cands.append((stars, name, ctup, cday != day))
    new_cands.sort(key=lambda x: (-x[0], x[1]))
    boards["new"] = {"items": [
        make_entry(n, r, t, meta, growth=None, rate=None,
                   approx=False, stale=st, series=series_for(ridx, n, day))
        for r, (_, n, t, st) in enumerate(new_cands[:TOPN], 1)
    ]}

    # ---- total board ---------------------------------------------------------
    total_cands = [(ctup[I_STARS] or 0, name, ctup, cday != day)
                   for name, (cday, ctup) in cur_map.items() if eligible(ctup)]
    total_cands.sort(key=lambda x: (-x[0], x[1]))
    boards["total"] = {"items": [
        make_entry(n, r, t, meta, growth=None, rate=None,
                   approx=False, stale=st, series=series_for(ridx, n, day))
        for r, (_, n, t, st) in enumerate(total_cands[:TOPN], 1)
    ]}

    return boards


# ------------------------------------------------------------- month / year ---
def compute_span_board(day: str, days: list[str], ridx: dict, meta: dict,
                       base_day: str, nominal_days: int) -> dict:
    """Growth board over an arbitrary span (month cumulative / year growth)."""
    day_index = {x: i for i, x in enumerate(days)}
    i = day_index[day]
    prefix = days[: i + 1]
    cutoff_stale = (d(day) - timedelta(days=STALE_GRACE_DAYS)).isoformat()
    window_days = (d(day) - d(base_day)).days
    approx_board = window_days < nominal_days

    cands = []
    for name in ridx:
        got = repo_value_at(ridx, name, day)
        if got is None:
            continue
        cday, ctup = got
        if cday != day or cday < cutoff_stale or not eligible(ctup):
            continue
        cur_stars = ctup[I_STARS] or 0
        if cur_stars < GROWTH_MIN_STARS:
            continue
        b = repo_base_near(ridx, name, base_day, day)
        if b is None:
            continue
        repo_base_day, btup = b
        base_stars = btup[I_STARS] or 0
        incr = cur_stars - base_stars
        if incr <= 0:
            continue
        approx = approx_board or (repo_base_day != base_day)
        rate = int(incr * 100 // base_stars) if base_stars >= RATE_MIN_BASE else None
        cands.append((incr, rate, name, ctup, approx))

    cands.sort(key=lambda x: (-x[0], -(x[3][I_STARS] or 0), x[2]))
    items = []
    for rank, (incr, rate, name, ctup, approx) in enumerate(cands[:TOPN], 1):
        items.append(make_entry(name, rank, ctup, meta, growth=incr, rate=rate,
                                approx=approx, stale=False,
                                series=series_for(ridx, name, day)))
    return {"window_start": base_day, "window_days": window_days, "items": items}


def month_bounds(month: str) -> tuple[str, str]:
    y, m = int(month[:4]), int(month[5:7])
    first = date(y, m, 1)
    last = date(y + (m == 12), m % 12 + 1, 1) - timedelta(days=1)
    return first.isoformat(), last.isoformat()


# -------------------------------------------------------------------- main ---
def main() -> int:
    ap = argparse.ArgumentParser(description="Rebuild rankings & site data")
    ap.add_argument("--site-base",
                    default=os.environ.get("SITE_BASE") or DEFAULT_SITE_BASE,
                    help="absolute site URL for sitemap/canonical (default: %(default)s)")
    args = ap.parse_args()
    args.site_base = (args.site_base or "").strip() or DEFAULT_SITE_BASE

    day_close, run_at = load_day_closes()
    days = sorted(day_close)
    if not days:
        log("no snapshots found — nothing to build")
        return 1
    day_index = {x: i for i, x in enumerate(days)}
    ridx = build_repo_index(day_close)
    meta = load_repo_meta()
    log(f"days={len(days)} ({days[0]}..{days[-1]}) repos_tracked={len(ridx)} meta={len(meta)}")

    SITE_DATA.mkdir(parents=True, exist_ok=True)
    for sub in ("days", "months", "years"):
        (SITE_DATA / sub).mkdir(parents=True, exist_ok=True)

    months_present = sorted({x[:7] for x in days})
    years_present = sorted({x[:4] for x in days})

    # ---------------- per-day boards ----------------
    daily_top10: dict[str, list] = {}   # month -> [{date, items}]
    month_end_day: dict[str, str] = {}
    for day in days:
        month_end_day[day[:7]] = day  # last write wins → month end

    for day in days:
        boards = compute_boards(day, days, ridx, meta, day_index)
        payload = {
            "date": day,
            "snapshot_at": run_at[day].astimezone(UTC).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "history_start": days[0],
            "repo_count": len(day_close[day]),
            "boards": boards,
        }
        (SITE_DATA / "days" / f"{day}.json").write_text(
            json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

        # collect daily-board top10 for the month summary
        top10 = []
        for e in boards["daily"]["items"][:10]:
            top10.append({
                "owner": e["owner"], "name": e["name"],
                "stars": e["stars"], "growth": e["growth"], "rate": e["rate"],
                "approx": e["approx"], "language": e["language"],
            })
        daily_top10.setdefault(day[:7], []).append({"date": day, "items": top10})

    # ---------------- month files ----------------
    for month in months_present:
        end_day = month_end_day[month]
        first_cal, last_cal = month_bounds(month)
        month_days = [x for x in days if x.startswith(month)]
        first_data_day = month_days[0]
        nominal_days = (d(last_cal) - d(first_cal)).days
        partial = end_day < last_cal

        # month-end boards = reuse the day file we just wrote
        day_payload = json.loads((SITE_DATA / "days" / f"{end_day}.json").read_text(encoding="utf-8"))

        cumulative = compute_span_board(end_day, days, ridx, meta,
                                        base_day=first_data_day,
                                        nominal_days=nominal_days)
        payload = {
            "month": month,
            "month_end": end_day,
            "month_start": first_data_day,
            "days": len(month_days),
            "partial": partial,
            "boards": day_payload["boards"],
            "cumulative": cumulative,
            "daily_top10": daily_top10.get(month, []),
        }
        (SITE_DATA / "months" / f"{month}.json").write_text(
            json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    # ---------------- year files ----------------
    for year in years_present:
        year_days = [x for x in days if x.startswith(year)]
        end_day = year_days[-1]
        first_data_day = year_days[0]
        last_cal = f"{year}-12-31"
        nominal_days = (d(last_cal) - d(f"{year}-01-01")).days
        partial = end_day < last_cal

        growth = compute_span_board(end_day, days, ridx, meta,
                                    base_day=first_data_day,
                                    nominal_days=nominal_days)
        payload = {
            "year": year,
            "year_end": end_day,
            "year_start": first_data_day,
            "days": len(year_days),
            "partial": partial,
            "growth": growth,
            "months": [m for m in months_present if m.startswith(year)],
        }
        (SITE_DATA / "years" / f"{year}.json").write_text(
            json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    # ---------------- per-repo detail files ----------------
    latest_day = days[-1]
    latest_boards = compute_boards(latest_day, days, ridx, meta, day_index)
    placements: dict[str, dict] = {}
    for b, blk in latest_boards.items():
        for e in blk.get("items", []):
            placements.setdefault(e["full_name"], {})[b] = e["rank"]

    owner_map: dict[str, list[str]] = {}
    for name in day_close[latest_day]:
        owner_map.setdefault(name.split("/")[0], []).append(name)

    repos_out = SITE_DATA / "repos"
    repos_out.mkdir(parents=True, exist_ok=True)
    pages_out = SITE_DIR / "repos"
    pages_out.mkdir(parents=True, exist_ok=True)
    repo_tpl = (SITE_DIR / "repo.html").read_text(encoding="utf-8")
    base = args.site_base.rstrip("/")
    detail_count = 0
    for name, cur in day_close[latest_day].items():
        owner, _, repo = name.partition("/")
        m = meta.get(name) or {}
        det = m.get("detail") or {}
        ds, vs = ridx.get(name, ([], []))

        growth: dict = {}
        for label, nominal in (("day", 1), ("week", 7), ("month", 30)):
            target = (d(latest_day) - timedelta(days=nominal)).isoformat()
            i = bisect_right(ds, target) - 1
            if i >= 0:
                growth[label] = {
                    "stars": int(cur[I_STARS] or 0) - int(vs[i][I_STARS] or 0),
                    "forks": int(cur[I_FORKS] or 0) - int(vs[i][I_FORKS] or 0),
                    "base_day": ds[i],
                }

        payload = {
            "full_name": name, "owner": owner, "name": repo,
            "url": f"https://github.com/{name}",
            "description": m.get("description"),
            "homepage": m.get("homepage"),
            "topics": m.get("topics") or [],
            "language": cur[I_LANG],
            "license": det.get("license"),
            "avatar": det.get("avatar"),
            "created_at": cur[I_CREATED],
            "pushed_at": m.get("pushed_at"),
            "metrics": {
                "stars": cur[I_STARS], "forks": cur[I_FORKS],
                "watchers": cur[I_WATCHERS], "issues": cur[I_ISSUES],
                "prs": cur[I_PRS], "releases": cur[I_RELEASES],
                "issues_open": _col(cur, I_ISSUES_OPEN),
                "issues_closed": _col(cur, I_ISSUES_CLOSED),
                "prs_open": _col(cur, I_PRS_OPEN),
                "prs_closed": _col(cur, I_PRS_CLOSED),
                "prs_merged": _col(cur, I_PRS_MERGED),
                "discussions": det.get("discussions_total"),
            },
            "growth": growth,
            "history": {
                "dates": ds,
                "stars": [int(v[I_STARS] or 0) for v in vs],
                "forks": [int(v[I_FORKS] or 0) for v in vs],
                "watchers": [v[I_WATCHERS] for v in vs],
                "issues_open": [_col(v, I_ISSUES_OPEN) for v in vs],
                "prs_open": [_col(v, I_PRS_OPEN) for v in vs],
            },
            "boards": placements.get(name) or {},
            "same_owner": sorted(
                ({"full_name": n, "name": n.split("/")[1],
                  "boards": placements.get(n) or {}}
                 for n in owner_map.get(owner, []) if n != name),
                key=lambda x: (x["boards"].get("total") or 9999, x["name"]))[:20],
            "issues": det.get("hot_issues") or [],
            "discussions": det.get("discussions") or [],
            "latest_release": det.get("latest_release"),
            "readme_excerpt": det.get("readme_excerpt"),
            "snapshot_at": run_at[latest_day].astimezone(UTC).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "history_start": days[0],
        }
        (repos_out / f"{owner}__{repo}.json").write_text(
            json.dumps(payload, ensure_ascii=False, separators=(",", ":")),
            encoding="utf-8")
        detail_count += 1
        page_html = render_repo_page(payload, repo_tpl, base)
        (pages_out / f"{owner}__{repo}.html").write_text(page_html, encoding="utf-8")

    # ---------------- index / sitemap / robots ----------------
    # SSR the landing board into index.html — crawlers (Baidu doesn't run JS)
    # and first paint on slow links get real rows; app.js replaces on hydrate.
    try:
        for b in SSR_BOARDS:
            items = (latest_boards.get(b) or {}).get("items") or []
            if items:
                inject_index_ssr(b, items[:SSR_TOP], latest_day,
                                 months_present, daily_top10)
                break
    except Exception as e:
        log(f"[warn] index SSR failed: {e}")

    index = {
        "generated_at": datetime.now(UTC).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "site_base": args.site_base,
        "repo_count": len(day_close[days[-1]]),
        "first_day": days[0],
        "latest_day": days[-1],
        "snapshot_days": len(days),
        "dates": days,
        "months": months_present,
        "years": years_present,
    }
    (SITE_DATA / "index.json").write_text(
        json.dumps(index, ensure_ascii=False, indent=1), encoding="utf-8")

    base = args.site_base.rstrip("/")
    sitemap = ['<?xml version="1.0" encoding="UTF-8"?>',
               '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
               f"  <url><loc>{base}/</loc><lastmod>{latest_day}</lastmod></url>"]
    # board entry points (query params) — cheap SEO surface
    for b in ALL_BOARDS:
        sitemap.append(f"  <url><loc>{base}/?board={b}</loc>"
                       f"<lastmod>{latest_day}</lastmod></url>")
    # repo detail pages — one static HTML per tracked repo
    for name in sorted(day_close[latest_day]):
        sitemap.append(f"  <url><loc>{base}/repos/{name.replace('/', '__')}.html</loc>"
                       f"<lastmod>{latest_day}</lastmod></url>")
    sitemap.append("</urlset>")
    (SITE_DIR / "sitemap.xml").write_text("\n".join(sitemap) + "\n", encoding="utf-8")
    # robots.txt: open-data site — welcome all crawlers incl. AI/LLM ones (GEO)
    ai_bots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot",
               "Claude-User", "Claude-SearchBot", "PerplexityBot",
               "Perplexity-User", "Google-Extended", "Applebot-Extended",
               "meta-externalagent", "Bytespider", "CCBot"]
    robots = ["# GitHub Trending Rank Radar — open-data project, all crawlers welcome.",
              "User-agent: *", "Allow: /", ""]
    robots += [f"User-agent: {b}\nAllow: /\n" for b in ai_bots]
    robots.append(f"Sitemap: {base}/sitemap.xml")
    (SITE_DIR / "robots.txt").write_text("\n".join(robots) + "\n", encoding="utf-8")

    log(f"site/data written: {len(days)} days, {len(months_present)} months, "
        f"{len(years_present)} years, {detail_count} repo details")
    return 0


if __name__ == "__main__":
    sys.exit(main())
