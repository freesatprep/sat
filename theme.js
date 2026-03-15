// theme.js — light/dark toggle, persists via localStorage
(function () {
  const STORAGE_KEY = 'sat_theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  function applyTheme(theme) {
    // body may not exist yet when called from <head> — wait for it
    if (!document.body) return;
    document.body.classList.toggle('dark', theme === 'dark');
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    });
  }

  // Wire up clicks using delegation on document so it works
  // regardless of when this script runs relative to the DOM
  document.addEventListener('click', function (e) {
    if (e.target.closest('.theme-toggle')) {
      const next = getTheme() === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    }
  });

  // Apply saved theme as soon as body is available
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getTheme());
  });
})();