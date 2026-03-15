// ── DAILY QUESTION ──
const today = new Date();
const dayIndex = (today.getFullYear() * 365 + today.getMonth() * 31 + today.getDate()) % questions.length;
const dailyQ = questions[dayIndex];

const questionBox = document.getElementById('questionBox');
const optionBtns = document.querySelectorAll('.option-btn');

questionBox.textContent = dailyQ.question;
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

// ── CAROUSEL ──
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

// ── BEFORE / AFTER SLIDERS ──
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

    // If using real images, keep before-img full width so it doesn't stretch
    const beforeImg = before.querySelector('img');
    if (beforeImg) {
      beforeImg.style.width  = slider.offsetWidth + 'px';
      beforeImg.style.height = '100%';
    }
  }

  // Mouse
  slider.addEventListener('mousedown', e => { dragging = true; setPosition(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup',   ()  => { dragging = false; });

  // Touch
  slider.addEventListener('touchstart', e => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove',  e => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend',   ()  => { dragging = false; });

  // Set initial position to 50%
  setPosition(slider.getBoundingClientRect().left + slider.offsetWidth * 0.5);
}

// Init all sliders (including inside cloned carousel slides)
document.querySelectorAll('.ba-slider').forEach(initBASlider);

// ── WEBSITES ──
// ↓↓↓ ADD YOUR SITES HERE ↓↓↓
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