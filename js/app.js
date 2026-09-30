/* Hash router and app shell. */
const App = {
  keyHandler: null,

  route() {
    const view = document.getElementById('view');
    const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    const [name = 'home', a, b, c] = parts;
    App.keyHandler = null;
    HSK.tts.stop();
    HSK.asr.stop();
    // remember the level being studied so the nav links open it
    const st = HSK.store.state.settings;
    if (['level', 'lesson', 'write', 'test'].includes(name) && HSK.levels[+a]) { st.level = +a; HSK.store.save(); }
    const lv = HSK.levels[st.level] ? st.level : 1;
    const views = {
      home: () => Views.home(view),
      level: () => Views.level(view, +(a || lv)),
      lesson: () => Views.lesson(view, +a, +b, c),
      review: () => Views.review(view),
      write: () => Views.write(view, +(a || lv)),
      pinyin: () => Views.pinyin(view, a),
      test: () => Views.test(view, +(a || lv)),
      settings: () => Views.settings(view),
    };
    document.querySelectorAll('#nav a').forEach(x => {
      if (['level', 'write', 'test'].includes(x.dataset.r)) x.setAttribute('href', `#/${x.dataset.r}/${lv}`);
    });
    (views[name] || views.home)();
    const navKey = name === 'lesson' ? 'level' : name;
    document.querySelectorAll('#nav a').forEach(x => x.classList.toggle('on', x.dataset.r === navKey));
    if (App._lastRoute !== name + a + b) window.scrollTo(0, 0);
    App._lastRoute = name + a + b;
    App.refreshBadge();
  },

  refreshBadge() {
    const n = HSK.srs.due().length;
    const el = document.getElementById('due-badge');
    el.textContent = n; el.classList.toggle('hidden', !n);
  },

  /** Update the ✓ marks on lesson tabs without re-rendering the page. */
  refreshTabs() {
    const m = location.hash.match(/#\/lesson\/(\d+)\/(\d+)/);
    if (!m) return;
    const done = HSK.store.lesson(`${m[1]}-${m[2]}`).done;
    document.querySelectorAll('.tabs a').forEach(a => {
      const k = a.getAttribute('href').split('/')[4];
      if (done[k] && !a.querySelector('.tick')) a.insertAdjacentHTML('beforeend', '<span class="tick">✓</span>');
    });
  },

  applyTheme() {
    const t = HSK.store.state.settings.theme;
    if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
    else delete document.documentElement.dataset.theme;
  },
};

window.addEventListener('hashchange', App.route);
document.addEventListener('keydown', e => {
  if (e.target.matches('input, select, textarea')) return;
  App.keyHandler && App.keyHandler(e);
});
App.applyTheme();
App.route();
