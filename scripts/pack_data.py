#!/usr/bin/env python3
"""Pack site/data/** into a single sqlite blob store: site-data.db.

Why: Cloudflare Pages caps deployments at 20k files and the data tree
(per-repo JSON, README markdown, day/tag feeds) is ~16k files on its own.
CI uploads this file via POST /data-upload on api-site; the frontend then
hydrates from https://api-site.zhuikan.com/data/<path> instead of static
/data/*.json files. gh-pages keeps the full tree as backup.

Schema: one KV table — data(path TEXT PRIMARY KEY, blob BLOB) — plus a
meta table for provenance. Paths are the tree-relative posix names
(repos/owner__name.json, readme/owner__name.md, days/2026-11-12.json, ...).
"""
import os
import sqlite3
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "site" / "data"
OUT = ROOT / "site-data.db"


def main() -> int:
    if not DATA_DIR.is_dir():
        print(f"[pack_data] {DATA_DIR} missing — run rank.py first",
              file=sys.stderr)
        return 1
    rows = [(f.relative_to(DATA_DIR).as_posix(), f.read_bytes())
            for f in sorted(DATA_DIR.rglob("*")) if f.is_file()]
    if not rows:
        print("[pack_data] no files under site/data — aborting",
              file=sys.stderr)
        return 1

    tmp = OUT.with_suffix(".db.tmp")
    if tmp.exists():
        tmp.unlink()
    con = sqlite3.connect(tmp)
    con.execute("CREATE TABLE data(path TEXT PRIMARY KEY, blob BLOB NOT NULL)")
    con.execute("CREATE TABLE meta(k TEXT PRIMARY KEY, v TEXT NOT NULL)")
    con.executemany("INSERT INTO data VALUES(?,?)", rows)
    con.executemany("INSERT INTO meta VALUES(?,?)", [
        ("built_at", datetime.now(timezone.utc).isoformat(timespec="seconds")),
        ("files", str(len(rows))),
    ])
    con.commit()
    con.close()
    os.replace(tmp, OUT)
    mb = OUT.stat().st_size / 1e6
    print(f"[pack_data] {len(rows)} files → {OUT.name} ({mb:.1f} MB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
