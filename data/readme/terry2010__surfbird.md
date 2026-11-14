# Surfbird

<p>
<a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="License"></a>
<a href="https://github.com/terry2010/surfbird/actions/workflows/release.yml"><img src="https://github.com/terry2010/surfbird/actions/workflows/release.yml/badge.svg" alt="release"></a>
<a href="https://hub.docker.com/r/terry2010/surfbird"><img src="https://img.shields.io/badge/docker-terry2010%2Fsurfbird-2496ED.svg" alt="Docker Hub"></a>
</p>

**Kitesurf, self-hosted.** An unofficial Docker distribution of [Cloudflare Kitesurf](https://github.com/cloudflare/kitesurf) — the experimental browser engine built for AI agents.

> Not affiliated with or endorsed by Cloudflare. Kitesurf is Apache-2.0 licensed.

Kitesurf parses HTML, applies CSS, runs page JavaScript and renders screenshots — no Chrome, no browser container — and speaks CDP, so Puppeteer/Playwright connect as usual. Upstream only supports `wrangler dev` locally or deploying to Cloudflare Workers (paid). Surfbird packages it for any VPS.

## Images

| Tag | Contents | Use |
|---|---|---|
| `terry2010/surfbird:raw` | engine only, `:8787` | local / behind your own gateway |
| `terry2010/surfbird:auth` | engine + token auth proxy + optional TLS, `:8080` | one-command, exposed |
| `terry2010/surfbird:latest` | = `:auth` | convenience default |

Images auto-build daily when upstream cuts a new tag; per-tag pins like `terry2010/surfbird:auth-2026.11.8` are also published.

## Quick start

```bash
# raw — engine only, no auth. Bind loopback/internal only!
docker run -d -p 127.0.0.1:8787:8787 terry2010/surfbird:raw

# auth — one command, token + REST actions
docker run -d -p 8080:8080 -e SURFBIRD_TOKEN=$(openssl rand -hex 24) terry2010/surfbird:auth
```

## Usage

**CDP (Puppeteer / Playwright / chrome-devtools-mcp):**

```js
puppeteer.connect({
  browserWSEndpoint: "ws://<host>:8787/devtools/browser",       // raw
  // or auth image:
  browserWSEndpoint: "ws://<host>:8080/devtools/browser",
  headers: { Authorization: "Bearer <token>" },
});
```

**REST (auth image only):**

```bash
curl -H "Authorization: Bearer $TOKEN" \
     -d '{"url":"https://zhuikan.com/repos/terry2010__surfbird","fullPage":true}' \
     http://<host>:8080/screenshot -o page.png

curl -H "Authorization: Bearer $TOKEN" \
     -d '{"url":"https://zhuikan.com/repos/terry2010__surfbird"}' \
     http://<host>:8080/markdown | jq -r .markdown
```

Endpoints: `POST /screenshot | /pdf | /content | /markdown | /evaluate | /batch` (one action over up to `MAX_BATCH_URLS` urls, per-item results), `GET /health`, `GET /openapi.json`.
All other paths transparently proxy to the engine (landing page, `/json/*`, `/rbi/*`).

**JS/TS client:** [`surfbird`](https://www.npmjs.com/package/surfbird) on npm — `new Surfbird(url,{token}).markdown(u)` etc., plus `sb.batch(action, urls)`.

## MCP (Model Context Protocol)

Two ways to plug Surfbird into an MCP-capable agent (Claude Code, Cursor, Windsurf, …):

**A. `surfbird-mcp` — thin wrapper (recommended).** Exposes our REST actions as MCP tools — including `surf_markdown` and `surf_batch`, which stock browser MCPs don't have:

```json
{
  "mcpServers": {
    "surfbird": {
      "command": "npx",
      "args": ["-y", "surfbird-mcp"],
      "env": {
        "SURFBIRD_URL": "http://<host>:8080",
        "SURFBIRD_TOKEN": "<token>"
      }
    }
  }
}
```

Tools: `surf_markdown` `surf_content` `surf_screenshot` `surf_pdf` `surf_evaluate` `surf_batch` `surf_health`.

**B. `chrome-devtools-mcp` — full CDP surface.** Points straight at the proxied WebSocket (`/devtools/browser` passes through with Bearer auth) — more tools, more moving parts. See upstream docs; if your client can't send custom WS headers, run a `raw` image on a private network instead.

**No MCP at all?** The REST layer is agent-friendly on its own — [`skills/surfbird/SKILL.md`](skills/surfbird/SKILL.md) is a drop-in skill that teaches any agent to drive it with `curl`.

## Examples

[`examples/`](examples/) — zero-dep Python client (`rss_to_markdown.py` builds a feed→markdown digest for LLM daily reports) and bash/curl scripts.

## Env

| Var | Default | Meaning |
|---|---|---|
| `SURFBIRD_TOKEN` | — | bearer token. **auth mode refuses to start without it** |
| `SURFBIRD_PORT` | 8080 | proxy listen port |
| `TLS_CERT_PATH` / `TLS_KEY_PATH` | — | mount certs → HTTPS. Want auto-ACME? put Caddy outside |
| `REST_TIMEOUT_MS` | 120000 | per-action timeout |
| `MAX_CONCURRENT_ACTIONS` | 2 | in-flight REST actions cap (each ≈ an engine isolate) |
| `MAX_BATCH_URLS` | 20 | max urls per `/batch` call |
| `ENGINE_READY_TIMEOUT_MS` | 120000 | startup wait for engine before proxy listens |
| `SURFBIRD_MODE` | per target | `raw` / `auth` |

`GET /health` is unauthenticated and returns 200 only when the engine answers — safe for LB probes. If either process dies, the container exits; use `--restart unless-stopped`.

## Building

```bash
# A) full in-image build (needs ~4GB+ RAM, CI machines):
docker build -f Dockerfile --target raw  -t surfbird:raw .
docker build -f Dockerfile --target auth -t surfbird:auth .

# B) from a locally-built checkout (low-resource hosts):
./scripts/smoke-test.sh            # stages a real ctx via tar (symlinks won't work — Docker can't COPY through them)
# or manually:
mkdir -p ctx/kitesurf && tar -C /path/to/kitesurf --exclude='*/node_modules' --exclude='*/.git' -cf - . | tar -C ctx/kitesurf -xf -
cp -r proxy ctx/proxy && cp entrypoint.sh Dockerfile.prebuilt ctx/
docker build -f ctx/Dockerfile.prebuilt ctx -t surfbird:raw
```

Pin upstream: `--build-arg KITESURF_REF=<commit|tag>` (Dockerfile A).
Engine patches: drop `.patch` files into `patches/`, applied after clone.

## Limits (from upstream, not Surfbird's fault)

- Experimental engine (Boa JS) — heavy-JS sites may render imperfectly
- No touch/drag gestures, no video decode, no browser-style file downloads
- DevTools frontend excluded from builds (China-network-safe); use CDP
- Auth image adds a token gate — it is not a hardened multi-tenant boundary

## License

Apache-2.0. Kitesurf © Cloudflare, Inc. See upstream [NOTICE](https://github.com/cloudflare/kitesurf/blob/main/NOTICE).
