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
import re
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


def run(cmd: list[str], log_tail: list[str], secret: str | None = None,
        **kw) -> None:
    shown = " ".join("https://x-access-token:***@github.com/…"
                     if "x-access-token:" in a else a for a in cmd)
    log("$ " + shown)
    p = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, **kw)
    out = (p.stdout + p.stderr).strip()
    if secret:
        # git error messages echo the remote URL — scrub before the output
        # can reach log_tail -> issue comments (PAT leak).
        out = out.replace(secret, "***")
    log_tail.extend(out.splitlines()[-30:])
    if p.returncode != 0:
        raise RuntimeError(f"{cmd[0]} exited {p.returncode}: {out[-800:]}")


def git_push(token: str, log_tail: list[str]) -> None:
    url = f"https://x-access-token:{token}@github.com/{rl.REPO}.git"
    run(["git", "push", url, "HEAD:main"], log_tail, secret=token)


def attempt(issue: dict, token: str, log_tail: list[str]) -> None:
    state = rl.parse_state(issue.get("body"))
    safe_date = re.sub(r"[^0-9A-Za-z\-:.T]", "", str(state.get("date", "")))[:24]
    env = dict(os.environ, GITHUB_TOKEN=token)
    run(["git", "fetch", "origin", "main"], log_tail)
    run(["git", "checkout", "main"], log_tail)
    run(["git", "reset", "--hard", "origin/main"], log_tail)
    run([sys.executable, "scripts/collect.py"], log_tail, env=env)
    run([sys.executable, "scripts/rank.py", "--site-base", SITE_BASE], log_tail)
    run(["git", "add", "data/", "site/"], log_tail)
    p = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=ROOT,
                       capture_output=True, text=True)
    if p.returncode not in (0, 1):
        raise RuntimeError(f"git diff --cached exited {p.returncode}: "
                           f"{(p.stdout + p.stderr).strip()[-400:]}")
    if p.returncode == 0:
        log("no data changes; nothing to commit")
    else:
        run(["git", "-c", "user.name=trr-rescue[bot]",
             "-c", "user.email=trr-rescue[bot]@users.noreply.github.com",
             "commit", "-m",
             f"data: rescue snapshot {safe_date} "
             f"(issue #{issue['number']})"], log_tail)
        git_push(token, log_tail)
    rl.dispatch_deploy(token)
    log("deploy dispatched (deploy_only=true)")


def report(token: str, n: int, outcome: str, attempt: int = 0,
           max_a: int = rl.MAX_ATTEMPTS, tail: str = "") -> None:
    """Route the issue mutation through rescue-report.yml so it appears as
    github-actions[bot] rather than the rescue token's owner."""
    rl.dispatch(token, "rescue-report.yml", {
        "issue_number": n, "outcome": outcome, "attempt": attempt,
        "max_attempts": max_a, "log_tail": tail[-3000:],
    })


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

        # Defense in depth: the `rescue` label already requires triage perms,
        # but also require the issue to be authored by a trusted actor and to
        # carry the convention type so a mislabeled issue can't trigger runs.
        trusted = ("OWNER", "MEMBER", "COLLABORATOR", "BOT")
        issue = next(
            (i for i in issues
             if i.get("author_association") in trusted
             and rl.parse_state(i.get("body")).get("type") == "trending-rescue"),
            None)
        if not issue:
            log("open rescue issues exist but none match convention/author; skipping")
            return 0
        n = issue["number"]
        state = rl.parse_state(issue.get("body"))
        attempts = int(state.get("attempts") or 0)
        max_a = min(int(state.get("max_attempts") or rl.MAX_ATTEMPTS), rl.MAX_ATTEMPTS)
        if attempts >= max_a:
            log(f"issue #{n} exhausted ({attempts}/{max_a}); marking failed")
            report(token, n, "exhausted", attempts, max_a)
            return 0

        log(f"rescuing issue #{n} (attempt {attempts + 1}/{max_a})")
        report(token, n, "started", attempts + 1, max_a)
        log_tail: list[str] = []
        try:
            attempt(issue, token, log_tail)
        except Exception as e:
            tail = "\n".join(log_tail[-25:]) or "(no output)"
            log(f"FAILED: {e}")
            traceback.print_exc()
            outcome = "exhausted" if attempts + 1 >= max_a else "failed"
            report(token, n, outcome, attempts + 1, max_a, f"{e}\n\n{tail}")
            return 1

        report(token, n, "success", attempts + 1, max_a,
               "\n".join(log_tail[-10:]))
        log(f"issue #{n} rescued; report dispatched")
        return 0


if __name__ == "__main__":
    sys.exit(main())
