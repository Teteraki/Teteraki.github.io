// Toggle mobile menu visibility when hamburger is clicked
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('#mobile-menu a'); // Get all the links inside the mobile menu

// Toggle the mobile menu when the hamburger icon is clicked
hamburgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Hide the mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show'); // Hide the menu by removing the 'show' class
  });
});