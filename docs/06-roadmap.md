# 06 实施路线图

## Phase 1：数据管道 MVP（先让数据转起来）

目标：每天能产出一份有效快照，榜单数据可被离线验证。

- [ ] `scripts/collect.py` + `scripts/gh.py`
  - [ ] Trending 页面抓取（总榜 + TOP 语言页，`html.parser`）
  - [ ] Search API 新仓库候选（`created:>90d stars:>20`，对齐新榜）
  - [ ] GraphQL 批量快照 watchlist（11 字段：stars/forks/watchers/issues/prs/releases/created_at/language/is_fork/is_archived 等）
  - [ ] `data/repos/*.json` 低频元数据缓存（description/homepage 等）
  - [ ] 写 `data/snapshots/YYYY-MM-DDTHH.json`（自取 UTC 时间戳，支持日内多次运行）+ 更新 `watchlist.json`（含淘汰规则）
- [ ] `scripts/rank.py`（最小版）
  - [ ] 读快照（按北京时间分组取每日收盘值）→ 算八榜（窗口回退 + `≈`/`stale` 标记）→ 输出 `site/data/index.json` + `days/*.json`（含窗口 `series` 供 sparkline，元数据内联合并）
- [ ] 本地手动跑通 2–3 天（可同天跑两次验证多快照），验证快照文件正确累积

**验收**：连续 3 天快照文件存在且字段完整；总榜/新榜结果人工抽查与 GitHub 页面一致。

## Phase 2：榜单与历史回看

- [ ] `rank.py` 完整版：日/周/月飙升+增速六榜（含快照缺失回退、`≈` 标记）
- [ ] 日/月/年三粒度聚合输出（`days/` `months/` `years/`）
- [ ] 前端 `index.html` + `app.js` + `style.css`（按 04-frontend.md 视觉规范）
  - [ ] Hero + 统计条 + sticky 控制区（八榜 tab / 日月年切换 / k 范围筛选）
  - [ ] Top3 领奖台卡片 + 紧凑行列表 + 30 天 sparkline + 空状态
- [ ] 本地起 `python -m http.server` 验证交互

**验收**：日/周/月榜数值可手工复算验证；切换任意历史日期数据正确；冷启动空状态文案正常。

## Phase 3：自动化上线

- [ ] 推送到 GitHub 公开仓库
- [ ] `.github/workflows/daily-update.yml`（cron ×2 + workflow_dispatch + deploy-pages，见 05-automation.md）
- [ ] Pages 开启（Source = GitHub Actions），确认 `https://<user>.github.io/trending-rank-radar/` 可访问
- [ ] 仓库变量 `SITE_BASE`（自定义域名时设置）
- [ ] README.md（项目首页：功能、榜单口径、数据说明、免责声明）

**验收**：Actions 每日自动提交快照；Pages 站点数据与仓库 `data/` 一致；手动 dispatch 可补跑。

## Phase 4：增强（按需迭代）

- [ ] 语言维度榜单（`?lang=python`）
- [ ] 指标维度切换（按 Forks / Watchers 增长排，数据已在快照中）
- [ ] 仓库详情页（全历史 Star 曲线 + 多指标面板，复用快照数据画 SVG）
- [ ] RSS / JSON API 输出（供别的工具订阅）
- [ ] 多语言 UI（en）

## 已知风险与对策

| 风险 | 影响 | 对策 |
|---|---|---|
| Trending 页面改版导致解析失败 | 当日候选减少 | 解析失败降级为只用 watchlist+Search API；选择器集中管理便于修复 |
| GitHub API 限额收紧 | 快照不完整 | GraphQL 优先（点数制宽裕）；REST 兜底；watchlist 上限 2000 封顶 |
| 仓库被删/改名 | 快照缺字段 | GraphQL `repository()` 返回 null 时标记，次日从 watchlist 移除 |
| git 仓库随数据增长变大 | clone 变慢 | 快照原始 ~150–180MB/年（2 次/日 × 11 字段），git 压缩后 ~30–40MB/年，5 年内无压力；超限再做历史快照归档压缩 |
| Actions cron 延迟/跳过 | 数据断档 | `workflow_dispatch` 手动补跑；快照按时间戳幂等（同一时间戳重跑覆盖该文件） |
