#!/usr/bin/env bash
# cron_wrap.sh — 计划任务前置自更新：先把 worktree 同步到远端最新代码，
# 再执行真实任务。保证 cron 每次跑的都是最新脚本。
#
# 用法（放在 cron 行最前面）：
#   0 * * * * /data1/service/trending-rank-radar/scripts/cron_wrap.sh python3 scripts/rescue.py >> /data1/log/trending-rank-radar.log 2>&1
#
# 更新失败（断网/分歧冲突）不阻断任务——带病也要跑，数据连续性优先。

set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT" || exit 1

if git fetch --quiet origin main 2>/dev/null; then
    if ! git merge --ff-only FETCH_HEAD >/dev/null 2>&1; then
        # 本地有未推送提交/分歧 → rebase；冲突则回滚，带病运行
        if ! git rebase --quiet FETCH_HEAD >/dev/null 2>&1; then
            git rebase --abort >/dev/null 2>&1
            echo "[cron_wrap] update skipped (diverged), run anyway" >&2
        fi
    fi
else
    echo "[cron_wrap] git fetch failed, run anyway" >&2
fi
exec "$@"
