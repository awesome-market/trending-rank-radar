/* GitHub Trending Rank Radar — repo detail page (loads after common.js)
 * Reads data/repos/<owner>__<name>.json. Layout: breadcrumb → side card +
 * info column → trend tabs (day/week/month granularity, Star/Watch/Fork
 * metric) → content tabs (overview / issues / discussions / releases).
 */
'use strict';

const repo = { data: null, metric: 'stars', grain: 'd', ctab: 'ov' };

const GH_ICONS = {
  star: 'M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z',
  fork: 'M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0-1.5.75.75.75 0 0 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z',
  eye: 'M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.671 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.329 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.175 11.758 6.527 12.5 8 12.5c1.473 0 2.824-.742 3.955-1.715 1.125-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.241-1.75-2.366-2.717C10.825 4.242 9.473 3.5 8 3.5c-1.473 0-2.824.742-3.955 1.715C5.744 6.182 4.914 7.311 4.5 7.932ZM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z',
  pr: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z',
  issue: 'M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z',
  tag: 'M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
  ext: 'M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z',
};
function gi(n, s = 14) {
  return `<svg viewBox="0 0 16 16" width="${s}" height="${s}" fill="currentColor" aria-hidden="true"><path d="${GH_ICONS[n]}"/></svg>`;
}

const METRIC_KEYS = ['stars', 'forks', 'watchers', 'prs', 'issues', 'releases', 'discussions'];
const STAT_ICONS = { stars: 'star', forks: 'fork', watchers: 'eye', prs: 'pr', issues: 'issue', releases: 'tag', discussions: 'issue' };
// Static pages under /repos/ set <body data-base="../"> so relative fetches
// and home links still resolve; repo.html leaves it unset.
const DB = document.body.dataset.base || '';
const HOME = DB || './';

function deltaSpan(label) {
  const g = repo.data.growth && repo.data.growth[label];
  if (!g) return '';
  const cls = g.stars >= 0 ? 'up' : 'down', sign = g.stars >= 0 ? '+' : '';
  const key = { day: 'rp.growth.d', week: 'rp.growth.w', month: 'rp.growth.m' }[label];
  return `<span class="rp-delta ${cls}" title="${t(key)}">${sign}${fmtFull(g.stars)}</span>`;
}

/* ---------------- breadcrumb + top block ---------------- */
function crumbHTML(d) {
  return `<nav class="rp-crumb"><a href="${HOME}">${t('rp.crumb.home')}</a>`
    + `<span class="rp-crumb-sep">/</span><a href="${HOME}?board=total">${t('board.total')}</a>`
    + `<span class="rp-crumb-sep">/</span><span class="rp-crumb-cur">${esc(d.full_name)}</span></nav>`;
}

function statsRowHTML(d) {
  const m = d.metrics || {};
  const items = METRIC_KEYS.map(k => {
    const v = m[k];
    if (v == null) return '';
    return `<span class="rp-stat" title="${t('units.' + k)} ${fmtFull(v)}">${gi(STAT_ICONS[k], 13)}<b>${fmt(v)}</b></span>`;
  }).filter(Boolean).join('');
  return items ? `<div class="rp-statrow">${items}</div>` : '';
}

function boardsRowHTML(d) {
  const order = ['new', 'daily', 'daily_rate', 'weekly', 'weekly_rate',
                 'monthly', 'monthly_rate', 'total', 'cumulative'];
  const chips = order.filter(k => (d.boards || {})[k] != null).map(k =>
    `<a class="rp-board-chip" href="${HOME}?board=${k}">${t('board.' + k)} <b>#${d.boards[k]}</b></a>`).join('');
  return chips ? `<div class="rp-board-line">${chips}</div>` : '';
}

