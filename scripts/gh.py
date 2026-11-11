#!/usr/bin/env python3
"""GitHub API client for trending-rank-radar.

Standard library only. Provides:
  - trending page scraping (github.com/trending HTML)
  - Search API repository queries
  - GraphQL batched metric queries
  - REST fallback for single repos

Used by collect.py. All requests carry timeout + exponential-backoff retry.
"""
from __future__ import annotations

import http.client
import json
import os
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from html.parser import HTMLParser

API = "https://api.github.com"
GRAPHQL_URL = API + "/graphql"
TRENDING_URL = "https://github.com/trending"

USER_AGENT = "trending-rank-radar/0.1 (+https://github.com/awesome-market/trending-rank-radar)"

# github.com/trending/{slug} 支持的语言页（单词 slug，避免 +/% 编码问题）
TRENDING_LANGUAGES = [
    "python", "javascript", "typescript", "go", "rust", "java",
    "php", "ruby", "swift", "kotlin", "c", "shell", "html", "vue",
]

# Core fields: cheap scalars + small connections — safe for large batches.
GRAPHQL_CORE_FIELDS = """
stargazerCount
forkCount
isFork
isArchived
createdAt
pushedAt
updatedAt
description
homepageUrl
primaryLanguage { name }
"""

# Extended fields: connection counts + repo detail objects — expensive,
# fetched once daily (see collect.py). Detail objects feed the repo page.
GRAPHQL_EXTENDED_FIELDS = """
watchers(first: 1) { totalCount }
repositoryTopics(first: 15) { nodes { topic { name } } }
issues(first: 1) { totalCount }
pullRequests(first: 1) { totalCount }
releases(first: 1) { totalCount }
openIssues: issues(first: 1, states: OPEN) { totalCount }
closedIssues: issues(first: 1, states: CLOSED) { totalCount }
openPrs: pullRequests(first: 1, states: OPEN) { totalCount }
closedPrs: pullRequests(first: 1, states: CLOSED) { totalCount }
mergedPrs: pullRequests(first: 1, states: MERGED) { totalCount }
owner { avatarUrl login }
licenseInfo { spdxId name }
discussions(first: 1) { totalCount }
latestRelease { name tagName publishedAt description }
hotIssues: issues(first: 8, states: OPEN, orderBy: {field: COMMENTS, direction: DESC}) {
  nodes { number title createdAt comments { totalCount } }
}
latestDiscussions: discussions(first: 8, orderBy: {field: CREATED_AT, direction: DESC}) {
  nodes { number title createdAt comments { totalCount } category { name } }
}
readme: object(expression: "HEAD:README.md") { ... on Blob { text } }
readmeZh1: object(expression: "HEAD:README.zh-CN.md") { ... on Blob { text } }
readmeZh2: object(expression: "HEAD:README_zh-CN.md") { ... on Blob { text } }
readmeZh3: object(expression: "HEAD:README-zh_CN.md") { ... on Blob { text } }
readmeZh4: object(expression: "HEAD:README.zh_CN.md") { ... on Blob { text } }
readmeZh5: object(expression: "HEAD:README_zh.md") { ... on Blob { text } }
readmeZh6: object(expression: "HEAD:README-zh.md") { ... on Blob { text } }
readmeZh7: object(expression: "HEAD:README_CN.md") { ... on Blob { text } }
"""

# Chinese-localized README conventions, most-preferred (simplified) first
README_ZH_ALIASES = ("readmeZh1", "readmeZh2", "readmeZh3", "readmeZh4",
                     "readmeZh5", "readmeZh6", "readmeZh7")


class HttpError(RuntimeError):
    pass


def _request(url: str, *, method: str = "GET", payload: dict | None = None,
             token: str | None = None, timeout: int = 30,
             retries: int = 3) -> tuple[int, dict, bytes]:
    """HTTP request with retry on 403/429/5xx/network errors. Returns (status, headers, body)."""
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "application/vnd.github+json",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    data = None
    if payload is not None:
        data = json.dumps(payload).encode("utf-8")
        headers["Content-Type"] = "application/json"

    delay = 2.0
    last_err: Exception | None = None
    for attempt in range(retries):
        req = urllib.request.Request(url, data=data, headers=headers, method=method)
        try:
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return resp.status, dict(resp.headers), resp.read()
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code in (403, 429, 500, 502, 503, 504):
                retry_after = e.headers.get("Retry-After") if e.headers else None
                try:
                    wait = float(retry_after) if retry_after else delay
                except ValueError:
                    wait = delay
                time.sleep(min(max(wait, 1.0), 60.0))
                delay *= 2
                continue
            # 404 etc: not retryable
            raise HttpError(f"HTTP {e.code} for {url}: {e.read()[:300]!r}") from e
        except (urllib.error.URLError, TimeoutError, ConnectionError, OSError,
                http.client.HTTPException) as e:
            last_err = e
            time.sleep(delay)
            delay *= 2
    raise HttpError(f"request failed after {retries} attempts: {url}: {last_err}")


