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

# 以 root cron 在用户属主的 worktree 里跑 git：-c safe.directory 绕过
# dubious-ownership 检查；合并后把 .git 属主改回目录属主，避免污染。
GIT=(git -c "safe.directory=$ROOT")

if "${GIT[@]}" fetch --quiet origin main 2>/dev/null; then
    if ! "${GIT[@]}" merge --ff-only FETCH_HEAD >/dev/null 2>&1; then
        # 本地有未推送提交/分歧 → rebase；冲突则回滚，带病运行
        if ! "${GIT[@]}" rebase --quiet FETCH_HEAD >/dev/null 2>&1; then
            "${GIT[@]}" rebase --abort >/dev/null 2>&1
            echo "[cron_wrap] update skipped (diverged), run anyway" >&2
        fi
    fi
    [ "$(id -u)" -eq 0 ] && \
        chown -R "$(stat -c %U:%G "$ROOT")" "$ROOT/.git" 2>/dev/null
else
    echo "[cron_wrap] git fetch failed, run anyway" >&2
fi
exec "$@"
