# 07 — 离线救援通道（Rescue Runner）

GitHub Actions 的数据中心 IP 抓 `github.com/trending` 经常 504 限流，而家庭/
办公网络（住宅 IP）抓同一页面完全正常。救援通道让 CI 抓取失败时自动"摇人"：
服务器上的 cron 脚本接力完成采集、推送数据并触发部署。

## 消息流（issue 驱动）

```
CI daily-update
  └─ collect.py 结束 → 写 run_status.json（trending 页成功/失败计数）
  └─ ci_rescue.py 读状态：
        全败 → 无 open `rescue` issue 则新开（含 TRR-STATE 状态块）；已有则评论"仍在失败"
        正常 → 有 open `rescue` issue 则评论"已恢复"并关闭（自愈）

服务器 cron（每小时）
  └─ rescue.py
        读 is:open label:rescue 最新 issue → 解析 TRR-STATE
        attempts < max  → git sync → collect → rank → commit+push
                        → dispatch deploy_only → 评论成功 → rescue-done → close
        每次失败        → 评论日志尾部 + attempts+1（更新 body 状态块）
        attempts ≥ max  → rescue-failed 标签 + close（不再重试）
```

## Issue 约定

- **标签**：`rescue`（待救）/ `rescue-done`（成功）/ `rescue-failed`（放弃），脚本自动创建
- **状态**：body 顶部 `<!--TRR-STATE {...}-->`，字段
  `type / date / run_id / run_url / trending_fails / attempts / max_attempts`
- **日志**：每次救援尝试的结果都以 issue 评论追加，可完整审计

## 服务器部署

1. 准备专用克隆（脚本会 `git reset --hard origin/main`，**不能**用有未提交改动的目录）：

   ```bash
   git clone https://github.com/awesome-market/trending-rank-radar /opt/trr-rescue
   ```

2. 创建 fine-grained PAT（GitHub → Settings → Developer settings →
   Personal access tokens → Fine-grained），仅授权本仓库，权限：

   | 权限 | 用途 |
   |---|---|
   | Issues: Read and write | 读/评论/改状态/打标签/关闭 issue |
   | Contents: Read and write | `git push` 数据提交 |
   | Actions: Read and write | 触发 `deploy_only` 部署 |

3. 配置 cron（每小时）：

   ```cron
   0 * * * * GITHUB_TOKEN=github_pat_xxx /usr/bin/python3 /opt/trr-rescue/scripts/rescue.py >> /opt/trr-rescue/rescue.log 2>&1
   ```

   可选环境变量：`TRR_REPO`、`TRR_WORKDIR`（默认脚本所在仓库根）、
   `TRR_SITE_BASE`（默认 `https://zhuikan.com`）。

4. 验证：手动跑一次 `GITHUB_TOKEN=... python3 /opt/trr-rescue/scripts/rescue.py`，
   无 open rescue issue 时输出 `idle` 即正常。

## 注意

- PAT 只放在服务器的 cron 环境/secret 管理里，**不要写进仓库**。
- 一次救援 ≈ 完整 daily-update 采集（非扩展时段约 3–8 分钟；UTC 14 点档含
  扩展字段约 15–20 分钟）。hourly cron 加 fcntl 锁，重叠时自动跳过。
- 榜单在 trending 挂掉期间仍可运转（watchlist + Search API），救援通道
  恢复的是"当日新冒头仓库"的发现能力。
