/* GitHub Trending Rank Radar — main boards page (loads after common.js) */
'use strict';

const BOARD_ORDER = ['new', 'daily', 'daily_rate', 'weekly', 'weekly_rate',
                     'monthly', 'monthly_rate', 'total'];
const CUM_BOARD = 'cumulative';   // month-only pseudo board
const PAGE = 50;

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
  hero: null,      // cached { top1 } for hero chart + footer stats
};


/* ---------------- rendering ---------------- */
const ICONS = {
  star: 'M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z',
  fork: 'M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0-1.5.75.75.75 0 0 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z',
  eye: 'M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.671 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.329 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.175 11.758 6.527 12.5 8 12.5c1.473 0 2.824-.742 3.955-1.715 1.125-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.241-1.75-2.366-2.717C10.825 4.242 9.473 3.5 8 3.5c-1.473 0-2.824.742-3.955 1.715C5.744 6.182 4.914 7.311 4.5 7.932ZM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z',
  pr: 'M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z',
  issue: 'M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z',
  tag: 'M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
  ext: 'M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z',
};
function icon(n, cls = 'm-ico', s = 13) {
  return `<svg viewBox="0 0 16 16" width="${s}" height="${s}" class="${cls}" fill="currentColor" aria-hidden="true"><path d="${ICONS[n]}"/></svg>`;
}
function mItem(iconName, val, unitKey, aux = true) {
  if (val == null) return '';
  const unit = t('units.' + unitKey);
  return `<span class="m${aux ? ' m-aux' : ''}" title="${unit} ${fmtFull(val)}">${icon(iconName)} ${fmt(val)}</span>`;
}

function langDot(lang) {
  if (!lang) return '';
  const c = LANG_COLORS[lang] || '#8b949e';
  return `<span class="lang-tag"><span class="lang-dot" style="background:${c}"></span>${esc(lang)}</span>`;
}

function badges(e) {
  let s = '';
  if (e.approx) s += `<span class="badge-approx" title="${t('badge.approx')}">≈</span>`;
  if (e.stale) s += `<span class="badge-stale" title="${t('badge.stale')}">⧗</span>`;
  return s;
}

function rowSideHTML(e) {
  if (e.growth != null) {
    const r = e.rate != null ? `<span class="rate-pill${e.rate >= 100 ? ' hot' : ''}">${fmtPct(e.rate)}</span>` : '';
    return `<div class="row-growth"><span class="up-tri">▲</span>+${fmt(e.growth)}</div>${r}`;
  }
  return `<div class="row-stars-big">${icon('star', 'm-ico', 14)} ${fmtFull(e.stars)}</div><div class="row-stars-cap">${t('units.stars')}</div>`;
}

function nameLinkHTML(e) {
  const fn = esc(e.full_name);
  return `<a class="row-link" href="repo.html?r=${encodeURIComponent(e.full_name)}" title="${esc(t('open.detail', { r: e.full_name }))}">`
    + `<span class="row-owner">${esc(e.owner)}</span><span class="row-sep">/</span>`
    + `<span class="row-repo">${esc(e.name)}</span></a>`
    + `<a class="ext-link" href="https://github.com/${fn}" target="_blank" rel="noopener" title="${esc(t('open.gh', { r: e.full_name }))}">${icon('ext', 'ext-ico', 12)}</a>`;
}