function topHTML(d) {
  const avBig = d.avatar ? `${d.avatar}&s=300` : `https://github.com/${d.owner}.png?size=300`;
  const avSm = d.avatar ? `${d.avatar}&s=68` : `https://github.com/${d.owner}.png?size=68`;
  const topics = (d.topics || []).slice(0, 8).map(x =>
    `<a class="rp-topic" href="https://github.com/topics/${encodeURIComponent(x)}" target="_blank" rel="noopener">${esc(x)}</a>`).join('');
  const metaBits = [
    d.language ? `<span class="rp-meta-bit">${langDotInline(d.language)} ${esc(d.language)}</span>` : '',
    d.license ? `<span class="rp-meta-bit">${esc(d.license)}</span>` : '',
    d.created_at ? `<span class="rp-meta-bit">${t('rp.created')} ${esc(String(d.created_at).slice(0, 10))}</span>` : '',
    d.homepage ? `<a class="rp-meta-bit rp-home" href="${esc(d.homepage)}" target="_blank" rel="noopener">⌂ ${esc(d.homepage.replace(/^https?:\/\//, '').slice(0, 40))}</a>` : '',
  ].filter(Boolean).join('');
  return `<div class="rp-top">
  <aside class="rp-side card">
    <img class="rp-side-av" src="${esc(avBig)}" alt="${esc(d.owner)} avatar" width="300" height="300" onerror="this.style.visibility='hidden'">
    <div class="rp-side-body">
      <div class="rp-side-name">${esc(d.name)}</div>
      <a class="rp-side-owner" href="https://github.com/${esc(d.owner)}" target="_blank" rel="noopener">${esc(d.owner)}</a>
      <a class="rp-side-btn" href="${esc(d.url)}" target="_blank" rel="noopener">${gi('ext', 13)} GitHub</a>
      <a class="rp-side-alt" href="${HOME}">${t('rp.back')}</a>
      <div class="rp-side-meta">
        <span>${t('rp.updated')} ${esc((d.snapshot_at || '').slice(0, 10))}</span>
        ${d.created_at ? `<span>${t('rp.created')} ${esc(String(d.created_at).slice(0, 10))}</span>` : ''}
      </div>
    </div>
  </aside>
  <div class="rp-main">
    <div class="rp-main-head">
      <h1 class="rp-htitle">
        <a class="rp-owner" href="https://github.com/${esc(d.owner)}" target="_blank" rel="noopener">${esc(d.owner)}</a>
        <span class="rp-sep">/</span><span class="rp-name">${esc(d.name)}</span>
        <a class="rp-title-ext" href="${esc(d.url)}" target="_blank" rel="noopener" title="${esc(t('rp.view.gh'))}">${gi('ext', 15)}</a>
      </h1>
      <div class="rp-actions">
        <button class="rp-btn rp-btn-acc" id="shareBtn">${gi('ext', 12)} ${t('rp.share')}</button>
        <a class="rp-btn" href="${esc(d.url)}" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>
    ${d.description ? `<p class="rp-desc">${esc(d.description)}</p>` : ''}
    ${statsRowHTML(d)}
    ${topics ? `<div class="rp-topics">${topics}</div>` : ''}
    <div class="rp-meta">${metaBits}</div>
    ${boardsRowHTML(d)}
  </div>
</div>`;
}

function langDotInline(lang) {
  const c = LANG_COLORS[lang] || '#8b949e';
  return `<span class="lang-dot" style="background:${c}"></span>`;
}

/* ---------------- trend: period tabs + metric tabs + chart ---------------- */
function grainSeries(dates, vals, g) {
  const step = g === 'd' ? 1 : g === 'w' ? 7 : 30;
  const dd = [], vv = [];
  for (let i = dates.length - 1; i >= 0; i -= step) { dd.unshift(dates[i]); vv.unshift(vals[i]); }
  const cap = g === 'd' ? 30 : 40;
  return [dd.slice(-cap), vv.slice(-cap)];
}

function ptabsHTML() {
  return `<div class="rp-ptabs" role="tablist">${['d', 'w', 'm'].map(k =>
    `<button class="rp-ptab${repo.grain === k ? ' active' : ''}" data-grain="${k}">${t('rp.grain.' + k)}</button>`).join('')}</div>`;
}

