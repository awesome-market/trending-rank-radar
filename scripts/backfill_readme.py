#!/usr/bin/env python3
"""One-off backfill: full README (+ Chinese variant) into data/repos/*.json.

Fills detail.readme (always, via GET /readme) and detail.readme_zh (when a
root-level Chinese README exists, detected via GET /contents listing).
Resumable — checkpoint file tracks completed repos; safe to Ctrl-C and re-run.

Usage: GITHUB_TOKEN=... python3 scripts/backfill_readme.py [--limit N]
"""
import base64
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPOS_DIR = ROOT / "data" / "repos"
CKPT = Path("/tmp/readme_backfill_ckpt.json")
API = "https://api.github.com"
TOKEN = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
DELAY = 1.1          # ~3000 calls/hr — well under REST 5000/hr
MAX_README = 200_000

# root-level Chinese README conventions; simplified variants score higher
ZH_PAT = re.compile(r"^readme[._-]*(zh|cn|chinese|zh[-_]?hans|zh[-_]?cn|"
                    r"zh[-_]?tw|zh[-_]?hant)[._-]*\.md$", re.I)
ZH_SIMPLIFIED = re.compile(r"(zh[-_]?(cn|hans)|zh\b|cn\b|chinese)", re.I)


def gh_get(path: str) -> dict | list | None:
    url = f"{API}{path}"
    for attempt in range(4):
        req = urllib.request.Request(url, headers={
            "Authorization": f"Bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "trending-rank-radar-backfill",
            "X-GitHub-Api-Version": "2022-11-28",
        })
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if e.code == 403 and e.headers.get("X-RateLimit-Remaining") == "0":
                reset = int(e.headers.get("X-RateLimit-Reset") or 0)
                wait = max(30, reset - int(time.time()) + 5)
                print(f"[rate] sleeping {wait}s", flush=True)
                time.sleep(wait)
                continue
            if e.code >= 500 and attempt < 3:
                time.sleep(2 ** attempt * 5)
                continue
            print(f"[http {e.code}] {path}", flush=True)
            return None
        except (urllib.error.URLError, TimeoutError):
            if attempt < 3:
                time.sleep(2 ** attempt * 5)
                continue
            print(f"[net] {path}", flush=True)
            return None
    return None


def decode_content(obj: dict | None) -> str | None:
    if not isinstance(obj, dict) or obj.get("encoding") != "base64":
        return None
    try:
        return base64.b64decode(obj.get("content") or "").decode("utf-8", "replace")
    except Exception:
        return None


def pick_zh(entries: list) -> str | None:
    cands = []
    for e in entries or []:
        if e.get("type") != "file":
            continue
        n = e.get("name") or ""
        if ZH_PAT.match(n):
            score = 0 if ZH_SIMPLIFIED.search(n) and not re.search(
                r"tw|hant", n, re.I) else 1
            cands.append((score, n))
    return sorted(cands)[0][1] if cands else None


def main() -> int:
    if not TOKEN:
        print("need GITHUB_TOKEN/GH_TOKEN", file=sys.stderr)
        return 1
    limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 0
    done = set()
    if CKPT.exists():
        done = set(json.loads(CKPT.read_text()))
    files = sorted(REPOS_DIR.glob("*.json"))
    todo = [f for f in files if f.stem not in done]
    print(f"repos={len(files)} done={len(done)} todo={len(todo)}", flush=True)
    ok = zh_found = errs = 0
    for i, f in enumerate(todo):
        if limit and i >= limit:
            break
        full = f.stem.replace("__", "/", 1)
        try:
            meta = json.loads(f.read_text(encoding="utf-8"))
        except Exception:
            meta = {}
        det = meta.setdefault("detail", {})
        changed = False

        rd = gh_get(f"/repos/{full}/readme")
        text = decode_content(rd)
        if text:
            det["readme"] = text[:MAX_README]
            changed = True
            ok += 1

        listing = gh_get(f"/repos/{full}/contents/")
        zh_name = pick_zh(listing) if isinstance(listing, list) else None
        if zh_name:
            zobj = gh_get(f"/repos/{full}/contents/{urllib.parse.quote(zh_name)}")
            zt = decode_content(zobj)
            if zt:
                det["readme_zh"] = zt[:MAX_README]
                changed = True
                zh_found += 1

        if changed:
            f.write_text(json.dumps(meta, ensure_ascii=False), encoding="utf-8")
        done.add(f.stem)
        if (i + 1) % 25 == 0 or i == len(todo) - 1:
            CKPT.write_text(json.dumps(sorted(done)))
            print(f"[{i + 1}/{len(todo)}] ok={ok} zh={zh_found} errs={errs} "
                  f"last={full}", flush=True)
        time.sleep(DELAY)
    CKPT.write_text(json.dumps(sorted(done)))
    print(f"done: readme={ok} zh={zh_found}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
