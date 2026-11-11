/* Shared core for index + repo pages: i18n, helpers, theme/lang chrome.
 * Load before app.js / repo.js (plain scripts, no modules).
 */
'use strict';

/* ---------------- i18n ---------------- */
const I18N = {
  zh: {
    'skip': '跳到榜单',
    'loading': '数据加载中…',
    'hero.sub': 'GitHub 开源项目趋势榜单 · 每日双快照 · 十一种榜单 · 日 / 月 / 年历史回看',
    'hv.kicker': '独立采集 · 开源数据',
    'hv.title': '独立追踪 GitHub 星标的每一次脉动',
    'hv.sub': '每日两次快照，用差值还原真实增长——不是又一份热榜镜像。',
    'hv.cta': '浏览今日榜单 →',
    'hv.cap': '近 {n} 日 Star 曲线',
    'board.new': '新星榜', 'board.debut': '首登榜',
    'board.daily': '日飙升榜', 'board.daily_rate': '日增速榜',
    'board.weekly': '周飙升榜', 'board.weekly_rate': '周增速榜',
    'board.monthly': '月飙升榜', 'board.monthly_rate': '月增速榜',
    'board.total': '总榜', 'board.cumulative': '月累计榜',
    'board.daily_forks': 'Fork 日增榜', 'board.daily_watchers': 'Watch 日增榜',
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
    'search.scope.repo': '仓库', 'search.scope.news': '新闻',
    'search.scope.aria': '搜索范围',
    'search.ph.repo': '搜索仓库 / 作者 / 语言…',
    'search.ph.news': '搜索新闻标题…',
    'search.none.repo': '没有匹配的仓库',
    'search.none.news': '没有匹配的新闻',
    'search.count': '{n} 个结果',
    'search.err': '搜索服务暂不可用',
    'auth.login': '登陆', 'auth.logout': '退出登录',
    'auth.email': '或用邮箱', 'auth.user': '用户名或邮箱',
    'auth.pass': '密码（≥8位）', 'auth.register': '注册',
    'auth.emailonly': '邮箱', 'auth.err': '操作失败，请重试',
    'auth.toReg': '没有账号？注册', 'auth.toLogin': '已有账号？登陆',
    'auth.e.username_taken': '用户名已被占用',
    'auth.e.email_registered': '该邮箱已注册',
    'auth.e.username_not_allowed': '用户名包含不允许的内容',
    'auth.e.bad_credentials': '用户名或密码错误',
    'auth.e.account_banned': '账号已被禁用',
    'auth.e.bad_code': '验证码不正确',
    'auth.e.code_expired': '验证码已过期，请重新发送',
    'auth.e.no_code': '请先获取验证码',
    'auth.e.no_email': '账户未绑定邮箱',
    'auth.e.mail_failed': '邮件发送失败，请稍后重试',
    'auth.e.unverified_email': '请先验证邮箱',
    'auth.e.username_rejected': '用户名未通过审核，请修改用户名',
    'auth.e.cooldown': '发送太频繁，请稍候',
    'nm.title': '修改用户名',
    'nm.why': '你的用户名未通过审核，请换一个新名字后再评论',
    'nm.ph': '新的用户名',
    'nm.go': '保存',
    'auth.sw.register': '没有账号？注册',
    'auth.sw.login': '已有账号？登录',
    'auth.forgot': '忘记密码？',
    'auth.back.login': '返回登录',
    'auth.reset.title': '重置密码',
    'auth.reset.ask': '输入注册邮箱，我们发送重置码',
    'auth.reset.send': '发送重置码',
    'auth.reset.go': '重置密码',
    'auth.reset.hint': '重置码已发送至 {e}，请查收（含垃圾箱）',
    'auth.reset.sent': '重置码已重新发送',
    'auth.verify.title': '验证邮箱',
    'auth.verify.hint': '验证码已发送至 {e}，请查收（含垃圾箱）',
    'auth.verify.ph': '6 位验证码',
    'auth.verify.go': '激活',
    'auth.verify.ok': '邮箱已激活',
    'auth.verify.resend': '重发激活邮件',
    'auth.verify.wait': '{s} 秒后可重发',
    'auth.verify.sent': '已重新发送',
    'soc.like': '点赞', 'soc.fav': '收藏', 'soc.views': '浏览',
    'fav.mine': '我的收藏', 'fav.empty': '还没有收藏，去榜单里点 ★',
    'cm.title': '评论', 'cm.ph': '写下你的评论…',
    'cm.submit': '发布', 'cm.login': '登录后可评论',
    'cm.pending': '审核中', 'cm.report': '举报', 'cm.del': '删除',
    'cm.like': '顶',
    'cm.empty': '还没有评论，来抢沙发', 'cm.posted': '已提交，通过后显示',
    'cm.ai': 'AI 翻译',
    'cm.reply': '回复', 'cm.replyto': '回复 @{n}', 'cm.cancel': '取消',
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
    'window.debut': '首次进入任一榜单 · 按日增长排序',
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
    'title.lang': '{l} · GitHub Trending Rank Radar',
    'title.langboard': '{l} · {b} · {s} · GitHub Trending Rank Radar',
    'title.tag': '#{g} · GitHub Trending Rank Radar',
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
    'rp.share.title': '趋势分享图',
    'rp.share.cur': '当前',
    'rp.share.trend': 'Star 趋势 · 近30天日趋势',
    'rp.share.slogan': '发现优秀开源项目',
    'rp.share.scan': '扫码查看详情',
    'rp.share.hint': '手机端可长按图片保存，分享到朋友圈 / 社群',
    'rp.share.nodata': '数据收集中…',

    'rp.share.dl': '下载 PNG',
    'rp.share.cp': '复制图片',
    'rp.share.done': '已复制',
    'rp.created': '创建于',
    'rp.license': '许可证',
    'rp.homepage': '主页',
    'rp.range.7d': '近 7 天', 'rp.range.30d': '近 30 天', 'rp.range.all': '全部',
    'rp.growth.d': '日增', 'rp.growth.w': '周增', 'rp.growth.m': '月增',
    'rp.growth.ds': '日', 'rp.growth.ws': '周', 'rp.growth.ms': '月',
    'rp.comments': '{n} 评论',
    'rp.chart.need': '曲线需要 2 个以上有效快照日，正在积累',
    'rp.updated': '快照更新',
    'rp.nodata': '该数据暂未采集',
    'rp.view.gh': 'GitHub 详情',
    'rp.rank.at': '{b} #{n}',
    'rp.crumb.home': '榜单',
    'rp.subtitle': 'GitHub Trend · Star / Watch / Fork',
    'rp.grain.d': '日趋势', 'rp.grain.w': '周趋势', 'rp.grain.m': '月趋势',
    'rp.ctab.ov': '概览',
    'rp.more': '查看全部',
    'rp.same': 'TA的项目',
    'title.repo': '{r} · GitHub Trending Rank Radar',
  },
  en: {
    'skip': 'Skip to rankings',
    'loading': 'Loading data…',
    'hero.sub': 'Independent GitHub trend rankings · twice-daily snapshots · 11 boards · day / month / year history',
    'hv.kicker': 'Independent · Open Data',
    'hv.title': 'Tracking every pulse of GitHub stars, independently',
    'hv.sub': 'Two snapshots a day; growth computed from real diffs — not another mirror of the hot list.',
    'hv.cta': 'Browse today\u2019s boards →',
    'hv.cap': '{n}-day star curve',
    'board.new': 'New Repos', 'board.debut': 'Debut',
    'board.daily': 'Daily Growth', 'board.daily_rate': 'Daily Rate',
    'board.weekly': 'Weekly Growth', 'board.weekly_rate': 'Weekly Rate',
    'board.monthly': 'Monthly Growth', 'board.monthly_rate': 'Monthly Rate',
    'board.total': 'All-Time', 'board.cumulative': 'Month Total',
    'board.daily_forks': 'Daily Forks', 'board.daily_watchers': 'Daily Watchers',
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
    'search.scope.repo': 'Repos', 'search.scope.news': 'News',
    'search.scope.aria': 'Search scope',
    'search.ph.repo': 'Search repos / authors / languages…',
    'search.ph.news': 'Search news titles…',
    'search.none.repo': 'No matching repositories',
    'search.none.news': 'No matching news',
    'search.count': '{n} results',
    'search.err': 'Search unavailable',
    'auth.login': 'Sign in', 'auth.logout': 'Sign out',
    'auth.email': 'or with email', 'auth.user': 'Username or email',
    'auth.pass': 'Password (8+ chars)', 'auth.register': 'Sign up',
    'auth.emailonly': 'Email', 'auth.err': 'Failed, try again',
    'auth.toReg': 'No account? Sign up', 'auth.toLogin': 'Have an account? Sign in',
    'auth.e.username_taken': 'Username already taken',
    'auth.e.email_registered': 'Email already registered',
    'auth.e.username_not_allowed': 'Username contains disallowed content',
    'auth.e.bad_credentials': 'Wrong username or password',
    'auth.e.account_banned': 'Account banned',
    'auth.e.bad_code': 'Incorrect code',
    'auth.e.code_expired': 'Code expired — request a new one',
    'auth.e.no_code': 'Request a code first',
    'auth.e.no_email': 'No email bound to this account',
    'auth.e.mail_failed': 'Mail failed to send — try again later',
    'auth.e.unverified_email': 'Verify your email first',
    'auth.e.username_rejected': 'Username rejected — pick a new one',
    'auth.e.cooldown': 'Sending too fast — wait a moment',
    'nm.title': 'Change username',
    'nm.why': 'Your username failed review — pick a new one to keep commenting',
    'nm.ph': 'New username',
    'nm.go': 'Save',
    'auth.sw.register': 'No account? Sign up',
    'auth.sw.login': 'Have an account? Sign in',
    'auth.forgot': 'Forgot password?',
    'auth.back.login': 'Back to sign in',
    'auth.reset.title': 'Reset password',
    'auth.reset.ask': 'Enter your account email — we will send a reset code',
    'auth.reset.send': 'Send reset code',
    'auth.reset.go': 'Reset password',
    'auth.reset.hint': 'Reset code sent to {e} — check spam too',
    'auth.reset.sent': 'Reset code sent again',
    'auth.verify.title': 'Verify email',
    'auth.verify.hint': 'Code sent to {e} — check spam too',
    'auth.verify.ph': '6-digit code',
    'auth.verify.go': 'Activate',
    'auth.verify.ok': 'Email verified',
    'auth.verify.resend': 'Resend activation email',
    'auth.verify.wait': 'Resend in {s}s',
    'auth.verify.sent': 'Sent again',
    'soc.like': 'Like', 'soc.fav': 'Favorite', 'soc.views': 'Views',
    'fav.mine': 'My favorites', 'fav.empty': 'Nothing saved yet — tap ★ on a row',
    'cm.title': 'Comments', 'cm.ph': 'Write a comment…',
    'cm.submit': 'Post', 'cm.login': 'Sign in to comment',
    'cm.pending': 'under review', 'cm.report': 'Report', 'cm.del': 'Delete',
    'cm.like': 'Up',
    'cm.empty': 'No comments yet', 'cm.posted': 'Submitted for review',
    'cm.ai': 'AI translation',
    'cm.reply': 'Reply', 'cm.replyto': 'Reply to @{n}', 'cm.cancel': 'Cancel',
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
    'window.debut': 'First appearance on any board · sorted by daily growth',
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
    'title.lang': '{l} · GitHub Trending Rank Radar',
    'title.langboard': '{l} · {b} · {s} · GitHub Trending Rank Radar',
    'title.tag': '#{g} · GitHub Trending Rank Radar',
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
    'rp.share.title': 'Trend share image',
    'rp.share.cur': 'Now',
    'rp.share.trend': 'Star trend · last 30 days',
    'rp.share.slogan': 'Discover great open-source projects',
    'rp.share.scan': 'Scan for details',
    'rp.share.hint': 'Long-press the image to save & share on mobile',
    'rp.share.nodata': 'Collecting data…',

    'rp.share.dl': 'Download PNG',
    'rp.share.cp': 'Copy image',
    'rp.share.done': 'Copied',
    'rp.created': 'Created',
    'rp.license': 'License',
    'rp.homepage': 'Homepage',
    'rp.range.7d': '7D', 'rp.range.30d': '30D', 'rp.range.all': 'All',
    'rp.growth.d': 'day', 'rp.growth.w': 'week', 'rp.growth.m': 'month',
    'rp.growth.ds': '1d', 'rp.growth.ws': '7d', 'rp.growth.ms': '30d',
    'rp.comments': '{n} comments',
    'rp.chart.need': 'The curve needs 2+ snapshot days — still accumulating',
    'rp.updated': 'Snapshot',
    'rp.nodata': 'Not collected yet',
    'rp.view.gh': 'Open on GitHub',
    'rp.rank.at': '{b} #{n}',
    'rp.crumb.home': 'Boards',
    'rp.subtitle': 'GitHub Trend · Star / Watch / Fork',
    'rp.grain.d': 'Daily', 'rp.grain.w': 'Weekly', 'rp.grain.m': 'Monthly',
    'rp.ctab.ov': 'Overview',
    'rp.more': 'View all',
    'rp.same': 'Their projects',
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
  if (p) for (const kk of Object.keys(p)) s = s.split('{' + kk + '}').join(p[kk] ?? '');
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
  const v = Number(n);
  if (!Number.isFinite(v)) return '–';
  if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(1) + 'M';
  if (Math.abs(v) >= 1e4) return (v / 1e3).toFixed(1) + 'k';
  if (Math.abs(v) >= 1e3) return (v / 1e3).toFixed(1) + 'k';
  return String(Math.round(v));
}
function fmtFull(n) {
  const v = Number(n);
  return Number.isFinite(v) ? v.toLocaleString('en-US') : '–';
}
function fmtPct(n) {
  const v = Number(n);
  return Number.isFinite(v) ? '+' + Math.floor(v) + '%' : '';
}

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
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
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
  const vals = series.map(Number).filter(v => Number.isFinite(v));
  if (!vals.length) return '';
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
    if (typeof renderAuthChip === 'function') renderAuthChip();
    if (typeof onLangChange === 'function') onLangChange();
  };
}

