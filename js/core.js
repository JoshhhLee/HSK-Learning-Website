/* Core engine: data registry, pinyin, dictionary, speech, spaced repetition,
 * progress storage. Loaded before the data files. */
window.HSK = {
  levels: {},
  dict: new Map(),

  registerLevel(lv) {
    this.levels[lv.level] = lv;
    for (const ls of lv.lessons) {
      ls.level = lv.level;
      ls.id = `${lv.level}-${ls.n}`;
      ls.words = ls.words.map(w => this.addWord(w, lv.level, ls.n));
    }
    (lv.extra || []).forEach(w => this.addWord(w, lv.level, 0, true));
  },

  /** Character glosses: fill gaps only, never override vocabulary. */
  addChars(list) {
    list.forEach(([hz, py, en]) => { if (!this.dict.has(hz)) this.dict.set(hz, { hz, py, en, emoji: '', extra: true, id: hz }); });
  },

  addWord([hz, py, en, emoji = ''], level, lesson, extra = false) {
    const w = { hz, py, en, emoji, level, lesson, extra, id: hz };
    const prev = this.dict.get(hz);
    if (!prev || (prev.extra && !extra)) this.dict.set(hz, w);
    else if (prev.py !== py && !this.dict.has(`${hz}·${py}`)) {
      // second reading of a character already taught (长 cháng / 长 zhǎng): own id so it gets its own review card
      w.id = `${hz}·${py}`;
      this.dict.set(w.id, w);
    }
    return w;
  },
};

