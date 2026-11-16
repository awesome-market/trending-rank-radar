# 08 多语言分片部署与增量渲染

> 状态：设计评审稿（2026-11-16 定稿 v4，未实施）。
> 解决两件事：① Cloudflare Pages 20k 文件上限下的无限扩展；② 中英双语从
> "单 URL + JS 切换"升级为"子域分语言 + hreflang"。
>
> v2：存量 repo 页不迁子域，双语留 www——英文占裸 `/repos/`，中文落 `/zh/repos/`。
> v3：tags 页整体落子域（出生即永久 host）。
> v4：**存量 repo 也全拆**——站上线仅数日、权重≈0，"免迁移"收益归零，
> 全量 repo 页直接落 `zh1`/`en1`，架构回归单一形态。tags 落 `tag1`。
> Pages 项目已建：`zhuikan-zh1` / `zhuikan-en1` / `zhuikan-tag1`。

---

## 1. 目标架构

```
zhuikan.com（www）       index, b/*, langs/*, user, 404, feed.xml,
                         sitemap.xml, robots.txt, assets/, _redirects
                         ≈ ~2.5k 文件，永久冻结——没有任何实体页

zh1.zhuikan.com          全部仓的中文 repo 页 + assets/ + sitemap + robots
en1.zhuikan.com          全部仓的英文 repo 页 + assets/ + sitemap + robots
                         现 ~6.2k 仓 → 各 ~6.2k 页；容量 ~19k，装满开 zh2/en2

tag1.zhuikan.com         全部 tags 页（单 URL _bi() 双语）+ assets/
                         + sitemap + robots；合资格池现 ~2.3k，容量 ~19k
                         → 装满后开 tag2（per-tag 分片表，机制同 repo_shards）

api-site.zhuikan.com     不动：/data/** JSON、auth、social、search、stats
                         所有子站共用（CORS/return_to 已按 *.zhuikan.com 后缀放行）
```

- **形态统一**：www = 纯壳（列表/归档/用户/资产）;repo 页永远在 `{lang}N`，
  tag 页永远在 `tagN`——没有"存量特例"，新仓直接进当前 active 分片。
- **命名 `zh1`/`en1`/`tag1` 不嵌套**：免费 Universal SSL 只覆盖单层
  `*.zhuikan.com` 通配。
- repo 页**历史永不删**；www `b/<board>/<date>` 归档页继续滚动窗口（bcut 45 天）。

## 2. SEO/URL 规则

| 项 | repo 页（任何 shard） | tags |
|---|---|---|
| en canonical | `https://en{shard}.zhuikan.com/repos/<fn>` | — |
| zh canonical | `https://zh{shard}.zhuikan.com/repos/<fn>` | `https://tag{shard}.zhuikan.com/tags/<slug>` |
| hreflang | `en`→en{shard}、`zh-CN`→zh{shard}、`x-default`→zh{shard} | 无（`_bi()` 单 URL 双语） |
| sitemap | 每 {lang}{shard} 自带 sitemap + robots | tag{shard} 自带 sitemap + robots |
| www sitemap | 只收壳页（index/b/langs/user 等） | — |

**迁移面（全部一次性，共 ~6.4k URL）**：

```
/repos/*  → https://zh1.zhuikan.com/repos/:splat   301   # 老 URL 内容是中文
/tags/*   → https://tag1.zhuikan.com/tags/:splat   301
```

- 指 zh1 的理由：现有 `/repos/` 收录的是中文 SSR，301 到同语言版本最忠实；
  en1 靠 hreflang + sitemap 独立被发现。此时迁移的 SEO 代价≈0（站刚上线）。
- www 上 SSR 行内链接出**当前语言版本**（zh 语境指 zh{shard}）；tag pills
  一律绝对指 `tag{shard}`（不分语言）。

## 3. 归属与链接生成

### `data/repo_shards.json`（reduce 单写者，进 git）