class TrendingParser(HTMLParser):
    """Parse github.com/trending HTML.

    Current markup (2026): <article class="Box-row"> per repo.
    - repo link: <h2 ...><a href="/owner/repo">
    - description: <p class="col-9 ...">
    - language: <span itemprop="programmingLanguage">
    - stars/forks totals: <a href="/owner/repo/stargazers|forks">
    - "N stars today" plain text inside the article
    """

    REPO_HREF = re.compile(r"^/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)/?$")
    TODAY_RE = re.compile(r"([\d,]+)\s+stars\s+today", re.I)
    NUM_RE = re.compile(r"[\d,]+")
    # void elements never get end tags — counting them in capture depth
    # would leak the capture past the closing tag and swallow the rest
    # of the article's text into the field
    VOID_TAGS = frozenset(
        "area base br col embed hr img input link meta source track wbr".split())

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.items: list[dict] = []
        self._cur: dict | None = None
        self._capture: str | None = None
        self._cap_tag: str | None = None
        self._cap_depth = 0
        self._cap_buf: list[str] = []
        self._in_h2 = False

    # -- helpers ---------------------------------------------------------
    def _start_capture(self, field: str, tag: str) -> None:
        self._capture = field
        self._cap_tag = tag
        self._cap_depth = 1
        self._cap_buf = []

    def _finish_capture(self) -> None:
        if self._cur is None or self._capture is None:
            self._capture = None
            return
        text = "".join(self._cap_buf).strip()
        if self._capture == "language":
            self._cur["language"] = text or None
        elif self._capture in ("stars", "forks"):
            m = re.search(r"[\d,]+", text)
            val = None
            if m:
                try:
                    val = int(m.group(0).replace(",", ""))
                except ValueError:
                    val = None
            self._cur[self._capture] = val
        else:
            self._cur[self._capture] = text or None
        self._capture = None
        self._cap_tag = None
        self._cap_buf = []

    # -- parser callbacks --------------------------------------------------
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        cls = a.get("class", "") or ""

        if self._capture:
            if tag not in self.VOID_TAGS:
                self._cap_depth += 1
            return

        if tag == "article" and "Box-row" in cls.split():
            self._cur = {
                "full_name": None, "description": None, "language": None,
                "stars": None, "forks": None, "stars_today": None,
            }
            self._in_h2 = False
            return
        if self._cur is None:
            return

        if tag == "h2":
            self._in_h2 = True
        elif self._in_h2 and tag == "a":
            m = self.REPO_HREF.match(a.get("href", "") or "")
            if m:
                self._cur["full_name"] = f"{m.group(1)}/{m.group(2)}"
                self._in_h2 = False
        elif tag == "p" and "col-9" in cls.split():
            self._start_capture("description", "p")
        elif tag == "span" and a.get("itemprop") == "programmingLanguage":
            self._start_capture("language", "span")
        elif tag == "a":
            href = a.get("href", "") or ""
            if href.endswith("/stargazers"):
                self._start_capture("stars", "a")
            elif href.endswith("/forks"):
                self._start_capture("forks", "a")

    def handle_startendtag(self, tag, attrs):
        # self-closing tags don't affect capture depth
        pass

    def handle_endtag(self, tag):
        if self._cur is None:
            return
        if self._capture:
            self._cap_depth -= 1
            if self._cap_depth <= 0:
                self._finish_capture()
            return
        if tag == "article":
            if self._cur.get("full_name"):
                self.items.append(self._cur)
            self._cur = None
            self._in_h2 = False
        elif tag == "h2":
            self._in_h2 = False

    def handle_data(self, data):
        if self._capture:
            self._cap_buf.append(data)
            return
        if self._cur is not None and self._cur.get("stars_today") is None:
            m = self.TODAY_RE.search(data)
            if m:
                try:
                    self._cur["stars_today"] = int(m.group(1).replace(",", ""))
                except ValueError:
                    pass


