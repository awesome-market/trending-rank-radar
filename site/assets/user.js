'use strict';
/* User center — /user?tab=fav|likes|comments|settings.
   Private page: every list loads lazily via api-site with the session
   token; logged-out visitors get a sign-in prompt instead of a bounce. */

const UC_TABS = ['fav', 'likes', 'comments', 'settings'];
const uc = { tab: 'fav' };

function ucTabFromURL() {
  const tb = new URLSearchParams(location.search).get('tab');
  return UC_TABS.includes(tb) ? tb : 'fav';
}

function ucRepoHref(itemId) {          // 'owner/name' → repos/owner__name
  const i = (itemId || '').indexOf('/');
  if (i < 0) return null;
  return `repos/${encodeURIComponent(itemId.slice(0, i))}__${encodeURIComponent(itemId.slice(i + 1))}`;
}

function ucDate(ts) {
  if (!ts) return '';
  return new Date(ts * 1000).toLocaleDateString(LANG === 'zh' ? 'zh-CN' : 'en-US');
}

function ucErr(el, e) {
  if (!el) return;
  el.textContent = authErr(e);
  el.hidden = false;
}

/* ---------- tabs ---------- */

function ucNav() {
  return `<nav class="uc-side">${UC_TABS.map(k =>
    `<a class="uc-tab${k === uc.tab ? ' on' : ''}" href="user?tab=${k}" data-tab="${k}">${esc(t('uc.tab.' + k))}</a>`
  ).join('')}</nav>`;
}

function render() {
  const page = $('#ucPage');
  if (!zk.user) {
    page.innerHTML = `<div class="uc-empty">
      <p>${esc(t('uc.login.need'))}</p>
      <button class="auth-item auth-go" id="ucLogin" type="button">${esc(t('uc.login.go'))}</button>
    </div>`;
    $('#ucLogin').onclick = () => openAuthModal('login');
    return;
  }
  page.innerHTML = `<div class="uc-wrap">${ucNav()}`
    + `<div class="uc-body" id="ucBody"><div class="uc-loading">${esc(t('loading'))}</div></div></div>`;
  page.querySelectorAll('.uc-tab').forEach(a => {
    a.onclick = (e) => {
      e.preventDefault();
      uc.tab = a.dataset.tab;
      history.replaceState(null, '', `user?tab=${uc.tab}`);
      render();
    };
  });
  UC_LOAD[uc.tab]($('#ucBody'));
}

/* ---------- favorites / likes (shared row shape) ---------- */

async function ucLoadItems(el, kind) {
  const ep = kind === 'fav' ? '/me/favorites?site=github&limit=300'
                            : '/me/likes?site=github&limit=300';
  let items;
  try { items = (await api(ep)).items || []; }
  catch (e) { el.innerHTML = `<div class="uc-empty">${esc(authErr(e))}</div>`; return; }
  if (!items.length) {
    el.innerHTML = `<div class="uc-empty">${esc(t('uc.empty.' + kind))}</div>`;
    return;
  }
  const toggleEp = kind === 'fav' ? '/favorites/toggle' : '/likes/toggle';
  const whenKey = kind === 'fav' ? 'uc.fav.when' : 'uc.like.when';
  const rmKey = kind === 'fav' ? 'uc.unfav' : 'uc.unlike';
  el.innerHTML = `<div class="uc-list">${items.map(f => {
    const href = ucRepoHref(f.item_id);
    return `<div class="uc-row" data-id="${esc(f.item_id)}">
      <div class="uc-main">
        ${href ? `<a class="uc-name" href="${href}">${esc(f.item_id)}</a>` : `<span class="uc-name">${esc(f.item_id)}</span>`}
        <span class="uc-meta">${f.lang ? esc(f.lang) + ' · ' : ''}${f.stars ? '★ ' + fmt(f.stars) + ' · ' : ''}${esc(t(whenKey, { t: ucDate(f.created_at) }))}</span>
      </div>
      <button class="uc-rm" type="button">${esc(t(rmKey))}</button>
    </div>`;
  }).join('')}</div>`;
  el.querySelectorAll('.uc-rm').forEach(b => {
    b.onclick = async () => {
      const row = b.closest('.uc-row');
      b.disabled = true;
      try {
        await api(toggleEp, {
          method: 'POST',
          body: JSON.stringify({ site: 'github', item_id: row.dataset.id })
        });
        row.remove();
        if (!el.querySelector('.uc-row')) ucLoadItems(el, kind);
      } catch (e) { b.disabled = false; b.textContent = authErr(e); }
    };
  });
}

/* ---------- my comments ---------- */

