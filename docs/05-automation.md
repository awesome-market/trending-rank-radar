# 05 仓库结构与自动化部署

## 仓库目录结构

```
trending-rank-radar/
├── docs/                  # 本文档目录
├── scripts/               # Python 3 标准库，零第三方依赖
│   ├── gh.py              # GitHub API 客户端（trending/search/graphql/rest + 重试）
│   ├── collect.py         # Discovery + 快照主流程
│   ├── rank.py            # 快照 → 八榜 + 日/月/年聚合 → site/data/*.json
│   └── build.py           # （可选）HTML 模板渲染；v1 可由 rank.py 直接产出
├── site/                  # 生成的静态站（Pages 部署源，Actions artifact）
│   ├── index.html
│   ├── assets/
│   └── data/              # 生成物，不手改
├── data/                  # 采集数据（提交进 git，构成历史档案）
│   ├── snapshots/YYYY-MM-DDTHH.json
│   ├── watchlist.json
│   └── repos/*.json
├── .github/workflows/
│   └── daily-update.yml
└── README.md
```

## GitHub Actions 工作流

### `daily-update.yml`（每日两次 + 周日回填，含部署）

实际 workflow 的关键步骤（以仓库 `.github/workflows/daily-update.yml` 为准，此处为结构摘录）：

```yaml
on:
  schedule:
    - cron: '0 2 * * *'         # UTC 02:00 ≈ 北京 10:00
    - cron: '0 14 * * *'        # UTC 14:00 ≈ 北京 22:00（当日"收盘"快照）
    - cron: '0 8 * * 0'         # 周日：news.py --all 全量回填
  workflow_dispatch:            # inputs: at（补录时间戳）/ deploy_only（只发布 site/）

permissions: { contents: write }   # 只需提交 data/ 与 site/；wrangler 用 token 不走 OIDC

jobs:
  update:
    concurrency: { group: daily-update, cancel-in-progress: false }
    steps:
      - checkout
      - setup-python (3.12)
      - Unit tests              # python -m unittest discover -s tests（deploy_only 跳过）
      - Collect snapshot        # collect.py；GITHUB_TOKEN + SNAPSHOT_AT
      - Fetch repo news         # news.py --all（周日）/ --board；continue-on-error
      - Report trending status  # ci_rescue.py → rescue issue（deploy_only 跳过）
      - Rebuild rankings        # rank.py --site-base $SITE_BASE
      - Commit data updates     # add data/ site/ → commit → pull --rebase → push；
                                #   rebase 冲突取远端版本重跑 rank；干净 rebase 但
                                #   data/ 有上游变更时也重跑 rank 保证 site/ 一致
      - Push gh-pages backup    # site/ → gh-pages 分支（冷备镜像，非主部署）
      - Deploy Cloudflare Pages # wrangler pages deploy ./site --project-name=zhuikan；
                                #   部署前校验 /tmp/ghp-site/index.html 存在
      - Cache-bust              # 产物内 ?v=<sha> 由提交时 sed 写入
```

要点：

- `GITHUB_TOKEN` 在 Actions 内自动可用：**REST core 1000 req/hr、GraphQL 5000 points/hr、Search API 30 req/min**——日更 2 次够用，无需额外 secret。
- `workflow_dispatch` 输入：`at` 补录历史快照时间戳；`deploy_only` 跳过采集/重建/提交直接发布 `site/`（救援通道与纯 UI 改动用，~90 秒）。
- Collect 后 `ci_rescue.py` 读 `run_status.json`：trending 全败则开 `rescue` issue 交给离线救援通道（[07-rescue.md](07-rescue.md)）；`rescue-report.yml` 是救援服务器回写 issue 的中继工作流（bot 身份）。
- "Commit data updates" 的 `git pull --rebase` 带自愈：生成文件冲突时取远端版本重跑 `rank.py`；干净 rebase 但 `data/` 有上游新快照时同样重建 `site/`。
- 数据与站点产物**直接提交回 main**，仓库本身就是数据档案。
- 幂等性：同一 CST 日第二次运行生成新时间戳文件，`rank.py` 按"当天最后一次"归日。

### 部署：Cloudflare Pages 主 + gh-pages 冷备

- **主部署**：`wrangler pages deploy ./site --project-name=zhuikan`，`zhuikan.com` 走 Cloudflare。
- **冷备**：`site/` 每轮推 `gh-pages` 分支 → `awesome-market.github.io/trending-rank-radar/` 镜像。`deploy-pages` 自带构建有 **10 分钟文件同步上限**，本站 ~万级 repo 页会间歇超时——不影响主站，仅镜像可能滞后。

### 自定义域名

站点绑定 `zhuikan.com`（apex 为规范域），`www.zhuikan.com` 由 DNS 侧 301 到 apex：

- Cloudflare Pages 项目 `zhuikan` 绑定 apex 域；证书由 CF 自动签发。
- **`site/CNAME`** 仍保留 `zhuikan.com`——gh-pages 冷备镜像的 GitHub Pages 绑定需要它（从分支部署时 CNAME 必须存在于发布目录）。
- `sitemap.xml` / OG 绝对 URL 用 `rank.py --site-base`（默认 `https://zhuikan.com`，可用仓库变量 `SITE_BASE` 覆盖）。
- `awesome-market.github.io/trending-rank-radar/` 子路径仍可用作镜像——前端全部相对路径，两种形态兼容。

## 定时策略

**每日 2 次**（UTC 02:00 / 14:00 ≈ 北京 10:00 / 22:00），理由：

1. **冗余**：Actions cron 高负载会延迟甚至跳过，2 次/日至少保证一份完整快照
2. **口径更准**：22:00（北京）快照作为当日"收盘值"，日增接近真实全天涨幅；凌晨单次快照相当于拿"昨天深夜"当"今天"
3. **成本可忽略**：GraphQL ~300 points/次，2 次也远低于限额；公开仓库 Actions 免费
4. 数据文件按运行时刻命名（`YYYY-MM-DDTHH.json`），`rank.py` 按北京时间分组取末次，对榜单逻辑透明；为未来日内趋势图留数据基础

| 任务 | 频率 | 说明 |
|---|---|---|
| 快照 + 榜单重算 | 每日 2 次 | 每次运行都全量重算（幂等，同一天第二次运行会覆盖/补充当日数据） |
| 新闻采集 | 每日 2 次（`--board`） | 榜上仓库相关新闻；失败不阻塞（continue-on-error） |
| 新闻全量回填 | 每周日 1 次（`--all`） | UTC 08:00，补齐长尾仓库新闻 |
| 全量重建 | 每次运行 | rank.py 本就逐日全量重算——无需单独校验任务 |

若日后想降为 1 次/日，删掉一条 cron 即可，数据模型无需改动。

## 失败与告警

- 连续 2 天快照失败 → workflow 失败会体现在 Actions 记录；可选加一个 step 在失败时 commit 一个 `data/health.json` 供前端展示"数据更新于 X 前"。
- 前端 `index.json.generated_at` / `snapshot_days` 已能让用户感知数据新鲜度，v1 不做额外告警渠道。