/* auth 下拉（收藏/退出）点外部关闭；document 级委托监听，只注册一次 */
document.addEventListener('click', (e) => {
  const d = document.getElementById('authDrop');
  if (d && !d.hidden && !e.target.closest('.auth-wrap')) d.hidden = true;
});

/* ---------------- zhuikan-api client + auth ---------------- */
const API_BASE = 'https://api-site.zhuikan.com';
const zk = { token: null, user: null };

function zkInit() {
  const m = location.hash.match(/[#&]token=([^&]+)/);
  if (m) {
    try { localStorage.setItem('zk_token', decodeURIComponent(m[1])); } catch { }
    history.replaceState(null, '', location.pathname + location.search);
  }
  try { zk.token = localStorage.getItem('zk_token'); } catch { }
}

async function api(path, opts = {}) {
  const h = { ...(opts.headers || {}) };
  if (opts.body && !h['Content-Type']) h['Content-Type'] = 'application/json';
  if (zk.token) h.Authorization = `Bearer ${zk.token}`;
  const r = await fetch(API_BASE + path, { ...opts, headers: h });
  if (r.status === 204) return null;
  const d = await r.json().catch(() => ({}));
  if (!r.ok) {
    const det = d.detail;
    const code = typeof det === 'string' && /^[a-z_]+$/.test(det) ? det
      : det && typeof det === 'object' && det.code ? det.code : null;
    const msg = typeof det === 'string' ? det
      : det && typeof det === 'object' && det.msg ? String(det.msg)
      : Array.isArray(det) && det.length ? String(det[0].msg || det[0])
      : `HTTP ${r.status}`;
    const e = new Error(msg);
    e.status = r.status; e.code = code;
    if (det && det.retry_after) e.retryAfter = det.retry_after;
    throw e;
  }
  return d;
}

async function zkLoadUser() {
  if (!zk.token) return null;
  try { zk.user = await api('/auth/me'); }
  catch (e) { if (e.status === 401) try { localStorage.removeItem('zk_token'); zk.token = null; } catch { } zk.user = null; }
  return zk.user;
}

function zkLogout() {
  try { localStorage.removeItem('zk_token'); } catch { }
  zk.token = null; zk.user = null; renderAuthChip();
  document.dispatchEvent(new CustomEvent('zk:auth'));
}

function zkLoginUrl(provider) {
  return `${API_BASE}/auth/${provider}?return_to=${encodeURIComponent(location.href)}`;
}

function renderAuthChip() {
  const meta = document.querySelector('.hero-meta');
  if (!meta) return;
  let el = document.getElementById('authChip');
  if (!el) {
    el = document.createElement('div');
    el.id = 'authChip'; el.className = 'auth-wrap';
    meta.insertBefore(el, meta.firstChild);
  }
  if (zk.user) {
    const av = zk.user.avatar_url
      ? `<img class="auth-av" src="${esc(zk.user.avatar_url)}" alt="" width="22" height="22">` : '';
    el.innerHTML = `<button class="auth-chip" id="authBtn" type="button">${av}<span>${esc(zk.user.display_name || zk.user.username)}</span></button>
      <div class="auth-drop" id="authDrop" hidden>
        <button class="auth-item" id="authFav" type="button">${esc(t('fav.mine'))}</button>
        <button class="auth-item" id="authOut" type="button">${esc(t('auth.logout'))}</button>
      </div>`;
    $('#authBtn').onclick = () => { $('#authDrop').hidden = !$('#authDrop').hidden; };
    $('#authFav').onclick = () => { $('#authDrop').hidden = true; openFavs(); };
    $('#authOut').onclick = zkLogout;
  } else {
    el.innerHTML = `<button class="auth-chip" id="authBtn" type="button">${esc(t('auth.login'))}</button>`;
    $('#authBtn').onclick = () => openAuthModal('login');
  }
}

/* machine error code → localized string (falls back to raw message) */
function authErr(e) {
  const k = 'auth.e.' + (e && e.code ? e.code : '');
  return (I18N[LANG] && I18N[LANG][k]) ?? I18N.zh[k]
    ?? (e && e.message && !/^[a-z_]+$/.test(e.message) ? e.message : null)
    ?? t('auth.err');
}

/* 登陆/注册/验证弹层: mode = 'login' | 'register' | 'verify'
   register 成功 → 直接切 verify；未验证账户操作被 403 拦截时也开 verify */
function openAuthModal(mode) {
  const ov = document.createElement('div');
  ov.className = 'sh-ov';
  ov.innerHTML = `<div class="sh-card am-card">
    <div class="sh-head"><span id="amTitle"></span><button class="sh-x" aria-label="close">✕</button></div>
    <a class="auth-item am-soc" href="${zkLoginUrl('github')}">GitHub</a>
    <a class="auth-item am-soc" href="${zkLoginUrl('google')}">Google</a>
    <div class="auth-sep am-sep">${esc(t('auth.email'))}</div>
    <div class="am-hint" id="amHint" hidden></div>
    <input class="auth-in am-in" id="amU" type="text" autocomplete="username" placeholder="${esc(t('auth.user'))}">
    <input class="auth-in am-in" id="amE" type="email" autocomplete="email" placeholder="${esc(t('auth.emailonly'))}">
    <input class="auth-in am-in" id="amP" type="password" placeholder="${esc(t('auth.pass'))}">
    <input class="auth-in am-in" id="amV" type="text" inputmode="numeric" maxlength="8"
           autocomplete="one-time-code" placeholder="${esc(t('auth.verify.ph'))}" hidden>
    <button class="auth-item auth-go am-go" id="amGo" type="button"></button>
    <div class="auth-err" id="amErr" hidden></div>
    <button class="am-re" id="amRe" type="button" hidden></button>
    <div class="am-sw"><a href="#" id="amFg" hidden></a><a href="#" id="amSw"></a></div>
  </div>`;
  document.body.appendChild(ov);
  const q = (s) => ov.querySelector(s);
  let cdTimer = null;
  const onEsc = (e) => { if (e.key === 'Escape') close(); };
  const close = () => { ov.remove(); document.removeEventListener('keydown', onEsc); if (cdTimer) clearInterval(cdTimer); };
  q('.sh-x').onclick = close;
  ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
  document.addEventListener('keydown', onEsc);

  const startCd = (secs) => {
    const a = q('#amRe'); let left = secs;
    a.disabled = true;
    a.textContent = t('auth.verify.wait', { s: left });
    if (cdTimer) clearInterval(cdTimer);
    cdTimer = setInterval(() => {
      left -= 1;
      if (left <= 0) { clearInterval(cdTimer); cdTimer = null; a.disabled = false; a.textContent = t('auth.verify.resend'); }
      else a.textContent = t('auth.verify.wait', { s: left });
    }, 1000);
  };

  const setMode = (m) => {
    mode = m;
    const reg = m === 'register', ver = m === 'verify',
      fg = m === 'forgot', rs = m === 'reset';
    q('#amTitle').textContent = ver ? t('auth.verify.title')
      : (fg || rs) ? t('auth.reset.title')
      : reg ? t('auth.register') : t('auth.login');
    q('#amGo').textContent = ver ? t('auth.verify.go')
      : fg ? t('auth.reset.send') : rs ? t('auth.reset.go')
      : reg ? t('auth.register') : t('auth.login');
    const soc = m === 'login' || reg;            // oauth 只在登录/注册出现
    ov.querySelectorAll('.am-soc').forEach(a => { a.hidden = !soc; });
    q('.am-sep').hidden = !soc;
    q('#amU').hidden = !(m === 'login' || reg);
    q('#amE').hidden = !(reg || fg);
    q('#amP').hidden = !(m === 'login' || reg || rs);
    q('#amV').hidden = !(ver || rs);
    q('#amHint').hidden = !(ver || fg || rs);
    q('#amRe').hidden = !(ver || rs);
    q('#amSw').hidden = ver;
    q('#amSw').textContent = (fg || rs) ? t('auth.back.login')
      : reg ? t('auth.sw.login') : t('auth.sw.register');
    q('#amFg').hidden = m !== 'login';
    q('#amFg').textContent = t('auth.forgot');
    q('#amP').autocomplete = reg || rs ? 'new-password' : 'current-password';
    if (fg) q('#amHint').textContent = t('auth.reset.ask');
    if (rs) {
      q('#amHint').textContent = t('auth.reset.hint',
        { e: q('#amE').value.trim() || '—' });
      if (!cdTimer) q('#amRe').textContent = t('auth.verify.resend');
    }
    if (ver) {
      const em = (zk.user && zk.user.email) || '—';
      q('#amHint').textContent = t('auth.verify.hint', { e: em });
      if (!cdTimer) q('#amRe').textContent = t('auth.verify.resend');
      // fresh window? sync the real cooldown from the server
      api('/auth/me').then(u => {
        if (!ov.isConnected || mode !== 'verify' || cdTimer) return;
        zk.user = u;
        if (u && u.resend_wait > 0) startCd(u.resend_wait);
      }).catch(() => {});
    }
    q('#amErr').hidden = true;
  };
  q('#amSw').onclick = (e) => {
    e.preventDefault();
    if (mode === 'forgot' || mode === 'reset') setMode('login');
    else setMode(mode === 'register' ? 'login' : 'register');
  };
  q('#amFg').onclick = (e) => {
    e.preventDefault();
    setMode('forgot');
  };
  q('#amRe').onclick = async (e) => {
    e.preventDefault();
    const el2 = q('#amErr');
    try {
      const d = mode === 'reset'
        ? await api('/auth/forgot', { method: 'POST', body: JSON.stringify({ email: q('#amE').value.trim(), lang: LANG }) })
        : await api(`/auth/resend?lang=${encodeURIComponent(LANG)}`, { method: 'POST', body: '{}' });
      startCd(d.cooldown || 120);
      el2.textContent = mode === 'reset' ? t('auth.reset.sent') : t('auth.verify.sent');
      el2.hidden = false;
    } catch (err) {
      if (err.retryAfter) startCd(err.retryAfter);
      el2.textContent = authErr(err); el2.hidden = false;
    }
  };

  const submit = async () => {
    if (q('#amGo').disabled) return;
    q('#amGo').disabled = true;
    try {
      if (mode === 'verify') {
        await api('/auth/verify', { method: 'POST', body: JSON.stringify({ code: q('#amV').value.trim() }) });
        if (zk.user) { zk.user.email_verified = 1; }
        document.dispatchEvent(new CustomEvent('zk:auth'));
        close();
        return;
      }
      if (mode === 'forgot') {
        const d = await api('/auth/forgot', { method: 'POST', body: JSON.stringify({ email: q('#amE').value.trim(), lang: LANG }) });
        startCd(d.cooldown || 120);
        setMode('reset');
        q('#amGo').disabled = false; q('#amV').focus();
        return;
      }
      if (mode === 'reset') {
        const d = await api('/auth/reset', { method: 'POST', body: JSON.stringify({
          email: q('#amE').value.trim(), code: q('#amV').value.trim(),
          password: q('#amP').value }) });
        if (!d.token) throw new Error(t('auth.err'));
        zk.token = d.token; localStorage.setItem('zk_token', d.token);
        await zkLoadUser(); renderAuthChip(); document.dispatchEvent(new CustomEvent('zk:auth'));
        close();
        return;
      }
      const body = mode === 'register'
        ? { username: q('#amU').value.trim(), email: q('#amE').value.trim(), password: q('#amP').value, lang: LANG }
        : { identifier: q('#amU').value.trim(), password: q('#amP').value };
      const d = await api(mode === 'register' ? '/auth/register' : '/auth/login',
        { method: 'POST', body: JSON.stringify(body) });
      if (!d.token) throw new Error(t('auth.err'));
      zk.token = d.token; localStorage.setItem('zk_token', d.token);
      await zkLoadUser(); renderAuthChip(); document.dispatchEvent(new CustomEvent('zk:auth'));
      if (mode === 'register' && d.verify) { setMode('verify'); startCd(120); q('#amGo').disabled = false; q('#amV').focus(); return; }
      close();
      return;
    } catch (e) {
      const el2 = q('#amErr'); el2.textContent = authErr(e); el2.hidden = false;
    }
    q('#amGo').disabled = false;
  };
  q('#amGo').onclick = submit;
  ov.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') submit();
  });

  setMode(['register', 'verify', 'forgot', 'reset'].includes(mode) ? mode : 'login');
  ({ verify: q('#amV'), forgot: q('#amE'), reset: q('#amV') }[mode] || q('#amU')).focus();
}

