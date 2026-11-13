# 📡 GitHub Trending Rank Radar

**English** | [中文](README.zh.md)

Independently collected trend rankings of open-source GitHub projects — **fully open source, self-collected data**.

🌐 **Live**: https://zhuikan.com/ (mirror: https://awesome-market.github.io/trending-rank-radar/)

## Eight boards

| Board | Criteria |
|---|---|
| New | Created within the last 90 days, sorted by current stars (≥20★) |
| Daily / Weekly / Monthly Growth | **Absolute star growth** over the window, desc (growth > 0, current ≥100★) |
| Daily / Weekly / Monthly Rate | **Relative rate** = growth ÷ star base at window start × 100 (base ≥50) |
| All-Time | Current total stars, desc |

- Growth is computed from **daily star snapshot diffs**, collected twice a day at 10:00 / 22:00 Beijing time
- Rate boards and growth boards are listed separately (the eight-board layout)
- When history is too short, the earliest available snapshot is used as the base and the UI marks the actual window (e.g. `10-15 ~ 11-08 · 24d`)

## Replay by day / month / year

- **Day**: the eight-board snapshot for any historical date
- **Month**: month-end boards + cumulative monthly growth + daily Top10 digest
- **Year**: annual growth board + monthly board entries

## UI features

- **Chinese / English**: one-click `EN`/`中` toggle in the top-right corner, persisted locally
- **Dark / light theme**: manual ☀/☾ toggle, falls back to system preference, flash-free loading
- **Wide rows**: owner + repo name + avatar + language/star/fork/watch/PR/issue/release meta + adaptive description + inline 30-day sparkline
- **Podium**: staggered gold/silver/bronze cards for the top three; empty states show accumulation progress and a fallback board preview
- **Desktop-first**: designed for ≥1440px screens, usable degradation on smaller ones

## Architecture

```
GitHub Trending / Search API / GraphQL API
        │  GitHub Actions, twice a day
        ▼
data/snapshots/*.json  ──►  scripts/rank.py  ──►  site/data/*.json
   (the git repo is the DB)   (boards precomputed)   (pure static, Pages-hosted)
```

- **Zero-dependency Python 3**: collection and ranking use only the standard library (`urllib` + `html.parser` + `json`)
- **Pure static frontend**: vanilla HTML/CSS/JS, no build tooling, served directly by GitHub Pages
- **Data as archive**: every snapshot is committed to git — the repo itself is a downloadable historical database

## Methodology notes

- The New / All-Time boards rank **within the tracked set** (~5,000 repos, maintained via Trending + Search API + growth signals), not all of GitHub
- Rate = growth ÷ star base at window start, floored to an integer percentage
- `issues` counts come from the GitHub API (REST semantics include PRs; GraphQL reports issues / pullRequests separately)
- Data is for reference only — not advice of any kind

## Run locally

```bash
# collect a snapshot (needs GITHUB_TOKEN)
GITHUB_TOKEN=xxx python3 scripts/collect.py

# rebuild boards & site data
python3 scripts/rank.py --site-base http://localhost:8000

# preview
cd site && python3 -m http.server 8000
```

## Repo layout

```
├── docs/                  # design docs (data pipeline / ranking / frontend / automation)
├── scripts/               # collect.py · rank.py · gh.py (zero-dependency)
├── data/                  # snapshots & metadata (git is the archive)
├── site/                  # generated static site (Pages deploy source)
└── .github/workflows/     # scheduled collection + Pages deploy
```

## License

[Apache-2.0](LICENSE)
