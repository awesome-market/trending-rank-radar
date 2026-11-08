/* Shared core for index + repo pages: i18n, helpers, theme/lang chrome.
 * Load before app.js / repo.js (plain scripts, no modules).
 */
'use strict';

/* ---------------- i18n ---------------- */
const I18N = {
  zh: {
    'skip': '跳到榜单',
    'loading': '数据加载中…',
    'hero.sub': 'GitHub 开源项目趋势榜单 · 每日双快照 · 八种榜单 · 日 / 月 / 年历史回看',
    'hv.kicker': '独立采集 · 开源数据',
    'hv.title': '独立追踪 GitHub 星标的每一次脉动',
    'hv.sub': '每日两次快照，用差值还原真实增长——不是又一份热榜镜像。',
    'hv.cta': '浏览今日榜单 →',
    'hv.cap': '近 {n} 日 Star 曲线',
    'board.new': '新星榜', 'board.daily': '日飙升榜', 'board.daily_rate': '日增速榜',
    'board.weekly': '周飙升榜', 'board.weekly_rate': '周增速榜',
    'board.monthly': '月飙升榜', 'board.monthly_rate': '月增速榜',
    'board.total': '总榜', 'board.cumulative': '月累计榜',
    'boards.aria': '榜单',
    'period.day': '日', 'period.month': '月', 'period.year': '年',
    'period.aria': '时间维度',
    'date.label': '榜单日期', 'date.aria': '日期',
    'star.range': 'Star 范围', 'min': '下限', 'max': '上限', 'apply': '筛选',
    'minK.aria': '最小 Star 千数', 'maxK.aria': '最大 Star 千数',
    'empty.title': '榜单积累中',
    'empty.text': '快照数据正在积累，增长榜需要至少 2 个有效快照日。',
    'empty.filter.title': '筛选无结果',
    'empty.filter.text': 'Star 范围内暂无符合条件的数据',
    'empty.nodata': '暂无榜单数据',
    'empty.acc': '该榜单暂无数据，快照仍在积累',
    'empty.reset': '重置筛选',
    'empty.view': '查看{b}',
    'empty.viewmonth': '查看月度榜单',
    'empty.init': '数据文件尚未生成，请稍后再来',
    'progress.hint': '快照积累进度 {p}%（月榜完整口径需 31 个有效快照日）',
    'preview.top': '{t} · Top {n}',
    'load.more': '加载更多（还有 {n} 条）',
    'window.new': '近 90 天内创建 · 按 Star 排序',
    'window.range': '统计窗口 {s} ~ {e} · {d} 天',
    'window.approx': '（近似）',
    'badge.approx': '对比窗口短于标准周期，数值为近似',
    'badge.stale': '数据来自最近一次成功快照，非当日',
    'age': '创建于 {n} 天前',
    'rank.prerank': '筛选前排名 {n}',
    'open.gh': '在 GitHub 打开 {r}',
    'fresh': '数据更新于 {t}',
    'ago.m': '{n} 分钟前', 'ago.h': '{n} 小时前', 'ago.d': '{n} 天前',
    'sel.ongoing': '（进行中）',
    'month.name': '{y}年{m}月',
    'month.partial': '进行中', 'month.full': '完整月',
    'month.top10': '当月每日飙升 Top10 摘要',
    'year.entry': '年度月度榜入口',
    'foot.stats': '跟踪 {r} 个仓库 · {d} 个快照日 · 覆盖 {s} ~ {e} · 最近飙升 Top1 {g}',
    'foot.line1': '数据来源：GitHub API 独立采集 · 榜单由快照差值计算 · 仅供参考，不构成投资建议',
    'foot.line2': '新榜 / 总榜为本站跟踪仓库范围内排名 · 增速 = 增长量 ÷ 窗口起点 Star 基数',
    'title.board': '{b} · {s} · GitHub Trending Rank Radar',
    'title.cum': '月累计增长',
    'title.year': '年度增长 · {s} · GitHub Trending Rank Radar',
    'theme.aria': '切换深浅色主题',
    'lang.aria': 'Switch to English',
    'units.stars': 'stars', 'units.forks': 'forks', 'units.watchers': 'watchers',
    'units.prs': 'PRs', 'units.issues': 'issues', 'units.releases': 'releases',
    'units.discussions': 'discussions',
    'open.detail': '查看 {r} 的详情与趋势',
    'rp.back': '← 返回榜单',
    'rp.notfound': '未找到该仓库',
    'rp.notfound.hint': '该仓库可能不在跟踪范围内，或链接有误。',
    'rp.overview': '指标总览',
    'rp.trend': '趋势曲线',
    'rp.boards': '榜单名次',
    'rp.issues': '热门 Issues',
    'rp.disc': '最新 Discussions',
    'rp.release': '最新 Release',
    'rp.readme': 'README 摘要',
    'rp.share': '生成分享图',
    'rp.share.dl': '下载 PNG',
    'rp.share.cp': '复制图片',
    'rp.share.done': '已复制',
    'rp.created': '创建于',
    'rp.license': '许可证',
    'rp.homepage': '主页',
    'rp.range.7d': '近 7 天', 'rp.range.30d': '近 30 天', 'rp.range.all': '全部',
    'rp.growth.d': '日增', 'rp.growth.w': '周增', 'rp.growth.m': '月增',
    'rp.comments': '{n} 评论',
    'rp.chart.need': '曲线需要 2 个以上有效快照日，正在积累',
    'rp.updated': '快照更新',
    'rp.nodata': '该数据暂未采集',
    'rp.view.gh': 'GitHub 详情',
    'rp.rank.at': '{b} #{n}',
    'title.repo': '{r} · GitHub Trending Rank Radar',
  },
  en: {
    'skip': 'Skip to rankings',
    'loading': 'Loading data…',
    'hero.sub': 'Independent GitHub trend rankings · twice-daily snapshots · 8 boards · day / month / year history',
    'hv.kicker': 'Independent · Open Data',
    'hv.title': 'Tracking every pulse of GitHub stars, independently',
    'hv.sub': 'Two snapshots a day; growth computed from real diffs — not another mirror of the hot list.',
    'hv.cta': 'Browse today\u2019s boards →',
    'hv.cap': '{n}-day star curve',
    'board.new': 'New Repos', 'board.daily': 'Daily Growth', 'board.daily_rate': 'Daily Rate',
    'board.weekly': 'Weekly Growth', 'board.weekly_rate': 'Weekly Rate',
    'board.monthly': 'Monthly Growth', 'board.monthly_rate': 'Monthly Rate',
    'board.total': 'All-Time', 'board.cumulative': 'Month Total',
    'boards.aria': 'Boards',
    'period.day': 'Day', 'period.month': 'Month', 'period.year': 'Year',
    'period.aria': 'Time period',
    'date.label': 'Board date', 'date.aria': 'Date',
    'star.range': 'Star range', 'min': 'Min', 'max': 'Max', 'apply': 'Apply',
    'minK.aria': 'Minimum stars (k)', 'maxK.aria': 'Maximum stars (k)',
    'empty.title': 'Rankings warming up',
    'empty.text': 'Snapshots are still accumulating; growth boards need at least 2 valid snapshot days.',
    'empty.filter.title': 'No matches',
    'empty.filter.text': 'No repositories match this star range',
    'empty.nodata': 'No board data yet',
    'empty.acc': 'No data on this board yet; snapshots still accumulating',
    'empty.reset': 'Reset filter',
    'empty.view': 'View {b}',
    'empty.viewmonth': 'View monthly boards',
    'empty.init': 'Data files are not generated yet — check back soon',
    'progress.hint': 'Snapshot progress {p}% (31 valid snapshot days needed for the full monthly window)',
    'preview.top': '{t} · Top {n}',
    'load.more': 'Load more ({n} remaining)',
    'window.new': 'Created within the last 90 days · sorted by stars',
    'window.range': 'Window {s} ~ {e} · {d} days',
    'window.approx': ' (approx)',
    'badge.approx': 'Window shorter than the standard period; value is approximate',
    'badge.stale': 'Value from the latest successful snapshot, not this date',
    'age': 'created {n}d ago',
    'rank.prerank': 'Rank {n} before filtering',
    'open.gh': 'Open {r} on GitHub',
    'fresh': 'Data updated {t}',
    'ago.m': '{n}m ago', 'ago.h': '{n}h ago', 'ago.d': '{n}d ago',
    'sel.ongoing': ' (ongoing)',
    'month.name': '{m} {y}',
    'month.partial': 'ongoing', 'month.full': 'full month',
    'month.top10': 'Daily Top 10 summary this month',
    'year.entry': 'Monthly boards',
    'foot.stats': '{r} repos tracked · {d}d of snapshots · covering {s} ~ {e} · latest daily top {g}',
    'foot.line1': 'Source: independently collected via the GitHub API · boards computed from snapshot diffs · for reference only',
    'foot.line2': 'New / All-Time boards rank within our tracked set · rate = growth ÷ star base at window start',
    'title.board': '{b} · {s} · GitHub Trending Rank Radar',
    'title.cum': 'Monthly cumulative growth',
    'title.year': 'Yearly growth · {s} · GitHub Trending Rank Radar',
    'theme.aria': 'Toggle dark/light theme',
    'lang.aria': '切换到中文',
    'units.stars': 'stars', 'units.forks': 'forks', 'units.watchers': 'watchers',
    'units.prs': 'PRs', 'units.issues': 'issues', 'units.releases': 'releases',
    'units.discussions': 'discussions',
    'open.detail': 'View details & trends for {r}',
    'rp.back': '← Back to boards',
    'rp.notfound': 'Repository not found',
    'rp.notfound.hint': 'It may be outside the tracked set, or the link is wrong.',
    'rp.overview': 'Overview',
    'rp.trend': 'Trend',
    'rp.boards': 'Board placements',
    'rp.issues': 'Top Issues',
    'rp.disc': 'Latest Discussions',
    'rp.release': 'Latest Release',
    'rp.readme': 'README excerpt',
    'rp.share': 'Share image',
    'rp.share.dl': 'Download PNG',
    'rp.share.cp': 'Copy image',
    'rp.share.done': 'Copied',
    'rp.created': 'Created',
    'rp.license': 'License',
    'rp.homepage': 'Homepage',
    'rp.range.7d': '7D', 'rp.range.30d': '30D', 'rp.range.all': 'All',
    'rp.growth.d': 'day', 'rp.growth.w': 'week', 'rp.growth.m': 'month',
    'rp.comments': '{n} comments',
    'rp.chart.need': 'The curve needs 2+ snapshot days — still accumulating',
    'rp.updated': 'Snapshot',
    'rp.nodata': 'Not collected yet',
    'rp.view.gh': 'Open on GitHub',
    'rp.rank.at': '{b} #{n}',
    'title.repo': '{r} · GitHub Trending Rank Radar',
  },
};