/* 用户名被 AI 判定违规（username_rejected）→ 改名弹层；
   保存成功后名字回到 pending，下次评论时重新过审 */
function openNameModal(reason) {
  const ov = document.createElement('div');
  ov.className = 'sh-ov';
  ov.innerHTML = `<div class="sh-card am-card">
    <div class="sh-head"><span>${esc(t('nm.title'))}</span><button class="sh-x" aria-label="close">✕</button></div>
    <div class="am-hint">${esc(t('nm.why'))}${reason ? ' · ' + esc(reason) : ''}</div>
    <input class="auth-in" id="nmU" type="text" maxlength="32" autocomplete="off" placeholder="${esc(t('nm.ph'))}">
    <button class="auth-item auth-go" id="nmGo" type="button">${esc(t('nm.go'))}</button>
    <div class="auth-err" id="nmErr" hidden></div>
  </div>`;
  document.body.appendChild(ov);
  const q = (s) => ov.querySelector(s);
  const onEsc = (e) => { if (e.key === 'Escape') close(); };
  const close = () => { ov.remove(); document.removeEventListener('keydown', onEsc); };
  q('.sh-x').onclick = close;
  ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
  document.addEventListener('keydown', onEsc);
  q('#nmU').value = (zk.user && zk.user.username) || '';
  q('#nmU').focus();
  const submit = async () => {
    if (q('#nmGo').disabled) return;
    q('#nmGo').disabled = true;
    try {
      await api('/auth/username', {
        method: 'POST',
        body: JSON.stringify({ username: q('#nmU').value.trim() })
      });
      await zkLoadUser(); renderAuthChip();
      document.dispatchEvent(new CustomEvent('zk:auth'));
      close(); return;
    } catch (e) {
      const el = q('#nmErr'); el.textContent = authErr(e); el.hidden = false;
      q('#nmGo').disabled = false;
    }
  };
  q('#nmGo').onclick = submit;
  ov.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') submit();
  });
}

