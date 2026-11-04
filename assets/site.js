(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ico = (id, c = 'h-5 w-5') => `<svg class="${c}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><use href="#${id}"/></svg>`;
  $('#yr').textContent = new Date().getFullYear();

  try {
  // Mobile menu
  const btn = $('#menuBtn'), menu = $('#mobileMenu');
  const setMenu = open => { menu.classList.toggle('hidden', !open); $('#iconOpen').classList.toggle('hidden', open); $('#iconClose').classList.toggle('hidden', !open); btn.setAttribute('aria-expanded', open); };
  btn.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
  $$('.m-link').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('resize', () => innerWidth >= 1024 && setMenu(false));
  addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));

  } catch (e) {}
  try {
  // Smooth scroll with fixed-header offset
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const t = $(a.getAttribute('href')); if (!t) return; e.preventDefault();
    const y = t.getBoundingClientRect().top + scrollY - (a.getAttribute('href') === '#top' ? 0 : 72);
    scrollTo({ top: y, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }));

  } catch (e) {}
  try {
  // Count-up metrics (once)
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const to = +e.target.dataset.to, t0 = performance.now();
    const tick = n => { const p = Math.min((n - t0) / 1400, 1); e.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: .6 });
  $$('.count').forEach(c => cio.observe(c));

  } catch (e) {}
  try {
  // Machinery
  const fleet = [
    { k: 'Excavators', r: 'Earthwork', d: 'Hydraulic excavators for cutting, filling, trenching and drainage, deployed directly from our own yards.', s: [['Role', 'Excavation, embankment, trenching'], ['Ownership', 'Company owned'], ['Used on', 'Roads, platforms, foundations']] },
    { k: 'Batching Plants', r: 'Concrete', d: 'Site batching capacity keeps structural pours on schedule and mix quality under our supervision.', s: [['Role', 'Controlled concrete production'], ['Ownership', 'Company owned'], ['Used on', 'Platforms, structures, buildings']] },
    { k: 'Pavers', r: 'Paving', d: 'Paving and compaction equipment for bituminous and concrete carriageways with tight level tolerances.', s: [['Role', 'Surfacing and compaction'], ['Ownership', 'Company owned'], ['Used on', 'Highways and state roads']] },
    { k: 'Cranes', r: 'Lifting', d: 'Cranes for placing reinforcement cages, precast units and heavy plant on constrained sites.', s: [['Role', 'Heavy lifting and placement'], ['Ownership', 'Company owned'], ['Used on', 'Structures, railway works']] }
  ];
  const tabs = $('#fleetTabs'), panel = $('#fleetPanel');
  const showFleet = i => {
    $$('button', tabs).forEach((b, j) => { const on = i === j; b.setAttribute('aria-selected', on); b.className = 'rounded-lg border p-5 text-left transition ' + (on ? 'border-amber-500 bg-amber-500 text-navy-900' : 'border-white/15 bg-white/5 text-white hover:border-amber-500/60'); });
    const f = fleet[i];
    panel.innerHTML = `<div class="flex flex-wrap items-start justify-between gap-3"><h3 class="text-2xl font-bold">${f.k}</h3><span class="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-navy-900">${ico('i-key', 'h-3.5 w-3.5')}Company owned</span></div>
      <p class="mt-3 text-4xl font-extrabold text-amber-500">${f.r}</p>
      <p class="mt-4 text-slate-300">${f.d}</p>
      <dl class="mt-6 grid gap-px overflow-hidden rounded border border-white/10 bg-white/10 sm:grid-cols-3">${f.s.map(x => `<div class="bg-navy-950 p-4"><dt class="text-xs text-slate-400">${x[0]}</dt><dd class="mt-1 font-semibold">${x[1]}</dd></div>`).join('')}</dl>`;
  };
  fleet.forEach((f, i) => { const b = document.createElement('button'); b.setAttribute('role', 'tab'); b.innerHTML = `<span class="block text-xl font-extrabold">${f.r}</span><span class="text-sm font-medium opacity-80">${f.k}</span>`; b.addEventListener('click', () => showFleet(i)); tabs.appendChild(b); });
  showFleet(0);

  } catch (e) {}
  try {
  // Projects. EDIT this list: v = contract value (optional).
  const projects = [
    { k: 'bridge', t: 'NH 131A, Muzwar Tal to Lakhanpur Bridge', l: 'Bihar', c: 'NHAI', s: 'ongoing', v: '₹21.1 Cr', d: 'Bridge construction on National Highway 131A.' },
    { k: 'bridge2', t: 'Milbhitta to Dhobinia RCC Bridge', l: 'Bihar', c: 'Rural Works Department', s: 'ongoing', v: '₹24.3 Cr', d: 'Reinforced-concrete bridge connecting rural road networks.' },
    { k: 'bridge3', t: 'Govindpur Chowk High-Level Bridge', l: 'Bihar', c: 'Rural Works Department', s: 'ongoing', v: '₹18.2 Cr', d: 'High-level bridge with approaches for year-round access.' },
    { k: 'road', t: 'National Highway widening and upgradation', l: 'Bihar', c: 'Government authority', s: 'ongoing', d: 'Carriageway widening, strengthening and structures on national highway stretches.' },
    { k: 'mountain', t: 'High-altitude road works', l: 'Ladakh', c: 'Government authority', s: 'ongoing', d: 'Road construction in remote terrain with short working seasons.' },
    { k: 'rail', t: 'Railway platform construction', l: 'Bihar', c: 'Railways', s: 'completed', d: 'Platform and station-area civil works delivered around live railway operations.' },
    { k: 'building', t: 'Residential and commercial buildings', l: 'Eastern India', c: 'Private developers', s: 'completed', d: 'Reinforced-concrete buildings built to the client\'s drawings and specifications.' },
    { k: 'marine', t: 'Marine and underwater engineering works', l: 'Bihar', c: 'Public sector', s: 'completed', d: 'Underwater foundation, protection and repair works carried out by specialist crews.' }
  ];
  const card = p => `<article class="proj group relative overflow-hidden rounded-lg bg-navy-900 text-white" style="min-height:16rem">
    <div class="p-6"><span class="inline-flex rounded-full px-3 py-1 text-xs font-bold ${p.s === 'ongoing' ? 'bg-amber-500 text-navy-900' : 'bg-navy-950 text-white border border-white/20'}" style="margin-bottom:.75rem">${p.s === 'ongoing' ? 'Ongoing' : 'Completed'}</span><h3 class="text-xl font-bold leading-snug">${p.t}</h3>
      <p class="mt-2 flex items-center gap-1.5 text-sm text-slate-300">${ico('i-pin', 'h-4 w-4 text-amber-500')}${p.l}<span class="text-slate-500">|</span>${p.c}</p>
      ${p.v ? `<p class="mt-3 text-sm font-semibold text-amber-500">Contract value ${p.v}</p>` : ''}<p class="mt-3 hidden text-xs font-semibold text-amber-500 [@media(hover:none)]:block">Tap for details</p></div>
    <div class="ov absolute inset-0 flex translate-y-full flex-col justify-end bg-amber-500 p-6 text-navy-900 transition duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0 motion-reduce:transition-none">
      ${p.v ? `<p class="text-sm font-semibold">Contract value</p><p class="text-3xl font-extrabold">${p.v}</p>` : '<p class="text-sm font-semibold">Scope of work</p>'}<p class="mt-1 text-base font-medium">${p.d}</p><a href="contact.html" class="relative z-20 mt-3 text-sm font-bold underline">Request project credentials</a></div>
    <button class="absolute inset-0 z-10 opacity-0" aria-label="Show details for ${p.t}"></button></article>`;
  [['ongoing', 'Ongoing', 'Ongoing'], ['completed', 'Completed', 'Completed']].forEach(([st, id]) => {
    const list = projects.filter(p => p.s === st);
    $('#grid' + id).innerHTML = list.map(card).join('');
    $('#cnt' + id).textContent = list.length + (list.length === 1 ? ' project' : ' projects');
  });

  } catch (e) {}
  try {
  // Tap-to-reveal project details on touch devices
  $$('.proj button').forEach(bt => bt.addEventListener('click', () => {
    const card = bt.closest('.proj'), open = !card.classList.contains('open');
    $$('.proj.open').forEach(c => c.classList.remove('open'));
    card.classList.toggle('open', open);
  }));

  } catch (e) {}
  try {
  // Hide the mobile action bar while the contact form is on screen
  const bar = $('#mobileBar');
  new IntersectionObserver(es => es.forEach(e => bar.classList.toggle('translate-y-full', e.isIntersecting)), { threshold: .15 }).observe($('#contact'));

  } catch (e) {}
  try {
  // Presentation mode: narrated slide show
  const deck = $('#deck'), slides = $$('.dk-slide', deck), segsBox = $('#dkSegs'), cap = $('#dkCap'), cnt = $('#dkCount'), playB = $('#dkPlay'), voiceB = $('#dkVoice'), speedB = $('#dkSpeed');
  const synth = 'speechSynthesis' in window ? window.speechSynthesis : null, SPEEDS = [1, 1.15, 1.3];
  let ccOn = !('speechSynthesis' in window);
  let cur = -1, playing = true, voiceOn = !!synth, speed = 1, run = 0, timers = [], opener = null, voice = null;
  slides.forEach((sl, i) => { sl.dataset.n = String(i + 1).padStart(2, '0'); const b = document.createElement('button'); b.className = 'dk-seg'; b.setAttribute('aria-label', 'Go to slide ' + (i + 1)); b.innerHTML = '<i></i>'; b.addEventListener('click', () => go(i)); segsBox.appendChild(b); });
  const segs = $$('.dk-seg', deck);
  $$('[data-dots]', deck).forEach(el => { const n = +el.dataset.dots, x = +(el.dataset.extra || 0); el.innerHTML = Array.from({ length: n + x }, (_, i) => `<span class="${i >= n ? 'ghost' : ''}" style="--i:${i}"></span>`).join(''); });
  const score = v => (/natural|neural|online|premium|enhanced/i.test(v.name) ? 6 : 0) + (/google/i.test(v.name) ? 4 : 0) + (/en[-_]IN/i.test(v.lang) ? 3 : /en[-_]GB/i.test(v.lang) ? 2 : /en[-_]US/i.test(v.lang) ? 1 : 0) + (v.localService ? 0 : 1);
  let voices = [], vIdx = 0; const ccB = $('#dkCC'), pickB = $('#dkVoicePick'), toastEl = $('#dkToast'); let toastT;
  const toast = m => { toastEl.textContent = m; toastEl.classList.add('in'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('in'), 2400); };
  const loadVoice = () => { if (!synth) return; voices = synth.getVoices().filter(v => /^en/i.test(v.lang)).sort((a, b) => score(b) - score(a)).slice(0, 6); voice = voices[vIdx] || voices[0] || null; };
  if (synth) { loadVoice(); synth.addEventListener && synth.addEventListener('voiceschanged', loadVoice); }
  const clear = () => { run++; timers.forEach(clearTimeout); timers = []; if (synth) synth.cancel(); };
  const sentencesOf = t => (t.match(/[^.!?]+[.!?]+/g) || [t]).map(x => x.trim()).filter(Boolean);
  let capWords = [], capChunk = -1, capSize = 16;
  const renderChunk = c => { capChunk = c; const a = c * capSize; cap.innerHTML = capWords.slice(a, a + capSize).map(w => `<span>${w}</span>`).join(' '); cap.classList.remove('in'); void cap.offsetWidth; cap.classList.add('in'); };
  const showSentence = t => { capWords = t.split(/\s+/); capSize = innerWidth < 700 ? 9 : 18; renderChunk(0); };
  const hi = i => { const c = Math.min(Math.floor(Math.max(i, 0) / capSize), Math.floor((capWords.length - 1) / capSize)); if (c !== capChunk) renderChunk(c); $$('span', cap).forEach((w, j) => w.classList.toggle('on', c * capSize + j <= i)); };
  const fmt = (v, d) => v.toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d });
  const animateCounts = sl => $$('[data-count]', sl).forEach(el => {
    const to = +el.dataset.count, d = +(el.dataset.dec || 0), pre = el.dataset.pre || '', suf = el.dataset.suf || '', t0 = performance.now() + 500, tok = run;
    el.textContent = pre + fmt(0, d) + suf;
    const tick = now => { if (tok !== run) return; const p = Math.min(Math.max((now - t0) / 1500, 0), 1); el.textContent = pre + fmt(to * (1 - Math.pow(1 - p, 3)), d) + suf; if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
  const syncUI = () => {
    playB.innerHTML = ico(playing ? 'i-pause' : 'i-playS', 'h-5 w-5').replace('h-5 w-5', ''); playB.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    voiceB.innerHTML = ico(voiceOn ? 'i-vol' : 'i-mute', ''); voiceB.setAttribute('aria-label', voiceOn ? 'Turn voice narration off' : 'Turn voice narration on');
    speedB.textContent = speed + '×'; ccB.classList.toggle('on', ccOn); ccB.setAttribute('aria-pressed', ccOn); deck.classList.toggle('cc-on', ccOn); if (segs[cur]) segs[cur].classList.toggle('paused', !playing);
  };
  const restartSeg = (sl) => { const seg = segs[cur]; seg.classList.remove('cur'); seg.style.setProperty('--dur', Math.max(7000, sl.dataset.say.length * 62 / speed) + 'ms'); void seg.offsetWidth; seg.classList.add('cur'); seg.classList.toggle('paused', !playing); };
  const finish = tok => { if (tok !== run || !playing) return; if (cur < slides.length - 1) timers.push(setTimeout(() => go(cur + 1), 800)); else { playing = false; syncUI(); } };
  const narrate = (sl, tok) => {
    const sents = sentencesOf(sl.dataset.say); let i = 0;
    if (!playing) { showSentence(sents[0]); return; }
    const next = () => {
      if (tok !== run) return; if (i >= sents.length) { finish(tok); return; }
      const t = sents[i++]; showSentence(t); const starts = [...t.matchAll(/\S+/g)].map(m => m.index);
      if (voiceOn && synth) {
        const u = new SpeechSynthesisUtterance(t); if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = 'en-IN';
        u.rate = .92 * speed; u.volume = 1; u.pitch = 1; let done = false;
        const end = () => { if (done || tok !== run) return; done = true; hi(starts.length); timers.push(setTimeout(next, 280)); };
        u.onboundary = e => { if (tok !== run) return; let k = 0; starts.forEach((s, j) => { if (s <= e.charIndex) k = j; }); hi(k); };
        u.onend = end; u.onerror = end;
        timers.push(setTimeout(() => { if (!done && !synth.speaking && !synth.pending) end(); }, 2500));
        synth.speak(u);
      } else {
        const dur = Math.max(1800, t.length * 62 / speed);
        starts.forEach((s, j) => timers.push(setTimeout(() => hi(j), dur * s / t.length)));
        timers.push(setTimeout(() => { hi(starts.length); next(); }, dur + 300));
      }
    };
    next();
  };
  const go = n => {
    if (n < 0 || n >= slides.length) return; clear();
    const prev = slides[cur]; if (prev) { prev.classList.remove('active'); prev.classList.add('leaving'); setTimeout(() => prev.classList.remove('leaving'), 650); }
    cur = n; deck.scrollLeft = 0; deck.scrollTop = 0; const sl = slides[n]; sl.classList.remove('leaving'); sl.scrollTop = 0; void sl.offsetWidth; sl.classList.add('active');
    segs.forEach((s, i) => { s.classList.toggle('done', i < n); s.classList.remove('cur'); }); restartSeg(sl);
    cnt.textContent = String(n + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    animateCounts(sl); narrate(sl, run); syncUI();
  };
  const openDeck = from => { opener = from || document.activeElement; deck.classList.add('open'); deck.setAttribute('aria-hidden', 'false'); document.documentElement.style.overflow = 'hidden'; playing = true; cur = -1; go(0); deck.focus({ preventScroll: true }); };
  const closeDeck = () => { clear(); deck.classList.remove('open'); deck.setAttribute('aria-hidden', 'true'); document.documentElement.style.overflow = ''; slides.forEach(s => s.classList.remove('active', 'leaving')); if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen(); opener && opener.focus && opener.focus(); };
  const togglePlay = () => { playing = !playing; const sl = slides[cur]; clear(); if (playing) { restartSeg(sl); narrate(sl, run); } else segs[cur].classList.add('paused'); syncUI(); };
  ['#reelBtn', '#deckBtn', '#deckBtnM'].forEach(id => { const el = $(id); el && el.addEventListener('click', () => openDeck(el)); });
  ccB.addEventListener('click', () => { ccOn = !ccOn; syncUI(); toast(ccOn ? 'Captions on' : 'Captions off'); });
  pickB.addEventListener('click', () => { if (!synth || !voices.length) { toast('Using this device’s default voice'); return; } vIdx = (vIdx + 1) % voices.length; voice = voices[vIdx]; toast('Voice: ' + voice.name.replace(/^(Microsoft|Google)\s+/, '')); const sl = slides[cur]; clear(); if (playing && voiceOn) narrate(sl, run); });
  $('#dkClose').addEventListener('click', closeDeck); $('#dkNext').addEventListener('click', () => go(cur + 1)); $('#dkPrev').addEventListener('click', () => go(cur - 1)); playB.addEventListener('click', togglePlay);
  voiceB.addEventListener('click', () => { voiceOn = !voiceOn; const sl = slides[cur]; clear(); if (playing) narrate(sl, run); syncUI(); });
  speedB.addEventListener('click', () => { speed = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length]; const sl = slides[cur]; clear(); if (playing) { restartSeg(sl); narrate(sl, run); } syncUI(); });
  $('#dkFull').addEventListener('click', () => { if (document.fullscreenElement) document.exitFullscreen(); else if (deck.requestFullscreen) deck.requestFullscreen().catch(() => {}); });
  $('#dkInquire').addEventListener('click', () => { closeDeck(); const ct = $('#contact'); if (ct) ct.scrollIntoView({ behavior: 'smooth' }); else location.href = 'contact.html'; });
  $('#dkReplay').addEventListener('click', () => { playing = true; go(0); });
  addEventListener('keydown', e => {
    if (!deck.classList.contains('open')) return;
    if (e.key === 'Escape') closeDeck(); else if (e.key === 'ArrowRight' || e.key === 'PageDown') go(cur + 1); else if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(cur - 1);
    else if (e.key === ' ' && !/BUTTON/.test(document.activeElement.tagName)) { e.preventDefault(); togglePlay(); } else if (e.key === 'm') { voiceB.click(); } else if (e.key === 'c') { ccB.click(); }
  });
  let tx = null; deck.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  deck.addEventListener('touchend', e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(dx) > 60) go(cur + (dx < 0 ? 1 : -1)); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && deck.classList.contains('open') && playing) togglePlay(); });

  } catch (e) {}
  try {
  // Form validation
  const form = $('#inquiryForm'), msg = $('#message');
  const rules = {
    name: v => v.trim().length >= 2 || 'Enter your full name.',
    company: v => v.trim().length >= 2 || 'Enter your company name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Enter a valid work email, like name@company.com.',
    scope: v => v !== '' || 'Choose a project scope.',
    message: v => v.trim().length >= 20 || 'Add at least 20 characters so we can route your inquiry.'
  };
  const check = el => {
    const r = rules[el.id](el.value), err = $('#' + el.id + '-err'), bad = r !== true;
    err.textContent = bad ? r : ''; err.classList.toggle('hidden', !bad);
    el.setAttribute('aria-invalid', bad); el.classList.toggle('border-red-500', bad); el.classList.toggle('border-slate-300', !bad); return !bad;
  };
  const fields = Object.keys(rules).map(k => $('#' + k));
  fields.forEach(el => { el.addEventListener('blur', () => check(el)); el.addEventListener('input', () => el.getAttribute('aria-invalid') === 'true' && check(el)); });
  msg.addEventListener('input', () => { $('#count').textContent = Math.min(msg.value.trim().length, 999) + ' / 20 min'; });
  form.addEventListener('submit', e => {
    e.preventDefault(); const ok = fields.map(check).every(Boolean);
    if (!ok) { fields.find(el => el.getAttribute('aria-invalid') === 'true').focus(); return; }
    const out = $('#formOk'); const v = id => $('#' + id).value.trim();
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    out.textContent = 'Sending your inquiry…'; out.classList.remove('hidden');
    fetch('/api/inquiry', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: v('name'), company: v('company'), email: v('email'), scope: $('#scope').value, message: v('message') })
    }).then(async response => {
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Your inquiry could not be sent. Please try again.');
      out.textContent = `Thank you, ${v('name')}. Your inquiry has been sent successfully.`;
      form.reset(); fields.forEach(el => { el.removeAttribute('aria-invalid'); el.classList.remove('border-red-500'); }); $('#count').textContent = '0 / 20 min';
    }).catch(error => {
      out.textContent = error.message || 'Your inquiry could not be sent. Please try again later.';
    }).finally(() => { submit.disabled = false; });
  });
  } catch (e) {}
  try {
  // Header state and reveal-on-scroll
  const hdr = $('#top'), onScroll = () => hdr.classList.toggle('scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    $$('main h2, main article, #credentials li, #about .grid > div, #financials dl > div').forEach(el => { el.classList.add('rv'); io.observe(el); });
  }

  } catch (e) {}
})();
