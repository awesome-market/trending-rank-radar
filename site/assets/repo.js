/* GitHub Trending Rank Radar — repo detail page (loads after common.js)
 * Reads data/repos/<owner>__<name>.json, renders metrics, trend chart,
 * board placements, hot issues, discussions, latest release, README excerpt
 * and a canvas share image.
 */
'use strict';

const repo = { data: null, metric: 'stars', range: '30d' };

const GH_ICONS = {
  ext: '<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5A2.25 2.25 0 0 1 11.25 14h-7.5A2.25 2.25 0 0 1 1.5 11.75v-7.5A2.25 2.25 0 0 1 3.75 2Zm6.75-1.5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V2.56l-5.47 5.47a.75.75 0 1 1-1.06-1.06L13.44 1.5H10.5a.75.75 0 0 1 0-1.5Z"/></svg>',
};

const METRIC_KEYS = ['stars', 'forks', 'watchers', 'prs', 'issues', 'releases', 'discussions'];

function deltaSpan(label) {
  const g = repo.data.growth && repo.data.growth[label];
  if (!g) return '';
  const key = label === 'day' ? 'rp.growth.d' : label === 'week' ? 'rp.growth.w' : 'rp.growth.m';
  const sign = g.stars > 0 ? '+' : '';
  const cls = g.stars > 0 ? 'up' : g.stars < 0 ? 'down' : '';
  return `<span class="rp-delta ${cls}" title="${t(key)}">${sign}${fmtFull(g.stars)}</span>`;
}

/* ---------------- header / head card ---------------- */
function headHTML(d) {
  const av = d.avatar
    ? `<img class="rp-avatar" src="${esc(d.avatar)}&s=128" alt="" width="64" height="64" loading="lazy">`
    : `<img class="rp-avatar" src="https://github.com/${esc(d.owner)}.png?size=128" alt="" width="64" height="64" loading="lazy">`;
  const topics = (d.topics || []).slice(0, 8).map(x =>
    `<a class="rp-topic" href="https://github.com/topics/${encodeURIComponent(x)}" target="_blank" rel="noopener">${esc(x)}</a>`).join('');
  const metaBits = [
    d.language ? `<span class="rp-meta-bit">${langDotInline(d.language)} ${esc(d.language)}</span>` : '',
    d.license ? `<span class="rp-meta-bit">⚖ ${esc(d.license)}</span>` : '',
    d.created_at ? `<span class="rp-meta-bit">${t('rp.created')} ${esc(String(d.created_at).slice(0, 10))}</span>` : '',
    d.homepage ? `<a class="rp-meta-bit rp-home" href="${esc(d.homepage)}" target="_blank" rel="noopener">⌂ ${esc(d.homepage.replace(/^https?:\/\//, '').slice(0, 40))}</a>` : '',
  ].filter(Boolean).join('');
  return `<section class="rp-head card">
    ${av}
    <div class="rp-head-main">
      <div class="rp-name-row">
        <a class="rp-owner" href="https://github.com/${esc(d.owner)}" target="_blank" rel="noopener">${esc(d.owner)}</a>
        <span class="rp-sep">/</span>
        <h1 class="rp-name">${esc(d.name)}</h1>
        <a class="rp-gh" href="${esc(d.url)}" target="_blank" rel="noopener" title="${esc(t('rp.view.gh'))}">${GH_ICONS.ext} GitHub</a>
      </div>
      ${d.description ? `<p class="rp-desc">${esc(d.description)}</p>` : ''}
      ${topics ? `<div class="rp-topics">${topics}</div>` : ''}
      <div class="rp-meta">${metaBits}</div>
    </div>
  </section>`;
}

function langDotInline(lang) {
  const c = LANG_COLORS[lang] || '#8b949e';
  return `<span class="lang-dot" style="background:${c}"></span>`;
}

/* ---------------- boards chips ---------------- */
function boardsHTML(d) {
  const keys = Object.keys(d.boards || {});
  if (!keys.length) return '';
  const order = ['new', 'daily', 'daily_rate', 'weekly', 'weekly_rate',
                 'monthly', 'monthly_rate', 'total', 'cumulative'];
  const chips = order.filter(k => d.boards[k] != null).map(k =>
    `<a class="rp-board-chip" href="./?board=${k}">${t('board.' + k)} <b>#${d.boards[k]}</b></a>`).join('');
  return chips ? `<section class="rp-boards card"><h2 class="rp-h">${t('rp.boards')}</h2><div class="rp-board-chips">${chips}</div></section>` : '';
}

/* ---------------- metrics ---------------- */
function metricsHTML(d) {
  const rows = METRIC_KEYS.map(k => {
    const v = d.metrics[k];
    const dl = k === 'stars'
      ? `<div class="rp-metric-delta">${deltaSpan('day')}${deltaSpan('week')}${deltaSpan('month')}</div>`
      : '';
    return `<div class="rp-metric">
      <div class="rp-metric-num">${v == null ? '–' : fmtFull(v)}</div>
      <div class="rp-metric-label">${t('units.' + k)}</div>${dl}
    </div>`;
  }).join('');
  return `<section class="rp-metrics card"><h2 class="rp-h">${t('rp.overview')}</h2><div class="rp-metric-grid">${rows}</div></section>`;
}

