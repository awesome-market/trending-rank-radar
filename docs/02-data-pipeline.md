# 02 数据采集与快照

## 数据源

| 源 | 用途 | 成本 | 方式 |
|---|---|---|---|
| `github.com/trending` | 发现当日热门仓库（各语言） | 无 API 成本 | 抓 HTML，解析仓库名/描述/语言/今日 Star |
| GitHub Search API | 发现新晋候选（按创建时间 + Star 数过滤） | 30 req/min（认证） | REST `search/repositories` |
| GitHub GraphQL API | 批量读取 watchlist 仓库的 Star/Fork/推送时间 | 5000 points/hr | `nodes()` / `repository()` 批量别名查询 |

原则：**Trending 负责"发现"，GraphQL 负责"计量"**。Search API 只用于补充新仓库候选。

## 候选仓库发现（每日 Discovery）

每次运行抓取并合并以下来源，去重后得到候选集：

1. **Trending 页面**：抓 `https://github.com/trending`（必要时按 `?since=daily` 及几个主要语言页），取每仓库的 `owner/name`、简介、语言、今日 Star 增长。
2. **新仓库搜索**：Search API 查询 `created:>{90天前} stars:>20 sort=stars`（对齐新榜口径），取前 1–2 页，补充新榜候选。
3. **存量 watchlist**：上一轮快照中所有在榜/接近在榜的仓库继续跟踪。

候选集与 watchlist 合并后，**按规则裁剪到上限 ~2000 个**。优先级：在榜仓库 > Trending 命中 > 高 Star > 近 7 天有增长。**淘汰规则**（超限时按此顺序剔除）：连续 14 天未上任何榜 且 非 Trending 命中 且 Star 增长为 0 的仓库优先出局；仍超限则剔除 Star 最低者。

### Watchlist 冷启动（首次运行）

`watchlist.json` 不存在或为空时，collect 进入初始化模式，额外执行：

- Search API `sort=stars` 多页拉取高 Star 仓库（如 `stars:>2000`，每页 100，取前 ~1000 条）——保证总榜/存量榜有足够的高基数样本；
- Search API `created:>{90天前} stars:>20 sort=stars` 拉取新仓库候选（对齐新榜口径）；
- Trending 页面全量候选。

初始化后 watchlist 一次性填充至 ~2000（按 Star 降序截断），此后走常规增量更新。注意 **Search API 单查询最多返回 1000 条**（10 页 × 100），故"90 天新仓库"候选实际只能覆盖其中 Star 最高的 ~1000 个——新榜口径是"跟踪集内"排名，README 需注明。

## 快照（Snapshot）

每次运行对 watchlist 全量拉取一次指标，生成一个带 UTC 时间戳的快照文件。

### 存储格式

```
data/
  snapshots/
    2026-11-08T02.json    # UTC 02:00 那次运行（≈北京时间 10:00）
    2026-11-08T14.json    # UTC 14:00 那次运行（≈北京时间 22:00，当日"收盘"）
    ...
  watchlist.json        # 当前跟踪列表（含首次发现日期、历史最佳排名等元数据）
```

文件名 `YYYY-MM-DDTHH.json` 按 **UTC 小时**命名；一天可有多份（每日 2 次运行）。`rank.py` 按**北京时间（Asia/Shanghai）自然日**分组，每天取当天最后一次快照作为该日"收盘值"——日/周/月窗口一律基于收盘值差分，与快照频率解耦。

`data/snapshots/YYYY-MM-DDTHH.json` 内容（紧凑数组格式，减少体积）：

```json
{
  "date": "2026-11-08T14",
  "run_at": "2026-11-08T14:03:12Z",
  "repos": [
    ["owner/name", 12345, 678, 901, 34, 56, 7, "2026-01-01T00:00:00Z", "Python", false, false],
    ...
  ],
  "errors": [["owner/gone-repo", "not_found"]]
}
```

字段顺序固定（11 列）：`full_name, stars, forks, watchers, issues_total, prs_total, releases_total, created_at, language, is_fork, is_archived`。
`errors` 为可选字段，记录当次拉取失败的仓库及原因。