```jsonc
{
  "active": "1",
  "shards": { "1": { "count": 0, "cap": 19000 } },
  "repos": {
    "owner/name": {
      "shard": "1",
      "sig": "sha256…",            // §5 增量渲染签名
      "rendered_stars": 99939,
      "boards": ["total"],
      "release_sig": ["v0.3.7", "loop-recover 0.3.7", "2026-11-14"]
    }
  }
}
```

- 初始化：现有 ~6.2k 仓**全部 `"shard": "1"`**;`count` 触 `cap` →
  `active` 进位开新片，已分配仓**永不迁移**。不用哈希取模。

```python
def shard_url(repo, lang):                       # 单一形态，无分支
    fn = repo["full_name"].replace("/", "__")
    return f"https://{lang}{repo['shard']}.zhuikan.com/repos/{fn}"

def tag_url(slug):                               # 单 host；装满升级 tag_shards.json
    return f"https://tag1.zhuikan.com/tags/{slug}"
```

- **新 shard 上线流程**（repo/tags 同一套）：改 `active` → 建 Pages
  项目绑子域 → rank.py 按 shard 输出 `site-shards/<host>/` → 各 shard
  独立 wrangler 发一次。几年一次，手动。

## 4. 增量渲染总原则

### 4.0 前置修复：`?v=` 资产戳改内容哈希（现存 bug）

现状 `asset_v = str(int(time.time()))`（rank.py:1203/632/1374）——每次构建
全页字节必变：wrangler 内容 hash 增量上传**完全失效**、CDN/浏览器缓存每次被
戳爆、任何"没变就跳过"的方案永远不触发。

改为**资产内容哈希**：对每个 `assets/*.js|css` 算 sha256 取前 8 位作为该引用
的 `?v=`。

### 4.1 write-if-changed（零风险）

```python
def write_if_changed(path: Path, content: str) -> bool:
    if path.exists() and path.read_bytes() == content.encode():
        return False
    path.write_text(content, encoding="utf-8"); return True
```

所有 html/json 写出统一走它。

### 4.2 渲染后比对

`page_html` 生成后与磁盘旧文件比对，相同跳过——**输出即真相**。

### 4.3 实质变化才渲染（material-change，收益主力）

```python
boards_set = set(p.get("boards") or {})
if boards_set:
    render(p)                    # 上榜仓 → 每次都渲
else:
    if material(p, state):       # 长尾仓 → 实质检查
        render(p); update_state()
    else:
        skip
```

状态转移自动覆盖：冷门仓进榜自动升级日更；热仓出榜渲染一次后回落。

## 5. 触发值清单（material() 的完整签名）

repo 页（从 `_ssr_repo` 实际渲染字段反推）：

| 字段 | 页面位置 | 比较方式 |
|---|---|---|
| `metrics.stars` | 大数字 + growth 格 | **阈值**：\|Δ\| ≥ max(50, rendered_stars×0.005)，基准 = `rendered_stars` |
| `metrics.forks/watchers/prs/issues/releases` | stat 行 | 等值 |
| `boards` 键集合 | 头部 chips | 集合等值（#145→#144 不触发） |
| `latest_release` | release 块 | `(tag, name, published_at)` 三元组 |
| `issues`（hot） | Top issues 列表 | hash（编号+标题+评论数） |
| `discussions` | 列表 | hash |
| `news` | 新闻块 | hash（标题集） |
| `cm_items` 评论 | 评论区 | 计数或 hash |
| `readme` 摘要 | README pre | hash 或 flag |
| `same_owner` | TA的项目 | `full_name` 集合等值 |
| `topics` + `tag_pages` 交集 | 标签 pills | 集合等值 |
| `description` | rp-desc | 等值 |
| `language/license/homepage/created_at` | meta bits | 等值元组 |
| `avatar` | 侧卡头像 | 等值（可省） |
| `TEMPLATE_VER` | 全页 | 全局版本号，模板/字典改动 bump → 全量重渲 |
| `asset_v` + `lang` | ?v= 戳、语言变体 | 版本号，随构建注入 |

**明确不进签名**：`snapshot_at`（每次必变；语义改读"数据最后变化日"）、
`history.*`（不进 SSR）、boards 名次数值、`growth.*`（stars 衍生）、
`stale/approx`。

**tag 页的 material()**：

