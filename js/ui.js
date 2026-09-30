/* Shared UI building blocks: sentence rendering, word popover, audio buttons,
 * stroke-order writer, quiz engine and speaking rows. */
const UI = (() => {
  const { esc } = HSK.util;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /** Coloured pinyin for a word: each syllable gets its tone class. */
  function pyHTML(py) {
    const syl = HSK.py.syllables(py);
    return syl.map((s, i) => {
      const sep = i === 0 ? '' : /^[A-ZĀÁǍÀĒÉĚÈŌÓǑÒ]/.test(s) ? ' ' : /^[aeoāáǎàēéěèōóǒò]/i.test(s) ? "'" : '';
      return `${sep}<span class="t${HSK.py.tone(s)}">${esc(s)}</span>`;
    }).join('');
  }

  /** Hanzi coloured per character by the tone of its syllable. */
  function hzHTML(hz, py) {
    const chars = [...hz], syl = HSK.py.syllables(py || '');
    if (chars.length !== syl.length) return esc(hz);
    return chars.map((c, i) => `<span class="t${HSK.py.tone(syl[i])}">${esc(c)}</span>`).join('');
  }

  const sayBtn = (text, title = 'Listen') =>
    `<button class="icon-btn" data-say="${esc(HSK.plain(text))}" title="${title}" aria-label="${title}">▶</button>`;

  /** Sentence with pinyin above each word; words are tappable. */
  function sentence(s, { marks } = {}) {
    let ci = 0;
    return `<div class="sent">${HSK.tokenize(s).map(t => {
      if (t.punct) return `<span class="tok punct"><span class="p"></span><span class="h">${esc(t.hz)}</span></span>`;
      let h;
      if (marks) {
        h = [...t.hz].map(c => {
          const m = marks[ci++];
          return `<span class="${m === undefined ? '' : m ? 'hit-c' : 'miss-c'}">${esc(c)}</span>`;
        }).join('');
      } else h = esc(t.hz);
      return `<span class="tok w" data-word="${esc(t.hz)}" data-py="${esc(t.py)}"><span class="p">${t.py ? pyHTML(t.py) : ''}</span><span class="h">${h}</span></span>`;
    }).join('')}</div>`;
  }

  /* ---------- Toast ---------- */
  let toastT;
  function toast(msg) {
    let el = $('.toast');
    if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => el.remove(), 2200);
  }

  /* ---------- Word popover ---------- */
  let pop;
  function closePop() { if (pop) { pop.remove(); pop = null; } }
  function openPop(anchor, hz, pyOverride) {
    closePop();
    const w = HSK.dict.get(`${hz}·${pyOverride}`) || HSK.dict.get(hz) || HSK.tokenize(hz)[0] || { hz, py: '', en: '' };
    const py = pyOverride || w.py;
    pop = document.createElement('div');
    pop.className = 'pop';
    const cardId = w.id || hz;
    const inDeck = HSK.srs.has(cardId);
    pop.innerHTML = `
      <div class="row"><div class="hz">${hzHTML(w.hz, py)}</div><span class="spacer"></span>${sayBtn(w.hz)}</div>
      <div class="py">${py ? pyHTML(py) : ''}</div>
      <div class="en">${esc(w.en || '')}${w.level && !w.extra ? ` <span class="pill">HSK ${w.level}${w.lesson ? ' · L' + w.lesson : ''}</span>` : ''}</div>
      <div class="row">
        <button class="btn sm" data-pop-strokes>✍ Strokes</button>
        ${w.level && !w.extra ? `<button class="btn sm" data-pop-add ${inDeck ? 'disabled' : ''}>${inDeck ? '✓ In review' : '+ Review'}</button>` : ''}
      </div>
      <div class="pop-writers row" style="justify-content:center"></div>`;
    document.body.appendChild(pop);
    const r = anchor.getBoundingClientRect();
    const left = Math.min(Math.max(8, r.left + r.width / 2 - 125), innerWidth - 258);
    const top = r.bottom + 8 + 260 > innerHeight ? Math.max(8, r.top - pop.offsetHeight - 8) : r.bottom + 8;
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    HSK.tts.speak(w.hz);
    $('[data-pop-strokes]', pop).onclick = () => {
      const box = $('.pop-writers', pop); box.innerHTML = '';
      HSK.util.hanChars(w.hz).forEach(c => {
        const d = document.createElement('div'); d.className = 'writer'; d.style.width = d.style.height = '100px'; box.appendChild(d);
        writer(d, c, 100).then(wr => wr && wr.loopCharacterAnimation());
      });
    };
    const add = $('[data-pop-add]', pop);
    if (add) add.onclick = () => { HSK.srs.add([cardId]); add.textContent = '✓ In review'; add.disabled = true; App.refreshBadge(); };
  }

  document.addEventListener('click', e => {
    const say = e.target.closest('[data-say]');
    if (say) { e.preventDefault(); HSK.tts.speak(say.dataset.say); return; }
    const w = e.target.closest('[data-word]');
    if (w) { e.stopPropagation(); openPop(w, w.dataset.word, w.dataset.py); return; }
    if (pop && !e.target.closest('.pop')) closePop();
  });
  window.addEventListener('hashchange', closePop);
  window.addEventListener('scroll', closePop, { passive: true });

  /* ---------- Hanzi Writer ---------- */
  function writer(el, ch, size = 260, opts = {}) {
    if (!window.HanziWriter) {
      el.innerHTML = `<div class="muted small" style="padding:10px;text-align:center">Stroke data needs an internet connection.</div>`;
      return Promise.resolve(null);
    }
    const css = getComputedStyle(document.documentElement);
    const w = HanziWriter.create(el, ch, {
      width: size, height: size, padding: size > 150 ? 18 : 6,
      strokeColor: css.getPropertyValue('--ink').trim() || '#222',
      radicalColor: css.getPropertyValue('--accent').trim(),
      outlineColor: css.getPropertyValue('--line').trim(),
      highlightColor: css.getPropertyValue('--jade').trim(),
      drawingColor: css.getPropertyValue('--accent').trim(),
      strokeAnimationSpeed: 1, delayBetweenStrokes: 250, delayBetweenLoops: 1500,
      showCharacter: true, showOutline: true,
      onLoadCharDataError: () => { el.innerHTML = `<div class="muted small" style="padding:10px">No stroke data for ${esc(ch)}.</div>`; },
      ...opts,
    });
    return Promise.resolve(w);
  }

  /* ---------- Quiz engine ----------
   * question: { kind: 'choice'|'build', q, prompt, say, options:[{html, value}], answer, pics, explain, tokens }
   */
  function quiz(root, questions, { title = 'Practice', onFinish } = {}) {
    let i = 0, right = 0;
    const wrong = [];
    const render = () => {
      if (i >= questions.length) return finish();
      const Q = questions[i];
      root.innerHTML = `<div class="quiz">
        <div class="progress-top"><span class="small muted">${i + 1} / ${questions.length}</span>
          <div class="bar"><i style="width:${(i / questions.length) * 100}%"></i></div>
          <span class="pill jade">${right} ✓</span></div>
        <div class="card">
          <div class="q">${Q.q}</div>
          ${Q.prompt ? `<div class="prompt">${Q.prompt}</div>` : ''}
          ${Q.say ? `<div class="row" style="justify-content:center;margin-bottom:14px">
             <button class="btn primary" data-play>▶ Play</button><button class="btn" data-slow>🐢 Slow</button></div>` : ''}
          <div class="qbody"></div>
          <div class="fb"></div>
        </div></div>`;
      const body = $('.qbody', root), fb = $('.fb', root);
      if (Q.say) {
        $('[data-play]', root).onclick = () => HSK.tts.speak(Q.say);
        $('[data-slow]', root).onclick = () => HSK.tts.speak(Q.say, { rate: 0.55 });
        setTimeout(() => HSK.tts.speak(Q.say), 250);
      }
      const next = ok => {
        if (ok) right++; else wrong.push(Q);
        fb.innerHTML = `<div class="feedback ${ok ? 'ok' : 'no'}">
          <b>${ok ? 'Correct!' : 'Not quite.'}</b> ${Q.explain || ''}
          <div class="row" style="margin-top:10px"><span class="spacer"></span><button class="btn primary" data-next>Next →</button></div></div>`;
        const nb = $('[data-next]', fb); nb.focus();
        nb.onclick = () => { i++; render(); };
      };

      if (Q.kind === 'build') {
        body.innerHTML = `<div class="builder"><div class="slot"></div><div class="bank"></div>
          <div class="row" style="margin-top:12px"><button class="btn" data-clear>Clear</button><span class="spacer"></span><button class="btn primary" data-check>Check</button></div></div>`;
        const slot = $('.slot', body), bank = $('.bank', body);
        const answer = Q.tokens;
        let pieces = HSK.util.shuffle(answer.map((t, k) => ({ t, k })));
        if (pieces.map(p => p.t).join('') === answer.join('') && answer.length > 1) pieces.reverse();
        let seq = 0;
        const draw = () => {
          bank.innerHTML = '';
          pieces.filter(p => !p.used).forEach(p => {
            const b = document.createElement('button'); b.className = 'chip'; b.textContent = p.t;
            b.onclick = () => { p.used = true; p.order = ++seq; draw(); };
            bank.appendChild(b);
          });
          const used = pieces.filter(p => p.used).sort((a, b) => a.order - b.order);
          slot.innerHTML = ''; used.forEach(p => {
            const b = document.createElement('button'); b.className = 'chip'; b.textContent = p.t;
            b.onclick = () => { p.used = false; draw(); }; slot.appendChild(b);
          });
          if (!used.length) slot.innerHTML = '<span class="muted small">Tap the words below in the right order</span>';
        };
        draw();
        $('[data-clear]', body).onclick = () => { pieces.forEach(p => (p.used = false)); draw(); };
        $('[data-check]', body).onclick = e => {
          const got = pieces.filter(p => p.used).sort((a, b) => a.order - b.order).map(p => p.t).join('');
          const ok = got === answer.join('');
          e.target.disabled = true; $('[data-clear]', body).disabled = true;
          $$('.chip', body).forEach(c => (c.disabled = true));
          HSK.tts.speak(answer.join(''));
          next(ok);
        };
      } else {
        body.innerHTML = `<div class="opts ${Q.pics ? 'pics' : ''}">${Q.options.map((o, k) =>
          `<button class="opt" data-k="${k}">${o.html}</button>`).join('')}</div>`;
        $$('.opt', body).forEach(b => b.onclick = () => {
          const o = Q.options[+b.dataset.k];
          const ok = o.value === Q.answer;
          $$('.opt', body).forEach(x => {
            x.disabled = true;
            if (Q.options[+x.dataset.k].value === Q.answer) x.classList.add('right');
          });
          if (!ok) b.classList.add('wrong');
          if (Q.after) HSK.tts.speak(Q.after);
          next(ok);
        });
      }
    };
    const finish = () => {
      const pct = Math.round((right / questions.length) * 100);
      root.innerHTML = `<div class="quiz"><div class="card result">
        <div class="big">${pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'}</div>
        <div class="score">${pct}%</div>
        <p class="muted">${right} of ${questions.length} correct${title ? ' · ' + esc(title) : ''}</p>
        ${wrong.length ? `<div style="text-align:left;margin:16px 0"><h3>Review these</h3>${wrong.map(q => `<div class="ex"><div>${q.review || q.q}</div></div>`).join('')}</div>` : ''}
        <div class="row" style="justify-content:center"><button class="btn primary" data-again>Try again</button></div>
      </div></div>`;
      $('[data-again]', root).onclick = () => onFinish && onFinish('again');
      onFinish && onFinish(pct, wrong);
    };
    render();
  }

  /* ---------- Speaking row ---------- */
  function speakRow(text, en) {
    return `<div class="speak-row" data-target="${esc(HSK.plain(text))}" data-spaced="${esc(text)}">
      <div><div class="spk-sent">${sentence(text)}</div>${en ? `<div class="small muted">${esc(en)}</div>` : ''}<div class="heard"></div></div>
      <div class="row">${sayBtn(text)}<button class="icon-btn" data-mic title="Speak" aria-label="Speak">🎤</button></div>
    </div>`;
  }

  function scoreClass(s) { return s >= 0.85 ? 'good' : s >= 0.5 ? 'mid' : 'bad'; }

  /** Wire all 🎤 buttons inside root. onScore(score, row) is called after each attempt. */
  function wireMics(root, onScore) {
    $$('[data-mic]', root).forEach(btn => btn.onclick = async () => {
      if (!HSK.asr.supported) return toast('Speech recognition needs Chrome or Edge.');
      const row = btn.closest('[data-target]');
      await listenInto(row, btn, onScore);
    });
  }

  async function listenInto(row, btn, onScore) {
    const target = row.dataset.target, spaced = row.dataset.spaced;
    HSK.tts.stop();
    btn.classList.add('rec'); btn.textContent = '●';
    const heard = $('.heard', row); heard.textContent = 'Listening… speak now';
    try {
      const r = await HSK.asr.listen(target);
      const pct = Math.round(r.score * 100);
      // r.hit has one entry per Han character of the target, in order
      $('.spk-sent', row).innerHTML = sentence(spaced, { marks: r.hit });
      $$('.hit-c', row).forEach(e => (e.style.color = 'var(--jade)'));
      $$('.miss-c', row).forEach(e => { e.style.color = 'var(--accent)'; e.style.textDecoration = 'underline wavy'; });
      heard.innerHTML = r.heard
        ? `<span class="score-badge ${scoreClass(r.score)}">${pct}%</span> heard: <span class="han">${esc(r.heard)}</span>`
        : `<span class="score-badge bad">0%</span> Didn't catch that. Try again, a bit louder and closer to the mic.`;
      onScore && onScore(r.score, row);
      return r;
    } catch (e) {
      heard.textContent = e.message === 'not-allowed'
        ? 'Microphone blocked. Allow mic access in the address bar.'
        : e.message === 'network' ? 'Speech recognition needs an internet connection.' : 'Error: ' + e.message;
    } finally { btn.classList.remove('rec'); btn.textContent = '🎤'; }
  }

  return { $, $$, esc, pyHTML, hzHTML, sayBtn, sentence, toast, writer, quiz, speakRow, wireMics, listenInto, scoreClass, openPop, closePop };
})();