（watchers/issues/prs/releases 对齐 同类榜单站 数据模型，前端元信息行对非 null 字段渲染对应图标计数；扩展字段仅 UTC 14:00 运行填充，其他时刻为 `null`——见下方"拉取方式"。GraphQL 中 issues/pullRequests 分列；REST `open_issues_count` 含两者。）

仓库级低频元数据（description、topics、homepage、pushed_at、updated_at）不逐日重复存储，放 `data/repos/{owner}__{name}.json` 按需缓存，GraphQL 返回值变化时更新；`rank.py` 将 description/homepage 等**内联合并进 `site/data` 条目**，保证 site/ 自包含（Pages 只能访问 site/ 下的文件）。

序列需保留 **≥35 天**以支持月榜窗口；`rank.py` 从全部快照重建每仓库的日序列。

### 拉取方式

- **GraphQL 批量**（主力，**两档抓取**）：
  - **核心字段**（每次运行）：`stargazerCount / forkCount / isFork / isArchived / createdAt / pushedAt / updatedAt / description / homepageUrl / primaryLanguage`——纯标量+小连接，batch=50 实测 ~2.5s/44 仓库，2000 仓库约 40 请求 ~100s。
  - **扩展字段**（每日一次，UTC 14:00"收盘"运行）：`watchers / repositoryTopics / issues / pullRequests / releases` 的 `totalCount`——connection 字段使查询复杂度约增 20 倍（batch>25 会超时），batch=20、~10s/批，2000 仓库约 17 分钟，仅在日更第二次运行执行；早间运行这些字段为 `null`。榜单计算不依赖扩展字段，故对排名零影响。
- **REST 兜底**：GraphQL 失败或个别仓库查不到时，用 `GET /repos/{owner}/{repo}` 补漏。注意限额差异：**GITHUB_TOKEN 为 1000 req/hr**，PAT/OAuth 为 5000 req/hr——兜底预算按 1000/hr 设计。
- **重试**：403/429/5xx 指数退避重试，最多 3 次；当日失败仓库在 `snapshot.errors` 中记录，次日补齐。

### Trending 抓取注意

- `github.com/trending` 是 HTML 页面，无官方 API。解析 `h2 a` 仓库链接 + `.f6.text-gray` Star 数等选择器；页面改版导致解析失败时，任务告警但不中断（快照可由 watchlist 独立完成）。
- 每天 2 次运行各抓 1 次（共 2 次/日），配合 `GITHUB_TOKEN` 不需要（HTML 页面不需要认证），但加 `User-Agent` 头。
- 语言维度：v1 只抓总榜 trending + `python`/`javascript`/`typescript`/`go`/`rust` 等 TOP10 语言页，控制规模。

## 限流预算（每日两次任务估算）

| 调用 | 每次运行 | 限额占比（GITHUB_TOKEN） |
|---|---|---|
| GraphQL 批量快照（~2000 仓库） | ~50 req / ~300 pts | ≈6% of 5000 pts/hr |
| Search API（新候选） | ~4 req | ≈13% of 30/min |
| Trending HTML | ~6 页 | 无 API 成本 |
| REST 兜底 | <200 req | ≈20% of 1000/hr |

结论：每日 2 次运行完全可行。若未来提高到 6 小时一更（4 次/日），GraphQL 合计 ~1200 pts/日仍远低于限额，REST 兜底需控制在 1000/hr 内，Search API 频率不变。

## 脚本结构（Python 3，仅标准库）

```
scripts/
  gh.py           # GitHub API 客户端：trending 抓取 / search / graphql 批量 / REST 兜底 / 重试
  collect.py      # Discovery + 快照主流程（调用 gh.py）
  rank.py         # 读快照 → 计算八榜 + 日/月/年聚合 → site/data/*.json
  build.py        # （可选）HTML 模板渲染；v1 可由 rank.py 直接产出
```

- 全部使用标准库：`urllib`（HTTP）+ `html.parser`（Trending 页面解析）+ `json` + `argparse`，CI 零依赖安装。
- Trending HTML 解析用 `html.parser` 写轻量解析器（选类集中在 `gh.py`，页面改版只改一处）；正则解析 HTML 作为兜底。
- 所有外部请求带超时（30s）与重试；任何单点失败不阻塞整批。