/* ---------------- trend chart ---------------- */
function sliceSeries(dates, vals, range) {
  if (range === 'all') return [dates, vals];
  const n = range === '7d' ? 7 : 30;
  return [dates.slice(-n), vals.slice(-n)];
}

function bigChart(dates, vals) {
  if (!vals || vals.length === 0) return '';
  const w = 920, h = 240, padL = 54, padR = 14, padT = 16, padB = 30;
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
  const polylines = lines.map(l => `<polyline points="${l}" fill="none" stroke="url(#sparkStroke)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`).join('');
  const dots = pts.map((p, i) => p
    ? `<circle cx="${p[0]}" cy="${p[1]}" r="2.5" class="rp-dot"><title>${esc(dates[i])} · ${fmtFull(nums[i])}</title></circle>` : '').join('');
  const xLabels = dates.length
    ? `<text x="${padL}" y="${h - 8}" class="rp-axis">${esc(dates[0])}</text>` +
      (dates.length > 1 ? `<text x="${w - padR}" y="${h - 8}" class="rp-axis" text-anchor="end">${esc(dates[dates.length - 1])}</text>` : '') : '';
  return `<svg viewBox="0 0 ${w} ${h}" class="rp-chart-svg" role="img">${grid}${area}${polylines}${dots}${xLabels}</svg>`;
}

function chartHTML(d) {
  const dates = d.history.dates || [];
  const metricTabs = ['stars', 'forks', 'watchers'].map(k =>
    `<button class="rp-tab${repo.metric === k ? ' active' : ''}" data-metric="${k}">${t('units.' + k)}</button>`).join('');
  const rangeTabs = [['7d', 'rp.range.7d'], ['30d', 'rp.range.30d'], ['all', 'rp.range.all']]
    .map(([k, kk]) => `<button class="rp-tab${repo.range === k ? ' active' : ''}" data-range="${k}">${t(kk)}</button>`).join('');
  return `<section class="rp-trend card">
    <div class="rp-trend-head">
      <h2 class="rp-h">${t('rp.trend')}</h2>
      <div class="rp-tabs">${metricTabs}</div>
      <div class="rp-tabs">${rangeTabs}</div>
      <button class="rp-share-btn" id="shareBtn">${GH_ICONS.ext} ${t('rp.share')}</button>
    </div>
    <div class="rp-chart" id="rpChart"></div>
  </section>`;
}

function renderChart() {
  const d = repo.data;
  const [dates, vals] = sliceSeries(d.history.dates || [], d.history[repo.metric] || [], repo.range);
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
  // bg
  const g = c.createLinearGradient(0, 0, 1200, 630);
  g.addColorStop(0, '#0d1117'); g.addColorStop(1, '#161b26');
  c.fillStyle = g; c.fillRect(0, 0, 1200, 630);
  // brand
  c.fillStyle = '#58a6ff'; c.font = '600 26px system-ui, sans-serif';
  c.fillText('📡 GitHub Trending Rank Radar', 60, 74);
  c.fillStyle = '#7d8590'; c.font = '20px system-ui, sans-serif';
  c.fillText('zhuikan.com · ' + (d.snapshot_at || '').slice(0, 10), 60, 104);
  // repo name
  c.fillStyle = '#e6edf3'; c.font = '700 56px system-ui, sans-serif';
  c.fillText(d.full_name.length > 34 ? d.full_name.slice(0, 33) + '…' : d.full_name, 60, 190);
  // desc
  if (d.description) {
    c.fillStyle = '#9da7b3'; c.font = '24px system-ui, sans-serif';
    const txt = d.description.length > 62 ? d.description.slice(0, 61) + '…' : d.description;
    c.fillText(txt, 60, 236);
  }
  // metrics
  const mets = [['stars', d.metrics.stars], ['forks', d.metrics.forks], ['watchers', d.metrics.watchers]];
  mets.forEach(([k, v], i) => {
    const x0 = 60 + i * 300;
    c.fillStyle = '#e6edf3'; c.font = '700 44px system-ui, sans-serif';
    c.fillText(v == null ? '–' : v.toLocaleString('en-US'), x0, 330);
    c.fillStyle = '#7d8590'; c.font = '20px system-ui, sans-serif';
    c.fillText(k, x0, 360);
  });
  // growth chips
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
  // sparkline
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
  const btn = $('#shareBtn');
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
      setTimeout(() => { btn.innerHTML = `${GH_ICONS.ext} ${t('rp.share')}`; }, 1600);
    }, 'image/png');
  };
}

/* ---------------- issues / discussions / release / readme ---------------- */
function ghListItem(base, n, title, extra) {
  return `<a class="rp-item" href="${base}/${n}" target="_blank" rel="noopener">
    <span class="rp-item-num">#${n}</span>
    <span class="rp-item-title">${esc(title)}</span>
    <span class="rp-item-extra">${extra}</span>
  </a>`;
}