function bigChart(dates, vals) {
  if (!vals || vals.length === 0) return '';
  const w = 1080, h = 320, padL = 56, padR = 18, padT = 18, padB = 34;
  const iw = w - padL - padR, ih = h - padT - padB;
  const nums = vals.map(v => v == null ? null : Number(v));
  const valid = nums.filter(v => v != null);
  if (!valid.length) return '';
  const min = Math.min(...valid), max = Math.max(...valid);
  const span = max - min || Math.max(1, Math.abs(max) * 0.05);
  const yMin = min - span * 0.08, yMax = max + span * 0.08;
  const x = i => padL + (vals.length === 1 ? iw / 2 : iw * i / (vals.length - 1));
  const y = v => padT + ih * (1 - (v - yMin) / (yMax - yMin));

  const grid = [0, 0.5, 1].map(f => {
    const gy = padT + ih * f;
    const gv = yMax - (yMax - yMin) * f;
    return `<line x1="${padL}" y1="${gy}" x2="${w - padR}" y2="${gy}" class="rp-gridline"/>` +
           `<text x="${padL - 8}" y="${gy + 4}" class="rp-axis" text-anchor="end">${fmt(gv)}</text>`;
  }).join('');

  const pts = nums.map((v, i) => v == null ? null : [x(i), y(v)]);
  const segs = [];
  let cur = [];
  pts.forEach(p => { if (p) cur.push(p); else if (cur.length) { segs.push(cur); cur = []; } });
  if (cur.length) segs.push(cur);
  const lines = segs.map(s => s.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' '));
  const first = pts.find(p => p), last = [...pts].reverse().find(p => p);
  const area = first && last && lines.length
    ? `<polygon points="${first[0]},${padT + ih} ${lines[lines.length - 1]} ${last[0]},${padT + ih}" fill="url(#sparkFill)"/>` : '';
  const polylines = lines.map(l => `<polyline points="${l}" fill="none" stroke="url(#sparkStroke)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`).join('');
  const dots = pts.map((p, i) => p
    ? `<circle cx="${p[0]}" cy="${p[1]}" r="3" class="rp-dot"><title>${esc(dates[i])} · ${fmtFull(nums[i])}</title></circle>` : '').join('');
  const xLabels = dates.length
    ? `<text x="${padL}" y="${h - 10}" class="rp-axis">${esc((dates[0] || '').slice(5))}</text>` +
      (dates.length > 1 ? `<text x="${w - padR}" y="${h - 10}" class="rp-axis" text-anchor="end">${esc((dates[dates.length - 1] || '').slice(5))}</text>` : '') : '';
  return `<svg viewBox="0 0 ${w} ${h}" class="rp-chart-svg" role="img">${grid}${area}${polylines}${dots}${xLabels}</svg>`;
}

function trendHTML(d) {
  const avSm = d.avatar ? `${d.avatar}&s=68` : `https://github.com/${d.owner}.png?size=68`;
  const mtabs = [['stars', 'star'], ['watchers', 'eye'], ['forks', 'fork']].map(([k, ic]) =>
    `<button class="rp-mtab${repo.metric === k ? ' active' : ''}" data-metric="${k}">${gi(ic, 13)} ${t('units.' + k)}</button>`).join('');
  return `<section class="rp-trend card">
    <div class="rp-trend-head">
      <img class="rp-th-av" src="${esc(avSm)}" alt="" width="34" height="34" onerror="this.style.visibility='hidden'">
      <div class="rp-th-txt">
        <div class="rp-th-name">${esc(d.full_name)}</div>
        <div class="rp-th-sub">${t('rp.subtitle')}</div>
      </div>
      <button class="rp-btn" id="shareBtn2">${gi('ext', 12)} ${t('rp.share')}</button>
    </div>
    <div class="rp-mtabs">${mtabs}</div>
    <div class="rp-chart" id="rpChart"></div>
  </section>`;
}

