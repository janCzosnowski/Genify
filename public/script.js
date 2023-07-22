// Smooth scroll for link buttons in the navbar
    document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.move');
    for (const link of navLinks) {
      link.addEventListener('click', smoothScrollToTarget);
    }
  
    function smoothScrollToTarget(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const target = document.querySelector(targetId);
      const headerOffset = 100; // Adjust this offset according to your header height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  
    // Light mode toggle button
    const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const button = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  sun.classList.toggle('visible');
  moon.classList.toggle('visible');
  body.classList.toggle('light-mode'); // Toggle the light-mode class on the body element
});
  });
  