/* ---------- Pinyin ---------- */
(() => {
  const MARKS = {
    a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', 'ü': 'ǖǘǚǜ',
  };
  const REV = {};
  for (const [base, s] of Object.entries(MARKS)) [...s].forEach((c, i) => { REV[c] = [base, i + 1]; });

  const NUM = { '〇': 'líng', '零': 'líng', '一': 'yī', '二': 'èr', '三': 'sān', '四': 'sì', '五': 'wǔ', '六': 'liù', '七': 'qī', '八': 'bā', '九': 'jiǔ', '十': 'shí', '百': 'bǎi', '千': 'qiān' };
  const MEASURES = new Set(['个', '本', '口', '块', '杯', '张', '些', '点', '点儿', '分', '分钟', '岁', '起', '年',
    '件', '次', '公斤', '小时', '米', '百', '千', '天', '下']);
  const NUM_RE = /^[〇零一二三四五六七八九十百千]+$/;

  const P = HSK.py = {
    /** tone of one syllable: 1–4, or 5 for neutral */
    tone(syl) {
      for (const c of syl.toLowerCase()) if (REV[c]) return REV[c][1];
      return 5;
    },
    strip(syl) {
      return [...syl].map(c => {
        const lower = c.toLowerCase();
        if (!REV[lower]) return c;
        const b = REV[lower][0];
        return c === lower ? b : b.toUpperCase();
      }).join('');
    },
    /** put tone `t` on a toneless syllable using the standard placement rule */
    mark(base, t) {
      base = P.strip(base);
      if (t === 5 || t === 0) return base;
      const low = base.toLowerCase();
      let idx = low.search(/[ae]/);
      if (idx < 0) idx = low.indexOf('ou');
      if (idx < 0) {
        for (let i = low.length - 1; i >= 0; i--) if ('iouü'.includes(low[i])) { idx = i; break; }
      }
      if (idx < 0) return base;
      const v = low[idx];
      let m = MARKS[v][t - 1];
      if (base[idx] !== v) m = m.toUpperCase();
      return base.slice(0, idx) + m + base.slice(idx + 1);
    },
    syllables(py) { return py.trim().split(/\s+/).filter(Boolean); },
    tones(py) { return P.syllables(py).map(P.tone); },
    /** join syllables into a written word: "nǚ ér" -> "nǚ'ér" */
    word(py) {
      const s = P.syllables(py);
      return s.map((x, i) => {
        if (i === 0) return x;
        if (/^[A-ZĀÁǍÀĒÉĚÈŌÓǑÒ]/.test(x)) return ' ' + x; // proper name part: Lǐ Yuè
        return (/^[aeoāáǎàēéěèōóǒò]/i.test(x) ? "'" : '') + x;
      }).join('');
    },
  };

  /* ---------- Dictionary-driven sentence tokenising ---------- */
  const isHan = s => /[㐀-鿿〇]/.test(s);

  function lookup(tok) {
    const w = HSK.dict.get(tok);
    if (w) return { ...w };
    if (NUM_RE.test(tok)) {
      return { hz: tok, py: [...tok].map(c => NUM[c]).join(' '), en: numberMeaning(tok), number: true };
    }
    // fall back to splitting into known single characters
    if (isHan(tok) && [...tok].every(c => HSK.dict.has(c) || NUM[c])) {
      const py = [...tok].map(c => (HSK.dict.get(c) || { py: NUM[c] }).py).join(' ');
      return { hz: tok, py, en: '' };
    }
    return null;
  }

  function numberMeaning(tok) {
    const n = HSK.cnToNumber(tok);
    return n == null ? 'number' : String(n);
  }

  HSK.cnToNumber = function (s) {
    const D = { '〇': 0, '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9 };
    if (!s.includes('十') && !s.includes('百')) {
      if ([...s].every(c => c in D)) return +[...s].map(c => D[c]).join('');
      return null;
    }
    let total = 0, cur = 0;
    for (const c of s) {
      if (c in D) cur = D[c];
      else if (c === '十') { total += (cur || 1) * 10; cur = 0; }
      else if (c === '百') { total += (cur || 1) * 100; cur = 0; }
      else if (c === '千') { total += (cur || 1) * 1000; cur = 0; }
    }
    return total + cur;
  };

  /** Split a spaced sentence into token objects with context-aware pinyin. */
  /** Split a spaced sentence into raw tokens, keeping 是不是{shì bu shì} whole. */
  HSK.splitTokens = s => s.trim().match(/[^\s{]+\{[^}]*\}|\S+/g) || [];

  HSK.tokenize = function (sentence) {
    const raw = HSK.splitTokens(sentence);
    const toks = raw.map(t => {
      // reading override: 长{zhǎng}, 看看{kàn kan}
      const ov = t.match(/^(.+)\{(.+)\}$/);
      if (ov) {
        const [, hz, py] = ov;
        const w = HSK.dict.get(`${hz}·${py}`) || lookup(hz) || { hz, en: '' };
        return { ...w, hz, py };
      }
      if (!isHan(t)) return { hz: t, punct: true };
      const w = lookup(t);
      if (!w) { console.warn('[HSK] unknown word:', t, 'in', sentence); return { hz: t, py: '', en: '?' }; }
      return w;
    });
    // Tone sandhi for standalone 不 and 一
    toks.forEach((t, i) => {
      const next = toks.slice(i + 1).find(x => !x.punct);
      const nextTone = next && next.py ? P.tone(P.syllables(next.py)[0]) : null;
      if (t.hz === '不' && nextTone === 4) t.py = 'bú';
      if (t.hz === '一' && next && MEASURES.has(next.hz) && !toks[i - 1]?.number) {
        t.py = nextTone === 4 ? 'yí' : 'yì';
      }
    });
    return toks;
  };

  /** Word text of a token with any {reading} override removed. */
  HSK.tokText = t => t.replace(/\{[^}]*\}/g, '');
  HSK.plain = sentence => HSK.tokText(sentence).replace(/\s+/g, '');

  /** Sentence pinyin, capitalised, punctuation mapped to western forms. */
  HSK.sentencePinyin = function (sentence) {
    const PUNCT = { '，': ',', '。': '.', '？': '?', '！': '!', '、': ',', '：': ':' };
    let out = '', glue = true; // glue: next word attaches without a leading space
    HSK.tokenize(sentence).forEach(t => {
      if (t.hz === '“') { out += (out ? ' ' : '') + '"'; glue = true; }
      else if (t.hz === '”') { out += '"'; glue = false; }
      else if (t.punct) { out += PUNCT[t.hz] || t.hz; glue = false; }
      else { out += (glue ? '' : ' ') + P.word(t.py); glue = false; }
    });
    return out.trim().replace(/(^|[.?!]\s+"?|:\s*")([a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ])/g, (m, a, b) => a + b.toUpperCase());
  };

  HSK.isHan = isHan;
})();

