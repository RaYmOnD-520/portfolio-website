// ============================================================
//  Raymond Wong — Portfolio  ·  app.js
// ============================================================

/* ---- nav stuck state ------------------------------------ */
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');

window.addEventListener('scroll', () => {
  nav.setAttribute('data-stuck', window.scrollY > 10 ? '1' : '0');
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ---- active nav link on scroll ------------------------- */
const sections = document.querySelectorAll('section[data-sec], header[id="top"]');
const links = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const id = e.target.id;
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

/* ---- scroll reveal ------------------------------------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));

/* ---- skill meter animation ----------------------------- */
const meterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.meter-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
      meterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-card').forEach(c => meterObs.observe(c));

/* ---- terminal boot sequence ---------------------------- */
const BOOT_LINES = [
  { prompt: 'visitor@raymond.dev:~$ ', cmd: 'whoami', delay: 0 },
  { out: 'Wong Huai Wen (Raymond)', big: true, delay: 600 },
  { prompt: 'visitor@raymond.dev:~$ ', cmd: 'cat role.txt', delay: 1200 },
  { out: 'Cybersecurity & Full-Stack Developer', delay: 1800 },
  { prompt: 'visitor@raymond.dev:~$ ', cmd: './locate --me', delay: 2400 },
  { out: 'Melbourne, VIC · Australia  # open to work', comment: true, delay: 3000 },
  { prompt: 'visitor@raymond.dev:~$ ', cmd: '', cursor: true, delay: 3600 },
];

function renderBoot() {
  const body = document.getElementById('bootBody');
  if (!body) return;
  body.innerHTML = '';
  BOOT_LINES.forEach(line => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'boot-line' + (line.big ? ' big' : '');
      if (line.prompt) {
        div.innerHTML = `<span class="prompt">${line.prompt}</span><span class="out">${line.cmd}</span>`;
      } else if (line.comment) {
        const parts = line.out.split('  ');
        div.innerHTML = `<span class="out">${parts[0]}</span>  <span class="comment">${parts[1] || ''}</span>`;
      } else {
        div.innerHTML = `<span class="out">${line.out}</span>`;
      }
      if (line.cursor) div.innerHTML += '<span class="cursor"></span>';
      body.appendChild(div);
    }, line.delay);
  });
}

window.__playHero = renderBoot;
renderBoot();

/* ---- scramble text effect ------------------------------ */
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
function scramble(el) {
  const target = el.dataset.scramble;
  let frame = 0;
  const total = 18;
  const interval = setInterval(() => {
    el.textContent = target.split('').map((ch, i) => {
      if (ch === ' ') return ' ';
      if (frame / total > i / target.length) return ch;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join('');
    frame++;
    if (frame > total) { el.textContent = target; clearInterval(interval); }
  }, 40);
}
document.querySelectorAll('.scramble').forEach(el => {
  setTimeout(() => scramble(el), 800);
});
