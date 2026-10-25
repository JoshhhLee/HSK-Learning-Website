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
    `<button class="icon-btn" data-say="${esc(text)}" title="${title}" aria-label="${title}">▶</button>`;

  /** Sentence with pinyin above each word; words are tappable. */
  function sentence(s, { marks } = {}) {
    let ci = 0;
    // keep punctuation on the same line as its word: closing marks stick to the word before,
    // opening quotes to the word after
    const out = [];
    let open = '';
    HSK.tokenize(s).forEach(t => {
      const html = render(t);
      if (t.punct && /^[“（《]$/.test(t.hz)) { open += html; return; }
      if (t.punct && out.length) { out[out.length - 1] = `<span class="grp">${out[out.length - 1]}${html}</span>`; return; }
      out.push(open ? `<span class="grp">${open}${html}</span>` : html);
      open = '';
    });
    if (open) out.push(open);
    return `<div class="sent">${out.join('')}</div>`;

    function render(t) {
      if (t.punct) return `<span class="tok punct"><span class="p"></span><span class="h">${esc(t.hz)}</span></span>`;
      let h;
      if (marks) {
        h = [...t.hz].map(c => {
          const m = marks[ci++];
          return `<span class="${m === undefined ? '' : m ? 'hit-c' : 'miss-c'}">${esc(c)}</span>`;
        }).join('');
      } else h = esc(t.hz);
      return `<span class="tok w" data-word="${esc(t.hz)}" data-py="${esc(t.py)}"><span class="p">${t.py ? pyHTML(t.py) : ''}</span><span class="h">${h}</span></span>`;
    }
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
    const w = HSK.dict.get(`${hz}·${pyOverride}`) || HSK.dict.get(hz) || ([...hz].length === 1 ? HSK.charInfo(hz) : HSK.tokenize(hz)[0]) || { hz, py: '', en: '' };
    const py = pyOverride || w.py;
    pop = document.createElement('div');
    pop.className = 'pop';
    const cardId = w.id || hz;
    const inDeck = HSK.srs.has(cardId);
    pop.innerHTML = `
      <div class="row"><div class="hz">${hzHTML(w.hz, py)}</div><span class="spacer"></span>${sayBtn(HSK.withPy(w.hz, py))}</div>
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
    HSK.tts.speak(HSK.withPy(w.hz, py));
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
          HSK.tts.speak(Q.after || answer.join(''));
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

  /* ---------- Sentence puzzle ----------
   * Duolingo-style: read the English (or listen), then tap or drag word tiles into order.
   * items: [{ s: spaced sentence, en, distractors: [{ hz, py }] }]
   * Missed sentences come back at the end until they are solved.
   */
  const TIME_RE = /^(今天|明天|昨天|后天|前天|现在|今年|明年|去年|上午|下午|中午|晚上|早上|刚才|最近|以前|以后|周末|星期.)$/;
  const SUBJ = new Set(['我', '你', '他', '她', '它', '您', '我们', '你们', '他们', '她们', '大家', '咱们']);
  const PRAISE = ['Nice!', 'Great job!', '太好了！', 'Excellent!', '很好！', 'Well done!'];

  function puzzle(root, items, { mode = 'en', pinyin = true, next, onExit, onFinish } = {}) {
    const queue = items.map(it => ({ ...it, tries: 0 }));
    const total = items.length;
    let solved = 0, firstTry = 0, xp = 0, combo = 0;
    const t0 = Date.now();

    // "今天 我 去" and "我 今天 去" are both fine: accept a swapped time word + subject at the start
    const accepted = want => {
      const out = [want];
      if (want.length >= 2 && (TIME_RE.test(want[0]) && SUBJ.has(want[1]) || SUBJ.has(want[0]) && TIME_RE.test(want[1])))
        out.push([want[1], want[0], ...want.slice(2)]);
      return out;
    };

    const ask = it => {
      const target = HSK.tokenize(it.s).filter(t => !t.punct);
      const want = target.map(t => t.hz);
      const tiles = [...target, ...it.distractors].map((t, id) => ({ hz: t.hz, py: t.py, id }));
      let bank = HSK.util.shuffle(tiles);
      if (bank.map(t => t.hz).join() === want.join() && want.length > 1) bank.reverse();
      let answer = [], locked = false, drag = null, suppressClick = false;

      root.innerHTML = `<div class="pz ${pinyin ? 'with-py' : ''}">
        <div class="pz-top">
          <button class="icon-btn" data-exit title="Quit" aria-label="Quit">✕</button>
          <div class="bar"><i style="width:${solved / total * 100}%"></i></div>
          <span class="pz-combo ${combo >= 2 ? '' : 'hidden'}">🔥 ${combo}</span>
        </div>
        ${it.tries ? '<span class="pill warn">↻ Previous mistake</span>' : ''}
        <h2>${mode === 'listen' ? 'Build what you hear' : 'Write this in Chinese'}</h2>
        <div class="pz-prompt">
          <span class="pz-mascot">学</span>
          <div class="pz-bubble">${mode === 'listen'
            ? `<button class="btn primary" data-play>▶ Play</button><button class="btn" data-slow>🐢 Slow</button>`
            : esc(it.en)}</div>
        </div>
        <div class="pz-answer empty" data-answer></div>
        <div class="pz-bank" data-bank></div>
        <div class="pz-foot" data-foot>
          <button class="btn" data-skip>Skip</button><span class="spacer"></span>
          <button class="btn primary pz-go" data-check disabled>Check</button>
        </div>
      </div>`;
      const ansEl = $('[data-answer]', root), bankEl = $('[data-bank]', root), foot = $('[data-foot]', root);
      const tileEl = {}, slotEl = {};
      bank.forEach(t => {
        const s = document.createElement('span'); s.className = 'pz-slot';
        const b = document.createElement('button'); b.className = 'pz-tile'; b.setAttribute('aria-label', t.hz);
        b.innerHTML = `${pinyin && t.py ? `<span class="p">${pyHTML(t.py)}</span>` : ''}<span class="h">${esc(t.hz)}</span>`;
        s.appendChild(b); bankEl.appendChild(s);
        tileEl[t.id] = b; slotEl[t.id] = s;
        wireTile(t, b);
      });
      // slots keep their size so the bank doesn't reflow as tiles leave it
      bank.forEach(t => {
        const r = tileEl[t.id].getBoundingClientRect();
        slotEl[t.id].style.width = Math.ceil(r.width) + 'px'; slotEl[t.id].style.height = Math.ceil(r.height) + 'px';
      });

      if (mode === 'listen') {
        $('[data-play]', root).onclick = () => HSK.tts.speak(it.s);
        $('[data-slow]', root).onclick = () => HSK.tts.speak(it.s, { rate: 0.55 });
        setTimeout(() => HSK.tts.speak(it.s), 250);
      }
      $('[data-exit]', root).onclick = () => { App.keyHandler = null; HSK.tts.stop(); onExit && onExit(); };
      $('[data-skip]', root).onclick = () => check(true);
      $('[data-check]', root).onclick = () => check(false);

      /** Move tiles to where `answer` says they belong, animating from their old spots (FLIP). */
      function layout() {
        const before = new Map(tiles.map(t => [t.id, tileEl[t.id].getBoundingClientRect()]));
        tiles.forEach(t => { tileEl[t.id].style.transform = ''; tileEl[t.id].classList.remove('dragging'); });
        answer.forEach(id => ansEl.appendChild(tileEl[id]));
        tiles.forEach(t => { if (!answer.includes(t.id)) slotEl[t.id].appendChild(tileEl[t.id]); });
        tiles.forEach(t => {
          const a = before.get(t.id), b = tileEl[t.id].getBoundingClientRect();
          const dx = a.left - b.left, dy = a.top - b.top;
          if (dx || dy) tileEl[t.id].animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 220, easing: 'cubic-bezier(.2,.8,.2,1)' });
        });
        ansEl.classList.toggle('empty', !answer.length);
        $('[data-check]', root).disabled = !answer.length;
      }

      function toggle(t) {
        if (answer.includes(t.id)) answer = answer.filter(x => x !== t.id);
        else { answer.push(t.id); HSK.tts.speak(HSK.withPy(t.hz, t.py)); }
        layout();
      }

      const inside = (el, e, pad = 0) => {
        const r = el.getBoundingClientRect();
        return e.clientX >= r.left - pad && e.clientX <= r.right + pad && e.clientY >= r.top - pad && e.clientY <= r.bottom + pad;
      };

      function wireTile(t, b) {
        b.onclick = () => { if (!suppressClick && !locked) toggle(t); };
        b.onpointerdown = e => {
          if (locked || e.button) return;
          drag = { id: t.id, x: e.clientX, y: e.clientY, moved: false };
          b.setPointerCapture(e.pointerId);
        };
        b.onpointermove = e => {
          if (!drag || drag.id !== t.id) return;
          const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
          if (!drag.moved && Math.hypot(dx, dy) < 6) return;
          drag.moved = true;
          b.classList.add('dragging'); b.style.transform = `translate(${dx}px, ${dy}px)`;
          ansEl.classList.toggle('over', inside(ansEl, e, 20));
        };
        b.onpointerup = e => {
          if (!drag || drag.id !== t.id) return;
          const moved = drag.moved; drag = null;
          if (!moved) return;
          suppressClick = true; setTimeout(() => (suppressClick = false));
          ansEl.classList.remove('over');
          const was = answer.includes(t.id);
          answer = answer.filter(x => x !== t.id);
          if (inside(ansEl, e, 20)) {
            // insert before the first tile the pointer is above or to the left of
            let at = answer.length;
            for (let k = 0; k < answer.length; k++) {
              const r = tileEl[answer[k]].getBoundingClientRect();
              if (e.clientY < r.top || (e.clientY <= r.bottom && e.clientX < r.left + r.width / 2)) { at = k; break; }
            }
            answer.splice(at, 0, t.id);
            if (!was) HSK.tts.speak(HSK.withPy(t.hz, t.py));
          }
          layout();
        };
        b.onpointercancel = () => { drag = null; ansEl.classList.remove('over'); layout(); };
      }

      function check(skipped) {
        if (locked) return;
        locked = true;
        const got = answer.map(id => tiles[id].hz);
        const ok = !skipped && accepted(want).some(a => a.join('|') === got.join('|'));
        const exact = got.join('|') === want.join('|');
        $$('.pz-tile', root).forEach(b => (b.disabled = true));
        ansEl.classList.add(ok ? 'ok' : 'no');
        queue.shift();
        if (ok) {
          solved++; combo++;
          if (!it.tries) { firstTry++; xp += 10; } else xp += 5;
        } else { combo = 0; it.tries++; queue.push(it); }
        $('.pz-top .bar i', root).style.width = `${solved / total * 100}%`;
        const c = $('.pz-combo', root); c.textContent = `🔥 ${combo}`; c.classList.toggle('hidden', combo < 2);
        foot.className = `pz-foot ${ok ? 'ok' : 'no'}`;
        foot.innerHTML = `<div class="pz-fb">
            <b>${ok ? '✓ ' + PRAISE[Math.random() * PRAISE.length | 0] : skipped ? 'Skipped. The answer is:' : '✗ Correct answer:'}</b>
            ${ok && !exact ? '<div class="small muted">Also correct. The lesson says it like this:</div>' : ''}
            ${sentence(it.s)}
            ${mode === 'listen' || !ok ? `<div class="small muted">${esc(it.en)}</div>` : ''}
          </div>
          <button class="btn ${ok ? 'jade' : 'primary'} pz-go" data-continue>Continue</button>`;
        const cont = $('[data-continue]', foot);
        cont.onclick = run; cont.focus({ preventScroll: true });
        foot.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        HSK.tts.speak(it.s);
      }

      App.keyHandler = e => {
        if (e.key === 'Enter') { e.preventDefault(); locked ? run() : answer.length && check(false); }
        else if (e.key === 'Backspace' && !locked && answer.length) { e.preventDefault(); answer.pop(); layout(); }
        else if (/^[1-9]$/.test(e.key) && !locked) {
          const t = bank[+e.key - 1];
          if (t && !answer.includes(t.id)) toggle(t);
        }
      };
    };

    const run = () => (queue.length ? ask(queue[0]) : finish());

    const finish = () => {
      App.keyHandler = null;
      const acc = Math.round(firstTry / total * 100);
      if (acc === 100) xp += 10; // perfect-round bonus
      const secs = Math.round((Date.now() - t0) / 1000);
      root.innerHTML = `<div class="pz"><div class="card result">
        <div class="big">${acc === 100 ? '🏆' : acc >= 60 ? '🎉' : '💪'}</div>
        <h2>${acc === 100 ? 'Perfect round!' : 'Puzzle complete!'}</h2>
        <div class="stats" style="margin:18px 0">
          <div class="card stat"><b>+${xp}</b><span>XP${acc === 100 ? ' (incl. +10 bonus)' : ''}</span></div>
          <div class="card stat"><b>${acc}%</b><span>right first time</span></div>
          <div class="card stat"><b>${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</b><span>time</span></div>
        </div>
        <div class="row" style="justify-content:center">
          <button class="btn" data-again>Practise again</button>
          ${next ? `<a class="btn primary" href="${next.href}">${esc(next.label)} →</a>` : ''}
        </div></div></div>`;
      $('[data-again]', root).onclick = () => onFinish && onFinish('again');
      onFinish && onFinish({ xp, acc, secs });
    };

    run();
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

  return { $, $$, esc, pyHTML, hzHTML, sayBtn, sentence, toast, writer, quiz, puzzle, speakRow, wireMics, listenInto, scoreClass, openPop, closePop };
})();