function renderChart() {
  const d = repo.data;
  const [dates, vals] = grainSeries(d.history.dates || [], d.history[repo.metric] || [], repo.grain);
  const el = $('#rpChart');
  if (vals.filter(v => v != null).length < 2) {
    el.innerHTML = `<div class="rp-chart-empty">${t('rp.chart.need')} · ${t('rp.updated')} ${esc(d.snapshot_at || '')}</div>`;
    return;
  }
  el.innerHTML = bigChart(dates, vals);
}

/* ---------------- share image ---------------- */
function shareCanvas(d) {
  const cv = document.createElement('canvas');
  cv.width = 1200; cv.height = 630;
  const c = cv.getContext('2d');
  const g = c.createLinearGradient(0, 0, 1200, 630);
  g.addColorStop(0, '#0d1117'); g.addColorStop(1, '#161b26');
  c.fillStyle = g; c.fillRect(0, 0, 1200, 630);
  c.fillStyle = '#58a6ff'; c.font = '600 26px system-ui, sans-serif';
  c.fillText('📡 GitHub Trending Rank Radar', 60, 74);
  c.fillStyle = '#7d8590'; c.font = '20px system-ui, sans-serif';
  c.fillText('zhuikan.com · ' + (d.snapshot_at || '').slice(0, 10), 60, 104);
  c.fillStyle = '#e6edf3'; c.font = '700 56px system-ui, sans-serif';
  c.fillText(d.full_name.length > 34 ? d.full_name.slice(0, 33) + '…' : d.full_name, 60, 190);
  if (d.description) {
    c.fillStyle = '#9da7b3'; c.font = '24px system-ui, sans-serif';
    const txt = d.description.length > 62 ? d.description.slice(0, 61) + '…' : d.description;
    c.fillText(txt, 60, 236);
  }
  const mets = [['stars', d.metrics.stars], ['forks', d.metrics.forks], ['watchers', d.metrics.watchers]];
  mets.forEach(([k, v], i) => {
    const x0 = 60 + i * 300;
    c.fillStyle = '#e6edf3'; c.font = '700 44px system-ui, sans-serif';
    c.fillText(v == null ? '–' : v.toLocaleString('en-US'), x0, 330);
    c.fillStyle = '#7d8590'; c.font = '20px system-ui, sans-serif';
    c.fillText(k, x0, 360);
  });
  const gmap = [['day', d.growth.day], ['week', d.growth.week], ['month', d.growth.month]];
  let cx = 60;
  c.font = '600 22px system-ui, sans-serif';
  gmap.forEach(([k, gv]) => {
    if (!gv) return;
    const s = `${k} ${gv.stars >= 0 ? '+' : ''}${gv.stars.toLocaleString('en-US')}★`;
    const wTxt = c.measureText(s).width + 36;
    c.fillStyle = gv.stars >= 0 ? '#1f6f3f' : '#6e2b2b';
    c.beginPath(); c.roundRect(cx, 390, wTxt, 42, 21); c.fill();
    c.fillStyle = '#d8f3dc'; c.fillText(s, cx + 18, 419);
    cx += wTxt + 14;
  });
  const s = (d.history.stars || []).slice(-30);
  if (s.length > 1) {
    const x0 = 60, y0 = 470, cw = 1080, ch = 120;
    const mn = Math.min(...s), mx = Math.max(...s), sp = mx - mn || 1;
    c.strokeStyle = '#58a6ff'; c.lineWidth = 3; c.lineJoin = 'round';
    c.beginPath();
    s.forEach((v, i) => {
      const px = x0 + cw * i / (s.length - 1), py = y0 + ch * (1 - (v - mn) / sp);
      i ? c.lineTo(px, py) : c.moveTo(px, py);
    });
    c.stroke();
  }
  return cv;
}