/* ---------- Storage ---------- */
HSK.store = (() => {
  const KEY = 'hsk-study-v1';
  const blank = () => ({ cards: {}, lessons: {}, days: [], settings: { rate: 0.8, voice: '', pinyin: true, english: true }, tests: [] });
  let state;
  try { state = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch { state = blank(); }
  state.settings = Object.assign(blank().settings, state.settings);

  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {} };
  return {
    get state() { return state; },
    save,
    touchDay() {
      const d = new Date().toISOString().slice(0, 10);
      if (!state.days.includes(d)) { state.days.push(d); save(); }
    },
    lesson(id) { return state.lessons[id] || (state.lessons[id] = { done: {} }); },
    markDone(id, part, score) {
      const l = this.lesson(id);
      l.done[part] = Math.max(l.done[part] || 0, score ?? 1);
      this.touchDay(); save();
    },
    reset() { state = blank(); save(); },
    exportJSON() { return JSON.stringify(state, null, 2); },
    importJSON(s) { state = Object.assign(blank(), JSON.parse(s)); save(); },
    streak() {
      const set = new Set(state.days);
      let n = 0; const d = new Date();
      if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
      while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
      return n;
    },
  };
})();

/* ---------- Spaced repetition (SM-2 style) ---------- */
HSK.srs = {
  DAY: 864e5,
  card(id) { return HSK.store.state.cards[id]; },
  has(id) { return !!this.card(id); },
  add(ids) {
    const cards = HSK.store.state.cards; let n = 0;
    ids.forEach(id => { if (!cards[id]) { cards[id] = { ef: 2.5, ivl: 0, reps: 0, due: Date.now(), lapses: 0 }; n++; } });
    HSK.store.save(); return n;
  },
  due() {
    const now = Date.now();
    return Object.entries(HSK.store.state.cards).filter(([, c]) => c.due <= now).map(([id]) => id);
  },
  /** grade: 0 again, 1 hard, 2 good, 3 easy */
  grade(id, g) {
    const c = this.card(id); if (!c) return;
    if (g === 0) { c.reps = 0; c.ivl = 0; c.lapses++; c.due = Date.now() + 60e3; c.ef = Math.max(1.3, c.ef - 0.2); }
    else {
      c.reps++;
      if (c.reps === 1) c.ivl = g === 3 ? 3 : 1;
      else if (c.reps === 2) c.ivl = g === 1 ? 2 : g === 3 ? 6 : 4;
      else c.ivl = Math.round(c.ivl * c.ef * (g === 1 ? 0.7 : g === 3 ? 1.3 : 1));
      c.ef = Math.max(1.3, c.ef + [0, -0.15, 0, 0.15][g]);
      c.due = Date.now() + c.ivl * this.DAY;
    }
    HSK.store.touchDay(); HSK.store.save();
  },
  level(id) {
    const c = this.card(id);
    if (!c) return 0;
    if (c.ivl >= 21) return 3;
    if (c.ivl >= 4) return 2;
    return 1;
  },
};

