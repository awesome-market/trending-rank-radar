# 01 项目概述

## 目标

做一个独立运行的 GitHub 项目趋势榜单站，覆盖主流 GitHub 榜单站的核心能力：

- **八种榜单**：新榜 + 日/周/月 × 飙升榜（增长绝对值）+ 增速榜（相对增长率）+ 总榜（累计 Star），口径经同类榜单站公开数据实测校准
- **历史回看**：按日 / 月 / 年查看任意历史时点的榜单数据
- **完全自托管**：数据自己爬，不依赖第三方榜单 API
- **零运维**：GitHub Actions 定时跑，产物是纯静态文件，GitHub Pages 直接托管

## 对标分析（2026-11 调研）

| 项目 | Stars | 相似点 | 差距 |
|---|---|---|---|
| josebergo/github-pulse | 0 | 日/周/月榜 + 快照差值算法 + 历史回放 | Go 后端 + SQLite + React SPA，必须跑服务，无法上 Pages |
| hanishrao/trending-collection | 13 | Trending 日/周/月数据归档至 2015，静态 JSON API | 只有官方 Trending 原始榜，无 Star 增长计算、无新/总榜、无 UI |
| larsbijl/trending_archive | 408 | Trending 每日归档 | 纯 markdown 数据，无网站 |
| sivagao/github-serendipity.github.io | 534 | 唯一同类静态站（Pages 托管） | 无 Star 增长榜、无历史数据 |
| EvanLi/Github-Ranking | 12.9k | 仓库按 Star 排名 | 只按总 Star 排，无增长榜、无历史 |
| OpenGithubs/github-*-rank 等数据归档仓库 | ~4.6k 合计 | 榜单快照数据归档 | 仅 markdown 数据，无站点代码 |

## 差异化定位

```
别人做的：  Trending 页面抓取  →  存原始榜  →  发 markdown
我们做的：  自建 Star 快照库   →  差值算增长  →  八榜 + 历史回看  →  静态网站
```

核心壁垒是**自有快照数据**：Star 增长榜的本质是"同一仓库不同时点的 Star 差值"，必须自己每天存快照才能算出来，无法靠一次性爬取获得。

## 关键约束（先说清楚）

- **冷启动**：Star 历史无法从 GitHub API 回溯，增长量按窗口回退规则用可用快照计算（见 03-ranking.md）——上线第 2 天日榜即可出，周/月榜以"近 N 天"口径先行展示，约 8 / 31 个有效快照日后分别补满 7 / 30 天完整窗口。
- **GitHub API 限额**：Search API 30 req/min（认证），GraphQL 5000 points/hr。日更场景下足够，详见 [02-data-pipeline.md](02-data-pipeline.md)。
- **数据规模**：跟踪仓库 ~2000 个，每次快照（每日 2 次）约 200–250 KB 原始 JSON，年增原始 ~150–180 MB；git 对重复性 JSON 压缩比高，仓库体积年增 ~30–40 MB，可接受。站点 `site/data/` 另计 ~36 MB/年。

## 架构决策：为什么不用数据库

GitHub Pages 只能托管静态文件，无服务端运行时，无法直连传统数据库。本项目采用 JAMstack 模式规避：

- **写**：GitHub Actions 是唯一写入者——`collect.py` 爬数据、`rank.py` 算榜、git commit 回仓库。`data/snapshots/` 本身就是数据库（追加式 JSON 档案）。
- **读**：浏览器直接 fetch `site/data/*.json` 预计算文件，零后端零查询。

该模式适配本项目"定时批处理 + 读多写少 + 无用户态数据"的特征。未来若加评论/登录等用户态功能，才需要引入 Supabase/Firebase 等 BaaS——v1 明确不做。

## 非目标（v1 不做）

- 用户系统、评论、登录（社区/互动功能不做）
- 仓库详情独立页 / 完整 star-history 式增长曲线（v1 仅有行内 30 天 sparkline，见 04-frontend.md）
- 商业推广/榜单投稿机制
- 多语言 UI（v1 仅中文，结构上预留 i18n）