function rowHTML(e, dispRank = e.rank) {
  // state.sel 为 YYYY-MM 时用月末近似日，避免 Invalid Date → NaN 天
  const selEnd = state.sel && state.sel.length > 7 ? state.sel : `${state.sel}-28`;
  const ageDays = Math.max(0, Math.floor((new Date(selEnd + 'T00:00:00') - new Date(e.created_at)) / 86400000));
  const ageChip = state.board === 'new' && e.created_at
    ? `<span class="row-age">${t('age', { n: ageDays })}</span>`
    : '';
  return `<div class="rank-row" style="animation-delay:${Math.min(dispRank * 12, 400)}ms">
    <span class="row-rank${dispRank <= 3 ? ' top' : ''}"${dispRank !== e.rank ? ` title="${esc(t('rank.prerank', { n: e.rank }))}"` : ''}>${dispRank}</span>
    <img class="row-avatar" src="${esc(e.avatar || `https://github.com/${e.owner}.png?size=96`)}" alt="" loading="lazy" width="48" height="48" onerror="this.style.visibility='hidden'">
    <div class="row-body">
      <div class="row-name">
        ${nameLinkHTML(e)}${badges(e)}${ageChip}
      </div>
      <div class="row-meta">
        ${langDot(e.language)}
        <span class="m m-stars" title="${t('units.stars')} ${fmtFull(e.stars)}">${icon('star')} ${fmt(e.stars)}</span>
        ${mItem('fork', e.forks, 'forks', false)}
        ${mItem('eye', e.watchers, 'watchers')}
        ${mItem('pr', e.prs, 'prs')}
        ${mItem('issue', e.issues, 'issues')}
        ${mItem('tag', e.releases, 'releases')}
      </div>
      ${e.description ? `<div class="row-desc">${esc(e.description)}</div>` : ''}
    </div>
    <div class="row-side">
      ${e.series && e.series.length > 1 ? `<div class="row-spark">${sparkline(e.series)}</div>` : ''}
      ${rowSideHTML(e)}
    </div>
  </div>`;
}

function podiumHTML(e, idx) {
  const medal = ['🥇', '🥈', '🥉'][idx];
  const metric = e.growth != null ? `+${fmt(e.growth)}` : fmtFull(e.stars);
  const unit = e.growth != null ? 'stars' : '';
  const rate = e.rate != null ? `<span class="rate-pill${e.rate >= 100 ? ' hot' : ''}">${fmtPct(e.rate)}</span>` : '';
  return `<div class="podium-card p${idx + 1}">
    <div class="podium-rank">${medal}</div>
    <img class="podium-avatar" src="${esc(e.avatar || `https://github.com/${e.owner}.png?size=128`)}" alt="" loading="lazy">
    <div class="podium-name">${nameLinkHTML(e)}${badges(e)}</div>
    <div class="podium-desc">${esc(e.description || '—')}</div>
    <div class="podium-metric" style="color:${e.growth != null ? 'var(--green)' : 'var(--text)'}">${metric}${unit ? ` <span class="unit">${unit}</span>` : ''}</div>
    <div class="podium-sub">${langDot(e.language)}<span>★ ${fmtFull(e.stars)}</span>${rate}</div>
    ${e.series && e.series.length > 1 ? `<div class="podium-spark">${sparkline(e.series)}</div>` : ''}
  </div>`;
}

function windowLabel() {
  const b = state.boardMeta;
  if (state.board === 'new') return t('window.new');
  if (state.board === 'total' || state.board === CUM_BOARD || state.board === 'year_growth') {
    if (b.window_start && b.window_days != null)
      return t('window.range', { s: b.window_start, e: state.sel, d: b.window_days });
    return '';
  }
  if (b.window_start && b.window_days != null) {
    const approx = b.window_days < ({ daily: 1, weekly: 7, monthly: 30 }[state.board.replace('_rate', '')] || 0);
    return t('window.range', { s: b.window_start, e: state.sel, d: b.window_days }) + (approx ? t('window.approx') : '');
  }
  return '';
}

function renderList() {
  const items = state.items;
  const podium = items.slice(0, 3);
  const rest = items.slice(3, state.shown);
  $('#podiumWrap').innerHTML = podium.length >= 3 ? `<div class="podium">${podium.map(podiumHTML).join('')}</div>` : '';
  $('#listWrap').innerHTML = rest.length
    ? `<div class="rank-list">${rest.map((e, i) => rowHTML(e, i + 4)).join('')}</div>`
      + (items.length > state.shown
        ? `<div class="load-more-wrap"><button class="load-more" id="loadMore">${t('load.more', { n: items.length - state.shown })}</button></div>`
        : '')
    : '';
  const lb = $('#loadMore');
  if (lb) lb.onclick = () => { state.shown += PAGE; renderList(); };
}

function setEmpty(msg, pct, opts = {}) {
  $('#emptyState').hidden = false;
  $('#podiumWrap').innerHTML = '';
  $('#listWrap').innerHTML = '';
  $('#monthDetail').hidden = true;
  $('#emptyText').textContent = msg || t('empty.nodata');
  const h2 = $('#emptyState h2');
  if (h2) h2.textContent = opts.title || t('empty.title');
  const prog = $('#emptyState .progress');
  if (prog) prog.style.display = pct != null ? '' : 'none';
  $('#progressBar').style.width = `${Math.min(100, pct || 0)}%`;
  $('#progressHint').textContent = pct != null ? t('progress.hint', { p: Math.round(pct) }) : '';

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
    ? `<div class="empty-preview-title">${esc(t('preview.top', { t: pv.title, n: rows.length }))}</div>`
      + rows.map(e => `<a class="preview-row" href="repo.html?r=${encodeURIComponent(`${e.owner}/${e.name}`)}">
          <span class="preview-rank">${e.rank}</span>
          <span class="preview-name"><span class="row-owner">${esc(e.owner)}</span>/${esc(e.name)}</span>
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
function boardLabel(k) { return t('board.' + k); }

function buildEmptyCtx(boards, period) {
  const order = period === 'month'
    ? ['new', 'total', CUM_BOARD]
    : ['new', 'total', 'daily', 'weekly', 'monthly'];
  const avail = order.filter(k => boards[k] && boards[k].items && boards[k].items.length);
  const actions = avail.slice(0, 2).map(k => ({
    label: t('empty.view', { b: boardLabel(k) }),
    run: () => { state.board = k; state.shown = PAGE; syncURL(); renderAll(); },
  }));
  const first = avail[0];
  const preview = first
    ? { title: boardLabel(first), items: boards[first].items.slice(0, 8) }
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
    document.title = t('title.board', { b: boardLabel(state.board), s: state.sel });
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
            `<span class="top10-chip"><a href="repo.html?r=${encodeURIComponent(`${e.owner}/${e.name}`)}"><span class="row-owner">${esc(e.owner)}</span>/${esc(e.name)}</a> <b>+${fmt(e.growth)}</b></span>`).join('')}
          </div>
        </div>`).join('');
    }
    document.title = t('title.board', {
      b: state.board === CUM_BOARD ? t('title.cum') : boardLabel(state.board), s: state.sel });
  } else { // year
    const data = await j(`data/years/${state.sel}.json`);
    state.boardMeta = data.growth;
    rawCount = (data.growth.items || []).length;
    state.items = filterItems(data.growth.items || []);
    if (!state.items.length && state.index.months && state.index.months.length) {
      emptyCtx = { actions: [{
        label: t('empty.viewmonth'),
        run: () => { state.period = 'month'; state.sel = state.index.months[state.index.months.length - 1]; state.board = 'daily'; state.shown = PAGE; syncURL(); renderAll(); },
      }], preview: null };
    }
    // months grid
    $('#yearWrap').hidden = false;
    $('#monthGrid').innerHTML = data.months.map(m => {
      const [y, mo] = m.split('-');
      const mName = LANG === 'zh' ? t('month.name', { y, m: Number(mo) })
        : t('month.name', { y, m: MONTHS_EN[Number(mo) - 1] });
      const isPartial = m === data.months[data.months.length - 1] && data.partial;
      return `<div class="month-card${isPartial ? ' partial' : ''}" data-month="${m}">
        <div class="m-name">${mName}</div>
        <div class="m-sub">${isPartial ? t('month.partial') : t('month.full')}</div>
      </div>`;
    }).join('');
    document.querySelectorAll('.month-card').forEach(c => {
      c.onclick = () => { state.period = 'month'; state.sel = c.dataset.month; state.board = 'daily'; syncURL(); renderAll(); };
    });
    document.title = t('title.year', { s: state.sel });
  }

  $('#windowInfo').textContent = windowLabel();
  if (!state.items.length) {
    if (rawCount > 0) {
      setEmpty(t('empty.filter.text'), null, {
        title: t('empty.filter.title'),
        actions: [{ label: t('empty.reset'), run: resetFilter }],
      });
      return;
    }
    const pct = state.index ? Math.min(100, state.index.snapshot_days / 31 * 100) : 0;
    setEmpty(t('empty.acc'), pct, emptyCtx);
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
    const active = state.board === b ? ' active' : '';
    return `<button class="tab-btn${active}" data-board="${b}">${boardLabel(b)}</button>`;
  }).join('');
  $('#boardTabs').style.display = tabs.length ? 'flex' : 'none';
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => { state.board = btn.dataset.board; state.shown = PAGE; syncURL(); renderAll(); };
  });
}

function renderSelOptions() {
  const idx = state.index;
  const sel = $('#selDate');
  let opts = [];
  if (state.period === 'day') opts = idx.dates.map(x => [x, x]);
  else if (state.period === 'month') opts = idx.months.map(x => [x, x + (x === idx.months[idx.months.length - 1] ? t('sel.ongoing') : '')]);
  else opts = idx.years.map(x => [x, LANG === 'zh' ? x + ' 年' : x]);
  sel.innerHTML = opts.map(([v, tx]) => `<option value="${v}">${tx}</option>`).join('');
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
  else state.board = 'new';
  $('#minK').value = state.minK; $('#maxK').value = state.maxK;
}

/* ---------------- hero + footer stats ---------------- */
async function loadHeroData() {
  const idx = state.index;
  if (!state.hero) {
    state.hero = { top1: null };
    try {
      const latest = await j(`data/days/${idx.latest_day}.json`);
      const top1 = latest.boards?.daily?.items?.[0]
        || latest.boards?.new?.items?.[0]
        || latest.boards?.total?.items?.[0];
      if (top1) state.hero.top1 = top1;
    } catch { /* keep null */ }
  }
  renderHero();
  renderFootStats();
}

function renderHero() {
  const top1 = state.hero && state.hero.top1;
  const chart = $('#hvChart'), cap = $('#hvCap');
  if (top1 && top1.series && top1.series.length > 1) {
    chart.innerHTML = sparkline(top1.series, 620, 150, 6, 'sparkFill', 'sparkStroke');
    const g = top1.growth != null ? `+${fmtFull(top1.growth)}` : fmtFull(top1.stars);
    cap.innerHTML = `<a href="repo.html?r=${encodeURIComponent(top1.full_name)}">`
      + `<b>${esc(top1.full_name)}</b> ${g}</a>`
      + `<span class="hv-cap-sub">${t('hv.cap', { n: top1.series.length })}</span>`;
  } else {
    chart.innerHTML = `<svg class="hv-radar" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="url(#sparkStroke)" stroke-width="1.5" opacity="0.4"/>
      <circle cx="24" cy="24" r="12" stroke="url(#sparkStroke)" stroke-width="1" opacity="0.3"/>
      <circle cx="24" cy="24" r="4" fill="url(#sparkStroke)"/>
      <g class="radar-sweep"><line x1="24" y1="24" x2="38" y2="10" stroke="#58a6ff" stroke-width="1.5" stroke-linecap="round"/></g>
    </svg>`;
    cap.textContent = '';
  }
  const idx = state.index;
  $('#freshText').textContent = idx && idx.generated_at ? t('fresh', { t: timeAgo(idx.generated_at) }) : '';
}

function renderFootStats() {
  const idx = state.index;
  const top1 = state.hero && state.hero.top1;
  const g = top1 && top1.growth != null ? '+' + fmtFull(top1.growth) : '–';
  $('#footStats').textContent = idx
    ? t('foot.stats', {
        r: fmtFull(idx.repo_count || 0),
        d: idx.snapshot_days || 0,
        s: (idx.first_day || '').slice(5) || '–',
        e: (idx.latest_day || '').slice(5) || '–',
        g })
    : '';
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
  applyStaticI18n();
  try {
    state.index = await j('data/index.json');
  } catch (e) {
    setEmpty(t('empty.init'), 0);
    return;
  }
  if (!state.sel) state.sel = state.index.latest_day;
  await renderAll();
  loadHeroData();   // fire and forget; renders hero chart + footer stats when done

  // events
  bindChrome(() => { renderHero(); renderFootStats(); renderAll(); });
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
