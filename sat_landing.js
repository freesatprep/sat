const today = new Date();
const dayIndex = (today.getFullYear() * 365 + today.getMonth() * 31 + today.getDate()) % questions.length;
const dailyQ = questions[dayIndex];

const questionBox = document.getElementById('questionBox');
const optionBtns = document.querySelectorAll('.option-btn');

questionBox.innerHTML = '<img src="' + dailyQ.image + '" alt="Question" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;">';
optionBtns.forEach((btn, i) => { btn.textContent = dailyQ.options[i]; });

optionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    optionBtns.forEach(b => {
      b.disabled = true;
      b.style.background = b.textContent === dailyQ.answer ? '#4caf50' : '#2a2a2a';
      b.style.color = '#fff';
    });
  });
});

document.querySelector('.dont-know-btn').addEventListener('click', () => {
  optionBtns.forEach(b => {
    b.disabled = true;
    b.style.background = b.textContent === dailyQ.answer ? '#4caf50' : '#2a2a2a';
    b.style.color = '#fff';
  });
});

document.querySelector('.practiceMore').addEventListener('click', () => {
  window.location.href = 'sat_quiz.html';
});

const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
const slideWidth = 76;
let current = 0;

const originalSlides = Array.from(track.querySelectorAll('.carousel-slide'));
const firstClone = originalSlides[0].cloneNode(true);
const lastClone  = originalSlides[originalSlides.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, originalSlides[0]);

const total = originalSlides.length;

originalSlides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('carousel-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goTo(i + 1));
  dotsContainer.appendChild(dot);
});

function updateDots(realIndex) {
  document.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.classList.toggle('active', i === realIndex);
  });
}

function goTo(index, animate = true) {
  track.style.transition = animate ? 'transform 0.4s ease' : 'none';
  track.style.transform = `translateX(calc(-${index * slideWidth}% + 12%))`;
  current = index;
  updateDots(((index - 1) + total) % total);
}

track.addEventListener('transitionend', () => {
  if (current === 0)         goTo(total, false);
  if (current === total + 1) goTo(1, false);
});

document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));
goTo(1, false);

function initBASlider(slider) {
  const before = slider.querySelector('.ba-before');
  const handle  = slider.querySelector('.ba-handle');
  let dragging  = false;

  function setPosition(x) {
    const rect = slider.getBoundingClientRect();
    let pct = (x - rect.left) / rect.width;
    pct = Math.max(0.02, Math.min(0.98, pct));
    const pctStr = (pct * 100).toFixed(2) + '%';
    before.style.width = pctStr;
    handle.style.left  = pctStr;

    const beforeImg = before.querySelector('img');
    if (beforeImg) {
      beforeImg.style.width  = slider.offsetWidth + 'px';
      beforeImg.style.height = '100%';
    }
  }

  slider.addEventListener('mousedown', e => { dragging = true; setPosition(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup',   ()  => { dragging = false; });

  slider.addEventListener('touchstart', e => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove',  e => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend',   ()  => { dragging = false; });

  setPosition(slider.getBoundingClientRect().left + slider.offsetWidth * 0.5);
}

document.querySelectorAll('.ba-slider').forEach(initBASlider);

const websites = [
  {
    name: "Free SAT Prep",
    url:  "https://yoursite.com",
    desc: "Daily questions & full practice mode"
  },
  {
    name: "Example Site 2",
    url:  "https://example2.com",
    desc: "Short description of the site"
  },
  {
    name: "Example Site 3",
    url:  "https://example3.com",
    desc: "Short description of the site"
  },
];

const grid = document.getElementById('websitesGrid');
websites.forEach(site => {
  const a = document.createElement('a');
  a.className    = 'website-card';
  a.href         = site.url;
  a.target       = '_blank';
  a.rel          = 'noopener noreferrer';
  a.innerHTML    = `
    <div class="website-card-name">${site.name}</div>
    <div class="website-card-url">${site.url.replace(/^https?:\/\//, '')}</div>
    ${site.desc ? `<div class="website-card-desc">${site.desc}</div>` : ''}
  `;
  grid.appendChild(a);
});

(async function () {
  const BIN_ID  = '69b4c063b7ec241ddc686bd7';
  const API_KEY = '$2a$10$i96ZlacCYBbYPjVnqJtHT.wNlxB2hRk7WHGsDDF1UWgpPy3Ynxz4C';
  try {
    const res  = await fetch('https://api.jsonbin.io/v3/b/' + BIN_ID + '/latest', {
      headers: { 'X-Master-Key': API_KEY }
    });
    const s = (await res.json()).record;

    const correctPct = s.totalAnswered > 0
      ? Math.round((s.totalCorrect || 0) / s.totalAnswered * 100) + '%'
      : '—';

    const topCountry = s.byCountry
      ? Object.entries(s.byCountry).sort((a,b) => b[1]-a[1])[0]?.[0] || '—'
      : '—';

    const hours = ((s.totalSeconds || 0) / 3600).toFixed(1) + 'h';
    const avgMin = Math.round((s.avgSessionSeconds || 0) / 60) + 'm';

    const totalDev = (s.mobileVisits || 0) + (s.desktopVisits || 0);
    const mobilePct = totalDev > 0
      ? Math.round((s.mobileVisits || 0) / totalDev * 100) + '%'
      : '—';

    function fmt(n) {
      if (!n) return '0';
      if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
      return String(n);
    }

    function animateCount(el, target, suffix) {
      if (!el || isNaN(target)) { if (el) el.textContent = suffix; return; }
      const duration = 900;
      const start = performance.now();
      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const val = Math.round(ease * target);
        el.textContent = val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    animateCount(document.getElementById('s-views'),    s.totalViews || 0, '');
    animateCount(document.getElementById('s-unique'),   s.uniqueViews || 0, '');
    animateCount(document.getElementById('s-answered'), s.totalAnswered || 0, '');

    const correctEl = document.getElementById('s-correct');
    if (correctEl) correctEl.textContent = correctPct;

    const timeEl = document.getElementById('s-time');
    if (timeEl) timeEl.textContent = hours;

    const avgEl = document.getElementById('s-avg');
    if (avgEl) avgEl.textContent = avgMin;

    const mobileEl = document.getElementById('s-mobile');
    if (mobileEl) mobileEl.textContent = mobilePct;

    const countryEl = document.getElementById('s-country');
    if (countryEl) countryEl.textContent = topCountry;

  } catch (e) {}
})();