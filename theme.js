// theme.js — shared light/dark toggle, persists via localStorage
(function () {
  const STORAGE_KEY = 'sat_theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Update all toggle buttons on the page
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    });
  }

  // Apply immediately on load (before paint) to avoid flash
  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getTheme());

    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = getTheme() === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      });
    });
  });
})();