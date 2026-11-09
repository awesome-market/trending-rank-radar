#!/usr/bin/env python3
"""Rescue runner — polls `rescue` issues and re-runs collection off-CI.

Deploy on any machine whose IP can reach github.com/trending (residential
networks are not rate-limited like Actions datacenter IPs). Run hourly via
cron — see docs/07-rescue.md.

Flow per open rescue issue (newest first):
  1. hard-sync the workdir to origin/main  (dedicated clone required!)
  2. python3 scripts/collect.py            (full collection, trending included)
  3. python3 scripts/rank.py               (rebuild site/ generated data)
  4. commit + push to main
  5. dispatch daily-update deploy_only=true (publish site/ as-is)
  6. comment success -> label rescue-done -> close

On failure: comment the log tail, increment `attempts` in the issue state,
and after max_attempts label `rescue-failed` + close (no more retries).

Env:
  GITHUB_TOKEN   fine-grained PAT — issues:rw, contents:rw, actions:rw
  TRR_REPO       default awesome-market/trending-rank-radar
  TRR_WORKDIR    dedicated clone path (default: this script's repo root)
  TRR_SITE_BASE  default https://zhuikan.com
"""
from __future__ import annotations

import fcntl
import json
import os
import subprocess
import sys
import traceback
from datetime import datetime, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import rescue_lib as rl  # noqa: E402

ROOT = Path(os.environ.get("TRR_WORKDIR") or Path(__file__).resolve().parent.parent)
SITE_BASE = os.environ.get("TRR_SITE_BASE", "https://zhuikan.com")
LOCK_PATH = ROOT / ".rescue.lock"


def log(msg: str) -> None:
    print(f"[rescue {datetime.now(timezone.utc).strftime('%H:%M:%S')}] {msg}", flush=True)


def run(cmd: list[str], log_tail: list[str], **kw) -> None:
    log("$ " + " ".join(cmd))
    p = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, **kw)
    out = (p.stdout + p.stderr).strip()
    log_tail.extend(out.splitlines()[-30:])
    if p.returncode != 0:
        raise RuntimeError(f"{cmd[0]} exited {p.returncode}: {out[-800:]}")


def git_push(token: str, log_tail: list[str]) -> None:
    url = f"https://x-access-token:{token}@github.com/{rl.REPO}.git"
    run(["git", "push", url, "HEAD:main"], log_tail)


def attempt(issue: dict, token: str, log_tail: list[str]) -> None:
    state = rl.parse_state(issue.get("body"))
    env = dict(os.environ, GITHUB_TOKEN=token)
    run(["git", "fetch", "origin", "main"], log_tail)
    run(["git", "checkout", "main"], log_tail)
    run(["git", "reset", "--hard", "origin/main"], log_tail)
    run([sys.executable, "scripts/collect.py"], log_tail, env=env)
    run([sys.executable, "scripts/rank.py", "--site-base", SITE_BASE], log_tail)
    run(["git", "add", "data/", "site/"], log_tail)
    p = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=ROOT)
    if p.returncode == 0:
        log("no data changes; nothing to commit")
    else:
        run(["git", "-c", "user.name=trr-rescue[bot]",
             "-c", "user.email=trr-rescue[bot]@users.noreply.github.com",
             "commit", "-m",
             f"data: rescue snapshot {state.get('date', '')} "
             f"(issue #{issue['number']})"], log_tail)
        git_push(token, log_tail)
    rl.dispatch_deploy(token)
    log("deploy dispatched (deploy_only=true)")


def main() -> int:
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if not token:
        log("[fatal] GITHUB_TOKEN/GH_TOKEN not set")
        return 1
    LOCK_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(LOCK_PATH, "w") as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            log("another rescue run in progress; exiting")
            return 0

        rl.ensure_labels(token)
        issues = rl.open_rescue_issues(token)
        if not issues:
            log("no open rescue issues; idle")
            return 0

        issue = issues[0]
        n = issue["number"]
        state = rl.parse_state(issue.get("body"))
        attempts = int(state.get("attempts") or 0)
        max_a = int(state.get("max_attempts") or rl.MAX_ATTEMPTS)
        if attempts >= max_a:
            log(f"issue #{n} exhausted ({attempts}/{max_a}); marking failed")
            rl.comment(token, n, f"救援已失败 {attempts} 次，达到上限，标记为彻底失败。")
            rl.set_labels(token, n, [rl.LABEL_FAILED])
            rl.close_issue(token, n)
            return 0

        log(f"rescuing issue #{n} (attempt {attempts + 1}/{max_a})")
        rl.comment(token, n, f"救援服务器开始第 {attempts + 1} 次尝试…")
        log_tail: list[str] = []
        try:
            attempt(issue, token, log_tail)
        except Exception as e:
            tail = "\n".join(log_tail[-25:]) or "(no output)"
            log(f"FAILED: {e}")
            traceback.print_exc()
            state["attempts"] = attempts + 1
            human = (f"救援已失败 {state['attempts']}/{max_a} 次。"
                     + ("已达上限，本 issue 标记 `rescue-failed`，不再重试。"
                        if state["attempts"] >= max_a else "下一次 cron 运行会继续重试。"))
            rl.update_state(token, n, state, human)
            rl.comment(token, n,
                       f"第 {state['attempts']} 次救援失败：`{e}`\n\n```\n{tail}\n```")
            if state["attempts"] >= max_a:
                rl.set_labels(token, n, [rl.LABEL_FAILED])
                rl.close_issue(token, n)
            return 1

        rl.comment(token, n,
                   "✅ 救援成功：已在离线网络完成采集并推送数据，Pages 部署已触发。\n\n"
                   f"```\n{chr(10).join(log_tail[-10:])}\n```")
        rl.set_labels(token, n, [rl.LABEL_DONE])
        rl.close_issue(token, n)
        log(f"issue #{n} rescued and closed")
        return 0


if __name__ == "__main__":
    sys.exit(main())
