/* The engine. You don't need to edit this file; use config.js instead. */
(function () {
  const C = CONFIG;
  const app = document.getElementById('app'), sky = document.getElementById('sky'), muteBtn = document.getElementById('mute');
  const t = s => (s || '').replace(/\{her\}/g, C.her).replace(/\{him\}/g, C.him);
  const r = (a, b) => a + Math.random() * (b - a);
  function el(tag, cls, text) { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  document.title = t(C.pageTitle);

  let i = 0, timer = null;
  const flow = C.screens.map(s => Object.assign({ k: 'text' }, s));
  flow.push({ k: 'letter' });
  if (C.photos && C.photos.items && C.photos.items.length) flow.push({ k: 'photos' });
  flow.push({ k: 'final' });

  function sticker(src, w) {
    const wrap = el('div', 'art'), card = el('div', 'card'), im = new Image();
    im.src = src; im.alt = ''; im.style.width = (w || 250) + 'px'; im.style.maxWidth = '62vw'; im.style.height = 'auto';
    card.append(im); wrap.append(card); return wrap;
  }
  function typeInto(node, text, done) {
    clearInterval(timer); let k = 0, finished = false;
    const fin = () => { if (finished) return; finished = true; clearInterval(timer); node.textContent = text; node.onclick = null; done && done(); };
    node.textContent = '';
    timer = setInterval(() => { node.textContent = text.slice(0, ++k); if (k >= text.length) fin(); }, 34);
    node.onclick = fin;
  }
  function next() { go(i + 1); }
  function go(n) {
    i = n; clearInterval(timer); app.classList.remove('in');
    setTimeout(() => { app.innerHTML = ''; draw(); app.classList.add('in'); }, 280);
  }
  function burst(x, y, count, big) {
    for (let n = 0; n < count; n++) {
      const h = el('span', 'pop', ['💜', '💗', '💙', '✨', '🌸'][n % 5]);
      h.style.left = x + 'px'; h.style.top = y + 'px'; h.style.fontSize = big ? '30px' : '22px';
      h.style.setProperty('--x', r(-1, 1) * (big ? 210 : 70) + 'px');
      h.style.setProperty('--y', -r(big ? 80 : 40, big ? 600 : 130) + 'px');
      h.style.setProperty('--r', r(-60, 60) + 'deg');
      document.body.append(h); setTimeout(() => h.remove(), 1800);
    }
  }

  function draw() {
    const s = flow[i];
    if (s.k === 'text') {
      const p = el('p', 'hand'), b = el('button', 'hide', s.button || 'Next');
      app.append(sticker(s.sticker), el('h2', null, t(s.title)), p, b);
      b.onclick = next; typeInto(p, t(s.text), () => b.classList.remove('hide'));
    } else if (s.k === 'letter') {
      const L = C.letter, card = el('div', 'paper'), p = el('p', 'hand'), b = el('button', 'hide', L.button || 'Next');
      card.append(el('b', null, t(L.greeting)), p);
      app.append(card, sticker(L.sticker, 150), b);
      b.onclick = next; typeInto(p, t(L.text), () => b.classList.remove('hide'));
    } else if (s.k === 'photos') {
      const P = C.photos; let order = P.items.map((_, n) => n);
      const stack = el('div', 'stack'), dots = el('div', 'dots'), hint = el('p', 'note', 'Tap the photo for the next one');
      function paint() {
        stack.innerHTML = ''; dots.innerHTML = '';
        order.slice(0, 3).reverse().forEach((n, idx, arr) => {
          const depth = arr.length - 1 - idx, ph = P.items[n], c = el('div', 'ph'), im = el('div', 'im', '💜');
          const test = new Image(); test.onload = () => { im.textContent = ''; im.style.backgroundImage = 'url("' + ph.src + '")'; }; test.src = ph.src;
          c.append(im, el('small', null, t(ph.caption || '')));
          c.style.transform = 'rotate(' + (depth ? (depth % 2 ? 4 : -4) * depth : 0) + 'deg) translateY(' + depth * 4 + 'px)';
          if (!depth) c.onclick = () => { order.push(order.shift()); paint(); };
          stack.append(c);
        });
        P.items.forEach((_, n) => dots.append(el('i', n === order[0] ? 'on' : '')));
      }
      paint();
      const b = el('button', null, P.button || 'Continue'); b.onclick = next;
      app.append(el('h2', null, t(P.title)), stack, dots, hint, b);
    } else {
      const F = C.final, row = el('div', 'row'), yes = el('button', null, F.yesButton), no = el('button', 'alt', F.noButton);
      let dodges = 0;
      function forgive() {
        app.innerHTML = '';
        const msg = el('p', 'hand', t(F.thanksText)); msg.style.whiteSpace = 'pre-line';
        app.append(sticker(F.thanksSticker, 300), el('h2', null, t(F.thanksTitle)), msg);
        burst(innerWidth / 2, innerHeight * 0.6, 36, true);
      }
      function dodge(e) {
        e.preventDefault(); dodges++;
        if (dodges > 4) { no.textContent = F.noGaveUp; no.className = ''; no.onpointerenter = no.onpointerdown = null; no.style.transform = 'none'; no.onclick = forgive; return; }
        no.style.transform = 'translate(' + r(-75, 75) + 'px,' + r(-55, 55) + 'px)';
      }
      no.onpointerenter = no.onpointerdown = dodge; yes.onclick = forgive;
      row.append(yes, no);
      app.append(sticker(F.sticker), el('h2', null, t(F.title)), el('div', 'quote', t(F.quote)), row);
    }
  }

  /* background: hearts, glow, petals, sparkles, beating heart */
  function add(cls, txt, st) { const n = el('span', cls, txt); Object.assign(n.style, st); sky.append(n); }
  sky.append(el('div', 'bigheart', '💗'));
  ['💜', '💙', '🌸', '✨', '💗', '🤍'].forEach(e => { for (let k = 0; k < 3; k++) add('h', e, { left: r(0, 100) + '%', fontSize: r(14, 32) + 'px', animationDuration: r(11, 23) + 's', animationDelay: -r(0, 20) + 's' }); });
  for (let k = 0; k < 5; k++) { const z = r(120, 220); add('orb', '', { left: r(-5, 90) + '%', top: r(0, 85) + '%', width: z + 'px', height: z + 'px', '--dx': r(-90, 90) + 'px', '--dy': r(-90, 90) + 'px', animationDuration: r(7, 13) + 's' }); }
  for (let k = 0; k < 12; k++) add('petal', ['🌸', '🌹', '🩷'][k % 3], { left: r(0, 100) + '%', fontSize: r(16, 26) + 'px', animationDuration: r(10, 18) + 's', animationDelay: -r(0, 16) + 's' });
  for (let k = 0; k < 14; k++) add('spark', '✨', { left: r(2, 96) + '%', top: r(2, 92) + '%', fontSize: r(12, 22) + 'px', animationDuration: r(2.5, 5) + 's', animationDelay: -r(0, 5) + 's' });
  document.addEventListener('pointerdown', e => { if (e.target !== muteBtn) burst(e.clientX, e.clientY, 7, false); });

  /* music, looping, starts on her first tap */
  if (C.music && C.music.file) {
    const audio = new Audio(C.music.file); audio.loop = true; audio.volume = C.music.volume == null ? 0.5 : C.music.volume;
    let started = false;
    audio.addEventListener('error', () => { muteBtn.hidden = true; });
    muteBtn.hidden = false;
    document.addEventListener('pointerdown', e => {
      if (started || e.target === muteBtn) return; started = true;
      audio.play().then(() => { muteBtn.textContent = '🔊'; }).catch(() => { started = false; });
    });
    muteBtn.onclick = () => { if (audio.paused) { audio.play(); muteBtn.textContent = '🔊'; started = true; } else { audio.pause(); muteBtn.textContent = '🔇'; } };
  }

  go(0);
})();
