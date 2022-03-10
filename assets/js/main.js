const hamburger = document.getElementById('hamburgerIcon');
const navMenu = document.getElementById('navigationMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('showNav');
})