class GitHubClient:
    def __init__(self, token: str | None = None, timeout: int = 30):
        self.token = token or os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
        self.timeout = timeout
        self.last_graphql_errors: list | None = None

    # -- low level ---------------------------------------------------------
    def _http(self, url: str, *, method: str = "GET", payload: dict | None = None,
              retries: int = 3) -> tuple[dict, bytes]:
        status, headers, body = _request(
            url, method=method, payload=payload, token=self.token, timeout=self.timeout,
            retries=retries,
        )
        return headers, body

    def _json(self, url: str, *, method: str = "GET", payload: dict | None = None) -> dict:
        _, body = self._http(url, method=method, payload=payload)
        if not body:
            return {}
        return json.loads(body.decode("utf-8"))

    # -- trending ----------------------------------------------------------
    def trending(self, language: str | None = None, since: str = "daily") -> list[dict]:
        url = TRENDING_URL
        path = ""
        if language:
            path += "/" + urllib.parse.quote(language, safe="")
        qs = f"?since={urllib.parse.quote(since)}" if since else ""
        # Single attempt: trending is best-effort discovery, and a 5xx on
        # github.com from a datacenter IP won't resolve inside one run —
        # retrying just burns minutes per language page.
        _, body = self._http(url + path + qs, retries=1)
        parser = TrendingParser()
        parser.feed(body.decode("utf-8", "replace"))
        return parser.items

    # -- search -------------------------------------------------------------
    def search_repositories(self, query: str, pages: int = 1, per_page: int = 100,
                            sort: str = "stars", sleep: float = 2.2) -> list[dict]:
        """REST search/repositories. GitHub caps deep pagination at 1000 results."""
        out: list[dict] = []
        for page in range(1, pages + 1):
            if page * per_page > 1000:
                break
            qs = urllib.parse.urlencode({
                "q": query, "sort": sort, "order": "desc",
                "per_page": per_page, "page": page,
            })
            data = self._json(f"{API}/search/repositories?{qs}")
            items = data.get("items") or []
            out.extend(items)
            if len(items) < per_page:
                break
            if page < pages:
                time.sleep(sleep)
        return out

    # -- graphql ------------------------------------------------------------
    def graphql(self, query: str, variables: dict | None = None) -> dict:
        payload = {"query": query}
        if variables:
            payload["variables"] = variables
        data = self._json(GRAPHQL_URL, method="POST", payload=payload)
        self.last_graphql_errors = data.get("errors")
        if self.last_graphql_errors and not data.get("data"):
            raise HttpError(f"GraphQL errors: {json.dumps(self.last_graphql_errors)[:500]}")
        return data

    @staticmethod
    def _node_to_metrics(node: dict) -> dict:
        lang = node.get("primaryLanguage") or {}
        out = {
            "stars": node.get("stargazerCount"),
            "forks": node.get("forkCount"),
            "watchers": None,
            "issues_total": None,
            "prs_total": None,
            "releases_total": None,
            "issues_open": None,
            "issues_closed": None,
            "prs_open": None,
            "prs_closed": None,
            "prs_merged": None,
            "created_at": node.get("createdAt"),
            "pushed_at": node.get("pushedAt"),
            "updated_at": node.get("updatedAt"),
            "language": lang.get("name"),
            "is_fork": node.get("isFork"),
            "is_archived": node.get("isArchived"),
            "description": node.get("description"),
            "homepage": node.get("homepageUrl"),
            # no "topics" key on the core pass — absent means "not fetched",
            # so collect.py can carry the stored list forward; only the
            # daily extended pass reports the real (possibly empty) list
        }
        # extended connection fields (present only when fetched)
        if "watchers" in node:
            out["watchers"] = ((node.get("watchers") or {}).get("totalCount"))
        if "issues" in node:
            out["issues_total"] = ((node.get("issues") or {}).get("totalCount"))
        if "pullRequests" in node:
            out["prs_total"] = ((node.get("pullRequests") or {}).get("totalCount"))
        if "releases" in node:
            out["releases_total"] = ((node.get("releases") or {}).get("totalCount"))
        for alias, key in (("openIssues", "issues_open"),
                           ("closedIssues", "issues_closed"),
                           ("openPrs", "prs_open"),
                           ("closedPrs", "prs_closed"),
                           ("mergedPrs", "prs_merged")):
            if alias in node:
                out[key] = ((node.get(alias) or {}).get("totalCount"))
        if "repositoryTopics" in node:
            topics = []
            for t in (node.get("repositoryTopics") or {}).get("nodes") or []:
                topic = (t or {}).get("topic") or {}
                if topic.get("name"):
                    topics.append(topic["name"])
            out["topics"] = topics

        # detail objects (repo page) — nested, kept out of snapshot rows
        detail: dict = {}
        if "owner" in node:
            detail["avatar"] = ((node.get("owner") or {}).get("avatarUrl"))
        if "licenseInfo" in node:
            li = node.get("licenseInfo") or {}
            detail["license"] = li.get("spdxId") or li.get("name")
        if "discussions" in node:
            detail["discussions_total"] = (node.get("discussions") or {}).get("totalCount")
        if node.get("latestRelease"):
            lr = node["latestRelease"]
            detail["latest_release"] = {
                "name": lr.get("name"), "tag": lr.get("tagName"),
                "published_at": lr.get("publishedAt"),
                "body": (lr.get("description") or "")[:4000],
            }
        if "hotIssues" in node:
            detail["hot_issues"] = [
                {"number": i.get("number"), "title": i.get("title"),
                 "comments": (i.get("comments") or {}).get("totalCount"),
                 "created_at": i.get("createdAt")}
                for i in (node.get("hotIssues") or {}).get("nodes") or [] if i
            ]
        if "latestDiscussions" in node:
            detail["discussions"] = [
                {"number": d.get("number"), "title": d.get("title"),
                 "comments": (d.get("comments") or {}).get("totalCount"),
                 "category": ((d.get("category") or {}).get("name")),
                 "created_at": d.get("createdAt")}
                for d in (node.get("latestDiscussions") or {}).get("nodes") or [] if d
            ]
        if "readme" in node:
            text = ((node.get("readme") or {}).get("text") or "")
            detail["readme"] = text[:200000] if text else None
            for alias in README_ZH_ALIASES:
                zh = ((node.get(alias) or {}) or {}).get("text") or ""
                if zh:
                    detail["readme_zh"] = zh[:200000]
                    break
        if detail:
            out["detail"] = detail
        return out

    def _snapshot_query(self, batch: list[str], fields: str) -> dict:
        parts = []
        for j, fn in enumerate(batch):
            owner, _, name = fn.partition("/")
            # GitHub names cannot contain '"' — safe to inline as literals
            parts.append(
                f'r{j}: repository(owner: "{owner}", name: "{name}") {{ {fields} }}'
            )
        query = "query {\n" + "\n".join(parts) + "\n}"
        try:
            resp = self.graphql(query)
        except HttpError:
            return {fn: None for fn in batch}
        data = resp.get("data") or {}
        return {fn: data.get(f"r{j}") for j, fn in enumerate(batch)}

    def snapshot_metrics(self, full_names: list[str], batch_size: int = 50,
                         extended: bool = False) -> dict[str, dict | None]:
        """Batch-fetch metrics via GraphQL repository(owner,name) aliases.

        extended=True adds connection counts (watchers/issues/prs/releases/topics)
        which are ~20x more expensive — use small batches and low frequency.
        Returns {full_name: metrics_dict | None} — None means not found / failed.
        """
        fields = GRAPHQL_CORE_FIELDS + (GRAPHQL_EXTENDED_FIELDS if extended else "")
        results: dict[str, dict | None] = {}
        bs = batch_size if not extended else min(batch_size, 20)
        for i in range(0, len(full_names), bs):
            batch = full_names[i:i + bs]
            nodes = self._snapshot_query(batch, fields)
            for fn, node in nodes.items():
                results[fn] = self._node_to_metrics(node) if node else None
            time.sleep(0.3)
        return results

    # -- rest fallback --------------------------------------------------------
    def repo_rest(self, owner: str, name: str) -> dict | None:
        try:
            r = self._json(f"{API}/repos/{urllib.parse.quote(owner)}/{urllib.parse.quote(name)}")
        except HttpError as e:
            if "HTTP 404" in str(e):
                return None
            raise
        return {
            "stars": r.get("stargazers_count"),
            "forks": r.get("forks_count"),
            "watchers": r.get("subscribers_count") or r.get("watchers_count"),
            # REST open_issues_count includes PRs (GitHub semantics)
            "issues_total": r.get("open_issues_count"),
            "prs_total": None,
            "releases_total": None,
            "issues_open": None,
            "issues_closed": None,
            "prs_open": None,
            "prs_closed": None,
            "prs_merged": None,
            "created_at": r.get("created_at"),
            "pushed_at": r.get("pushed_at"),
            "updated_at": r.get("updated_at"),
            "language": r.get("language"),
            "is_fork": r.get("fork"),
            "is_archived": r.get("archived"),
            "description": r.get("description"),
            "homepage": r.get("homepage"),
            "topics": r.get("topics") or [],
        }
