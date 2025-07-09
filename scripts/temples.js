document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');

  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  hamburger.addEventListener('click', () => {
    const hidden = navMenu.classList.toggle('hidden');
    hamburger.setAttribute('aria-expanded', !hidden);
    hamburger.textContent = hidden ? '☰' : '✕';
  });
});