let LANG = (() => {
  try {
    const l = localStorage.getItem('lang');
    if (l === 'zh' || l === 'en') return l;
  } catch { /* private mode */ }
  return (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
})();

function t(k, p) {
  let s = (I18N[LANG] && I18N[LANG][k]) ?? I18N.zh[k] ?? k;
  if (p) for (const kk of Object.keys(p)) s = s.split('{' + kk + '}').join(p[kk]);
  return s;
}

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
function fmtPct(n) { return n == null ? '' : '+' + Math.floor(n) + '%'; }

function timeAgo(iso) {
  const t0 = new Date(iso).getTime();
  if (isNaN(t0)) return '';
  const s = Math.max(0, (Date.now() - t0) / 1000);
  if (s < 3600) return t('ago.m', { n: Math.max(1, Math.floor(s / 60)) });
  if (s < 86400) return t('ago.h', { n: Math.floor(s / 3600) });
  return t('ago.d', { n: Math.floor(s / 86400) });
}

/* ---------------- i18n application ---------------- */
function applyStaticI18n() {
  document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
  const lb = $('#langToggle');
  if (lb) {
    lb.textContent = LANG === 'zh' ? 'EN' : '中';
    lb.setAttribute('aria-label', t('lang.aria'));
    lb.title = t('lang.aria');
  }
}

/* ---------------- sparkline ---------------- */
function sparkline(series, w = 80, h = 24, pad = 2, areaId = 'sparkFill', strokeId = 'sparkStroke') {
  if (!series || series.length === 0) return '';
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
  const stroke = up ? `url(#${strokeId})` : '#f85149';
  if (vals.length === 1) {
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">`
      + `<circle cx="${pts[0][0]}" cy="${pts[0][1]}" r="2" fill="${stroke}"/></svg>`;
  }
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true" preserveAspectRatio="none">`
    + `<polygon points="${area}" fill="url(#${areaId})"/>`
    + `<polyline points="${line}" fill="none" stroke="${stroke}" stroke-width="1.5"`
    + ` stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}

/* ---------------- shared chrome (theme + language toggles) ---------------- */
function bindChrome(onLangChange) {
  const tt = document.getElementById('themeToggle');
  if (tt) tt.onclick = () => {
    const th = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = th;
    try { localStorage.setItem('theme', th); } catch { /* private mode */ }
    const meta = document.getElementById('themeMeta');
    if (meta) meta.content = th === 'light' ? '#f6f8fa' : '#0a0e14';
  };
  const lb = document.getElementById('langToggle');
  if (lb) lb.onclick = () => {
    LANG = LANG === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('lang', LANG); } catch { /* private mode */ }
    applyStaticI18n();
    if (typeof onLangChange === 'function') onLangChange();
  };
}