/* ---------- Speech: text-to-speech ---------- */
HSK.tts = (() => {
  const synth = window.speechSynthesis;
  let voices = [];
  const load = () => {
    if (!synth) return;
    voices = synth.getVoices().filter(v => /^zh[-_](CN|Hans)/i.test(v.lang) || /^cmn/i.test(v.lang));
    if (!voices.length) voices = synth.getVoices().filter(v => /^zh/i.test(v.lang) && !/HK|TW/i.test(v.lang));
    document.dispatchEvent(new Event('hsk-voices'));
  };
  if (synth) { load(); synth.onvoiceschanged = load; }

  const rank = v => (/natural|neural|online/i.test(v.name) ? 0 : /google/i.test(v.name) ? 1 : 2);
  const pick = () => {
    const want = HSK.store.state.settings.voice;
    return voices.find(v => v.name === want) || [...voices].sort((a, b) => rank(a) - rank(b))[0];
  };

  return {
    get supported() { return !!synth; },
    get voices() { return voices; },
    get hasChinese() { return voices.length > 0; },
    speak(text, { rate, onend } = {}) {
      if (!synth) return;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(HSK.plain(text));
      u.lang = 'zh-CN';
      const v = pick(); if (v) u.voice = v;
      u.rate = rate ?? HSK.store.state.settings.rate;
      if (onend) { u.onend = onend; u.onerror = onend; }
      synth.speak(u);
    },
    /** speak and resolve when finished */
    say(text, opts = {}) { return new Promise(res => this.speak(text, { ...opts, onend: res })); },
    stop() { synth && synth.cancel(); },
  };
})();

/* ---------- Speech: recognition ---------- */
HSK.asr = (() => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const SAME = { '她': '他', '它': '他', '〇': '零', '妳': '你', '哪': '那' };
  const DIG = '零一二三四五六七八九';

  const numToCn = n => {
    if (n < 10) return DIG[n];
    if (n < 100) return (n >= 20 ? DIG[Math.floor(n / 10)] : '') + '十' + (n % 10 ? DIG[n % 10] : '');
    return String(n).split('').map(d => DIG[+d]).join('');
  };
  const norm = s => s
    .replace(/\d+/g, m => numToCn(+m))
    .replace(/[^㐀-鿿〇]/g, '')
    .split('').map(c => SAME[c] || c).join('');

  /** LCS alignment: which target characters were matched */
  function align(target, heard) {
    const a = [...target], b = [...heard];
    const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const hit = new Array(a.length).fill(false);
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { hit[i] = true; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
    }
    return { hit, score: a.length ? dp[0][0] / a.length : 0 };
  }

  return {
    supported: !!SR,
    /** Listen once. Resolves { heard, score, hit[] } against `target` (hanzi). */
    listen(target) {
      return new Promise((resolve, reject) => {
        if (!SR) return reject(new Error('unsupported'));
        const rec = new SR();
        rec.lang = 'zh-CN'; rec.interimResults = false; rec.maxAlternatives = 5; rec.continuous = false;
        const want = norm(HSK.plain(target));
        let done = false;
        rec.onresult = e => {
          done = true;
          const alts = [...e.results[0]].map(r => r.transcript);
          let best = null;
          for (const t of alts) {
            const r = align(want, norm(t));
            if (!best || r.score > best.score) best = { heard: t, ...r };
          }
          resolve(best);
        };
        rec.onerror = e => { done = true; reject(new Error(e.error)); };
        rec.onend = () => { if (!done) resolve({ heard: '', score: 0, hit: [...want].map(() => false) }); };
        rec.start();
        HSK.asr._current = rec;
      });
    },
    stop() { try { HSK.asr._current && HSK.asr._current.stop(); } catch {} },
    align, norm,
  };
})();

/* ---------- Small helpers ---------- */
HSK.util = {
  shuffle(a) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; },
  sample(a, n) { return HSK.util.shuffle(a).slice(0, n); },
  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); },
  hanChars(str) { return [...new Set([...str].filter(c => /[㐀-鿿]/.test(c)))]; },
};

/** All vocabulary words of a level up to (and including) a lesson. */
HSK.wordsUpTo = function (level, lessonN = Infinity) {
  const out = [];
  for (let l = 1; l <= level; l++) {
    const lv = HSK.levels[l]; if (!lv) continue;
    lv.lessons.forEach(ls => { if (l < level || ls.n <= lessonN) out.push(...ls.words); });
  }
  return out;
};
HSK.lesson = (level, n) => HSK.levels[level]?.lessons.find(l => l.n === +n);