function issuesHTML(d) {
  if (!d.issues || !d.issues.length) return '';
  const base = `${d.url}/issues`;
  const items = d.issues.slice(0, 8).map(i =>
    ghListItem(base, i.number, i.title,
      `${t('rp.comments', { n: i.comments ?? 0 })} · ${esc((i.created_at || '').slice(0, 10))}`)).join('');
  return `<section class="rp-card card"><h2 class="rp-h">${t('rp.issues')}</h2><div class="rp-list">${items}</div></section>`;
}

function discHTML(d) {
  if (!d.discussions || !d.discussions.length) return '';
  const base = `${d.url}/discussions`;
  const items = d.discussions.slice(0, 8).map(x =>
    ghListItem(base, x.number, x.title,
      `${x.category ? esc(x.category) + ' · ' : ''}${t('rp.comments', { n: x.comments ?? 0 })} · ${esc((x.created_at || '').slice(0, 10))}`)).join('');
  return `<section class="rp-card card"><h2 class="rp-h">${t('rp.disc')}</h2><div class="rp-list">${items}</div></section>`;
}

function releaseHTML(d) {
  const r = d.latest_release;
  if (!r) return '';
  const body = (r.body || '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[#*`>]/g, '').trim().slice(0, 600);
  return `<section class="rp-card card"><h2 class="rp-h">${t('rp.release')}</h2>
    <a class="rp-rel" href="${d.url}/releases" target="_blank" rel="noopener">
      <b>${esc(r.name || r.tag || '')}</b>
      <span class="rp-rel-tag">${esc(r.tag || '')}</span>
      <span class="rp-item-extra">${esc((r.published_at || '').slice(0, 10))}</span>
    </a>
    ${body ? `<pre class="rp-pre">${esc(body)}</pre>` : ''}
  </section>`;
}

function readmeHTML(d) {
  if (!d.readme_excerpt) return '';
  const txt = d.readme_excerpt.replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, '')
    .replace(/<[^>]+>/g, '').trim().slice(0, 1200);
  return `<section class="rp-card card"><h2 class="rp-h">${t('rp.readme')}</h2>
    <pre class="rp-pre rp-readme">${esc(txt)}</pre>
  </section>`;
}

/* ---------------- render ---------------- */
function renderAllRepo() {
  const d = repo.data;
  const grid = [issuesHTML(d), discHTML(d), releaseHTML(d), readmeHTML(d)]
    .filter(Boolean).join('');
  $('#repoContent').innerHTML = headHTML(d) + boardsHTML(d) + metricsHTML(d)
    + chartHTML(d) + `<div class="rp-grid">${grid}</div>`;
  renderChart();
  wireShare(d);
  document.title = t('title.repo', { r: d.full_name });
  document.querySelectorAll('.rp-tab[data-metric]').forEach(b =>
    b.onclick = () => { repo.metric = b.dataset.metric; syncTabs(); renderChart(); });
  document.querySelectorAll('.rp-tab[data-range]').forEach(b =>
    b.onclick = () => { repo.range = b.dataset.range; syncTabs(); renderChart(); });
}

function syncTabs() {
  document.querySelectorAll('.rp-tab[data-metric]').forEach(b =>
    b.classList.toggle('active', b.dataset.metric === repo.metric));
  document.querySelectorAll('.rp-tab[data-range]').forEach(b =>
    b.classList.toggle('active', b.dataset.range === repo.range));
}

async function renderFoot(d) {
  $('#freshText').textContent = t('fresh', { t: timeAgo(d.snapshot_at) });
  $('#freshDot').classList.add('ok');
  try {
    const idx = await j('data/index.json');
    $('#footStats').textContent = t('foot.stats', {
      r: fmtFull(idx.repo_count), d: idx.snapshot_days,
      s: (idx.first_day || '').slice(5), e: (idx.latest_day || '').slice(5), g: '—',
    });
  } catch { /* footer stays empty */ }
}

async function initRepo() {
  document.documentElement.classList.add('m-enter');
  applyStaticI18n();
  bindChrome(() => { if (repo.data) renderAllRepo(); });
  const fn = new URLSearchParams(location.search).get('r') || '';
  if (!/^[\w.-]+\/[\w.-]+$/.test(fn)) {
    $('#repoContent').innerHTML = `<div class="rp-err card"><h2>${t('rp.notfound')}</h2><p>${t('rp.notfound.hint')}</p><a class="rp-back" href="./">${t('rp.back')}</a></div>`;
    $('#freshText').textContent = '—';
    return;
  }
  try {
    repo.data = await j(`data/repos/${fn.replace('/', '__')}.json`);
  } catch {
    $('#repoContent').innerHTML = `<div class="rp-err card"><h2>${t('rp.notfound')}</h2><p>${t('rp.notfound.hint')}</p><a class="rp-back" href="./">${t('rp.back')}</a></div>`;
    $('#freshText').textContent = '—';
    return;
  }
  renderAllRepo();
  renderFoot(repo.data);
}

initRepo();
