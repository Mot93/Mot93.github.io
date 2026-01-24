// assets/js/theme-switcher.js
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.createElement('button');
  themeToggle.textContent = 'Toggle Dark Mode';
  themeToggle.style.position = 'fixed';
  themeToggle.style.bottom = '20px';
  themeToggle.style.right = '20px';
  themeToggle.style.zIndex = '9999';
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
});
