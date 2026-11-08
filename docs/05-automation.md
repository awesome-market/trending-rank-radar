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

### `daily-update.yml`（每日两次，含 Pages 部署）

```yaml
name: daily-update
on:
  schedule:
    - cron: '0 2 * * *'         # UTC 02:00 ≈ 北京 10:00
    - cron: '0 14 * * *'        # UTC 14:00 ≈ 北京 22:00（当日"收盘"快照）
  workflow_dispatch:            # 支持手动触发补跑
    inputs:
      at:
        description: '快照时间戳（补跑历史时用，ISO8601 UTC）'
        required: false

permissions:
  contents: write               # 需要提交 data/ 与 site/ 变更
  pages: write                  # deploy-pages 需要
  id-token: write               # deploy-pages OIDC 需要

jobs:
  update:
    runs-on: ubuntu-latest
    # 防止 cron 与手动 dispatch 并发 push 冲突：同组任务排队执行
    concurrency:
      group: daily-update
      cancel-in-progress: false
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.12' }

      - name: Collect snapshot
        run: python scripts/collect.py
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}   # 自动提供
          SNAPSHOT_AT: ${{ inputs.at }}               # 可选：补录历史时间点（ISO8601 UTC）
        # collect.py 默认取当前 UTC 时间生成文件名；SNAPSHOT_AT 非空时覆盖

      - name: Rebuild rankings & site data
        run: python scripts/rank.py --site-base "${{ vars.SITE_BASE }}"
        # vars.SITE_BASE 未设置时为空串，rank.py 使用内置默认值

      - name: Commit data updates
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add data/ site/
          git diff --cached --quiet || git commit -m "data: snapshot $(date -u +%FT%H:%MZ)"
          # 远端可能有新提交（手动 push / 上一次运行），先 rebase 再推
          git pull --rebase origin main && git push

      - uses: actions/upload-pages-artifact@v3
        with: { path: './site' }

      - uses: actions/deploy-pages@v4
```

要点：

- `GITHUB_TOKEN` 在 Actions 内自动可用：**REST core 1000 req/hr、GraphQL 5000 points/hr、Search API 30 req/min**——日更 2 次够用，无需额外 secret（若将来加 PAT，限额提升至 REST 5000/hr）。
- `collect.py` **自行取运行时间戳**（或读 `SNAPSHOT_AT` 环境变量）生成 `YYYY-MM-DDTHH.json` 文件名，不传日期参数，避免同日两次运行撞名；`workflow_dispatch` 的 `at` 输入仅用于补录历史时间点。
- 数据与站点产物**直接提交回 main**，仓库本身就是数据档案（可被 Clone / API 下载，天然开源）。
- 幂等性：同一 CST 日第二次运行生成新时间戳文件，`rank.py` 按"当天最后一次"归日；重跑不覆盖已有文件，只会新增/覆盖**同一时间戳**的文件。

### Pages 部署：方案 A（Actions，唯一推荐）

仓库 Settings → Pages → Source 选 **GitHub Actions**。`daily-update.yml` 末尾已包含 `upload-pages-artifact` + `deploy-pages` 两步，构建产物即 `./site` 目录。

> **为什么不用分支目录部署（方案 B）**：GitHub Pages 的"从分支部署"只允许 `/`（根）或 `/docs` 两个目录，`/site` 无法选择；且 `/docs` 已被本文档占用。Actions 部署不受此限，且与数据提交解耦、有独立部署状态。故 v1 直接采用方案 A。

### 自定义域名

站点绑定 `zhuikan.com`（apex 为规范域），`www.zhuikan.com` 由 DNS 侧 301 到 apex：

- **`site/CNAME`** 文件内容 `zhuikan.com`，随 `./site` artifact 一起发布——Actions 部署下 CNAME 必须存在于 artifact 根，否则部署后绑定丢失；文件入库也使配置可审计。
- DNS：apex 指向 GitHub Pages（`185.199.108-111.153` A 记录或经 Cloudflare 代理），`www` CNAME 到 `awesome-market.github.io` 并在 CDN 层做 www→apex 跳转。
- HTTPS：Pages 对自定义域名自动签发证书（Enforce HTTPS 开启）。
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
| 全量重建（历史回填校验） | 每周 1 次（可选） | 校验历史快照完整性 |

若日后想降为 1 次/日，删掉一条 cron 即可，数据模型无需改动。

## 失败与告警

- 连续 2 天快照失败 → workflow 失败会体现在 Actions 记录；可选加一个 step 在失败时 commit 一个 `data/health.json` 供前端展示"数据更新于 X 前"。
- 前端 `index.json.generated_at` / `snapshot_days` 已能让用户感知数据新鲜度，v1 不做额外告警渠道。