function wireShare(d) {
  ['#shareBtn', '#shareBtn2'].forEach(sel => {
    const btn = $(sel);
    if (!btn) return;
    btn.onclick = async () => {
      const cv = shareCanvas(d);
      cv.toBlob(async blob => {
        if (!blob) return;
        try {
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          btn.textContent = t('rp.share.done');
        } catch {
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = `${d.owner}-${d.name}-trend.png`;
          a.click();
        }
        setTimeout(() => { btn.innerHTML = `${gi('ext', 12)} ${t('rp.share')}`; }, 1600);
      }, 'image/png');
    };
  });
}

/* ---------------- content tabs + panels ---------------- */
function ghListItem(base, n, title, extra) {
  return `<a class="rp-item" href="${base}/${n}" target="_blank" rel="noopener">
    <span class="rp-item-num">#${n}</span>
    <span class="rp-item-title">${esc(title)}</span>
    <span class="rp-item-extra">${extra}</span>
  </a>`;
}

function issuesPanel(d) {
  const items = (d.issues || []).slice(0, 8).map(i =>
    ghListItem(`${d.url}/issues`, i.number, i.title,
      `${t('rp.comments', { n: i.comments ?? 0 })} · ${esc((i.created_at || '').slice(0, 10))}`)).join('');
  if (!items) return `<div class="rp-panel-empty">${t('rp.nodata')}</div>`;
  return `<div class="rp-list">${items}</div>
    <a class="rp-more" href="${d.url}/issues" target="_blank" rel="noopener">${t('rp.more')} ↗</a>`;
}

function discPanel(d) {
  const items = (d.discussions || []).slice(0, 8).map(x =>
    ghListItem(`${d.url}/discussions`, x.number, x.title,
      `${x.category ? esc(x.category) + ' · ' : ''}${t('rp.comments', { n: x.comments ?? 0 })} · ${esc((x.created_at || '').slice(0, 10))}`)).join('');
  if (!items) return `<div class="rp-panel-empty">${t('rp.nodata')}</div>`;
  return `<div class="rp-list">${items}</div>
    <a class="rp-more" href="${d.url}/discussions" target="_blank" rel="noopener">${t('rp.more')} ↗</a>`;
}

