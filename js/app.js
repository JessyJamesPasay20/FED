const hamburgerMenu = document.querySelector('header > button');
const headerNav = document.querySelector('body > header');

hamburgerMenu.addEventListener('click', function () {
    headerNav.classList.toggle("toggled");
});

