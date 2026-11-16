# 📡 GitHub Trending Rank Radar

[English](README.md) | **中文**

独立采集 GitHub 仓库数据的开源项目趋势榜单 —— **完全开源、数据自采**。

🌐 **在线榜单**: https://zhuikan.com/ （镜像：https://awesome-market.github.io/trending-rank-radar/）

## 十一种榜单

| 榜单 | 口径 |
|---|---|
| 新星榜 | 近 90 天内创建，按当前 Star 排序（≥20★） |
| 首登榜 | 当日首次进入任一榜单，按日窗口 Star 增长排序 |
| 日 / 周 / 月飙升榜 | 窗口 Star **绝对增长量**降序（增量 > 0，当前 ≥100★） |
| 日 / 周 / 月增速榜 | **相对增长率** = 增量 ÷ 窗口起点 Star 基数 × 100（基数 ≥50） |
| Fork / Watch 日增榜 | Fork / Watchers 计数的日绝对增长量 |
| 总榜 | 当前累计 Star 降序 |

- 增长量由**每日 Star 快照差分**得出，每天北京时间 10:00 / 22:00 各采集一次
- 增速榜与飙升榜分列（十一榜结构）
- 历史窗口不足时用最早可用快照兜底，界面标注实际区间（如 `10-15 ~ 11-08 · 24天`）

## 按日 / 月 / 年回看

- **日**：任意历史日期的十一榜快照
- **月**：月末十一榜 + 当月累计增长榜 + 每日 Top10 摘要
- **年**：年度增长榜 + 月度榜入口

## 界面特性

- **中英双语**：右上角 `EN`/`中` 一键切换，选择本地持久化
- **深/浅主题**：☀/☾ 手动切换，跟随系统偏好兜底，无闪烁加载
- **宽版行**：作者 + 仓库名 + 头像 + 语言/Star/Fork/Watch/PR/Issue/Release 元信息 + 自适应简介 + 内嵌 30 日 Sparkline
- **领奖台**：前三名金银铜错位卡片；空状态给出积累进度与备用榜预览
- **桌面优先**：按 ≥1440px 宽屏设计，小屏保有可用降级

## 技术架构

```
GitHub Trending / Search API / GraphQL API
        │  GitHub Actions 每日 2 次
        ▼
data/snapshots/*.json  ──►  scripts/rank.py  ──┬─►  site/*.html ──► Cloudflare Pages
   (git 仓库即数据库)         (十一榜预计算      └─►  site/data/** ──► site-data.db ──► api-site /data/*
                             + SSR 注入)                          (blob 存储 + FTS5 语料)
```

- **零依赖 Python 3**：采集/计算只用标准库（`urllib` + `html.parser` + `json`）
- **纯静态前端**：原生 HTML/CSS/JS，无构建工具，Cloudflare Pages 托管（`gh-pages` 分支留作冷备镜像）
- **数据面在 zhuikan-api**：`site/data/**` 打成单个 sqlite（`site-data.db`）推到 `api-site.zhuikan.com`；页面水合、FTS5 搜索、登录与评论都跑在这个独立的 FastAPI 服务上
- **数据即档案**：所有快照提交进 git，仓库本身就是可下载的历史数据库

## 口径说明

- 新星榜 / 总榜为**本站跟踪仓库范围**（约 6,000 个，由 Trending + Search API + 增长信号维护）内的排名，非全站点排名
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
├── site/                  # 生成的静态站（Cloudflare Pages 部署源）
└── .github/workflows/     # 每日定时采集 + 部署（CF Pages + api-site 数据上传）
```

## License

[Apache-2.0](LICENSE)