async function ucLoadComments(el) {
  let items;
  try { items = (await api('/me/comments?site=github&limit=300')).items || []; }
  catch (e) { el.innerHTML = `<div class="uc-empty">${esc(authErr(e))}</div>`; return; }
  if (!items.length) {
    el.innerHTML = `<div class="uc-empty">${esc(t('uc.empty.comments'))}</div>`;
    return;
  }
  el.innerHTML = `<div class="uc-list">${items.map(c => {
    const href = ucRepoHref(c.item_id);
    return `<div class="uc-row uc-cmt" data-cid="${c.id}">
      <div class="uc-main">
        <div class="uc-cmt-body">${esc(c.body)}</div>
        <div class="uc-meta">
          ${c.parent_id ? `<span class="uc-tag">${esc(t('uc.reply'))}</span>` : ''}
          <span class="uc-st ${c.status}">${esc(t('uc.st.' + c.status))}</span>
          ${c.likes ? `<span>${esc(t('uc.likes.count', { n: c.likes }))}</span>` : ''}
          ${href ? `<a class="uc-link" href="${href}">${esc(c.item_id)}</a>` : `<span>${esc(c.item_id)}</span>`}
          <span>${ucDate(c.created_at)}</span>
        </div>
        ${c.status === 'rejected' && c.mod_reason ? `<div class="uc-reason">${esc(c.mod_reason)}</div>` : ''}
      </div>
      <button class="uc-rm" type="button">${esc(t('uc.del'))}</button>
    </div>`;
  }).join('')}</div>`;
  el.querySelectorAll('.uc-rm').forEach(b => {
    b.onclick = async () => {
      const row = b.closest('.uc-row');
      if (!confirm(t('uc.del.confirm'))) return;
      b.disabled = true;
      try {
        await api(`/comments/${row.dataset.cid}`, { method: 'DELETE' });
        row.remove();
        if (!el.querySelector('.uc-row')) ucLoadComments(el);
      } catch (e) { b.disabled = false; b.textContent = authErr(e); }
    };
  });
}

/* ---------- settings ---------- */

function ucCard(forId, label, sub, inner, hint = '') {
  const head = forId
    ? `<label class="uc-card-t" for="${forId}">${esc(label)}</label>`
    : `<span class="uc-card-t">${esc(label)}</span>`;
  return `<section class="uc-card">
    <div class="uc-card-h">${head}${sub || ''}</div>
    ${inner}${hint ? `<p class="uc-hint">${hint}</p>` : ''}
  </section>`;
}

