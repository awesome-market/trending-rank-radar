# 04 前端设计

## 设计定位

**数据仪表盘美学**：深色高级感 + 精致排版 + 微动效。参考 Vercel / Linear / Raycast 的仪表盘质感，配色基于 GitHub Primer 深色系但做了提亮和渐变。

核心记忆点：**前三名领奖台卡片 + 每行内嵌 Star 迷你曲线**——曲线数据来自快照序列，成本为零但视觉收益极大。

## 技术选型

**无构建纯静态**：原生 HTML + CSS + JavaScript（ES2020），不引入框架和打包工具。

- 数据全部是预生成 JSON，前端只做渲染和切换
- 零构建 = CI 最快、依赖最少、Pages 部署最简单
- 字体用系统栈（`-apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei"`），不引外部字体，保证加载速度

## 页面结构

```
site/                        # GitHub Pages 根目录（或 /docs）
  index.html                 # 榜单主页（单页）
  assets/
    style.css                # 全部样式（含动效）
    app.js                   # 路由 + 渲染 + 数据加载 + sparkline 绘制
  data/                      # rank.py 生成（见 03-ranking.md）
    index.json
    days/*.json
    months/*.json
    years/*.json
```

## 视觉系统

### 色板

```
背景:     #0a0e14 → #0d1117（顶部径向微光 #1a2332）
卡片:     rgba(255,255,255,0.03) + border rgba(255,255,255,0.07)
主文字:   #e6edf3    次文字: #8b949e
主色渐变: #58a6ff → #a371f7（品牌/高亮）
上涨绿:   #3fb950    下跌红: #f85149
奖牌色:   #f0c040(金) #c0c0c0(银) #cd7f32(铜)
```

### 组件规范

- **卡片**：`border-radius: 12px`，`backdrop-filter: blur(8px)`，hover 时 `translateY(-2px)` + 边框提亮，过渡 200ms ease
- **数字**：Star/增长量用 `font-variant-numeric: tabular-nums` 对齐；增长量 ≥1000 显示 `12.3k`
- **徽标**：语言彩色圆点 + 名称；增速% 用 pill 徽标（≥50% 绿色高亮，≥100% 加粗光晕）
- **动效**：数据加载 `fadeSlideIn`（opacity + translateY 8px，stagger 30ms）；数字 count-up；`prefers-reduced-motion` 时全部降级为静态

## 页面布局

```
┌──────────────────────────────────────────────────────────┐
│  ◉ Trending Rank Radar          数据更新于 3小时前  [GitHub↗]│
│  GitHub 开源项目趋势榜单 · 每日双快照                       │
├──────────────────────────────────────────────────────────┤
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐              │
│  │12,483  │ │  47    │ │  8.2k  │ │  30天  │              │
│  │跟踪仓库 │ │ 累计快照 │ │今日上榜增量│ │数据跨度 │              │
│  └────────┘ └────────┘ └────────┘ └────────┘              │
├──────────────────────────────────────────────────────────┤
│  榜单 [新][日增][日速][周增][周速][月增][月速][总]           │
│  时间 [日|月|年]  [2026-11-08 ▾]  Star范围 [1]k-[500]k    │
├──────────────────────────────────────────────────────────┤
│  ┌── PODIUM ──────────────────────────────────────────┐  │
│  │  🥇        🥈        🥉                                  │  │
│  │ avatar   avatar    avatar                              │  │
│  │ owner/repo …（卡片：名称/简介/Star/增长/+sparkline）      │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌── LIST ────────────────────────────────────────────┐  │
│  │ 4  avatar owner/repo  Py  12.3k ★  +523  9%  ~spark~ │  │
│  │ 5  ...                                                │  │
│  │ [加载更多]                                             │  │
│  └──────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────┤
│  数据来源: GitHub API · 快照差值计算 · 仅供参考              │
└──────────────────────────────────────────────────────────┘
```

### 头部（Hero）

- 左侧：SVG 雷达图标（动画：扫描线 `stroke-dashoffset` 循环）+ 标题（渐变文字 `background-clip: text`）+ 副标题
- 右侧：数据新鲜度指示——绿色脉冲圆点 + "数据更新于 X 小时前"（由 `index.json.generated_at` 计算）+ GitHub 仓库链接按钮
- 顶部 40vh 内一层 `radial-gradient` 光晕 + 细网格纹理（CSS `background-image` 线性渐变网格，opacity 3%）

### 数据统计条

4 个迷你统计卡（玻璃拟态）：跟踪仓库数 / 累计有效快照天数 / 今日飙升榜 Top1 增量 / 数据覆盖跨度（首末快照日）。数字 count-up 动画。

### 控制区（sticky top）