| 字段 | 比较方式 |
|---|---|
| `items` 名单（full_name 集 + 排序） | hash——成员或序变了才渲 |
| `topics`/`tag` 计数 | 等值 |
| `TEMPLATE_VER` + `asset_v` | 版本号 |

**配套决策**：`repos/<x>.json` 数据文件**每次照常写**——水合数据源 + 开放
数据，HTML 滞后由它兜底。JSON 自己也过 write-if-changed。

## 6. 代码改动清单

### `scripts/rank.py`（主战场）

| 位置 | 改动 |
|---|---|
| `_ssr_row()` :551 | repo `href` 经 `shard_url(e,'zh')`；tag pills → `tag_url(slug)` 绝对链 |
| `_ssr_month_top10()` :600 | repo 链同上 |
| `_ssr_repo()` :250 | 加 `lang`；标签字典化 `SSR_REPO_LABELS{zh,en}`；crumb/board chips → www 绝对链；topic pills `../tags/` → `tag_url(slug)`；same-owner → `shard_url(x, lang)`；JSON 链接 → `api-site.zhuikan.com/data/…` |
| `render_repo_page()` :889 | 加 `lang`+`shard`；canon 按 `shard_url`；`<html lang>` 按语言切；hreflang 三元组（zh{shard}↔en{shard}，x-default→zh）；JSON-LD url 跟随；`data-base="../"`（全站统一深度） |
| `render_tag_page()` :694 | 输出落 `site-shards/tag1/tags/`；canonical/og:url → `https://tag1.zhuikan.com/tags/{slug}`；`data-base="../"` |
| `TAG_MAX_PAGES` :684 | tag1 有 ~19k 容量 → 可放开到全量合资格池（现 ~2.3k）；`TAG_MIN_REPOS=3` 保留 |
| 生成循环 :1380-1496 | 分片分配 + 签名判定 + 每 repo 写两份 → `site-shards/{lang}{shard}/repos/`；www 不再生成任何 repos/ |
| prune :1502 | 停止删 repo html（历史永不删）；分片表保留归属；**删除 site/repos/ 输出**（迁移走 301） |
| 全部 `href="repos/`/`href="tags/` 前缀补丁 (:727/774/844) | 删除——出链已绝对化 |
| sitemap :1647 | www sitemap 只收壳页；每 shard 目录自带 sitemap.xml + robots.txt |
| `write_feed()` :868 | repo 链接指 `zh{shard}` |
| `llms.txt` | URL 模式更新（repos→{lang}N，tags→tagN） |

### `site/assets/app.js`（www 水合）

- `repoUrl(fn)` :556 及全部 `${DB}repos/…` 插值 → `repoUrl(e)`：

```js
const TAG_HOST = 'https://tag1.zhuikan.com';
function repoUrl(e) {
  const fn = `${encodeURIComponent(e.owner)}__${encodeURIComponent(e.name)}`;
  return `https://${LANG}${e.shard || '1'}.zhuikan.com/repos/${fn}`;
}
function tagUrl(slug) { return `${TAG_HOST}/tags/${slug}`; }
```

- `tagPillsHTML` :93 的 `${DB}tags/${slug}` → `tagUrl(slug)`
- 前提：`make_entry` :203 给条目加 `shard` 字段

### `site/assets/repo.js`（子域 repo 页）

- `HOME`(:28) → `https://www.zhuikan.com/`；topic pills → `tagUrl(slug)`
- `sameOwnerHTML`/`boardsRowHTML` → 按 `same_owner[].shard` 出 `shard_url` 同逻辑
- **langToggle → 跳语言版本**：读 `<link hreflang>` 导航到对应 host
- README/news/social/API 走 api-site 绝对地址，零改动

### `site/assets/common.js`

- `zkLoginUrl` return_to 在 `*.zhuikan.com` 下均合法（`ZK_ALLOWED_SUFFIX` 已覆盖）
- langToggle 同上跳版本逻辑
- **遗留**：token 按 origin 隔离 → 子域页首期独立登录；后续可 `#token=` 接力

### `zhuikan-api`（少量）

