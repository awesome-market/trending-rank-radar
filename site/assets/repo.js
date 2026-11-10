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
  return order.filter(k => (d.boards || {})[k] != null).map(k =>
    `<a class="rp-board-chip" href="${HOME}?board=${k}">${t('board.' + k)} <b>#${d.boards[k]}</b></a>`).join('');
}

function sameOwnerHTML(d) {
  const list = (d.same_owner || []).filter(x => x.full_name !== d.full_name);
  if (!list.length) return '<div class="rp-same"></div>';
  const av = esc(d.avatar || '');
  const links = list.slice(0, 20).map(x =>
    `<a class="rp-same-link" href="${HOME}repos/${x.full_name.replace('/', '__')}.html"><img class="rp-same-av" src="${av}" alt="" loading="lazy" onerror="this.remove()">${esc(x.name)}</a>`).join('');
  return `<div class="rp-same"><div class="rp-same-label">${t('rp.same')}</div><div class="rp-same-row">${links}</div></div>`;
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
  <aside class="rp-side">
    <a href="${HOME}repos/${d.full_name.replace('/', '__')}.html"><img class="rp-side-av" src="${esc(avBig)}" alt="${esc(d.owner)} avatar" width="300" height="300" onerror="this.style.visibility='hidden'"></a>
    <div class="rp-side-body card">
      <div class="rp-side-name">${esc(d.name)}</div>
      <a class="rp-side-owner" href="https://github.com/${esc(d.owner)}" target="_blank" rel="noopener">${esc(d.owner)}</a>
    </div>
  </aside>
  <div class="rp-main">
    <div class="rp-main-head">
      <h1 class="rp-htitle">
        <a class="rp-owner" href="https://github.com/${esc(d.owner)}" target="_blank" rel="noopener">${esc(d.owner)}</a>
        <span class="rp-sep">/</span><span class="rp-name">${esc(d.name)}</span>
        <a class="rp-title-ext" href="${esc(d.url)}" target="_blank" rel="noopener" title="${esc(t('rp.view.gh'))}">${gi('ext', 15)}</a>
      </h1>
      <div class="rp-head-chips">${boardsRowHTML(d)}</div>
    </div>
    ${d.description ? `<p class="rp-desc">${esc(d.description)}</p>` : ''}
    ${statsRowHTML(d)}
    ${topics ? `<div class="rp-topics">${topics}</div>` : ''}
    <div class="rp-meta">${metaBits}</div>
    <div class="rp-foot-row">
      ${sameOwnerHTML(d)}
      <div class="rp-actions">
        <button class="rp-btn rp-btn-acc" id="shareBtn">${gi('ext', 12)} ${t('rp.share')}</button>
        <a class="rp-btn" href="${esc(d.url)}" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>
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
      <a href="${HOME}repos/${d.full_name.replace('/', '__')}.html"><img class="rp-th-av" src="${esc(avSm)}" alt="" width="34" height="34" onerror="this.style.visibility='hidden'"></a>
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
function loadImg(src) {
  return new Promise(res => {
    const i = new Image();
    i.crossOrigin = 'anonymous';
    i.onload = () => res(i);
    i.onerror = () => res(null);
    i.src = src;
  });
}

function fitText(c, txt, maxW) {
  if (c.measureText(txt).width <= maxW) return txt;
  while (txt.length > 1 && c.measureText(txt + '…').width > maxW) txt = txt.slice(0, -1);
  return txt + '…';
}

function fmtAx(v) {
  if (v >= 1e6) return (v / 1e6).toFixed(1).replace(/\.0$/, '') + 'm';
  if (v >= 1e3) return (v / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(v);
}

async function shareCanvas(d) {
  const W = 1080, H = 1440, ACC = '#0969da', ACC2 = '#3380e0';
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const c = cv.getContext('2d');
  const F = (w, s) => `${w} ${s}px system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif`;

  c.fillStyle = '#ffffff'; c.fillRect(0, 0, W, H);
  const bar = c.createLinearGradient(0, 0, W, 0);
  bar.addColorStop(0, ACC); bar.addColorStop(1, ACC2);
  c.fillStyle = bar; c.fillRect(0, 0, W, 12);

  /* header: avatar + name + desc */
  const avImg = await loadImg(d.avatar ? `${d.avatar}&s=240` : `https://github.com/${d.owner}.png?size=240`);
  const ax = 72, ay = 92, asz = 120;
  if (avImg) {
    c.save();
    c.beginPath(); c.roundRect(ax, ay, asz, asz, 24); c.clip();
    c.drawImage(avImg, ax, ay, asz, asz);
    c.restore();
  } else {
    c.fillStyle = ACC; c.beginPath(); c.roundRect(ax, ay, asz, asz, 24); c.fill();
    c.fillStyle = '#fff'; c.font = F(700, 56); c.textAlign = 'center';
    c.fillText(d.name.slice(0, 2).toUpperCase(), ax + asz / 2, ay + 78);
    c.textAlign = 'left';
  }
  c.fillStyle = '#1f2328'; c.font = F(700, 52);
  c.fillText(fitText(c, `${d.owner} / ${d.name}`, W - 240 - 72), 216, 148);
  c.fillStyle = '#59636e'; c.font = F(400, 28);
  c.fillText(fitText(c, d.description || d.full_name, W - 240 - 72), 216, 196);

  /* title row + current value */
  c.fillStyle = '#1f2328'; c.font = F(600, 38);
  c.fillText(t('rp.share.trend'), 72, 316);
  const cur = d.metrics.stars;
  if (cur != null) {
    const val = fmtAx(cur);
    c.textAlign = 'right';
    c.fillStyle = ACC; c.font = F(800, 74);
    c.fillText(val, W - 72, 316);
    const vw = c.measureText(val).width;
    c.fillStyle = '#6e7781'; c.font = F(500, 30);
    c.fillText(t('rp.share.cur'), W - 72 - vw - 16, 310);
    c.textAlign = 'left';
  }

  /* chart */
  const dates = (d.history.dates || []).slice(-30);
  const vals = (d.history.stars || []).slice(-30);
  const cx0 = 120, cy0 = 380, cw = W - 120 - 72, ch = 620;
  {
    const v0 = vals.length ? Math.min(...vals) : 0;
    const v1 = vals.length ? Math.max(...vals) : 100;
    const pad = Math.max((v1 - v0) * 0.08, v1 * 0.02, 1);
    const mn = v0 === v1 ? v0 * 0.9 : v0 - pad;
    const mx = v0 === v1 ? v1 * 1.1 : v1 + pad;
    const sp = mx - mn;
    c.font = F(400, 24); c.strokeStyle = '#eaeef3'; c.lineWidth = 2;
    for (let i = 0; i <= 5; i++) {
      const gy = cy0 + ch * i / 5;
      c.beginPath(); c.moveTo(cx0, gy); c.lineTo(cx0 + cw, gy); c.stroke();
      c.fillStyle = '#9aa4b0'; c.textAlign = 'right';
      c.fillText(fmtAx(Math.round(mx - sp * i / 5)), cx0 - 14, gy + 8);
      c.textAlign = 'left';
    }
    const PX = i => cx0 + cw * i / Math.max(vals.length - 1, 1);
    const PY = v => cy0 + ch * (1 - (v - mn) / sp);
    if (vals.length > 1) {
      const area = c.createLinearGradient(0, cy0, 0, cy0 + ch);
      area.addColorStop(0, 'rgba(9,105,218,0.16)'); area.addColorStop(1, 'rgba(9,105,218,0.02)');
      c.beginPath();
      vals.forEach((v, i) => i ? c.lineTo(PX(i), PY(v)) : c.moveTo(PX(i), PY(v)));
      c.lineTo(PX(vals.length - 1), cy0 + ch); c.lineTo(PX(0), cy0 + ch); c.closePath();
      c.fillStyle = area; c.fill();
      c.beginPath();
      vals.forEach((v, i) => i ? c.lineTo(PX(i), PY(v)) : c.moveTo(PX(i), PY(v)));
      c.strokeStyle = ACC; c.lineWidth = 5; c.lineJoin = 'round'; c.stroke();
      const step = Math.max(1, Math.floor(vals.length / 8));
      vals.forEach((v, i) => {
        if (i % step && i !== vals.length - 1) return;
        c.beginPath(); c.arc(PX(i), PY(v), 6, 0, 7);
        c.fillStyle = '#fff'; c.fill(); c.strokeStyle = ACC; c.lineWidth = 3; c.stroke();
      });
    } else if (vals.length === 1) {
      c.beginPath(); c.arc(cx0 + cw / 2, PY(vals[0]), 8, 0, 7);
      c.fillStyle = '#fff'; c.fill(); c.strokeStyle = ACC; c.lineWidth = 4; c.stroke();
      c.fillStyle = '#9aa4b0'; c.font = F(400, 26); c.textAlign = 'center';
      c.fillText(t('rp.share.nodata'), cx0 + cw / 2, PY(vals[0]) + 70);
      c.textAlign = 'left';
    } else {
      c.fillStyle = '#9aa4b0'; c.font = F(400, 30); c.textAlign = 'center';
      c.fillText(t('rp.share.nodata'), cx0 + cw / 2, cy0 + ch / 2);
      c.textAlign = 'left';
    }
    c.fillStyle = '#9aa4b0'; c.font = F(400, 22); c.textAlign = 'center';
    const zh = document.documentElement.lang !== 'en';
    if (dates.length > 1) {
      for (let i = 0; i < 6; i++) {
        const di = Math.round((dates.length - 1) * i / 5);
        const ds = dates[di] || '';
        const lbl = zh ? `${+ds.slice(5, 7)}月${+ds.slice(8, 10)}日` : ds.slice(5);
        c.fillText(lbl, PX(di), cy0 + ch + 44);
      }
    } else if (dates.length === 1) {
      const ds = dates[0];
      c.fillText(zh ? `${+ds.slice(5, 7)}月${+ds.slice(8, 10)}日` : ds.slice(5), cx0 + cw / 2, cy0 + ch + 44);
    }
    c.textAlign = 'left';
  }

  /* footer: brand + QR */
  const fy = 1150;
  c.strokeStyle = '#eaeef3'; c.lineWidth = 2;
  c.beginPath(); c.moveTo(72, fy); c.lineTo(W - 72, fy); c.stroke();
  c.save();
  const lg = c.createLinearGradient(72, fy + 60, 156, fy + 144);
  lg.addColorStop(0, ACC); lg.addColorStop(1, ACC2);
  c.fillStyle = lg; c.beginPath(); c.roundRect(72, fy + 60, 84, 84, 20); c.fill();
  c.font = '44px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillStyle = '#fff'; c.fillText('📡', 114, fy + 106);
  c.restore();
  c.fillStyle = '#1f2328'; c.font = F(700, 34);
  c.fillText(fitText(c, `GitHub Trending Rank Radar · ${t('rp.share.slogan')}`, W - 72 - 170 - 182 - 20), 182, fy + 108);
  c.fillStyle = '#6e7781'; c.font = F(400, 26);
  c.fillText(fitText(c, `zhuikan.com/repos/${d.full_name.replace('/', '__')}.html`, W - 72 - 170 - 182 - 20), 182, fy + 152);
  const pageUrl = `https://zhuikan.com/repos/${d.full_name.replace('/', '__')}.html`;
  const qr = await loadImg(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=6&data=${encodeURIComponent(pageUrl)}`);
  if (qr) {
    c.drawImage(qr, W - 72 - 150, fy + 40, 150, 150);
    c.fillStyle = '#9aa4b0'; c.font = F(400, 20); c.textAlign = 'center';
    c.fillText(t('rp.share.scan'), W - 72 - 75, fy + 216);
    c.textAlign = 'left';
  }
  return cv;
}

async function openShareModal(d) {
  const ov = document.createElement('div');
  ov.className = 'sh-ov';
  ov.innerHTML = `<div class="sh-card">
    <div class="sh-head"><span>${t('rp.share.title')}</span><button class="sh-x" aria-label="close">✕</button></div>
    <div class="sh-prev"></div>
    <div class="sh-btns">
      <button class="rp-btn rp-btn-acc" id="shDl">⤓ ${t('rp.share.dl')}</button>
      <button class="rp-btn" id="shCp">${t('rp.share.cp')}</button>
    </div>
    <div class="sh-hint">${t('rp.share.hint')}</div>
  </div>`;
  document.body.appendChild(ov);
  const close = () => ov.remove();
  ov.addEventListener('click', e => { if (e.target === ov) close(); });
  ov.querySelector('.sh-x').onclick = close;
  const cv = await shareCanvas(d);
  if (!document.body.contains(ov)) return;
  cv.className = 'sh-img';
  ov.querySelector('.sh-prev').appendChild(cv);
  const blob = await new Promise(res => cv.toBlob(res, 'image/png'));
  ov.querySelector('#shDl').onclick = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${d.owner}-${d.name}-trend.png`;
    a.click();
  };
  ov.querySelector('#shCp').onclick = async e => {
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      e.target.textContent = t('rp.share.done');
    } catch {
      ov.querySelector('#shDl').click();
    }
    setTimeout(() => { e.target.textContent = t('rp.share.cp'); }, 1600);
  };
}

function wireShare(d) {
  ['#shareBtn', '#shareBtn2'].forEach(sel => {
    const btn = $(sel);
    if (btn) btn.onclick = () => openShareModal(d);
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
  const readme = d.readme
    ? `<h3 class="rp-ph">${t('rp.readme')}</h3><div class="rp-pre rp-readme"><div class="rp-readme-md" id="rpReadme"></div></div>` : '';
  return `<div class="rp-metric-grid">${grid}</div>${readme}`;
}

/* Full README: fetched from data/readme/<repo>.md (or .zh.md when the UI
   language is Chinese and a Chinese README exists), rendered with marked +
   sanitized with DOMPurify; relative image/link paths are rewritten to the
   repo's raw.githubusercontent.com / github.com blob URLs. */
const _readmeCache = {};
async function loadReadme(d) {
  const el = $('#rpReadme');
  if (!el || !d.readme) return;
  const wantZh = typeof LANG !== 'undefined' && LANG === 'zh' && d.readme_zh;
  const lang = wantZh ? 'zh' : 'en';
  if (el.dataset.lang === lang && el.childNodes.length) return;
  const base = d.full_name.replace('/', '__');
  const key = base + ':' + lang;
  try {
    if (!_readmeCache[key]) {
      const fn = `${DB}data/readme/${base}${wantZh ? '.zh' : ''}.md`;
      const r = await fetch(fn);
      if (!r.ok) throw new Error(r.status);
      _readmeCache[key] = await r.text();
    }
    el.innerHTML = renderMarkdown(_readmeCache[key], d.owner, d.name);
    el.dataset.lang = lang;
  } catch { el.innerHTML = ''; }
}

function renderMarkdown(md, owner, name) {
  const RAW = `https://raw.githubusercontent.com/${owner}/${name}/HEAD/`;
  const BLOB = `https://github.com/${owner}/${name}/blob/HEAD/`;
  const REPO = `https://github.com/${owner}/${name}`;
  if (!window.marked || !window.DOMPurify) return readmeHtml(md, owner, name);
  const html = DOMPurify.sanitize(marked.parse(md), { USE_PROFILES: { html: true } });
  const tpl = document.createElement('template');
  tpl.innerHTML = html;
  tpl.content.querySelectorAll('img').forEach(im => {
    const u = im.getAttribute('src') || '';
    if (!/^(https?:|data:|blob:)/i.test(u))
      im.src = RAW + u.replace(/^\.?\/+/, '');
    im.loading = 'lazy';
    im.classList.add('rp-img');
  });
  tpl.content.querySelectorAll('source[srcset]').forEach(s => {
    s.srcset = s.srcset.split(',').map(part => {
      const seg = part.trim().split(/\s+/);
      if (seg[0] && !/^(https?:|data:|blob:)/i.test(seg[0]))
        seg[0] = RAW + seg[0].replace(/^\.?\/+/, '');
      return seg.join(' ');
    }).join(', ');
  });
  tpl.content.querySelectorAll('a').forEach(a => {
    const h = a.getAttribute('href') || '';
    if (h.startsWith('#')) a.href = REPO + h;
    else if (!/^(https?:|mailto:)/i.test(h)) a.href = BLOB + h.replace(/^\.?\/+/, '');
    a.target = '_blank';
    a.rel = 'noopener';
  });
  return tpl.innerHTML;
}

/* README excerpt: render a safe subset of markdown (images, links, bold,
   code, headings). Relative image paths resolve against the repo's default
   branch on raw.githubusercontent.com; relative links go to github.com. */
function readmeHtml(src, owner, name) {
  const RAW = `https://raw.githubusercontent.com/${owner}/${name}/HEAD/`;
  const BLOB = `https://github.com/${owner}/${name}/blob/HEAD/`;
  const REPO = `https://github.com/${owner}/${name}`;
  const abs = (u, kind) => {
    u = String(u || '').trim();
    if (/^https?:/i.test(u)) return u;
    if (u.startsWith('//')) return 'https:' + u;
    if (kind === 'link' && u.startsWith('#')) return REPO + u;
    const clean = u.replace(/^\.?\/+/, '');
    return clean ? (kind === 'img' ? RAW : BLOB) + clean : '';
  };
  // render the full stored excerpt (collector already bounds it to 3000
  // chars); the .rp-readme panel itself scrolls past 520px
  let s = src.trim();
  const truncated = s.length > 3200;
  if (truncated) {
    s = s.slice(0, 3200);
    const nl = s.lastIndexOf('\n');
    if (nl > 2400) s = s.slice(0, nl);
  }
  // pull raw <img> tags out before escaping; all other html is dropped
  const rawImgs = [];
  s = s.replace(/<img\b[^>]*>/gi, tag => {
    const sm = /src\s*=\s*["']([^"']+)["']/i.exec(tag);
    const am = /alt\s*=\s*["']([^"']*)["']/i.exec(tag);
    if (!sm) return '';
    rawImgs.push({ src: esc(sm[1]), alt: esc(am ? am[1] : '') });
    return `@@RIMG${rawImgs.length - 1}@@`;
  });
  s = s.replace(/<[^>]+>/g, '');
  s = esc(s);
  // everything matched from `s` below is already-escaped text: emit as-is
  const imgTag = (u, a) =>
    `<img class="rp-img" src="${u}" alt="${a}" loading="lazy" onerror="this.remove()">`;
  s = s.replace(/\[!\[([^\]]*)\]\(([^)\s]+)[^)]*\)\]\(([^)\s]+)[^)]*\)/g,
    (m, a, i, h) => `<a class="rp-a" href="${abs(h, 'link')}" target="_blank" rel="noopener">${imgTag(abs(i, 'img'), a)}</a>`);
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g,
    (m, a, i) => imgTag(abs(i, 'img'), a));
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g,
    (m, tx, h) => `<a class="rp-a" href="${abs(h, 'link')}" target="_blank" rel="noopener">${tx}</a>`);
  s = s.replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>')
       .replace(/`([^`\n]+)`/g, '<code>$1</code>')
       .replace(/^#{1,4}\s*(.+)$/gm, '<b>$1</b>');
  s = s.replace(/@@RIMG(\d+)@@/g, (m, i) => {
    const im = rawImgs[+i];
    return im ? imgTag(abs(im.src, 'img'), im.alt) : '';
  });
  return s + (truncated ? '…' : '');
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

/* ---------------- news (bilingual) ---------------- */
function newsHTML(d) {
  const items = d.news || [];
  if (!items.length) return '';
  const zh = items.filter(i => i.lang === 'zh');
  const en = items.filter(i => i.lang !== 'zh');
  // active-lang block wins; fall back to whichever language has items
  const vis = (LANG === 'zh' && zh.length) ? 'zh'
    : (LANG === 'en' && en.length) ? 'en'
    : (zh.length ? 'zh' : 'en');
  const row = i => {
    const extra = (i.source === 'Hacker News' && i.points != null)
      ? `▲${fmtFull(i.points)}${i.comments != null ? ` · ${fmtFull(i.comments)} comments` : ''} · ${esc(i.date || '')}`
      : esc(i.date || '');
    return `<a class="rp-item" href="${esc(i.hn || i.url || '')}" target="_blank" rel="noopener">
      <span class="rp-news-src">${esc(i.source || '')}</span>
      <span class="rp-item-title">${esc(i.title || '')}</span>
      <span class="rp-item-extra">${extra}</span></a>`;
  };
  const blk = (lst, lang, title) => {
    const more = lst.length > 10
      ? `<details class="rp-news-more"><summary>${
          lang === 'zh' ? `展开其余 ${lst.length - 10} 条`
                        : `${lst.length - 10} more`}</summary>${
          lst.slice(10).map(row).join('')}</details>`
      : '';
    return `<div class="rp-news-block" lang="${lang === 'zh' ? 'zh-CN' : 'en'}"${lang === vis ? '' : ' hidden'}>
      <h3 class="rp-ph">${title} (${lst.length})</h3>
      <div class="rp-list">${lst.slice(0, 10).map(row).join('')}${more}</div>
    </div>`;
  };
  return `<section class="rp-news card">`
    + (zh.length ? blk(zh, 'zh', '相关报道') : '')
    + (en.length ? blk(en, 'en', 'News &amp; coverage') : '')
    + `</section>`;
}

/* ---------------- render ---------------- */
function renderAllRepo() {
  const d = repo.data;
  $('#repoContent').innerHTML = crumbHTML(d) + topHTML(d)
    + ptabsHTML() + trendHTML(d)
    + `<section class="rp-social card" id="rpSocial"></section>`
    + ctabsHTML(d) + `<section class="rp-panel card" id="rpPanel">${panelHTML(d)}</section>`
    + newsHTML(d);
  if (repo.ctab === 'ov') loadReadme(d);
  renderChart();
  wireShare(d);
  document.title = t('title.repo', { r: d.full_name });
  wireTabs();
  loadSocial(d);
}

/* ---------------- social: like / fav / views / comments ---------------- */
async function loadSocial(d) {
  const el = $('#rpSocial');
  if (!el) return;
  const needLogin = () => openAuthModal('login');
  let s = { views: 0, likes: 0, favs: 0, comments: 0, viewer: {} };
  try { s = await api(`/items/github/${encodeURIComponent(d.full_name)}/social`); } catch { }
  el.innerHTML = `<div class="rp-socbar">
      <button class="soc-btn${s.viewer.liked ? ' on' : ''}" id="socLike" type="button">♥ <b>${fmt(s.likes)}</b> ${esc(t('soc.like'))}</button>
      <button class="soc-btn${s.viewer.faved ? ' on' : ''}" id="socFav" type="button">★ <b>${fmt(s.favs)}</b> ${esc(t('soc.fav'))}</button>
      <span class="soc-stat">${esc(t('soc.views'))} <b>${fmt(s.views)}</b></span>
    </div>
    <div class="rp-cm">
      <h3 class="rp-cm-title">${esc(t('cm.title'))} <b id="cmN">${fmt(s.comments)}</b></h3>
      <div class="rp-cm-form" id="cmForm"></div>
      <div class="rp-cm-list" id="cmList"></div>
    </div>`;
  const toggle = async (kind, btn) => {
    if (!zk.user) { needLogin(); return; }
    btn.disabled = true;
    try {
      const r = await api(`/${kind}/toggle`, {
        method: 'POST',
        body: JSON.stringify({ site: 'github', item_id: d.full_name })
      });
      const on = r.liked ?? r.faved;
      btn.classList.toggle('on', !!on);
      const b = btn.querySelector('b');
      b.textContent = fmt(parseInt(b.textContent.replace(/\D/g, '') || '0') + (on ? 1 : -1));
    } catch { needLogin(); }
    btn.disabled = false;
  };
  $('#socLike').onclick = (e) => toggle('likes', e.currentTarget);
  $('#socFav').onclick = (e) => toggle('favorites', e.currentTarget);
  renderCommentForm(d);
  loadComments(d);
}

function renderCommentForm(d) {
  const f = $('#cmForm');
  if (!f) return;
  if (!zk.user) {
    f.innerHTML = `<button class="cm-login" id="cmLogin" type="button">${esc(t('cm.login'))}</button>`;
    $('#cmLogin').onclick = () => openAuthModal('login');
    return;
  }
  f.innerHTML = `<textarea class="cm-in" id="cmText" maxlength="2000" rows="3" placeholder="${esc(t('cm.ph'))}"></textarea>
    <div class="cm-row"><button class="cm-post" id="cmPost" type="button">${esc(t('cm.submit'))}</button><span class="cm-note" id="cmNote"></span></div>`;
  $('#cmPost').onclick = async () => {
    const body = $('#cmText').value.trim();
    if (!body) return;
    $('#cmPost').disabled = true;
    try {
      await api('/comments', {
        method: 'POST',
        body: JSON.stringify({ site: 'github', item_id: d.full_name, body })
      });
      $('#cmText').value = '';
      $('#cmNote').textContent = t('cm.posted');
      loadComments(d);
    } catch (e) { $('#cmNote').textContent = e.message || t('auth.err'); }
    $('#cmPost').disabled = false;
  };
}

function cmRow(c) {
  const own = zk.user && (zk.user.username === c.username || zk.user.role === 'admin');
  const av = c.avatar_url ? `<img class="cm-av" src="${esc(c.avatar_url)}" width="24" height="24" alt="">` : '<span class="cm-av cm-av-ph"></span>';
  const pend = c.status === 'pending' ? `<i class="cm-pend">${esc(t('cm.pending'))}</i>` : '';
  const acts = `<span class="cm-acts">
      <button class="cm-act" data-act="report" type="button">${esc(t('cm.report'))}</button>
      ${own ? `<button class="cm-act" data-act="del" type="button">${esc(t('cm.del'))}</button>` : ''}
    </span>`;
  return `<div class="cm-item" data-id="${c.id}">${av}
    <div class="cm-main">
      <div class="cm-head"><b>${esc(c.display_name || c.username)}</b>
        <span class="cm-time">${timeAgo(new Date(c.created_at * 1000).toISOString())}</span>${pend}${acts}</div>
      <div class="cm-body">${esc(c.body)}</div>
    </div></div>`;
}

async function loadComments(d) {
  const el = $('#cmList');
  if (!el) return;
  let items = [];
  try {
    items = (await api(`/comments?site=github&item_id=${encodeURIComponent(d.full_name)}`)).items || [];
  } catch { }
  const mine = zk.user ? zk.user.username : null;
  const shown = items.filter(c => c.status === 'approved' || c.username === mine);
  el.innerHTML = shown.length
    ? shown.map(cmRow).join('')
    : `<div class="cm-empty">${esc(t('cm.empty'))}</div>`;
  el.querySelectorAll('.cm-act').forEach(b => b.onclick = async () => {
    const id = b.closest('.cm-item').dataset.id;
    if (!zk.user) { openAuthModal('login'); return; }
    try {
      if (b.dataset.act === 'del') await api(`/comments/${id}`, { method: 'DELETE' });
      else await api(`/comments/${id}/report`, { method: 'POST', body: JSON.stringify({ reason: '' }) });
      loadComments(d);
    } catch { }
  });
}

document.addEventListener('zk:auth', () => {
  if (repo.data) loadSocial(repo.data);
});

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
      if (p && repo.data) {
        p.innerHTML = panelHTML(repo.data);
        if (repo.ctab === 'ov') loadReadme(repo.data);
      }
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
  zkInit();
  applyStaticI18n();
  bindChrome(() => { if (repo.data) renderAllRepo(); });
  zkLoadUser().then(renderAuthChip);
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
  api('/stats/view', {
    method: 'POST',
    body: JSON.stringify({ site: 'github', item_id: fn, path: location.pathname })
  }).catch(() => { });   /* fire-and-forget analytics */
}

initRepo();