async function ucLoadSettings(el) {
  const u = zk.user;
  const nameSub = (u.name_status === 'pending' ? `<span class="uc-st pending">${esc(t('uc.name.pending'))}</span>` : '')
    + (u.name_reason ? `<span class="uc-hint-inline">${esc(t('uc.name.reason', { r: u.name_reason }))}</span>` : '');
  const mailChip = u.email_verified
    ? `<span class="uc-st approved">${esc(t('uc.verified'))}</span>`
    : `<span class="uc-st pending">${esc(t('uc.unverified'))}</span>`;

  el.innerHTML =
    ucCard('ucDnIn', t('uc.set.name'), nameSub, `
      <div class="uc-field">
        <input class="auth-in" id="ucDnIn" type="text" maxlength="64" value="${esc(u.display_name || '')}" placeholder="${esc(t('uc.set.name.ph'))}">
        <button class="uc-btn" id="ucDnGo" type="button">${esc(t('uc.save'))}</button>
      </div>
      <p class="uc-err" id="ucDnErr" hidden></p>`)
    + ucCard('ucUnIn', t('uc.set.user'), '', `
      <div class="uc-field">
        <input class="auth-in" id="ucUnIn" type="text" maxlength="32" value="${esc(u.username)}" placeholder="${esc(t('uc.set.user.ph'))}" autocomplete="off">
        <button class="uc-btn" id="ucUnGo" type="button">${esc(t('uc.save'))}</button>
      </div>
      <p class="uc-err" id="ucUnErr" hidden></p>`)
    + ucCard(null, t('uc.set.email'), mailChip, `
      <p class="uc-meta">${esc(u.email || '—')}</p>
      <div id="ucMailBox"><button class="uc-btn" id="ucMailBtn" type="button">${esc(t('uc.email.change'))}</button></div>`)
    + (u.has_password
      ? ucCard('ucPwO', t('uc.set.pass'), '', `
        <div class="uc-field"><input class="auth-in" id="ucPwO" type="password" placeholder="${esc(t('uc.pass.old'))}" autocomplete="current-password"></div>
        <div class="uc-field">
          <input class="auth-in" id="ucPwN" type="password" placeholder="${esc(t('uc.pass.new'))}" autocomplete="new-password">
          <button class="uc-btn" id="ucPwGo" type="button">${esc(t('uc.save'))}</button>
        </div>
        <p class="uc-err" id="ucPwErr" hidden></p>`)
      : ucCard(null, t('uc.set.pass'), '', '', esc(t('uc.pass.oauth'))))
    + ucCard(null, t('uc.set.bind'), '', `
      <p class="uc-meta">${(u.providers && u.providers.length)
        ? u.providers.map(p => `<span class="uc-tag">${esc(p)}</span>`).join(' ')
        : '—'}</p>`)
    + `<section class="uc-card"><button class="uc-btn uc-danger" id="ucOut" type="button">${esc(t('uc.logout'))}</button></section>`;

  const refresh = async () => { await zkLoadUser(); renderAuthChip(); };
  const saveGo = async (btn, run, errEl) => {
    if (btn.disabled) return;
    btn.disabled = true;
    const old = btn.textContent;
    btn.textContent = t('uc.saving');
    try {
      await run();
      await refresh();
      btn.textContent = t('uc.saved');
      setTimeout(() => { btn.disabled = false; btn.textContent = old; }, 1500);
    } catch (e) {
      ucErr(errEl, e);
      btn.disabled = false; btn.textContent = old;
    }
  };

  $('#ucDnGo').onclick = () => saveGo($('#ucDnGo'), () =>
    api('/auth/display_name', {
      method: 'POST',
      body: JSON.stringify({ display_name: $('#ucDnIn').value.trim() })
    }).then(r => { zk.user.display_name = r.display_name; }), $('#ucDnErr'));

  $('#ucUnGo').onclick = () => saveGo($('#ucUnGo'), () =>
    api('/auth/username', {
      method: 'POST',
      body: JSON.stringify({ username: $('#ucUnIn').value.trim() })
    }), $('#ucUnErr'));

  $('#ucPwGo') && ($('#ucPwGo').onclick = () => saveGo($('#ucPwGo'), async () => {
    await api('/auth/password', {
      method: 'POST',
      body: JSON.stringify({
        old_password: $('#ucPwO').value,
        password: $('#ucPwN').value
      })
    });
    $('#ucPwO').value = ''; $('#ucPwN').value = '';
  }, $('#ucPwErr')));

  $('#ucMailBtn').onclick = () => {
    $('#ucMailBox').innerHTML = `
      <div class="uc-field">
        <input class="auth-in" id="ucEmIn" type="email" maxlength="200" placeholder="${esc(t('uc.email.new'))}" autocomplete="off">
        <button class="uc-btn" id="ucEmGo" type="button">${esc(t('uc.email.send'))}</button>
      </div>
      <div class="uc-field" id="ucEmCodeWrap" hidden>
        <input class="auth-in" id="ucEmCode" type="text" inputmode="numeric" maxlength="6" placeholder="${esc(t('uc.email.code'))}" autocomplete="one-time-code">
        <button class="uc-btn" id="ucEmCf" type="button">${esc(t('uc.email.confirm'))}</button>
      </div>
      <p class="uc-hint" id="ucEmHint" hidden></p>
      <p class="uc-err" id="ucEmErr" hidden></p>`;
    $('#ucEmIn').focus();
    $('#ucEmGo').onclick = () => saveGo($('#ucEmGo'), async () => {
      const email = $('#ucEmIn').value.trim();
      await api('/auth/email', {
        method: 'POST',
        body: JSON.stringify({ email, lang: LANG })
      });
      $('#ucEmCodeWrap').hidden = false;
      const h = $('#ucEmHint');
      h.textContent = t('uc.email.sent', { e: email });
      h.hidden = false;
      $('#ucEmCode').focus();
      $('#ucEmCf').onclick = () => saveGo($('#ucEmCf'), async () => {
        await api('/auth/email/verify', {
          method: 'POST',
          body: JSON.stringify({ code: $('#ucEmCode').value.trim() })
        });
        await zkLoadUser();
        render();
      }, $('#ucEmErr'));
    }, $('#ucEmErr'));
  };

  $('#ucOut').onclick = zkLogout;
}

/* ---------- boot ---------- */

const UC_LOAD = {
  fav: (el) => ucLoadItems(el, 'fav'),
  likes: (el) => ucLoadItems(el, 'likes'),
  comments: ucLoadComments,
  settings: ucLoadSettings,
};

uc.tab = ucTabFromURL();
zkInit();
applyStaticI18n();
bindChrome(render);
document.addEventListener('zk:auth', render);
document.title = t('uc.title') + ' · GitHub Trending Rank Radar';
zkLoadUser().then(() => { renderAuthChip(); render(); });
api('/stats/view', {
  method: 'POST',
  body: JSON.stringify({ site: 'github', path: location.pathname })
}).catch(() => { });   /* fire-and-forget analytics */
