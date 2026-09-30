// ==========================================================
// Slide-down navigation menu — shared across every page
// ==========================================================
const menuToggle = document.getElementById('menuToggle');
const slideMenu = document.getElementById('slideMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = slideMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu after a link is clicked (nice on mobile)
slideMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    slideMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight the current page's link in the menu
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
slideMenu.querySelectorAll('a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && slideMenu.classList.contains('open')) {
    slideMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});
