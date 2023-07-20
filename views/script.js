// JavaScript (script.js)
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero-section');
const getStartedBtn = document.getElementById('getStartedBtn');
const subText = document.querySelector('.service-text');

// Initial header height
const initialHeaderHeight = 250;

// Function to resize the header on scroll
function resizeHeaderOnScroll() {
  const scrollY = window.scrollY;
  const maxScroll = heroSection.clientHeight - initialHeaderHeight;
  const scrollPercentage = Math.min(scrollY / maxScroll, 1);
  const minimumHeaderHeight = 90;
  const headerHeight = initialHeaderHeight - scrollPercentage * (initialHeaderHeight - minimumHeaderHeight);

  // Set the header height
  header.style.height = `${headerHeight}px`;

  // Show/hide sub-text based on scroll position
  if (scrollY > 0) {
    subText.style.display = 'none';
  } else {
    subText.style.display = 'block';
  }

  // Gradually resize the brand name font size
  const brandName = document.querySelector('.brand-logo span');
  const initialTextSize = 2.5;
  const minimumTextSize = 1.75;
  const textSize = initialTextSize - scrollPercentage * (initialTextSize - minimumTextSize);
  brandName.style.fontSize = `${textSize}rem`;

  // Gradually resize the logo size
  const logoImg = document.querySelector('.logo-img');
  const initialLogoSize = 120;
  const minimumLogoSize = 80;
  const logoSize = initialLogoSize - scrollPercentage * (initialLogoSize - minimumLogoSize);
  logoImg.style.width = `${logoSize}px`;
  logoImg.style.height = `${logoSize * 1.5}px`;
}

// Function to smooth scroll to a section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const sectionOffset = section.getBoundingClientRect().top;
  const headerHeight = header.clientHeight;
  const offsetPosition = sectionOffset - headerHeight;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Call resizeHeaderOnScroll function on window scroll
window.addEventListener('scroll', resizeHeaderOnScroll);

// Initial call to resize the header on page load
resizeHeaderOnScroll();

// Smooth scroll to features section when "Get Started" button is clicked
getStartedBtn.addEventListener('click', function (event) {
  event.preventDefault();
  scrollToSection('features');
});
