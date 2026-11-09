#!/usr/bin/env python3
"""Shared helpers for the trending-rescue channel.

The rescue channel uses GitHub issues as the message bus between CI and an
off-CI "rescue runner" (see docs/07-rescue.md):

  - CI (ci_rescue.py) opens an issue labeled `rescue` when every
    github.com/trending page failed during collection — datacenter IPs get
    rate-limited while residential IPs still work.
  - The rescue runner (rescue.py, cron on a server) polls open `rescue`
    issues, re-runs collection locally, commits the data, dispatches a
    Pages deploy, then closes the issue.

Issue convention
  state lives in a `<!--TRR-STATE {...}-->` comment at the top of the body:
    {"type": "trending-rescue", "date": "...", "run_id": "...",
     "run_url": "...", "trending_fails": N,
     "attempts": 0, "max_attempts": 3}
  `attempts` counts failed rescue runs (maintained by rescue.py via body
  edits); comments carry the human-readable log.
"""
from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import gh  # noqa: E402

REPO = os.environ.get("TRR_REPO", "awesome-market/trending-rank-radar")
API = f"https://api.github.com/repos/{REPO}"

LABEL_RESCUE = "rescue"
LABEL_DONE = "rescue-done"
LABEL_FAILED = "rescue-failed"
LABELS = {
    LABEL_RESCUE: ("f9d0c4", "CI trending fetch failed; off-CI rescue requested"),
    LABEL_DONE: ("1a7f37", "Rescue runner completed the fetch and deploy"),
    LABEL_FAILED: ("d1242f", "Rescue runner exhausted its attempts"),
}

STATE_RE = re.compile(r"<!--TRR-STATE (\{.*?\}) -->", re.S)
MAX_ATTEMPTS = 3


def _api(method: str, path: str, token: str, payload: dict | None = None,
         ok: tuple[int, ...] = (200, 201)) -> dict | list | None:
    status, _, body = gh._request(API + path, method=method, payload=payload,
                                  token=token, timeout=30)
    if status not in ok:
        raise gh.HttpError(f"{method} {path} -> HTTP {status}: {body[:300]!r}")
    if not body:
        return None
    return json.loads(body)


def ensure_labels(token: str) -> None:
    existing = {l["name"] for l in (_api("GET", "/labels?per_page=100", token) or [])}
    for name, (color, desc) in LABELS.items():
        if name in existing:
            continue
        try:
            _api("POST", "/labels", token,
                 {"name": name, "color": color, "description": desc})
        except gh.HttpError:
            pass  # 422 = already exists (race); ignore


def open_rescue_issues(token: str) -> list[dict]:
    return _api("GET",
                f"/issues?state=open&labels={LABEL_RESCUE}"
                "&sort=created&direction=desc&per_page=10",
                token) or []


def parse_state(body: str | None) -> dict:
    m = STATE_RE.search(body or "")
    if not m:
        return {}
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError:
        return {}


def render_body(state: dict, human: str) -> str:
    return f"<!--TRR-STATE {json.dumps(state, ensure_ascii=False)} -->\n\n{human}"


def update_state(token: str, number: int, state: dict, human: str) -> None:
    _api("PATCH", f"/issues/{number}", token,
         {"body": render_body(state, human)})


def comment(token: str, number: int, text: str) -> None:
    _api("POST", f"/issues/{number}/comments", token, {"body": text})


def set_labels(token: str, number: int, labels: list[str]) -> None:
    _api("PUT", f"/issues/{number}/labels", token, {"labels": labels})


def close_issue(token: str, number: int) -> None:
    _api("PATCH", f"/issues/{number}", token, {"state": "closed"})


def create_issue(token: str, title: str, body: str,
                 labels: list[str]) -> dict:
    return _api("POST", "/issues", token,
                {"title": title, "body": body, "labels": labels})


def dispatch(token: str, workflow: str, inputs: dict) -> None:
    _api("POST", f"/actions/workflows/{workflow}/dispatches", token,
         {"ref": "main", "inputs": {k: str(v) for k, v in inputs.items()}},
         ok=(204,))


def dispatch_deploy(token: str, workflow: str = "daily-update.yml") -> None:
    dispatch(token, workflow, {"deploy_only": "true"})


def utcnow() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