- **榜单 tabs**：8 个 pill tab，选中态 = 渐变底 + 滑动下划线；移动端横向滚动不换行
- **时间维度**：`日 | 月 | 年` 三段式 segmented control + 对应日期/月/年选择器（`<select>`，选项来自 `index.json`；月视图进行中的月份标注"进行中"）
- **统计时间显示**：展示榜单实际窗口区间（如 `10-15 ~ 11-08 · 24天`），窗口回退期用户能看懂口径
- **Star 范围**：两个 number 输入（k 为单位，默认 1–500）+ 筛选按钮
- sticky 后带 `backdrop-filter: blur(12px)` + 半透明底 + 底部细分割线

### 榜单内容

**Top 3 领奖台**（仅当榜单 ≥3 条时显示）：

- 三张横排大卡片（移动端纵向），金/银/铜渐变边框 + 轻微不同的纵向偏移（第 2 名低 8px、第 3 名低 16px，经典领奖台错位）
- 卡片内容：大号奖牌 emoji 或 SVG 奖章、头像（`github.com/{owner}.png`）、`owner/name`（链接新窗口）、简介（2 行截断）、主指标超大数字（增长量 `+12.3k` 或 Star 数）、增速 pill、30 天 sparkline
- hover：卡片上浮 + 边框流光（`conic-gradient` 旋转边框，`@property` 注册或伪元素动画）

**4 名及以后·紧凑行**：

```
#4 │ avatar │ owner/repo · 简介截断          │ Py │ ★12.3k ⑂678 │ +523 │ 9% │ ▁▂▅▇▅▃ │
```

- 行 hover：背景提亮 + 左侧 2px 渐变指示条滑入
- sparkline：80×24px 内联 SVG，`polyline` 描边 + 渐变面积填充，窗口内每日 Star 序列归一化
- 增长量正数绿色 `+N`，增速 ≥100% 时 pill 加 `glow` 动画；`approx`/`stale` 条目标 `≈`/`⧗` 角标并 tooltip 说明

**空状态**（冷启动）：居中雷达 SVG 动画 + "快照积累中" + 进度条（`snapshot_days / 31`，月榜完整口径需 31 个有效日；周榜需 8 日）+ 预计可用日期。窗口回退期榜单照常展示，统计时间处标注实际天数。

### 响应式

- ≥1024px：领奖台三列 + 表格行
- 768–1024px：领奖台纵向堆叠、表格保留横向滚动
- <768px：领奖台卡片全宽、表格转为卡片列表（每行折行为两行：名+指标 / sparkline+增长）

## 数据消费约定

前端只读 JSON，不做任何计算。榜单条目需含 sparkline 数据：

```json
{
  "rank": 1,
  "owner": "xxx", "name": "yyy",
  "description": "...", "language": "Python",
  "stars": 12345, "forks": 678,
  "growth": 523, "rate": 9, "approx": false, "stale": false,
  "series": [11800, 11920, ..., 12345]
}
```

`series` = 截至该榜单日期的**最近 30 个有效快照日** Star 序列（与榜单窗口无关，长度统一便于渲染；不足 30 天给已有什么），`rank.py` 输出时附带；`description`/`homepage` 由 `rank.py` 从 `data/repos/*.json` 元数据内联合并。

> **预计算规模**：每榜 Top 200（前端筛选后展示 Top 100），八榜去重后约 300–400 个唯一仓库/日，单日 JSON ~100KB。

`index.json` 示例：

```json
{
  "generated_at": "2026-11-08T14:20:00Z",
  "latest_day": "2026-11-08",
  "snapshot_days": 23,
  "dates": ["2026-10-17", "..."],
  "months": ["2026-10", "2026-11"],
  "years": ["2026"]
}
```

`snapshot_days` = **有效快照天数**（按北京时间归并后有数据的天数，非运行次数——每日 2 次运行不重复计数）。空状态进度条、数据新鲜度均以此为准。

### 关键约束：资源路径必须相对

GitHub Pages 项目站部署在 `https://<user>.github.io/trending-rank-radar/` **子路径**下。所有资源与数据请求一律使用**相对路径**（`assets/app.js`、`data/index.json`），禁止以 `/` 开头的绝对路径；`history.pushState` 的 query 参数不受影响。

`sitemap.xml` / OG `og:url` 需要站点绝对地址：`rank.py` 接受 `--site-base` 参数（默认 `https://<user>.github.io/trending-rank-radar`，自定义域名时覆盖），生成时写入。

## SEO / 分享

- `history.pushState` 同步 query（`?board=weekly_rate&date=2026-10-15`），可直接分享
- JS 动态更新 `document.title` / meta description
- `robots.txt` 允许抓取；`sitemap.xml` 由 rank.py 顺带生成（首页 + 各榜单入口）
