/* Trending Rank Radar — vanilla JS frontend
 * Reads precomputed JSON from data/, renders 8 boards × day/month/year views.
 */
'use strict';

const BOARDS = {
  new:         { name: '新榜',     short: '新',  metric: 'stars' },
  daily:       { name: '日飙升',   short: '日增', metric: 'growth' },
  daily_rate:  { name: '日增速',   short: '日速', metric: 'rate' },
  weekly:      { name: '周飙升',   short: '周增', metric: 'growth' },
  weekly_rate: { name: '周增速',   short: '周速', metric: 'rate' },
  monthly:     { name: '月飙升',   short: '月增', metric: 'growth' },
  monthly_rate:{ name: '月增速',   short: '月速', metric: 'rate' },
  total:       { name: '总榜',     short: '总',  metric: 'stars' },
};
const BOARD_ORDER = ['new', 'daily', 'daily_rate', 'weekly', 'weekly_rate',
                     'monthly', 'monthly_rate', 'total'];
const CUM_BOARD = 'cumulative';   // month-only pseudo board
const PAGE = 50;

const LANG_COLORS = {
  Python: '#3572A5', JavaScript: '#f1e05a', TypeScript: '#3178c6',
  Go: '#00ADD8', Rust: '#dea584', Java: '#b07219', 'C++': '#f34b7d',
  C: '#555555', 'C#': '#178600', PHP: '#4F5D95', Ruby: '#701516',
  Shell: '#89e051', HTML: '#e34c26', CSS: '#563d7c', Vue: '#41b883',
  'Jupyter Notebook': '#DA5B0B', Dart: '#00B4AB', Kotlin: '#A97BFF',
  Swift: '#F05138', Scala: '#c22d40', Lua: '#000080', Haskell: '#5e5086',
  Elixir: '#6e4a7e', Clojure: '#db5855', Erlang: '#B83998', Julia: '#a270ba',
  Perl: '#0298c3', R: '#198CE7', Dockerfile: '#384d54', Makefile: '#427819',
  'Objective-C': '#438eff', Astro: '#ff5a03', Svelte: '#ff3e00',
};