function releasePanel(d) {
  const r = d.latest_release;
  if (!r) return `<div class="rp-panel-empty">${t('rp.nodata')}</div>`;
  const body = (r.body || '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[#*`>]/g, '').trim().slice(0, 600);
  return `<a class="rp-rel" href="${d.url}/releases" target="_blank" rel="noopener">
      <b>${esc(r.name || r.tag || '')}</b>
      <span class="rp-rel-tag">${esc(r.tag || '')}</span>
      <span class="rp-item-extra">${esc((r.published_at || '').slice(0, 10))}</span>
    </a>
    ${body ? `<pre class="rp-pre">${esc(body)}</pre>` : ''}
    <a class="rp-more" href="${d.url}/releases" target="_blank" rel="noopener">${t('rp.more')} ↗</a>`;
}

function overviewPanel(d) {
  const m = d.metrics || {};
  const grid = METRIC_KEYS.map(k => {
    const v = m[k];
    if (v == null) return '';
    const dl = k === 'stars'
      ? `<div class="rp-metric-delta">${deltaSpan('day')}${deltaSpan('week')}${deltaSpan('month')}</div>` : '';
    return `<div class="rp-metric"><div class="rp-metric-num">${fmtFull(v)}</div>
      <div class="rp-metric-label">${t('units.' + k)}</div>${dl}</div>`;
  }).join('');
  const readme = d.readme_excerpt
    ? `<h3 class="rp-ph">${t('rp.readme')}</h3><pre class="rp-pre rp-readme">${esc(
        d.readme_excerpt.replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, '')
          .replace(/<[^>]+>/g, '').trim().slice(0, 1200))}</pre>` : '';
  return `<div class="rp-metric-grid">${grid}</div>${readme}`;
}

function ctabsHTML(d) {
  const m = d.metrics || {};
  const defs = [
    ['ov', t('rp.ctab.ov'), null],
    ['is', 'Issue', m.issues],
    ['di', 'Discussions', m.discussions],
    ['re', 'Releases', m.releases],
  ];
  return `<div class="rp-ctabs" role="tablist">${defs.map(([k, label, n]) =>
    `<button class="rp-ctab${repo.ctab === k ? ' active' : ''}" data-ctab="${k}">${esc(label)}${n != null ? ` <b class="rp-ctab-n">${fmtFull(n)}</b>` : ''}</button>`).join('')}</div>`;
}

function panelHTML(d) {
  return { ov: overviewPanel, is: issuesPanel, di: discPanel, re: releasePanel }[repo.ctab](d);
}

/* ---------------- render ---------------- */
function renderAllRepo() {
  const d = repo.data;
  $('#repoContent').innerHTML = crumbHTML(d) + topHTML(d)
    + ptabsHTML() + trendHTML(d)
    + ctabsHTML(d) + `<section class="rp-panel card" id="rpPanel">${panelHTML(d)}</section>`;
  renderChart();
  wireShare(d);
  document.title = t('title.repo', { r: d.full_name });
  wireTabs();
}

function wireTabs() {
  document.querySelectorAll('.rp-ptab[data-grain]').forEach(b =>
    b.onclick = () => { repo.grain = b.dataset.grain; syncTabs(); renderChart(); });
  document.querySelectorAll('.rp-mtab[data-metric]').forEach(b =>
    b.onclick = () => { repo.metric = b.dataset.metric; syncTabs(); renderChart(); });
  document.querySelectorAll('.rp-ctab[data-ctab]').forEach(b =>
    b.onclick = () => {
      repo.ctab = b.dataset.ctab;
      syncTabs();
      const p = $('#rpPanel');
      if (p && repo.data) p.innerHTML = panelHTML(repo.data);
    });
}

function syncTabs() {
  document.querySelectorAll('.rp-ptab[data-grain]').forEach(b =>
    b.classList.toggle('active', b.dataset.grain === repo.grain));
  document.querySelectorAll('.rp-mtab[data-metric]').forEach(b =>
    b.classList.toggle('active', b.dataset.metric === repo.metric));
  document.querySelectorAll('.rp-ctab[data-ctab]').forEach(b =>
    b.classList.toggle('active', b.dataset.ctab === repo.ctab));
}

async function renderFoot(d) {
  const fresh = ' · ' + t('fresh', { t: timeAgo(d.snapshot_at) });
  try {
    const idx = await j(DB + 'data/index.json');
    $('#footStats').textContent = t('foot.stats', {
      r: fmtFull(idx.repo_count), d: idx.snapshot_days,
      s: (idx.first_day || '').slice(5), e: (idx.latest_day || '').slice(5), g: '—',
    }) + fresh;
  } catch { $('#footStats').textContent = fresh.trim(); }
}

async function initRepo() {
  document.documentElement.classList.add('m-enter');
  applyStaticI18n();
  bindChrome(() => { if (repo.data) renderAllRepo(); });
  const fn = new URLSearchParams(location.search).get('r') || document.body.dataset.repo || '';
  if (!/^[\w.-]+\/[\w.-]+$/.test(fn)) {
    $('#repoContent').innerHTML = `<div class="rp-err card"><h2>${t('rp.notfound')}</h2><p>${t('rp.notfound.hint')}</p><a class="rp-back" href="${HOME}">${t('rp.back')}</a></div>`;
    return;
  }
  try {
    repo.data = await j(`${DB}data/repos/${fn.replace('/', '__')}.json`);
  } catch {
    $('#repoContent').innerHTML = `<div class="rp-err card"><h2>${t('rp.notfound')}</h2><p>${t('rp.notfound.hint')}</p><a class="rp-back" href="${HOME}">${t('rp.back')}</a></div>`;
    return;
  }
  renderAllRepo();
  renderFoot(repo.data);
}

initRepo();