async function openFavs() {
  let items = [];
  try { items = (await api('/me/favorites?site=github')).items || []; } catch { }
  const ov = document.createElement('div');
  ov.className = 'sh-ov';
  ov.innerHTML = `<div class="sh-card">
    <div class="sh-head"><span>${esc(t('fav.mine'))}</span><button class="sh-x" aria-label="close">✕</button></div>
    <div class="fav-list">${items.length ? items.map(f => {
      const o = f.item_id.split('/')[0], n = f.item_id.split('/').slice(1).join('/');
      return `<a class="fav-item" href="${document.body.dataset.base || ''}repos/${encodeURIComponent(o)}__${encodeURIComponent(n)}">
        <span class="fav-name">${esc(f.item_id)}</span>
        <span class="fav-meta">${f.lang ? esc(f.lang) + ' · ' : ''}${f.stars ? '★ ' + fmt(f.stars) : ''}</span></a>`;
    }).join('') : `<div class="fav-empty">${esc(t('fav.empty'))}</div>`}</div>
  </div>`;
  const onEsc = (e) => { if (e.key === 'Escape') { ov.remove(); document.removeEventListener('keydown', onEsc); } };
  document.addEventListener('keydown', onEsc);
  ov.addEventListener('click', e => { if (e.target === ov) { ov.remove(); document.removeEventListener('keydown', onEsc); } });
  ov.querySelector('.sh-x').onclick = () => { ov.remove(); document.removeEventListener('keydown', onEsc); };
  document.body.appendChild(ov);
}
