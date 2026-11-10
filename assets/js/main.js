(function(){
  /* ---------- icon library (generic glyphs; parts carry animation classes) ---------- */
  var I = {
    home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path class="a-pop" d="M10 20v-5h4v5"/>',
    arrow:'<path class="a-slide" d="M4 12h15M13 6l6 6-6 6"/>',
    external:'<path d="M14 4h6v6"/><path class="a-lift" d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
    kanban:'<rect x="3" y="4" width="18" height="16" rx="2"/><path class="a-bob" d="M7 8h3v7H7z"/><path class="a-rise" d="M14 8h3v4h-3z"/>',
    coffee:'<path d="M4 9h12v5a5 5 0 01-5 5H9a5 5 0 01-5-5V9z"/><path d="M16 11h1.5a2.5 2.5 0 010 5H16"/><path class="a-rise" d="M8 3c0 1.5 1.5 1.5 1.5 3"/><path class="a-rise" d="M12 3c0 1.5 1.5 1.5 1.5 3"/>',
    film:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M3 15h18"/><path class="a-slide" d="M10 10.5v3l3-1.5z"/>',
    briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2"/><path class="a-pop" d="M3 13h18"/>',
    gear:'<g class="a-spin"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></g>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path class="a-dash" d="M3 7l9 6 9-6"/>',
    search:'<g class="a-lift"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/></g>',
    users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><g class="a-bob"><circle cx="17" cy="9" r="2.4"/><path d="M17 14c2.2 0 4 1.8 4 4"/></g>',
    doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path class="a-dash" d="M9 12h6M9 15h6M9 18h4"/>',
    pen:'<g class="a-lift"><path d="M4 20l1-5L16 4l4 4L9 19z"/><path d="M14 6l4 4"/></g>',
    rocket:'<g class="a-lift"><path d="M12 3c3 2 5 5.5 5 9.5L15 15H9l-2-2.5C7 8.5 9 5 12 3z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 15l-2 4 3-1.5M15 15l2 4-3-1.5"/></g>',
    grid:'<rect class="a-pop" x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect class="a-pop" x="13" y="13" width="7" height="7" rx="1.5"/>',
    code:'<path class="a-slide" d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/><path d="M14 4l-4 16"/>',
    cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path class="a-ring" d="M22 9v6"/>',
    shield:'<path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6z"/><path class="a-dash" d="M8.5 12l2.5 2.5 4.5-5"/>',
    bolt:'<path class="a-pop" d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    spark:'<path class="a-spin" d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path class="a-pop" d="M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2z"/>',
    image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle class="a-pop" cx="9" cy="9.5" r="1.8"/><path class="a-lift" d="M3 17l5-5 4 4 3-3 6 6"/>',
    container:'<path class="a-bob" d="M4 8l8-4 8 4-8 4z"/><path d="M4 8v8l8 4 8-4V8"/><path d="M12 12v8"/>',
    window:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle class="a-blink" cx="6.5" cy="6.5" r=".6"/><circle class="a-blink" cx="9" cy="6.5" r=".6"/><path class="a-dash" d="M7 13h10M7 16h6"/>',
    chart:'<path d="M4 20h16"/><path class="a-bar" d="M7 20v-6"/><path class="a-bar" d="M12 20V8"/><path class="a-bar" d="M17 20v-9"/>',
    chat:'<path d="M4 5h16v11H9l-5 4z"/><circle class="a-blink fill" cx="9" cy="10.5" r="1"/><circle class="a-blink fill" cx="12" cy="10.5" r="1"/><circle class="a-blink fill" cx="15" cy="10.5" r="1"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path class="a-pop" d="M9 15l2 2 4-4"/>',
    bell:'<g class="a-ring"><path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 20a2 2 0 004 0"/></g>',
    gift:'<rect x="4" y="11" width="16" height="9" rx="1"/><g class="a-lift"><rect x="3" y="7" width="18" height="4" rx="1"/><path d="M12 7c-1-3-5-3-4 0M12 7c1-3 5-3 4 0"/></g><path d="M12 11v9"/>',
    box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/><path class="a-pop" d="M7.5 5l9 4"/>',
    pulse:'<rect x="3" y="4" width="18" height="16" rx="2"/><path class="a-dash" d="M5 13h3l2-4 3 7 2-3h4"/>',
    branch:'<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle class="a-pop" cx="18" cy="8" r="2"/><path d="M6 7v10"/><path class="a-dash" d="M18 10c0 4-6 3-12 7"/>',
    check:'<path class="a-dash" d="M5 12.5l4.5 4.5L19 7.5"/>',
    database:'<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13"/><path class="a-dash" d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>',
    play:'<path class="a-pop fill" d="M7 4.5v15l12-7.5z"/>',
    layers:'<path class="a-lift" d="M12 3l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/><path class="a-bob" d="M3 16l9 5 9-5"/>',
    wave:'<path class="a-bar" d="M4 10v4"/><path class="a-bar" d="M8 6v12"/><path class="a-bar" d="M12 3v18"/><path class="a-bar" d="M16 7v10"/><path class="a-bar" d="M20 10v4"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><ellipse class="a-spin" cx="12" cy="12" rx="4" ry="9"/>',
    bank:'<path d="M3 9l9-5 9 5z"/><path class="a-bar" d="M6 10v8"/><path class="a-bar" d="M10 10v8"/><path class="a-bar" d="M14 10v8"/><path class="a-bar" d="M18 10v8"/><path d="M3 20h18"/>',
    flow:'<rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path class="a-pop" d="M18 6.5l2 2-2 2-2-2z"/><path class="a-dash" d="M9 6.5h7M18 10.5v4.5M15 17.5H6V9"/>',
    uml:'<rect x="3" y="3" width="8" height="8" rx="1"/><path d="M3 6.5h8"/><rect class="a-bob" x="13" y="13" width="8" height="8" rx="1"/><path class="a-dash" d="M7 11v6h6"/>',
    plug:'<path d="M9 3v4M15 3v4"/><path d="M6 7h12v4a6 6 0 01-12 0z"/><path class="a-rise" d="M12 17v4"/>',
    loop:'<g class="a-spin"><path d="M20 12a8 8 0 01-14 5.3"/><path d="M4 12a8 8 0 0114-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/></g>',
    copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path class="a-lift" d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/>',
    phone:'<g class="a-ring"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"/></g>',
    camera:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle class="a-pop" cx="12" cy="12" r="4"/><circle class="fill" cx="17.2" cy="6.8" r="1"/>',
    pin:'<g class="a-bob"><path d="M12 21s-6-5.5-6-11a6 6 0 0112 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/></g>'
  };
  document.querySelectorAll('i[data-ic]').forEach(function(el){
    var n = el.getAttribute('data-ic'); if(!I[n]) return;
    var s = document.createElementNS('http://www.w3.org/2000/svg','svg');
    s.setAttribute('viewBox','0 0 24 24'); s.setAttribute('aria-hidden','true');
    s.setAttribute('class','ic ic-'+n+(el.className ? ' '+el.className : ''));
    s.innerHTML = I[n];
    el.replaceWith(s);
  });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- router ---------- */
  var pages = {}; document.querySelectorAll('.page').forEach(function(p){ pages[p.dataset.page] = p; });
  var links = document.querySelectorAll('[data-route]');
  var current = null;
  function show(name, initial){
    if(!pages[name]) name = 'accueil';
    if(name === current) return;
    Object.keys(pages).forEach(function(k){ pages[k].hidden = (k !== name); });
    links.forEach(function(a){ if(a.dataset.route === name) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
    var active = document.querySelector('[data-route="'+name+'"]');
    if(active && active.scrollIntoView && !initial) active.scrollIntoView({block:'nearest',inline:'center'});
    var p = pages[name];
    if(!initial){
      window.scrollTo(0,0);
      if(!reduce){ p.classList.remove('enter'); void p.offsetWidth; p.classList.add('enter'); }
      countUp(p);
    }
    if(!reduce){ p.classList.add('play'); setTimeout(function(){ p.classList.remove('play'); }, 1300); }
    document.title = name === 'accueil' ? 'Ayoub Chaoui' : (active ? active.textContent.trim() : '') + ' · Ayoub Chaoui';
    current = name;
  }
  function route(initial){ show((location.hash || '#accueil').slice(1), initial); }
  window.addEventListener('hashchange', function(){ route(false); });
  route(true);

  /* in-page scroll links (do not change the route) */
  document.querySelectorAll('[data-scroll]').forEach(function(a){
    a.addEventListener('click', function(e){ e.preventDefault(); var t = document.getElementById('p-'+a.dataset.scroll); if(t) t.scrollIntoView({behavior: reduce ? 'auto':'smooth', block:'start'}); });
  });

  /* ---------- counters ---------- */
  function countUp(scope){
    if(reduce) return;
    scope.querySelectorAll('[data-count]').forEach(function(el){
      var target = +el.dataset.count, suf = el.dataset.suffix || '', t0 = null, dur = 1100;
      function step(t){ if(!t0) t0 = t; var k = Math.min(1,(t-t0)/dur); k = 1-Math.pow(1-k,3);
        el.textContent = Math.round(target*k) + (k===1 ? suf : ''); if(k<1) requestAnimationFrame(step); }
      requestAnimationFrame(step);
    });
  }
  countUp(pages[current]);

  /* ---------- rotating role ---------- */
  var rot = document.getElementById('rot');
  if(rot && !reduce){
    var spans = rot.querySelectorAll('span'), i = 0, n = spans.length;
    setInterval(function(){
      i++;
      spans.forEach(function(s){ s.style.transition = ''; s.style.transform = 'translateY(' + (-100*i) + '%)'; });
      if(i === n-1){ setTimeout(function(){ i = 0; spans.forEach(function(s){ s.style.transition='none'; s.style.transform='translateY(0)'; }); }, 600); }
    }, 2400);
  }

  /* ---------- magnetic buttons + ripple ---------- */
  document.querySelectorAll('.btn').forEach(function(b){
    if(!reduce && b.classList.contains('mag') && window.matchMedia('(hover:hover)').matches){
      b.addEventListener('pointermove', function(e){ var r = b.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width/2) * .18, y = (e.clientY - r.top - r.height/2) * .3;
        b.style.transform = 'translate('+x+'px,'+y+'px)'; });
      b.addEventListener('pointerleave', function(){ b.style.transform = ''; });
    }
    b.addEventListener('click', function(e){
      if(reduce) return;
      var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), s = document.createElement('span');
      s.className = 'ripple'; s.style.width = s.style.height = d+'px';
      s.style.left = (e.clientX - r.left - d/2)+'px'; s.style.top = (e.clientY - r.top - d/2)+'px';
      b.appendChild(s); setTimeout(function(){ s.remove(); }, 650);
    });
  });

  /* ---------- project filters ---------- */
  var chips = document.querySelectorAll('#filters .chip'), cards = document.querySelectorAll('#tickets .ticket');
  chips.forEach(function(c){
    var f = c.dataset.f, n = 0;
    cards.forEach(function(k){ if(f==='all' || k.dataset.cat.split(' ').indexOf(f) > -1) n++; });
    c.querySelector('.count').textContent = n;
    c.addEventListener('click', function(){
      chips.forEach(function(x){ x.setAttribute('aria-pressed', x===c ? 'true':'false'); });
      cards.forEach(function(k){
        var on = f==='all' || k.dataset.cat.split(' ').indexOf(f) > -1;
        k.hidden = !on;
        if(on && !reduce){ k.classList.remove('enter-card'); k.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:350,easing:'cubic-bezier(.2,.8,.2,1)'}); }
      });
    });
  });

  /* ---------- copy e-mail ---------- */
  document.querySelectorAll('.cpy').forEach(function(cb){
    cb.addEventListener('click', function(){
      var el = document.getElementById(cb.dataset.copy), msg = document.getElementById('copy-msg');
      var txt = cb.dataset.raw || el.textContent, what = cb.dataset.raw ? 'Numéro' : 'Adresse';
      function fallback(){ var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); msg.textContent = what + ' sélectionné(e) : copiez avec Ctrl+C.'; }
      try{ navigator.clipboard.writeText(txt).then(function(){ msg.textContent = what + ' copié(e).'; }, fallback); }catch(e){ fallback(); }
    });
  });
})();