const state = {
  board: 'daily',
  period: 'day',
  sel: null,
  minK: 1,
  maxK: 500,
  shown: PAGE,
  items: [],
  boardMeta: {},
  index: null,
};

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function j(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

function fmt(n) {
  if (n == null) return '–';
  const v = Number(n);
  if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(1) + 'M';
  if (Math.abs(v) >= 1e4) return (v / 1e3).toFixed(1) + 'k';
  if (Math.abs(v) >= 1e3) return (v / 1e3).toFixed(1) + 'k';
  return String(Math.round(v));
}
function fmtFull(n) { return (n ?? 0).toLocaleString('en-US'); }
function fmtPct(n) { return n == null ? '' : Math.floor(n) + '%'; }

function timeAgo(iso) {
  const t = new Date(iso).getTime();
  if (isNaN(t)) return '';
  const s = Math.max(0, (Date.now() - t) / 1000);
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))} 分钟前`;
  if (s < 86400) return `${Math.floor(s / 3600)} 小时前`;
  return `${Math.floor(s / 86400)} 天前`;
}

/* ---------------- sparkline ---------------- */
function sparkline(series) {
  if (!series || series.length === 0) return '';
  const w = 80, h = 24, pad = 2;
  const vals = series.map(Number);
  const min = Math.min(...vals), max = Math.max(...vals);
  const span = max - min || 1;
  const pts = vals.map((v, i) => {
    const x = pad + (vals.length === 1 ? (w - 2 * pad) / 2 : (w - 2 * pad) * i / (vals.length - 1));
    const y = h - pad - (h - 2 * pad) * (v - min) / span;
    return [x, y];
  });
  const line = pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  const area = `${pad},${h - pad} ` + line + ` ${w - pad},${h - pad}`;
  const up = vals[vals.length - 1] >= vals[0];
  const stroke = up ? 'url(#sparkStroke)' : '#f85149';
  if (vals.length === 1) {
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">`
      + `<circle cx="${pts[0][0]}" cy="${pts[0][1]}" r="2" fill="${stroke}"/></svg>`;
  }
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">`
    + `<polygon points="${area}" fill="url(#sparkFill)"/>`
    + `<polyline points="${line}" fill="none" stroke="${stroke}" stroke-width="1.5"`
    + ` stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}

/* ---------------- rendering ---------------- */
function langDot(lang) {
  if (!lang) return '';
  const c = LANG_COLORS[lang] || '#8b949e';
  return `<span class="lang-tag"><span class="lang-dot" style="background:${c}"></span>${esc(lang)}</span>`;
}

function badges(e) {
  let s = '';
  if (e.approx) s += `<span class="badge-approx" title="对比窗口短于标准周期，数值为近似">≈</span>`;
  if (e.stale) s += `<span class="badge-stale" title="数据来自最近一次成功快照，非当日">⧗</span>`;
  return s;
}

function metricHTML(e, big) {
  // primary metric per board type
  const cls = big ? 'podium-metric' : 'growth-val';
  if (e.growth != null) {
    const g = `<span class="${cls}" style="color:var(--green)">+${fmt(e.growth)}</span>`;
    const r = e.rate != null ? `<span class="rate-pill${e.rate >= 100 ? ' hot' : ''}">${fmtPct(e.rate)}</span>` : '';
    return big ? `<div class="${cls}" style="color:var(--green)">+${fmt(e.growth)} <span class="unit">stars</span></div>` + (r ? `<div style="margin-top:6px">${r}</div>` : '') : g + ' ' + r;
  }
  return `<span class="${cls}">${fmtFull(e.stars)}</span>`;
}

function rowHTML(e) {
  const ageChip = state.board === 'new' && e.created_at
    ? `<span class="top10-chip" style="font-size:11px">创建于 ${Math.max(0, Math.floor((new Date(state.sel + 'T00:00:00') - new Date(e.created_at)) / 86400000))} 天前</span>`
    : '';
  return `<div class="rank-row" style="animation-delay:${Math.min(e.rank * 12, 400)}ms">
    <span class="row-rank${e.rank <= 3 ? ' top' : ''}">${e.rank}</span>
    <img class="row-avatar" src="https://github.com/${esc(e.owner)}.png?size=64" alt="" loading="lazy" width="34" height="34">
    <div class="row-main">
      <div class="row-name">
        <a href="https://github.com/${esc(e.full_name)}" target="_blank" rel="noopener">${esc(e.owner)}/${esc(e.name)}</a>
        ${badges(e)}${ageChip}
      </div>
      <div class="row-desc">${esc(e.description || '')}</div>
    </div>
    <div class="row-meta">
      ${langDot(e.language)}
      <span class="star-count" title="${fmtFull(e.stars)} stars">★ ${fmt(e.stars)}</span>
      <span class="fork-count" title="${fmtFull(e.forks)} forks">⑂ ${fmt(e.forks)}</span>
    </div>
    <div class="row-meta" style="min-width:110px;justify-content:flex-end">
      ${metricHTML(e, false)}
    </div>
    <div class="row-spark">${sparkline(e.series)}</div>
  </div>`;
}

function podiumHTML(e, idx) {
  const medal = ['🥇', '🥈', '🥉'][idx];
  const metric = e.growth != null ? `+${fmt(e.growth)}` : fmtFull(e.stars);
  const unit = e.growth != null ? 'stars' : '';
  const rate = e.rate != null ? `<span class="rate-pill${e.rate >= 100 ? ' hot' : ''}">${fmtPct(e.rate)}</span>` : '';
  return `<div class="podium-card p${idx + 1}">
    <div class="podium-rank">${medal}</div>
    <img class="podium-avatar" src="https://github.com/${esc(e.owner)}.png?size=128" alt="" loading="lazy">
    <div class="podium-name"><a href="https://github.com/${esc(e.full_name)}" target="_blank" rel="noopener">${esc(e.owner)}/${esc(e.name)}</a>${badges(e)}</div>
    <div class="podium-desc">${esc(e.description || '—')}</div>
    <div class="podium-metric" style="color:${e.growth != null ? 'var(--green)' : 'var(--text)'}">${metric}${unit ? ` <span class="unit">${unit}</span>` : ''}</div>
    <div class="podium-sub">${langDot(e.language)}<span>★ ${fmtFull(e.stars)}</span>${rate}</div>
    <div class="podium-spark">${sparkline(e.series)}</div>
  </div>`;
}

function windowLabel() {
  const b = state.boardMeta;
  if (state.board === 'new') return '近 90 天内创建 · 按 Star 排序';
  if (state.board === 'total' || state.board === CUM_BOARD || state.board === 'year_growth') {
    if (b.window_start && b.window_days != null)
      return `${b.window_start} ~ ${state.sel} · ${b.window_days} 天`;
    return '';
  }
  if (b.window_start && b.window_days != null) {
    const approx = b.window_days < ({ daily: 1, weekly: 7, monthly: 30 }[state.board.replace('_rate', '')] || 0);
    return `统计窗口 ${b.window_start} ~ ${state.sel} · ${b.window_days} 天${approx ? '（近似）' : ''}`;
  }
  return '';
}

function renderList() {
  const items = state.items;
  const podium = items.slice(0, 3);
  const rest = items.slice(3, state.shown);
  $('#podiumWrap').innerHTML = podium.length >= 3 ? `<div class="podium">${podium.map(podiumHTML).join('')}</div>` : '';
  $('#listWrap').innerHTML = rest.length
    ? `<div class="rank-list">${rest.map(rowHTML).join('')}</div>`
      + (items.length > state.shown
        ? `<div class="load-more-wrap"><button class="load-more" id="loadMore">加载更多（还有 ${items.length - state.shown} 条）</button></div>`
        : '')
    : (podium.length ? '' : '');
  const lb = $('#loadMore');
  if (lb) lb.onclick = () => { state.shown += PAGE; renderList(); };
}

function setEmpty(msg, pct, opts = {}) {
  $('#emptyState').hidden = false;
  $('#podiumWrap').innerHTML = '';
  $('#listWrap').innerHTML = '';
  $('#monthDetail').hidden = true;
  $('#emptyText').textContent = msg || '暂无榜单数据';
  const h2 = $('#emptyState h2');
  if (h2) h2.textContent = opts.title || '榜单积累中';
  const prog = $('#emptyState .progress');
  if (prog) prog.style.display = pct != null ? '' : 'none';
  $('#progressBar').style.width = `${Math.min(100, pct || 0)}%`;
  $('#progressHint').textContent = pct != null ? `快照积累进度 ${Math.round(pct)}%（月榜完整口径需 31 个有效快照日）` : '';

  const acts = opts.actions || [];
  $('#emptyActions').innerHTML = acts.length
    ? acts.map((a, i) => `<button class="empty-btn" data-act="${i}">${esc(a.label)}</button>`).join('')
    : '';
  $('#emptyActions').querySelectorAll('.empty-btn').forEach((b, i) => {
    b.onclick = () => acts[i].run();
  });

  const pv = opts.preview;
  const rows = pv && pv.items.length ? pv.items : [];
  $('#emptyState').classList.toggle('has-preview', rows.length > 0);
  $('#emptyPreview').innerHTML = rows.length
    ? `<div class="empty-preview-title">${esc(pv.title)} · Top ${rows.length}</div>`
      + rows.map(e => `<a class="preview-row" href="https://github.com/${esc(e.owner)}/${esc(e.name)}" target="_blank" rel="noopener">
          <span class="preview-rank">${e.rank}</span>
          <span class="preview-name">${esc(e.owner)}/${esc(e.name)}</span>
          <span class="preview-stars">★ ${fmt(e.stars)}</span>
        </a>`).join('')
    : '';
}

function clearEmpty() {
  $('#emptyState').hidden = true;
  $('#emptyState').classList.remove('has-preview');
  $('#emptyActions').innerHTML = '';
  $('#emptyPreview').innerHTML = '';
}

/* ---------------- data loading ---------------- */
function buildEmptyCtx(boards, period) {
  const order = period === 'month'
    ? ['new', 'total', CUM_BOARD]
    : ['new', 'total', 'daily', 'weekly', 'monthly'];
  const avail = order.filter(k => boards[k] && boards[k].items && boards[k].items.length);
  const label = (k) => (k === CUM_BOARD ? '月累计' : BOARDS[k].name);
  const actions = avail.slice(0, 2).map(k => ({
    label: `查看${label(k)}`,
    run: () => { state.board = k; state.shown = PAGE; syncURL(); renderAll(); },
  }));
  const first = avail[0];
  const preview = first
    ? { title: label(first), items: boards[first].items.slice(0, 8) }
    : null;
  return { actions, preview };
}

function resetFilter() {
  state.minK = 1; state.maxK = 500; state.shown = PAGE;
  $('#minK').value = 1; $('#maxK').value = 500;
  syncURL(); loadView();
}

async function loadView() {
  clearEmpty();
  $('#monthDetail').hidden = true;
  $('#yearWrap').hidden = true;
  state.items = [];
  state.boardMeta = {};
  $('#windowInfo').textContent = '';
  let emptyCtx = {};
  let rawCount = 0;

  const idx = state.index;
  if (state.period === 'day') {
    const data = await j(`data/days/${state.sel}.json`);
    const board = data.boards[state.board] || { items: [] };
    state.boardMeta = board;
    rawCount = (board.items || []).length;
    state.items = filterItems(board.items || []);
    if (!state.items.length) emptyCtx = buildEmptyCtx(data.boards || {}, 'day');
    document.title = `${BOARDS[state.board].name} · ${state.sel} · Trending Rank Radar`;
  } else if (state.period === 'month') {
    const data = await j(`data/months/${state.sel}.json`);
    const src = state.board === CUM_BOARD ? data.cumulative : (data.boards[state.board] || { items: [] });
    state.boardMeta = src;
    rawCount = (src.items || []).length;
    state.items = filterItems(src.items || []);
    if (!state.items.length) {
      const all = { ...(data.boards || {}) };
      if (data.cumulative) all.cumulative = data.cumulative;
      emptyCtx = buildEmptyCtx(all, 'month');
    }
    // month extras
    if (data.daily_top10 && data.daily_top10.length) {
      $('#monthDetail').hidden = false;
      $('#monthTop10').innerHTML = data.daily_top10.map(day => `
        <div class="top10-day">
          <div class="top10-date">${day.date}</div>
          <div class="top10-items">${day.items.map(e =>
            `<span class="top10-chip"><a href="https://github.com/${esc(e.owner)}/${esc(e.name)}" target="_blank">${esc(e.owner)}/${esc(e.name)}</a> <b>+${fmt(e.growth)}</b></span>`).join('')}
          </div>
        </div>`).join('');
    }
    document.title = `${state.board === CUM_BOARD ? '月累计增长' : BOARDS[state.board].name} · ${state.sel} · Trending Rank Radar`;
  } else { // year
    const data = await j(`data/years/${state.sel}.json`);
    state.boardMeta = data.growth;
    rawCount = (data.growth.items || []).length;
    state.items = filterItems(data.growth.items || []);
    if (!state.items.length && state.index.months && state.index.months.length) {
      emptyCtx = { actions: [{
        label: '查看月度榜单',
        run: () => { state.period = 'month'; state.sel = state.index.months[state.index.months.length - 1]; state.board = 'daily'; state.shown = PAGE; syncURL(); renderAll(); },
      }], preview: null };
    }
    // months grid
    $('#yearWrap').hidden = false;
    $('#monthGrid').innerHTML = data.months.map(m => {
      const [y, mo] = m.split('-');
      const isPartial = m === data.months[data.months.length - 1] && data.partial;
      return `<div class="month-card${isPartial ? ' partial' : ''}" data-month="${m}">
        <div class="m-name">${y}年${Number(mo)}月</div>
        <div class="m-sub">${isPartial ? '进行中' : '完整月'}</div>
      </div>`;
    }).join('');
    document.querySelectorAll('.month-card').forEach(c => {
      c.onclick = () => { state.period = 'month'; state.sel = c.dataset.month; state.board = 'daily'; syncURL(); renderAll(); };
    });
    document.title = `年度增长 · ${state.sel} · Trending Rank Radar`;
  }

  $('#windowInfo').textContent = windowLabel();
  if (!state.items.length) {
    if (rawCount > 0) {
      setEmpty('Star 范围内暂无符合条件的数据', null, {
        title: '筛选无结果',
        actions: [{ label: '重置筛选', run: resetFilter }],
      });
      return;
    }
    const pct = state.index ? Math.min(100, state.index.snapshot_days / 31 * 100) : 0;
    setEmpty('该榜单暂无数据，快照仍在积累', pct, emptyCtx);
    return;
  }
  state.shown = PAGE;
  renderList();
}

function filterItems(items) {
  const lo = (state.minK || 0) * 1000;
  const hi = (state.maxK > 0 ? state.maxK : Infinity) * 1000;
  return items.filter(e => (e.stars ?? 0) >= lo && (e.stars ?? 0) <= hi).slice(0, 200);
}

/* ---------------- controls ---------------- */
function boardTabsForPeriod() {
  if (state.period === 'year') return [];           // year view is single-board
  const tabs = [...BOARD_ORDER];
  if (state.period === 'month') tabs.push(CUM_BOARD);
  return tabs;
}

function renderTabs() {
  const tabs = boardTabsForPeriod();
  $('#boardTabs').innerHTML = tabs.map(b => {
    const label = b === CUM_BOARD ? '月累计' : BOARDS[b].short;
    const active = state.board === b ? ' active' : '';
    return `<button class="tab-btn${active}" data-board="${b}">${label}</button>`;
  }).join('');
  $('#boardTabs').style.display = tabs.length ? 'flex' : 'none';
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => { state.board = btn.dataset.board; state.shown = PAGE; syncURL(); loadView(); };
  });
}

function renderSelOptions() {
  const idx = state.index;
  const sel = $('#selDate');
  let opts = [];
  if (state.period === 'day') opts = idx.dates.map(x => [x, x]);
  else if (state.period === 'month') opts = idx.months.map(x => [x, x + (x === idx.months[idx.months.length - 1] ? '（进行中）' : '')]);
  else opts = idx.years.map(x => [x, x + ' 年']);
  sel.innerHTML = opts.map(([v, t]) => `<option value="${v}">${t}</option>`).join('');
  sel.value = state.sel;
}

function validSel() {
  const idx = state.index;
  const list = state.period === 'day' ? idx.dates : state.period === 'month' ? idx.months : idx.years;
  return list.includes(state.sel) ? state.sel : list[list.length - 1];
}

function syncURL() {
  const p = new URLSearchParams();
  p.set('period', state.period);
  p.set('sel', state.sel);
  if (state.period !== 'year') p.set('board', state.board);
  p.set('min', state.minK); p.set('max', state.maxK);
  history.pushState(null, '', '?' + p.toString());
}

function readURL() {
  const p = new URLSearchParams(location.search);
  state.period = ['day', 'month', 'year'].includes(p.get('period')) ? p.get('period') : 'day';
  state.sel = p.get('sel');
  state.minK = Math.max(0, parseInt(p.get('min') || '1', 10) || 0);
  state.maxK = Math.max(0, parseInt(p.get('max') || '500', 10) || 0);
  const b = p.get('board');
  if (state.period === 'month' && b === CUM_BOARD) state.board = CUM_BOARD;
  else if (BOARD_ORDER.includes(b)) state.board = b;
  else state.board = state.period === 'year' ? 'daily' : 'daily';
  $('#minK').value = state.minK; $('#maxK').value = state.maxK;
}

/* ---------------- stats ---------------- */
function countUp(el, target, suffix = '') {
  const t0 = performance.now(), dur = 700;
  const tick = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = fmtFull(Math.round(target * (1 - Math.pow(1 - p, 3)))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

async function renderStats() {
  const idx = state.index;
  countUp($('#statRepos'), idx.repo_count || 0);
  countUp($('#statDays'), idx.snapshot_days || 0);
  $('#statSpan').textContent = idx.first_day && idx.latest_day
    ? `${idx.first_day.slice(5)} ~ ${idx.latest_day.slice(5)}` : '–';
  $('#freshText').textContent = `数据更新于 ${timeAgo(idx.generated_at)}`;
  try {
    const latest = await j(`data/days/${idx.latest_day}.json`);
    const top1 = latest.boards?.daily?.items?.[0];
    $('#statTop1').textContent = top1 && top1.growth != null ? '+' + fmt(top1.growth) : '–';
  } catch { $('#statTop1').textContent = '–'; }
}

/* ---------------- boot ---------------- */
async function renderAll() {
  state.sel = validSel();
  renderTabs();
  renderSelOptions();
  document.querySelectorAll('.seg-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.period === state.period));
  await loadView();
}

async function init() {
  document.documentElement.classList.add('m-enter');
  readURL();
  try {
    state.index = await j('data/index.json');
  } catch (e) {
    setEmpty('数据文件尚未生成，请稍后再来', 0);
    return;
  }
  if (!state.sel) state.sel = state.index.latest_day;
  await renderStats();
  await renderAll();

  // events
  $('#selDate').onchange = (e) => { state.sel = e.target.value; syncURL(); loadView(); };
  document.querySelectorAll('.seg-btn').forEach(btn => {
    btn.onclick = () => {
      state.period = btn.dataset.period;
      state.sel = null;
      state.board = 'daily';
      renderAll();
      syncURL();
    };
  });
  $('#applyFilter').onclick = () => {
    state.minK = Math.max(0, parseInt($('#minK').value || '0', 10) || 0);
    state.maxK = Math.max(0, parseInt($('#maxK').value || '0', 10) || 0);
    state.shown = PAGE;
    syncURL(); loadView();
  };
  window.addEventListener('popstate', () => { readURL(); renderAll(); });
}

init();
