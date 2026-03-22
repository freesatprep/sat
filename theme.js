(function () {
  const STORAGE_KEY = 'sat_theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  function applyTheme(theme) {
    if (!document.body) return;
    document.body.classList.toggle('dark', theme === 'dark');
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    });
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('.theme-toggle')) {
      const next = getTheme() === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getTheme());
  });
})();