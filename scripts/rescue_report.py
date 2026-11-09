#!/usr/bin/env python3
"""CI side of rescue reporting — runs inside rescue-report.yml so issue
mutations carry the github-actions[bot] identity.

Inputs via env: ISSUE_NUMBER, OUTCOME (started|success|failed|exhausted),
ATTEMPT, MAX_ATTEMPTS, LOG_TAIL.
"""
from __future__ import annotations

import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import rescue_lib as rl  # noqa: E402


def log(msg: str) -> None:
    print(f"[rescue-report] {msg}", flush=True)


def main() -> int:
    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    n = int(os.environ["ISSUE_NUMBER"])
    outcome = os.environ["OUTCOME"]
    attempt = int(os.environ.get("ATTEMPT") or 0)
    max_a = int(os.environ.get("MAX_ATTEMPTS") or rl.MAX_ATTEMPTS)
    tail = (os.environ.get("LOG_TAIL") or "").strip()[-3000:]

    rl.ensure_labels(token)
    issue = rl._api("GET", f"/issues/{n}", token)
    body = issue.get("body") or ""
    state = rl.parse_state(body)
    m = rl.STATE_RE.search(body)
    human = body[m.end():].strip() if m else body

    if outcome == "started":
        rl.comment(token, n, f"救援服务器开始第 {attempt} 次尝试…")
        return 0

    state["attempts"] = attempt
    if outcome == "success":
        rl.comment(token, n,
                   "✅ 救援成功：已在离线网络完成采集并推送数据，Pages 部署已触发。"
                   + (f"\n\n```\n{tail}\n```" if tail else ""))
        rl.set_labels(token, n, [rl.LABEL_DONE])
        rl.close_issue(token, n)
        log(f"#{n} success")
        return 0

    if outcome == "failed":
        note = (f"救援已失败 {attempt}/{max_a} 次。"
                + ("下一次 cron 运行会继续重试。" if attempt < max_a
                   else "已达上限。"))
        rl.update_state(token, n, state, f"{note}\n\n{human}" if human else note)
        rl.comment(token, n, f"第 {attempt} 次救援失败：\n\n```\n{tail or '(no output)'}\n```")
        log(f"#{n} failed {attempt}/{max_a}")
        return 0

    if outcome == "exhausted":
        rl.update_state(token, n, state,
                        f"救援已失败 {attempt} 次，达到上限，标记为彻底失败。\n\n{human}")
        rl.comment(token, n, f"救援已失败 {attempt} 次，达到上限，标记为彻底失败，不再重试。")
        rl.set_labels(token, n, [rl.LABEL_FAILED])
        rl.close_issue(token, n)
        log(f"#{n} exhausted")
        return 0

    log(f"unknown outcome {outcome!r}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
