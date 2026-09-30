/* Page views. Each view renders into #view and wires its own events. */
const Views = (() => {
  const { $, $$, esc, pyHTML, hzHTML, sayBtn, sentence, toast } = UI;
  const S = () => HSK.store.state;
  const PARTS = [
    ['words', 'Words'], ['dialogue', 'Dialogue'], ['grammar', 'Grammar'],
    ['write', 'Writing'], ['practice', 'Practice'], ['speak', 'Speaking'],
  ];
  const TRACKED = ['words', 'dialogue', 'write', 'practice', 'speak'];

  const lessonProgress = ls => {
    const d = HSK.store.lesson(ls.id).done;
    return TRACKED.filter(p => d[p]).length / TRACKED.length;
  };
  const LEVEL_INFO = {
    1: 150, 2: 300, 3: 600, 4: 1200, 5: 2500, 6: 5000,
  };

  /* ================= Question generators ================= */
  const Q = {
    /** distractors: unique by hz/en and never a homophone of the answer (他/她 both sound tā) */
    pool(w, pool, n = 3, key = 'en') {
      const seen = new Set([w.hz, w.en, HSK.py.strip(w.py)]);
      const out = [];
      for (const x of HSK.util.shuffle(pool)) {
        if (!x.en || seen.has(x.hz) || seen.has(x[key]) || x.py === w.py) continue;
        seen.add(x.hz); seen.add(x[key]); out.push(x);
        if (out.length === n) break;
      }
      return out;
    },
    meaning(w, pool) {
      const opts = HSK.util.shuffle([w, ...Q.pool(w, pool)]);
      return { q: 'What does this mean?', prompt: `<div class="hz">${esc(w.hz)}</div>`, after: w.hz,
        options: opts.map(o => ({ html: esc(o.en), value: o.hz })), answer: w.hz,
        explain: `<span class="han">${esc(w.hz)}</span> ${pyHTML(w.py)} = ${esc(w.en)}`, review: `<span class="han">${w.hz}</span> ${pyHTML(w.py)} · ${esc(w.en)}` };
    },
    hanzi(w, pool) {
      const opts = HSK.util.shuffle([w, ...Q.pool(w, pool, 3, 'hz')]);
      return { q: `Which one means <b>“${esc(w.en)}”</b>?`, after: w.hz,
        options: opts.map(o => ({ html: `<span class="hz">${esc(o.hz)}</span>`, value: o.hz })), answer: w.hz,
        explain: `<span class="han">${esc(w.hz)}</span> ${pyHTML(w.py)}`, review: `<span class="han">${w.hz}</span> ${pyHTML(w.py)} · ${esc(w.en)}` };
    },
    listen(w, pool) {
      const opts = HSK.util.shuffle([w, ...Q.pool(w, pool, 3, 'hz')]);
      return { q: 'Listen. Which word did you hear?', say: w.hz,
        options: opts.map(o => ({ html: `<span class="hz">${esc(o.hz)}</span>`, value: o.hz })), answer: w.hz,
        explain: `<span class="han">${esc(w.hz)}</span> ${pyHTML(w.py)} · ${esc(w.en)}`, review: `🔊 <span class="han">${w.hz}</span> ${pyHTML(w.py)}` };
    },
    pic(w, pool) {
      const seen = new Set([w.emoji]), others = [];
      for (const x of HSK.util.shuffle(pool)) {
        if (!x.emoji || x.emoji.length >= 8 || seen.has(x.emoji) || x.hz === w.hz || x.py === w.py) continue;
        seen.add(x.emoji); others.push(x);
        if (others.length === 3) break;
      }
      const opts = HSK.util.shuffle([w, ...others]);
      return { q: 'Listen and pick the picture.', say: w.hz, pics: true,
        options: opts.map(o => ({ html: o.emoji, value: o.hz })), answer: w.hz,
        explain: `<span class="han">${esc(w.hz)}</span> ${pyHTML(w.py)} · ${esc(w.en)}`, review: `🔊 <span class="han">${w.hz}</span> ${w.emoji} ${esc(w.en)}` };
    },
    tone(w) {
      const syl = HSK.py.syllables(w.py);
      const right = HSK.py.word(w.py);
      const seen = new Set([right]); const opts = [right];
      for (let tries = 0; opts.length < 4 && tries < 60; tries++) {
        const s = syl.map(x => x);
        const k = Math.random() * s.length | 0;
        if (HSK.py.tone(s[k]) === 5 && s.length > 1) continue;
        s[k] = HSK.py.mark(s[k], 1 + (Math.random() * 4 | 0));
        if (Math.random() < .4 && s.length > 1) { const j = (k + 1) % s.length; if (HSK.py.tone(s[j]) !== 5) s[j] = HSK.py.mark(s[j], 1 + (Math.random() * 4 | 0)); }
        const v = HSK.py.word(s.join(' '));
        if (!seen.has(v)) { seen.add(v); opts.push(v); }
      }
      return { q: 'Listen. Which pinyin has the right tones?', prompt: `<div class="hz">${esc(w.hz)}</div>`, say: w.hz,
        options: HSK.util.shuffle(opts).map(o => ({ html: `<b style="font-size:1.2rem">${esc(o)}</b>`, value: o })), answer: right,
        explain: `${pyHTML(w.py)} · tones ${HSK.py.tones(w.py).map(t => t === 5 ? '0' : t).join('-')}`, review: `<span class="han">${w.hz}</span> ${pyHTML(w.py)}` };
    },
    sentenceListen(line, lines) {
      const sound = l => HSK.sentencePinyin(l[1]).toLowerCase();
      const seen = new Set([line[2], sound(line)]), others = [];
      for (const l of HSK.util.shuffle(lines)) {
        if (seen.has(l[2]) || seen.has(sound(l))) continue;
        seen.add(l[2]); seen.add(sound(l)); others.push(l);
        if (others.length === 3) break;
      }
      const opts = HSK.util.shuffle([line, ...others]);
      return { q: 'Listen to the sentence. What does it mean?', say: HSK.plain(line[1]),
        options: opts.map(o => ({ html: esc(o[2]), value: o[1] })), answer: line[1],
        explain: `<div style="margin-top:8px">${sentence(line[1])}</div>`, review: `🔊 <span class="han">${HSK.plain(line[1])}</span> · ${esc(line[2])}` };
    },
    build(s, en) {
      const tokens = s.split(/\s+/).filter(t => HSK.isHan(t));
      return { kind: 'build', q: `Build the sentence: <b>“${esc(en)}”</b>`, tokens,
        explain: `<div style="margin-top:8px">${sentence(s)}</div>`, review: `<span class="han">${HSK.plain(s)}</span> · ${esc(en)}` };
    },
    fill(s, en, known) {
      const toks = s.split(/\s+/);
      const idx = toks.map((t, i) => (known.has(t) ? i : -1)).filter(i => i >= 0);
      if (!idx.length) return null;
      const k = idx[Math.random() * idx.length | 0];
      const w = HSK.dict.get(toks[k]);
      const pool = [...known].map(h => HSK.dict.get(h)).filter(Boolean);
      const opts = HSK.util.shuffle([w, ...Q.pool(w, pool, 3, 'hz')]);
      const shown = toks.map((t, i) => (i === k ? '<u>&nbsp;＿＿&nbsp;</u>' : esc(t))).join('');
      return { q: `Fill in the blank. <span class="muted small">(${esc(en)})</span>`, prompt: `<div class="han" style="font-size:1.8rem">${shown}</div>`,
        options: opts.map(o => ({ html: `<span class="hz">${esc(o.hz)}</span> <span class="muted small">${esc(HSK.py.word(o.py))}</span>`, value: o.hz })),
        answer: w.hz, after: HSK.plain(s),
        explain: `<div style="margin-top:8px">${sentence(s)}</div>`, review: `<span class="han">${HSK.plain(s)}</span> · ${esc(en)}` };
    },
  };

  const lessonSentences = ls => [
    ...ls.dialogues.flatMap(d => d.lines.map(l => [l[0], l[1], l[2]])),
    ...ls.grammar.flatMap(g => g.examples.filter(e => /[。？！]$/.test(e[0].trim())).map(e => ['', e[0], e[1]])),
  ];

  function lessonQuiz(ls) {
    const pool = HSK.wordsUpTo(ls.level, ls.n).filter(w => w.en);
    const words = ls.words.filter(w => !/\(a name\)|surname/.test(w.en));
    const sents = lessonSentences(ls);
    const buildable = sents.filter(s => { const n = s[1].split(/\s+/).filter(HSK.isHan).length; return n >= 3 && n <= 8; });
    const known = new Set(pool.map(w => w.hz));
    const qs = [];
    HSK.util.sample(words, 3).forEach(w => qs.push(Q.meaning(w, pool)));
    HSK.util.sample(words, 2).forEach(w => qs.push(Q.hanzi(w, pool)));
    HSK.util.sample(words, 2).forEach(w => qs.push(Q.listen(w, pool)));
    HSK.util.sample(words.filter(w => HSK.py.syllables(w.py).length >= 1), 2).forEach(w => qs.push(Q.tone(w)));
    const pics = words.filter(w => w.emoji && w.emoji.length < 8);
    if (pics.length && pool.filter(w => w.emoji).length > 4) qs.push(Q.pic(HSK.util.sample(pics, 1)[0], pool));
    const allLines = HSK.levels[ls.level].lessons.filter(l => l.n <= ls.n).flatMap(lessonSentences);
    HSK.util.sample(sents, 2).forEach(l => qs.push(Q.sentenceListen(l, allLines)));
    HSK.util.sample(buildable, 2).forEach(s => qs.push(Q.build(s[1], s[2])));
    if (ls.n >= 3) HSK.util.sample(buildable, 1).forEach(s => { const f = Q.fill(s[1], s[2], known); f && qs.push(f); });
    return HSK.util.shuffle(qs);
  }

  /* ================= Home ================= */
  function home(el) {
    const cards = Object.keys(S().cards).length;
    const due = HSK.srs.due().length;
    const streak = HSK.store.streak();
    const lv = HSK.levels[1];
    const next = lv.lessons.find(l => lessonProgress(l) < 1) || lv.lessons[0];
    el.innerHTML = `
      <div class="hero">
        <div class="card welcome">
          <div class="big">学</div>
          <h1>你好！Ready to study?</h1>
          <p>Work through each lesson in four skills: <b>read</b> the words and dialogues, <b>listen</b> to native-style audio, <b>speak</b> into the mic for instant feedback, and <b>write</b> characters stroke by stroke.</p>
          <div class="row">
            <a class="btn" style="background:#fff;color:#8e2a20;border-color:#fff" href="#/lesson/1/${next.n}">Continue: Lesson ${next.n} →</a>
            ${due ? `<a class="btn" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.5)" href="#/review">Review ${due} due</a>` : ''}
          </div>
        </div>
        <div class="stack">
          <div class="stats">
            <div class="card stat"><b>${streak}🔥</b><span>day streak</span></div>
            <div class="card stat"><b>${cards}</b><span>words learning</span></div>
            <div class="card stat"><b>${due}</b><span>due now</span></div>
          </div>
          <div class="card">
            <h3>New to Mandarin? Start here</h3>
            <p class="muted small">Get the four tones and pinyin sounds into your ear before Lesson 1. It makes everything after easier.</p>
            <a class="btn primary sm" href="#/pinyin">Pinyin &amp; tones →</a>
          </div>
        </div>
      </div>
      ${!HSK.tts.hasChinese ? voiceWarning() : ''}
      <div class="section">
        <h2>Levels</h2>
        <div class="grid g3">
          ${[1, 2, 3, 4, 5, 6].map(n => {
            const L = HSK.levels[n];
            if (!L) return `<div class="card level-card locked"><span class="lv">HSK ${n}</span><span class="muted small">${LEVEL_INFO[n]} words · coming next</span><div class="bar"><i style="width:0"></i></div></div>`;
            const p = L.lessons.reduce((a, l) => a + lessonProgress(l), 0) / L.lessons.length;
            return `<a class="card level-card" href="#/level/${n}"><span class="lv">${L.title}</span><span class="muted small">${L.subtitle} · ${L.lessons.length} lessons</span><div class="bar"><i style="width:${p * 100}%"></i></div><span class="small muted">${Math.round(p * 100)}% complete</span></a>`;
          }).join('')}
        </div>
      </div>
      <div class="section card">
        <h3>How to use each lesson</h3>
        <ol class="muted" style="margin:0;padding-left:20px">
          <li><b>Words:</b> listen to each word and add them to your review deck.</li>
          <li><b>Dialogue:</b> listen with the text hidden first, then read along. Tap any word to see its meaning.</li>
          <li><b>Grammar:</b> short English notes with examples you can play.</li>
          <li><b>Writing:</b> watch the stroke order, then trace the characters yourself.</li>
          <li><b>Practice &amp; Speaking:</b> a mixed quiz, then say the words and sentences out loud.</li>
          <li>Come back every day for <b>Review</b>. Spaced repetition shows each word right before you'd forget it.</li>
        </ol>
      </div>`;
  }

  const voiceWarning = () => `<div class="notice section">
    <b>No Chinese voice found in this browser.</b> Audio won't play until you add one. Use <b>Microsoft Edge</b> (it includes natural online Chinese voices),
    or in Windows go to <i>Settings → Time &amp; language → Language → Add a language → 中文(中华人民共和国)</i> and tick <i>Speech</i>. Then reload this page.</div>`;

  /* ================= Level (lesson list) ================= */
  function level(el, n) {
    const L = HSK.levels[n];
    if (!L) { el.innerHTML = `<div class="empty"><div class="big">🚧</div><h2>HSK ${n} is coming next</h2><p>Finish HSK 1 first, and this level will be added from the book.</p></div>`; return; }
    el.innerHTML = `
      <div class="crumbs"><a href="#/">Home</a> / ${L.title}</div>
      <h1>${L.title} <span class="muted" style="font-weight:500;font-size:1rem">· ${L.subtitle}</span></h1>
      <p class="muted">${L.lessons.length} lessons following the order of <i>${esc(L.book)}</i>. Start with <a href="#/pinyin">Pinyin &amp; tones</a> if you're brand new.</p>
      <div class="stack section">
        ${L.lessons.map(ls => {
          const p = lessonProgress(ls);
          return `<a class="card lesson-item ${p === 1 ? 'done' : ''}" href="#/lesson/${n}/${ls.n}">
            <div class="num">${p === 1 ? '✓' : ls.n}</div>
            <div><div class="zh">${esc(ls.zh)} <span class="muted" style="font:400 .9rem var(--font)">${esc(ls.en)}</span></div>
              <div class="small muted">${esc(ls.focus)}</div></div>
            <div style="width:90px"><div class="bar"><i style="width:${p * 100}%"></i></div><div class="small muted" style="text-align:right">${ls.words.length} words</div></div>
          </a>`;
        }).join('')}
      </div>`;
  }

  /* ================= Lesson ================= */
  function lesson(el, lvN, n, tab = 'words') {
    const ls = HSK.lesson(lvN, n);
    if (!ls) { el.innerHTML = '<div class="empty">Lesson not found.</div>'; return; }
    const L = HSK.levels[lvN];
    const done = HSK.store.lesson(ls.id).done;
    const prev = HSK.lesson(lvN, ls.n - 1), next = HSK.lesson(lvN, ls.n + 1);
    el.innerHTML = `
      <div class="crumbs"><a href="#/">Home</a> / <a href="#/level/${lvN}">${L.title}</a> / Lesson ${ls.n}</div>
      <div class="lesson-head">
        <div style="flex:1;min-width:240px">
          <h1 class="zh" data-word-line>${esc(ls.zh)}</h1>
          <div class="muted">${esc(HSK.sentencePinyin(tokenizeTitle(ls.zh)))}</div>
          <div><b>${esc(ls.en)}</b> · <span class="muted small">${esc(ls.focus)}</span></div>
        </div>
        <div class="row">
          ${prev ? `<a class="btn sm" href="#/lesson/${lvN}/${prev.n}">← L${prev.n}</a>` : ''}
          ${next ? `<a class="btn sm" href="#/lesson/${lvN}/${next.n}">L${next.n} →</a>` : ''}
        </div>
      </div>
      <div class="tabs">${PARTS.map(([k, label]) =>
        `<a href="#/lesson/${lvN}/${ls.n}/${k}" class="${k === tab ? 'on' : ''}">${label}${done[k] ? '<span class="tick">✓</span>' : ''}</a>`).join('')}</div>
      <div id="tab"></div>`;
    const t = $('#tab', el);
    ({ words: lessonWords, dialogue: lessonDialogue, grammar: lessonGrammar, write: lessonWrite, practice: lessonPractice, speak: lessonSpeak }[tab] || lessonWords)(t, ls);
  }

  /** Split a lesson title into known words greedily so it gets pinyin. */
  function tokenizeTitle(zh) {
    const out = []; let i = 0; const s = [...zh];
    while (i < s.length) {
      let found = null;
      for (let len = Math.min(4, s.length - i); len > 0; len--) {
        const cand = s.slice(i, i + len).join('');
        if (HSK.dict.has(cand) || (len === 1) || /^[〇零一二三四五六七八九十]+$/.test(cand)) { found = cand; break; }
      }
      out.push(found); i += [...found].length;
    }
    return out.join(' ');
  }

  function lessonWords(t, ls) {
    const ids = ls.words.map(w => w.hz);
    const inDeck = ids.filter(id => HSK.srs.has(id)).length;
    t.innerHTML = `
      <div class="row" style="margin-bottom:14px">
        <button class="btn" data-playall>▶ Play all</button>
        <label class="toggle"><input type="checkbox" data-color checked> Tone colours</label>
        <span class="spacer"></span>
        <button class="btn primary" data-add ${inDeck === ids.length ? 'disabled' : ''}>${inDeck === ids.length ? '✓ All in review' : `+ Add ${ids.length - inDeck} words to review`}</button>
      </div>
      <div class="grid g2" id="wordgrid">
        ${ls.words.map(w => `<div class="card word">
          <div class="hz" data-word="${esc(w.hz)}">${hzHTML(w.hz, w.py)}</div>
          <div><div class="py">${pyHTML(w.py)}</div><div class="en">${esc(w.en)}</div></div>
          <div class="actions"><span class="emo">${w.emoji && w.emoji.length < 8 ? w.emoji : ''}</span>${sayBtn(w.hz)}</div>
        </div>`).join('')}
      </div>
      ${ls.pinyinLink ? `<div class="notice info section">This lesson is mostly about pronunciation. Spend time on the <a href="#/pinyin">Pinyin &amp; tones</a> page: learn the tones, the sounds chart and the listening drills.</div>` : ''}`;
    $('[data-color]', t).onchange = e => $('#wordgrid', t).classList.toggle('nocolor', !e.target.checked);
    $('[data-add]', t).onclick = e => {
      const n = HSK.srs.add(ids); HSK.store.markDone(ls.id, 'words');
      e.target.textContent = '✓ All in review'; e.target.disabled = true;
      toast(`${n} words added to your review deck`); App.refreshBadge(); App.refreshTabs();
    };
    $('[data-playall]', t).onclick = async e => {
      const btn = e.target; btn.disabled = true;
      for (const w of ls.words) {
        const card = $$('.word', t).find(c => c.querySelector('[data-word]').dataset.word === w.hz);
        card && (card.style.borderColor = 'var(--accent)');
        await HSK.tts.say(w.hz); await wait(500);
        card && (card.style.borderColor = '');
        if (!document.body.contains(btn)) return;
      }
      btn.disabled = false;
    };
  }

  const wait = ms => new Promise(r => setTimeout(r, ms));

  function lessonDialogue(t, ls) {
    const st = S().settings;
    t.innerHTML = `
      <div class="row" style="margin-bottom:16px">
        <button class="btn primary" data-all>▶ Play whole dialogue</button>
        <label class="toggle"><input type="checkbox" data-py ${st.pinyin ? 'checked' : ''}> Pinyin</label>
        <label class="toggle"><input type="checkbox" data-en ${st.english ? 'checked' : ''}> English</label>
        <label class="toggle"><input type="checkbox" data-hide> Listening mode (blur text)</label>
      </div>
      <p class="small muted">Tap any word for its meaning and strokes. Tip: listen once in listening mode, then read along, then shadow each line out loud.</p>
      <div id="dlg" class="${st.pinyin ? '' : 'no-py'} ${st.english ? '' : 'no-en'}">
        ${ls.dialogues.map((d, di) => `<div class="card scene">
          <h3>Scene ${di + 1} · ${esc(d.scene)} <span class="spacer"></span><button class="btn sm" data-scene="${di}">▶ Scene</button></h3>
          ${d.lines.map((l, li) => `<div class="line" data-line="${di}-${li}">
            <div class="who">${esc(l[0])}</div>
            <div>${sentence(l[1])}<div class="en">${esc(l[2])}</div></div>
            <div class="acts">${sayBtn(l[1])}</div>
          </div>`).join('')}
        </div>`).join('')}
      </div>`;
    const dlg = $('#dlg', t);
    $('[data-py]', t).onchange = e => { dlg.classList.toggle('no-py', !e.target.checked); st.pinyin = e.target.checked; HSK.store.save(); };
    $('[data-en]', t).onchange = e => { dlg.classList.toggle('no-en', !e.target.checked); st.english = e.target.checked; HSK.store.save(); };
    $('[data-hide]', t).onchange = e => dlg.classList.toggle('hide-text', e.target.checked);

    let token = 0;
    const playLines = async (list) => {
      const my = ++token;
      for (const [di, li] of list) {
        if (my !== token || !document.body.contains(dlg)) return false;
        const row = $(`[data-line="${di}-${li}"]`, dlg);
        $$('.line.playing', dlg).forEach(r => r.classList.remove('playing'));
        row.classList.add('playing');
        await HSK.tts.say(ls.dialogues[di].lines[li][1]);
        await wait(450);
      }
      $$('.line.playing', dlg).forEach(r => r.classList.remove('playing'));
      return my === token;
    };
    $$('[data-scene]', t).forEach(b => b.onclick = async () => {
      const di = +b.dataset.scene;
      if (await playLines(ls.dialogues[di].lines.map((_, li) => [di, li]))) { HSK.store.markDone(ls.id, 'dialogue'); App.refreshTabs(); }
    });
    $('[data-all]', t).onclick = async () => {
      const all = ls.dialogues.flatMap((d, di) => d.lines.map((_, li) => [di, li]));
      if (await playLines(all)) { HSK.store.markDone(ls.id, 'dialogue'); App.refreshTabs(); }
    };
  }

  function lessonGrammar(t, ls) {
    t.innerHTML = `<div class="stack">
      ${ls.grammar.map((g, i) => `<div class="card gram">
        <h3><span class="n">${i + 1}</span> ${esc(g.title)}</h3>
        <div class="body">${g.body}</div>
        ${g.examples.map(e => `<div class="ex"><div>${sentence(e[0])}</div>${sayBtn(e[0])}<div class="en">${esc(e[1])}</div></div>`).join('')}
      </div>`).join('')}
      ${ls.culture ? `<div class="card" style="border-left:4px solid var(--accent)"><span class="pill red">Culture</span><h3 style="margin-top:8px">${esc(ls.culture.title)}</h3><div class="muted">${ls.culture.body}</div></div>` : ''}
    </div>`;
  }

  /* ---------- Writing (shared by lesson tab and Writing page) ---------- */
  function writingPad(root, chars, required, { onQuizDone } = {}) {
    const doneSet = new Set(S().written || []);
    root.innerHTML = `
      <div class="writer-wrap">
        <div>
          <div class="writer-box" id="wbox"></div>
          <div class="row" style="margin-top:10px;justify-content:center">
            <button class="btn sm" data-anim>▶ Animate</button>
            <button class="btn sm primary" data-quiz>✍ Trace it</button>
            <button class="btn sm" data-outline>Outline</button>
          </div>
        </div>
        <div>
          <div id="winfo" style="margin-bottom:12px"></div>
          <div class="char-grid" id="cgrid">${chars.map(c =>
            `<div class="char-cell ${required.includes(c) ? 'req' : ''} ${doneSet.has(c) ? 'done' : ''}" data-c="${esc(c)}">${esc(c)}</div>`).join('')}</div>
          <p class="small muted" style="margin-top:10px"><span style="color:var(--accent)">●</span> = characters you should be able to write at this level. Green = traced correctly.</p>
        </div>
      </div>`;
    let wr = null, cur = null, outline = true;
    const select = async c => {
      cur = c;
      $$('.char-cell', root).forEach(x => x.classList.toggle('on', x.dataset.c === c));
      const box = $('#wbox', root); box.innerHTML = '';
      wr = await UI.writer(box, c, 260);
      wr && wr.animateCharacter();
      const w = HSK.dict.get(c) || HSK.tokenize(c)[0] || {};
      const words = HSK.wordsUpTo(1).filter(x => x.hz.includes(c) && x.hz !== c).slice(0, 6);
      $('#winfo', root).innerHTML = `<div class="row"><span class="han" style="font-size:2.2rem">${esc(c)}</span>
        <div><div class="py" style="font-weight:700">${w.py ? pyHTML(w.py) : ''}</div><div class="muted small">${esc(w.en || '')}</div></div>
        <span class="spacer"></span>${sayBtn(c)}</div>
        ${words.length ? `<div class="small muted" style="margin-top:6px">In words: ${words.map(x => `<span class="han tok w" data-word="${esc(x.hz)}" style="display:inline;font-size:1rem">${esc(x.hz)}</span>`).join(' · ')}</div>` : ''}`;
    };
    $('#cgrid', root).onclick = e => { const c = e.target.closest('[data-c]'); c && select(c.dataset.c); };
    $('[data-anim]', root).onclick = () => wr && wr.animateCharacter();
    $('[data-outline]', root).onclick = () => { if (!wr) return; outline = !outline; outline ? wr.showOutline() : wr.hideOutline(); };
    $('[data-quiz]', root).onclick = () => {
      if (!wr) return;
      wr.quiz({
        showHintAfterMisses: 2,
        onComplete: s => {
          const good = s.totalMistakes <= 3;
          toast(good ? `Nice! ${s.totalMistakes} mistake${s.totalMistakes === 1 ? '' : 's'}` : `Done with ${s.totalMistakes} mistakes. Try once more.`);
          if (good) {
            const set = new Set(S().written || []); set.add(cur); S().written = [...set]; HSK.store.touchDay(); HSK.store.save();
            $(`[data-c="${cur}"]`, root)?.classList.add('done');
            onQuizDone && onQuizDone(set);
          }
        },
      });
    };
    chars.length && select(chars[0]);
  }

  function lessonWrite(t, ls) {
    const chars = HSK.util.hanChars(ls.words.filter(w => !w.extra).map(w => w.hz).join('') + ls.chars.write.join(''));
    const ordered = [...ls.chars.write, ...chars.filter(c => !ls.chars.write.includes(c))];
    t.innerHTML = `<div class="card" id="pad"></div>
      <div class="grid g2 section">
        ${ls.chars.strokes ? `<div class="card"><h3>Strokes in this lesson</h3>${ls.chars.strokes.map(s => {
          const st = HSK.strokes.find(x => x[0] === s);
          return st ? `<div class="row" style="margin:6px 0"><span class="han" style="font-size:1.6rem;width:34px">${st[4]}</span><b class="han">${st[0]}</b> ${pyHTML(st[1])} <span class="muted small">${st[2]} · e.g. <span class="han">${st[3]}</span></span></div>` : '';
        }).join('')}<a class="small" href="#/write">All 17 strokes →</a></div>` : ''}
        ${ls.chars.radicals ? `<div class="card"><h3>Radicals (meaning parts)</h3>${ls.chars.radicals.map(([r, m, ex]) =>
          `<div class="row" style="margin:8px 0"><span class="han" style="font-size:1.8rem;width:40px">${r}</span><div><b>${esc(m)}</b><div class="small muted">e.g. ${ex.map(x => `<span class="han">${x}</span>`).join(' ')}</div></div></div>`).join('')}
          <p class="small muted">Radicals hint at meaning: characters with 氵 relate to water, 讠 to speech, and so on.</p></div>` : ''}
      </div>`;
    writingPad($('#pad', t), ordered, ls.chars.write, {
      onQuizDone: set => {
        if (ls.chars.write.every(c => set.has(c))) { HSK.store.markDone(ls.id, 'write'); App.refreshTabs(); toast('All required characters written ✓'); }
      },
    });
  }

  function lessonPractice(t, ls) {
    const start = () => UI.quiz(t, lessonQuiz(ls), {
      title: `Lesson ${ls.n}`,
      onFinish: (pct) => {
        if (pct === 'again') return start();
        const rec = HSK.store.lesson(ls.id);
        rec.best = Math.max(rec.best || 0, pct); HSK.store.touchDay(); HSK.store.save();
        if (pct >= 60) { HSK.store.markDone(ls.id, 'practice', pct); App.refreshTabs(); }
      },
    });
    const best = HSK.store.lesson(ls.id).best;
    t.innerHTML = `<div class="card quiz" style="text-align:center;padding:30px">
      <div style="font-size:2.6rem">🎯</div>
      <h2>Lesson ${ls.n} practice</h2>
      <p class="muted">About 15 mixed questions: meanings, listening, tones, pictures, and building sentences. Score 60% or more to complete this part.${best ? ` Best score: <b>${best}%</b>.` : ''}</p>
      <button class="btn primary" data-go>Start</button></div>`;
    $('[data-go]', t).onclick = start;
  }

  function lessonSpeak(t, ls) {
    const rec = HSK.store.lesson(ls.id);
    rec.speak = rec.speak || {};
    const onScore = (s, row) => {
      const k = row.dataset.target;
      rec.speak[k] = Math.max(rec.speak[k] || 0, s);
      const good = Object.values(rec.speak).filter(v => v >= 0.7).length;
      if (good >= 5 && !rec.done.speak) { HSK.store.markDone(ls.id, 'speak'); App.refreshTabs(); toast('Speaking complete for this lesson ✓'); }
      HSK.store.save();
    };
    const lines = ls.dialogues.flatMap(d => d.lines);
    t.innerHTML = `
      ${!HSK.asr.supported ? `<div class="notice" style="margin-bottom:14px">Speech recognition isn't available in this browser. Use <b>Chrome</b> or <b>Edge</b> (online) to get pronunciation feedback. You can still listen and repeat.</div>` : ''}
      <div class="card" style="margin-bottom:16px">
        <h3>🎭 Role-play</h3>
        <p class="muted small">The app plays one role. When it's your turn, the mic opens and you say your line.</p>
        <div class="row">${ls.dialogues.map((d, i) => `<button class="btn sm" data-role="${i}">Scene ${i + 1}: ${esc(d.scene)}</button>`).join('')}</div>
        <div id="roleplay"></div>
      </div>
      <div class="grid g2">
        <div class="card"><h3>Words</h3><p class="small muted">▶ listen, then 🎤 say it. Green characters were recognised.</p>
          ${ls.words.map(w => UI.speakRow(w.hz, `${HSK.py.word(w.py)} · ${w.en}`)).join('')}</div>
        <div class="card"><h3>Sentences</h3><p class="small muted">Get 5 items to 70%+ to complete this part.</p>
          ${lines.map(l => UI.speakRow(l[1], l[2])).join('')}</div>
      </div>`;
    UI.wireMics(t, onScore);
    $$('[data-role]', t).forEach(b => b.onclick = () => rolePlay($('#roleplay', t), ls.dialogues[+b.dataset.role], onScore));
  }

  async function rolePlay(box, dlg, onScore) {
    const roles = [...new Set(dlg.lines.map(l => l[0]))];
    box.innerHTML = `<p style="margin-top:12px">Which role do you want to play?</p><div class="row">${roles.map(r => `<button class="btn" data-me="${esc(r)}">${esc(r)}</button>`).join('')}</div>`;
    $$('[data-me]', box).forEach(b => b.onclick = async () => {
      const me = b.dataset.me;
      box.innerHTML = `<div class="stack" style="margin-top:12px">${dlg.lines.map((l, i) =>
        l[0] === me ? `<div class="card" style="padding:10px 14px" data-i="${i}">${UI.speakRow(l[1], l[2]).replace('speak-row', 'speak-row mine')}</div>`
          : `<div style="padding:4px 14px" data-i="${i}"><span class="pill">${esc(l[0])}</span> ${sentence(l[1])}<div class="small muted">${esc(l[2])}</div></div>`).join('')}
        <div class="row"><button class="btn sm" data-stop>Stop</button></div></div>`;
      UI.wireMics(box, onScore);
      let stop = false;
      $('[data-stop]', box).onclick = () => { stop = true; HSK.tts.stop(); HSK.asr.stop(); };
      for (let i = 0; i < dlg.lines.length && !stop; i++) {
        const el = $(`[data-i="${i}"]`, box);
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        el.style.outline = '2px solid var(--accent)';
        if (dlg.lines[i][0] === me) {
          if (HSK.asr.supported) { await wait(250); await UI.listenInto($('[data-target]', el), $('[data-mic]', el), onScore); }
          else await wait(3500);
        } else await HSK.tts.say(dlg.lines[i][1]);
        el.style.outline = '';
        await wait(400);
      }
      if (!stop) toast('Role-play finished! Try the other role too.');
    });
  }

  /* ================= Review ================= */
  function review(el) {
    const all = Object.keys(S().cards);
    const due = HSK.util.shuffle(HSK.srs.due());
    if (!all.length) {
      el.innerHTML = `<h1>Review</h1><div class="card empty"><div class="big">🗂️</div><h2>Your deck is empty</h2>
        <p>Open a lesson's <b>Words</b> tab and press <b>Add to review</b>. Words then come back here right before you'd forget them.</p>
        <a class="btn primary" href="#/lesson/1/1">Go to Lesson 1</a></div>`;
      return;
    }
    const mode = S().settings.reviewMode || 'read';
    const lvls = [0, 0, 0, 0]; all.forEach(id => lvls[HSK.srs.level(id)]++);
    el.innerHTML = `<h1>Review</h1>
      <div class="row" style="margin-bottom:14px">
        <span class="pill red">${due.length} due</span><span class="pill">${all.length} total</span>
        <span class="pill warn">${lvls[1]} learning</span><span class="pill jade">${lvls[2] + lvls[3]} known</span>
        <span class="spacer"></span>
        <label class="small muted">Card type</label>
        <select data-mode>
          <option value="read" ${mode === 'read' ? 'selected' : ''}>Read: 汉字 → meaning</option>
          <option value="listen" ${mode === 'listen' ? 'selected' : ''}>Listen: audio → meaning</option>
          <option value="recall" ${mode === 'recall' ? 'selected' : ''}>Recall: English → 汉字</option>
          <option value="mix" ${mode === 'mix' ? 'selected' : ''}>Mixed</option>
        </select>
      </div>
      <div id="rv"></div>`;
    $('[data-mode]', el).onchange = e => { S().settings.reviewMode = e.target.value; HSK.store.save(); review(el); };
    const box = $('#rv', el);
    let queue = due, i = 0, reviewed = 0;
    const show = () => {
      if (i >= queue.length) {
        App.refreshBadge();
        const next = Object.values(S().cards).reduce((m, c) => Math.min(m, c.due), Infinity);
        box.innerHTML = `<div class="card empty"><div class="big">✅</div><h2>${reviewed ? `Done! ${reviewed} reviewed` : 'Nothing due right now'}</h2>
          <p class="muted">Next review ${isFinite(next) ? fmtWhen(next) : '-'}.</p>
          <div class="row" style="justify-content:center"><button class="btn" data-ahead>Study 10 words anyway</button><a class="btn primary" href="#/level/1">Learn new words</a></div></div>`;
        $('[data-ahead]', box).onclick = () => { queue = HSK.util.sample(all, Math.min(10, all.length)); i = 0; show(); };
        return;
      }
      const id = queue[i], w = HSK.dict.get(id);
      const m = mode === 'mix' ? ['read', 'listen', 'recall'][Math.random() * 3 | 0] : mode;
      const front = m === 'read' ? `<div class="hz">${esc(w.hz)}</div>`
        : m === 'listen' ? `<div style="font-size:3rem">🔊</div><button class="btn" data-say="${esc(w.hz)}">Play again</button>`
        : `<div style="font-size:1.6rem;font-weight:600">${esc(w.en)}</div><div class="muted small">Say or write the Chinese</div>`;
      box.innerHTML = `<div class="quiz">
        <div class="progress-top"><span class="small muted">${i + 1} / ${queue.length}</span><div class="bar"><i style="width:${i / queue.length * 100}%"></i></div></div>
        <div class="card flash" data-flip>${front}<div class="hint">Tap or press Space to reveal</div></div>
        <div id="grades"></div></div>`;
      if (m !== 'read') HSK.tts.speak(w.hz);
      if (m === 'listen') setTimeout(() => HSK.tts.speak(w.hz), 10);
      const flip = () => {
        $('[data-flip]', box).innerHTML = `<div class="hz">${hzHTML(w.hz, w.py)}</div><div class="py">${pyHTML(w.py)}</div>
          <div class="en">${esc(w.en)}</div><div>${sayBtn(w.hz)}</div><div class="hint">HSK ${w.level} · Lesson ${w.lesson}</div>`;
        $('[data-flip]', box).onclick = null;
        if (m === 'read') HSK.tts.speak(w.hz);
        const c = HSK.srs.card(id);
        const est = g => (g === 0 ? '1 min' : fmtIvl(g, c));
        $('#grades', box).innerHTML = `<div class="grades">
          ${[['Again', 0], ['Hard', 1], ['Good', 2], ['Easy', 3]].map(([l, g]) => `<button class="btn g${g}" data-g="${g}">${l}<small>${est(g)}</small></button>`).join('')}</div>
          <p class="small muted" style="text-align:center;margin-top:8px">Keys: 1 Again · 2 Hard · 3 Good · 4 Easy</p>`;
        $$('[data-g]', box).forEach(b => b.onclick = () => grade(+b.dataset.g));
      };
      const grade = g => {
        HSK.srs.grade(id, g); reviewed++;
        if (g === 0) queue.push(id);
        i++; show();
      };
      $('[data-flip]', box).onclick = e => { if (!e.target.closest('[data-say]')) flip(); };
      App.keyHandler = e => {
        if (e.code === 'Space') { e.preventDefault(); if ($('[data-flip]', box)?.onclick) flip(); }
        const g = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3 }[e.code];
        if (g !== undefined && $('#grades .grades', box)) grade(g);
      };
    };
    show();
  }
  function fmtIvl(g, c) {
    let ivl;
    const reps = c.reps + 1;
    if (reps === 1) ivl = g === 3 ? 3 : 1;
    else if (reps === 2) ivl = g === 1 ? 2 : g === 3 ? 6 : 4;
    else ivl = Math.round(c.ivl * c.ef * (g === 1 ? 0.7 : g === 3 ? 1.3 : 1));
    return ivl < 31 ? `${ivl}d` : `${Math.round(ivl / 30)}mo`;
  }
  function fmtWhen(ts) {
    const d = ts - Date.now();
    if (d <= 0) return 'now';
    if (d < 36e5) return `in ${Math.ceil(d / 6e4)} min`;
    if (d < 864e5) return `in ${Math.round(d / 36e5)} h`;
    return `in ${Math.round(d / 864e5)} days`;
  }

  /* ================= Writing page ================= */
  function write(el) {
    const L = HSK.levels[1];
    const req = L.lessons.flatMap(l => l.chars.write);
    const all = HSK.util.hanChars(req.join('') + HSK.wordsUpTo(1).filter(w => !/name|surname/.test(w.en)).map(w => w.hz).join(''));
    const ordered = [...new Set([...req, ...all])];
    const written = new Set(S().written || []);
    el.innerHTML = `<h1>Writing</h1>
      <p class="muted">${written.size} of ${ordered.length} HSK 1 characters traced. Pick a character, watch the stroke order, then press <b>Trace it</b> and draw with your mouse, finger or pen.</p>
      <div class="card" id="pad"></div>
      <div class="card section">
        <h2>The basic strokes</h2>
        <p class="muted small">Every character is built from these strokes. General order rules: top before bottom, left before right, horizontal before vertical, left-falling before right-falling, outside before inside, and close the box last.</p>
        <div style="overflow-x:auto"><table class="stroke-table">
          <tr><th>Stroke</th><th>Name</th><th>Pinyin</th><th>Meaning</th><th>Example</th></tr>
          ${HSK.strokes.map(s => `<tr><td class="sg">${s[4]}</td><td class="han">${s[0]}</td><td>${pyHTML(s[1])}</td><td class="muted">${s[2]}</td><td class="han tok w" data-word="${s[3]}" style="display:table-cell;font-size:1.3rem">${s[3]}</td></tr>`).join('')}
        </table></div>
      </div>`;
    writingPad($('#pad', el), ordered, req);
  }

  /* ================= Pinyin page ================= */
  function pinyin(el, tab = 'tones') {
    const P = HSK.pinyin;
    const tabs = [['tones', 'Tones'], ['sounds', 'Sounds chart'], ['rules', 'Rules'], ['drills', 'Listening drills']];
    el.innerHTML = `<div class="crumbs"><a href="#/">Home</a> / Pinyin</div>
      <h1>Pinyin &amp; tones</h1>
      <p class="muted">Pinyin is the Latin spelling of Mandarin. Every syllable = <b>initial</b> (start sound) + <b>final</b> (the rest) + <b>tone</b>. Change the tone and you change the word: mā (mother) vs mǎ (horse).</p>
      <div class="tabs">${tabs.map(([k, l]) => `<a href="#/pinyin/${k}" class="${k === tab ? 'on' : ''}">${l}</a>`).join('')}</div>
      <div id="ptab"></div>`;
    const t = $('#ptab', el);
    if (tab === 'tones') {
      t.innerHTML = `<div class="grid g4">${P.tones.map(tn => `<div class="card tone-card">
          <div class="mk t${tn.n}">${tn.mark}</div><b>${tn.name}</b><div class="small muted">${tn.shape}</div>
          <svg viewBox="-5 0 110 100" preserveAspectRatio="none"><polyline fill="none" stroke="var(--t${tn.n})" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
            points="${tn.contour.map(([x, y]) => `${x},${y}`).join(' ')}"/></svg>
          <div class="small muted">${tn.tip}</div></div>`).join('')}</div>
        <h2 class="section">Hear the difference</h2>
        <p class="muted small">Each row is the same syllable in four tones. Click a character to hear it, or play the whole row.</p>
        <div class="stack">${P.quartets.map((q, i) => `<div class="card" style="padding:12px"><div class="row" style="margin-bottom:8px"><b>${HSK.py.strip(q[0][1])}</b><span class="spacer"></span><button class="btn sm" data-q="${i}">▶ Play row</button></div>
          <div class="quartet">${q.map(([hz, py, en]) => `<button data-say="${hz}"><span class="hz">${hz}</span><b class="t${HSK.py.tone(py)}">${py}</b><div class="small muted">${en}</div></button>`).join('')}</div></div>`).join('')}</div>`;
      $$('[data-q]', t).forEach(b => b.onclick = async () => { for (const [hz] of P.quartets[+b.dataset.q]) { await HSK.tts.say(hz, { rate: 0.7 }); await wait(300); } });
    } else if (tab === 'sounds') {
      const block = (title, groups) => `<h2 class="section">${title}</h2>${groups.map(g => `<h3 class="muted" style="margin-top:14px">${g.group}</h3>
        <div class="py-grid">${g.items.map(([s, hz, py, tip]) => `<button class="py-cell" data-say="${hz}"><b>${s}</b><span class="ex"><span class="han">${hz}</span> ${py}</span><span class="tip">${tip}</span></button>`).join('')}</div>`).join('')}`;
      t.innerHTML = `<p class="muted small">Click any sound to hear an example. Pay special attention to the <b>j q x</b>, <b>zh ch sh r</b> and <b>z c s</b> groups; they don't exist in English.</p>
        ${block('Initials (21)', P.initials)}${block('Finals', P.finals)}`;
    } else if (tab === 'rules') {
      t.innerHTML = `<div class="grid g2">${P.rules.map(r => `<div class="card"><h3>${r.title}</h3><div class="muted">${r.body}</div></div>`).join('')}</div>`;
    } else {
      t.innerHTML = `<div class="grid g3">
        <button class="card" data-drill="tone" style="text-align:left;cursor:pointer"><h3>🎵 Single tones</h3><p class="muted small">Hear one syllable and pick its tone (1–4).</p></button>
        <button class="card" data-drill="pair" style="text-align:left;cursor:pointer"><h3>👂 Similar sounds</h3><p class="muted small">j/zh, q/ch, x/sh, -n/-ng… which one did you hear?</p></button>
        <button class="card" data-drill="two" style="text-align:left;cursor:pointer"><h3>🎶 Two-syllable words</h3><p class="muted small">Hear an HSK 1 word and pick its tone pattern.</p></button>
      </div><div id="drill" class="section"></div>`;
      $$('[data-drill]', t).forEach(b => b.onclick = () => drill($('#drill', t), b.dataset.drill));
    }
  }

  function drill(box, kind) {
    const P = HSK.pinyin; const qs = [];
    const names = ['1st ā', '2nd á', '3rd ǎ', '4th à'];
    if (kind === 'tone') {
      for (let i = 0; i < 12; i++) {
        const q = P.quartets[Math.random() * P.quartets.length | 0]; const [hz, py, en] = q[Math.random() * 4 | 0];
        qs.push({ q: 'Which tone is this?', say: hz, options: names.map((n, k) => ({ html: `<b class="t${k + 1}">${n}</b>`, value: k + 1 })), answer: HSK.py.tone(py),
          explain: `<span class="han">${hz}</span> <b>${py}</b> (${en})`, review: `<span class="han">${hz}</span> ${py}` });
      }
    } else if (kind === 'pair') {
      HSK.util.sample(P.pairs, 12).forEach(p => {
        const pick = p.items[Math.random() * 2 | 0];
        qs.push({ q: `Which did you hear? <span class="pill">${p.label}</span>`, say: pick[0],
          options: p.items.map(([hz, py]) => ({ html: `<b style="font-size:1.3rem">${py}</b>`, value: py })), answer: pick[1],
          explain: p.items.map(([hz, py]) => `<span class="han">${hz}</span> ${py}`).join(' vs '), review: `${p.label}: <span class="han">${pick[0]}</span> ${pick[1]}` });
      });
    } else {
      const words = HSK.wordsUpTo(1).filter(w => HSK.py.syllables(w.py).length === 2 && !HSK.py.tones(w.py).includes(5) && !/name/.test(w.en));
      const pats = [...new Set(words.map(w => HSK.py.tones(w.py).join('-')))];
      HSK.util.sample(words, 12).forEach(w => {
        const right = HSK.py.tones(w.py).join('-');
        const opts = HSK.util.shuffle([right, ...HSK.util.sample(pats.filter(p => p !== right), 3)]);
        qs.push({ q: 'Which tone pattern do you hear?', say: w.hz,
          options: opts.map(o => ({ html: `<b>${o.split('-').map(n => `<span class="t${n}">${n}</span>`).join(' + ')}</b>`, value: o })), answer: right,
          explain: `<span class="han">${w.hz}</span> ${pyHTML(w.py)} · ${esc(w.en)}`, review: `<span class="han">${w.hz}</span> ${pyHTML(w.py)}` });
      });
    }
    UI.quiz(box, qs, { title: 'Drill', onFinish: r => { if (r === 'again') drill(box, kind); else HSK.store.touchDay(); } });
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ================= Mock test ================= */
  function test(el, lvN) {
    const L = HSK.levels[lvN];
    if (!L) { el.innerHTML = `<div class="empty"><h2>HSK ${lvN} test coming soon</h2></div>`; return; }
    const hist = S().tests.filter(t => t.level === +lvN).slice(-5).reverse();
    el.innerHTML = `<h1>${L.title} practice test</h1>
      <p class="muted">Modelled on the real HSK 1 exam, which has <b>listening</b> and <b>reading</b> only. It uses 30 questions from all 15 lessons. The real exam scores out of 200 and you pass with 120 (60%).</p>
      <div class="grid g2">
        <div class="card"><h3>Sections</h3><ul class="muted" style="margin:0;padding-left:18px">
          <li>Listening 1: hear a word, pick the picture (5)</li><li>Listening 2: hear a word, pick the characters (5)</li>
          <li>Listening 3: hear a sentence, pick the meaning (5)</li><li>Reading 1: characters → meaning (5)</li>
          <li>Reading 2: fill in the blank (5)</li><li>Reading 3: English → characters (5)</li></ul></div>
        <div class="card"><h3>Past attempts</h3>${hist.length ? hist.map(h => `<div class="row"><span>${new Date(h.at).toLocaleDateString()}</span><span class="spacer"></span><span class="score-badge ${h.pct >= 60 ? 'good' : 'bad'}">${h.pct}%</span></div>`).join('') : '<p class="muted small">No attempts yet.</p>'}</div>
      </div>
      <div class="row section" style="justify-content:center"><button class="btn primary" data-start>Start test</button></div>
      <div id="tq"></div>`;
    $('[data-start]', el).onclick = () => {
      const pool = HSK.wordsUpTo(lvN).filter(w => w.en && !/name|surname/.test(w.en));
      const pics = pool.filter(w => w.emoji && w.emoji.length < 8);
      const lines = L.lessons.flatMap(lessonSentences).filter(l => HSK.plain(l[1]).length >= 4);
      const known = new Set(pool.map(w => w.hz));
      const qs = [
        ...HSK.util.sample(pics, 5).map(w => Q.pic(w, pool)),
        ...HSK.util.sample(pool, 5).map(w => Q.listen(w, pool)),
        ...HSK.util.sample(lines, 5).map(l => Q.sentenceListen(l, lines)),
        ...HSK.util.sample(pool, 5).map(w => ({ ...Q.meaning(w, pool), after: null })),
        ...HSK.util.sample(lines, 12).map(l => Q.fill(l[1], l[2], known)).filter(Boolean).slice(0, 5),
        ...HSK.util.sample(pool, 5).map(w => ({ ...Q.hanzi(w, pool), after: null })),
      ];
      el.innerHTML = `<h1>${L.title} practice test</h1><div id="tq"></div>`;
      UI.quiz($('#tq', el), qs, {
        title: 'Practice test',
        onFinish: pct => {
          if (pct === 'again') return test(el, lvN);
          S().tests.push({ level: +lvN, pct, at: Date.now() }); HSK.store.touchDay(); HSK.store.save();
        },
      });
    };
  }

  /* ================= Settings ================= */
  function settings(el) {
    const st = S().settings;
    const voices = HSK.tts.voices;
    el.innerHTML = `<h1>Settings</h1>
      <div class="card">
        <h2>Audio</h2>
        ${!voices.length ? voiceWarning() : ''}
        <div class="field"><label>Chinese voice</label>
          <select data-voice><option value="">Automatic (best available)</option>
            ${voices.map(v => `<option ${v.name === st.voice ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select>
          <span class="small muted">Voices with “Natural” or “Online” in the name (Edge) sound the most human.</span></div>
        <div class="field"><label>Speed: <span data-ratev>${st.rate}</span>×</label>
          <input type="range" min="0.5" max="1.2" step="0.05" value="${st.rate}" data-rate></div>
        <button class="btn" data-say="你好，我是你的汉语老师。我们一起学习吧！">▶ Test voice</button>
      </div>
      <div class="card section">
        <h2>Speaking</h2>
        <p class="muted">Speech recognition: <b>${HSK.asr.supported ? '✓ available' : '✗ not available (use Chrome or Edge)'}</b>. It sends your voice to the browser's online speech service, so you need an internet connection.</p>
        ${HSK.asr.supported ? `<div data-target="你好" data-spaced="你 好" class="speak-row" style="border:0;padding:0"><div><div class="spk-sent">${sentence('你 好')}</div><div class="heard"></div></div><div><button class="icon-btn" data-mic>🎤</button></div></div>` : ''}
      </div>
      <div class="card section">
        <h2>Theme</h2>
        <div class="row">${['auto', 'light', 'dark'].map(m => `<button class="btn sm ${(st.theme || 'auto') === m ? 'primary' : ''}" data-theme="${m}">${m}</button>`).join('')}</div>
      </div>
      <div class="card section">
        <h2>Your progress</h2>
        <p class="muted small">Progress is stored in this browser only. Export it to back it up or move it to another computer.</p>
        <div class="row"><button class="btn" data-export>⬇ Export</button><label class="btn">⬆ Import<input type="file" accept=".json" data-import hidden></label>
          <span class="spacer"></span><button class="btn" data-reset style="color:var(--accent)">Reset everything</button></div>
      </div>`;
    $('[data-voice]', el).onchange = e => { st.voice = e.target.value; HSK.store.save(); HSK.tts.speak('你好'); };
    $('[data-rate]', el).oninput = e => { st.rate = +e.target.value; $('[data-ratev]', el).textContent = st.rate; HSK.store.save(); };
    $('[data-rate]', el).onchange = () => HSK.tts.speak('谢谢');
    $$('[data-theme]', el).forEach(b => b.onclick = () => { st.theme = b.dataset.theme; HSK.store.save(); App.applyTheme(); settings(el); });
    UI.wireMics(el);
    $('[data-export]', el).onclick = () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([HSK.store.exportJSON()], { type: 'application/json' }));
      a.download = `hsk-progress-${new Date().toISOString().slice(0, 10)}.json`; a.click();
    };
    $('[data-import]', el).onchange = async e => {
      try { HSK.store.importJSON(await e.target.files[0].text()); toast('Progress imported'); App.refreshBadge(); settings(el); }
      catch { toast('That file could not be read'); }
    };
    $('[data-reset]', el).onclick = () => {
      if (confirm('Delete all progress, review cards and settings? This cannot be undone.')) { HSK.store.reset(); App.refreshBadge(); toast('Progress reset'); settings(el); }
    };
  }

  document.addEventListener('hsk-voices', () => {
    const r = location.hash;
    if (r === '' || r === '#/' || r.startsWith('#/settings')) App.route();
  });

  return { home, level, lesson, review, write, pinyin, test, settings };
})();