- `search_items` 加 `shard` 列：`pack_data.py` `SEARCH_SCHEMA` 与
  `app/db.py` `_search_schema()` **同步改**（双写不变量）
- `/me/*`：`sd.` join 出 shard，收藏/点赞列表链接才对

### `site/_redirects`（www）

```
/repos/*  https://zh1.zhuikan.com/repos/:splat  301
/tags/*   https://tag1.zhuikan.com/tags/:splat  301
/data/*   https://api-site.zhuikan.com/data/:splat  301   # 现有，保留
/repo     /  301                                          # 现有，保留
/repo.html / 301                                          # 现有，保留
```

### `.github/workflows/daily-update.yml`

```bash
/tmp/www-site   = site/ 剔除 data/（无 repos/ 了）  → zhuikan (www)
/tmp/shard-zh1  = site-shards/zh1/ + assets/        → zhuikan-zh1
/tmp/shard-en1  = site-shards/en1/ + assets/        → zhuikan-en1
/tmp/shard-tag1 = site-shards/tag1/ + assets/       → zhuikan-tag1
```

- gh-pages 冷备：**只镜像 www 且 `--exclude data/`**（镜像约 ~350MB，
  避免撞 GitHub Pages 1GB 站点上限；子域页镜像无意义）。
- **顺序纪律沿用 `/data-upload` 闸门**：数据先上线，站后发。

## 7. 已知代价（设计时就接受的）

1. **~6.4k URL 一次性 301**：权重≈0 期迁移，损失可忽略；换来架构零特例。
2. **repo/tag 全在子域**：独立 host 权重从零积累；repo 页靠实体名查询
   敏感度可控，tag 页前期起量慢（出生即永久换的）。
3. **内链跨 host**：www→{lang}N/tagN 弱于同域，但实体/标签网在各 host
   内部自成网。
4. **auth 跨 origin**：zhN/enN/tagN 首期独立登录（token 按 origin 隔离）。
5. **SSR≈水合不变量降级**为"结构同构、数字可滞后"，`snapshot_at` 兜底。
6. **每仓 2 份产物**：构建时间约 ×2；上传被 write-if-changed + 内容戳兜住。

## 8. 实施（一次性上线，无灰度）

站新、流量低、可容忍停机 → 不分窗口，一个分支全做，一次 CI run 全量切换：

| 步 | 内容 | 验收 |
|---|---|---|
| 1 控制台 | 三项目绑定子域 ✓（已完成：zh1/en1/tag1 → zhuikan-zh1/en1/tag1）；确认 `CLOUDFLARE_API_TOKEN` 有 Pages:Edit | wrangler deploy 不 401 |
| 2 代码 | P0(内容戳+write_if_changed)→ 分片/双语/增量全套 → 本地跑 rank.py 验证产物 | `site-shards/{zh1,en1,tag1}` 产物正确；连续构建 diff 为空 |
| 3 文案 | `SSR_REPO_LABELS` 英文稿 + meta desc/keywords 双语 → **人工过目** | en 页无中文残留 |
| 4 上线 | 合并 → CI 首跑自动播种 shards + 全量基线渲染 → 4 host 上线 + 两条 301 | 各形态 URL 200/text/html；`/repos/*`、`/tags/*` 301 正确落点 |
| 5 收尾 | GSC Domain 属性覆盖 ✓（子域自动收）；百度按 host 验证（若用）；llms.txt | 抽查 SERP/收录 |

回滚预案：revert + 重部署（停机可容忍期，不需要复杂预案）。

## 9. 不做什么

- **不搞哈希分片**；不搞 Worker 反代（计费 + 无必要）；不在 www 留 repo 页；
- 不迁 `data/*.json`；不动采集链路、auth 后端、审核 worker；
- www 列表页（index/b/langs）维持 `_bi()` 单 URL 双语，不拆路径；
- **tags 不做动态化**（不在 VPS/FastAPI 渲染）——快照列表静态可覆盖；
  tag1 装满开 tag2，机制同 repo_shards；
- langs 页（15 页、LANG_TOP 封顶）留 www，永不单独分片。
