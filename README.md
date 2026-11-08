# 📡 Trending Rank Radar

独立采集 GitHub 仓库数据的开源项目趋势榜单 —— **完全开源、数据自采**。

🌐 **在线榜单**: https://awesome-market.github.io/trending-rank-radar/

## 八种榜单

| 榜单 | 口径 |
|---|---|
| 新榜 | 近 90 天内创建，按当前 Star 排序（≥20★） |
| 日 / 周 / 月飙升榜 | 窗口 Star **绝对增长量**降序（增量 > 0，当前 ≥100★） |
| 日 / 周 / 月增速榜 | **相对增长率** = 增量 ÷ 窗口起点 Star 基数 × 100（基数 ≥50） |
| 总榜 | 当前累计 Star 降序 |

- 增长量由**每日 Star 快照差分**得出，每天北京时间 10:00 / 22:00 各采集一次
- 增速榜与飙升榜分列（八榜结构）
- 历史窗口不足时用最早可用快照兜底，界面标注实际区间（如 `10-15 ~ 11-08 · 24天`）

## 按日 / 月 / 年回看

- **日**：任意历史日期的八榜快照
- **月**：月末八榜 + 当月累计增长榜 + 每日 Top10 摘要
- **年**：年度增长榜 + 月度榜入口

## 技术架构

```
GitHub Trending / Search API / GraphQL API
        │  GitHub Actions 每日 2 次
        ▼
data/snapshots/*.json  ──►  scripts/rank.py  ──►  site/data/*.json
   (git 仓库即数据库)         (八榜预计算)          (纯静态，Pages 托管)
```

- **零依赖 Python 3**：采集/计算只用标准库（`urllib` + `html.parser` + `json`）
- **纯静态前端**：原生 HTML/CSS/JS，无构建工具，GitHub Pages 直接托管
- **数据即档案**：所有快照提交进 git，仓库本身就是可下载的历史数据库

## 口径说明

- 新榜 / 总榜为**本站跟踪仓库范围**（约 2000 个，由 Trending + Search API + 增长信号维护）内的排名，非全站点排名
- 增速 = 增长量 ÷ 窗口起点 Star 基数，向下取整为整数百分比
- `issues` 计数来自 GitHub API（REST 口径含 PR；GraphQL 中 issues / pullRequests 分列）
- 数据仅供参考，不构成任何建议

## 本地运行

```bash
# 采集快照（需要 GITHUB_TOKEN）
GITHUB_TOKEN=xxx python3 scripts/collect.py

# 重建榜单与站点数据
python3 scripts/rank.py --site-base http://localhost:8000

# 预览
cd site && python3 -m http.server 8000
```

## 仓库结构

```
├── docs/                  # 设计文档（数据管道/榜单算法/前端/自动化）
├── scripts/               # collect.py · rank.py · gh.py（零依赖）
├── data/                  # 快照与元数据（git 即历史档案）
├── site/                  # 生成的静态站（Pages 部署源）
└── .github/workflows/     # 每日定时采集 + Pages 部署
```

## License

[Apache-2.0](LICENSE)
