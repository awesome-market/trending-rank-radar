#!/usr/bin/env python3
"""CI side of the rescue channel — runs in daily-update.yml after collect.

Reads run_status.json written by collect.py:
  - all trending pages failed  -> open (or comment on) a `rescue` issue so the
    off-CI runner picks it up;
  - trending worked            -> close any open `rescue` issue as self-healed.
"""
from __future__ import annotations

import json
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import rescue_lib as rl  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent


def log(msg: str) -> None:
    print(f"[ci-rescue] {msg}", flush=True)


def main() -> int:
    status_path = ROOT / "run_status.json"
    if not status_path.exists():
        log("no run_status.json; nothing to report")
        return 0
    status = json.loads(status_path.read_text(encoding="utf-8"))
    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    if not token:
        log("[warn] no token; skipping issue sync")
        return 0

    rl.ensure_labels(token)
    open_issues = rl.open_rescue_issues(token)
    run_url = (f"{os.environ.get('GITHUB_SERVER_URL', 'https://github.com')}/"
               f"{os.environ.get('GITHUB_REPOSITORY', rl.REPO)}/actions/runs/"
               f"{os.environ.get('GITHUB_RUN_ID', '')}")
    today = status.get("run_at", rl.utcnow())[:10]

    if status.get("trending_pages_ok", 0) == 0:
        state = {
            "type": "trending-rescue",
            "date": today,
            "run_id": os.environ.get("GITHUB_RUN_ID", ""),
            "run_url": run_url,
            "trending_fails": status.get("trending_pages_failed", 0),
            "attempts": 0,
            "max_attempts": rl.MAX_ATTEMPTS,
        }
        human = (
            f"**自动创建**：{today} 的 daily-update 里 `github.com/trending` 全部 "
            f"{state['trending_fails']} 个页面抓取失败（Actions 数据中心 IP 被限流）。\n\n"
            f"- 失败运行：{run_url}\n"
            f"- 等待离线救援：服务器上的 `scripts/rescue.py` 会轮询本 issue，"
            f"补跑采集并推送数据\n"
            f"- 失败重试上限：{state['max_attempts']} 次，超过后标记 `rescue-failed` 不再重试\n\n"
            f"如果本 issue 一直 open 且无人认领，检查救援服务器的 cron 是否在运行。"
        )
        if open_issues:
            iss = open_issues[0]
            rl.comment(token, iss["number"],
                       f"{today}：CI trending 抓取仍然全部失败（{run_url}）。")
            log(f"still failing; commented on #{iss['number']}")
        else:
            iss = rl.create_issue(
                token, f"[rescue] trending fetch failed — {today}",
                rl.render_body(state, human), [rl.LABEL_RESCUE])
            log(f"opened rescue issue #{iss['number']}")
        return 0

    if open_issues:
        for iss in open_issues:
            rl.comment(token, iss["number"],
                       f"{today}：CI trending 抓取已自行恢复（{run_url}），本 issue 关闭。")
            rl.set_labels(token, iss["number"], [rl.LABEL_DONE])
            rl.close_issue(token, iss["number"])
            log(f"CI recovered; closed #{iss['number']}")
    else:
        log(f"trending ok ({status.get('trending_pages_ok')} pages); no open issues")
    return 0


if __name__ == "__main__":
    sys.exit(main())
