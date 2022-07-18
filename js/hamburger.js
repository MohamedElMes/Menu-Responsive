/*** fonctionnement du menu responsive ***/

const menu__burger = document.querySelector('.menu__burger');
    /* (navigation responsive) */
const nav_res = document.querySelector('.navigation__responsive');

function hamburger() {
    menu__burger.classList.toggle('burger-toggle');
    nav_res.classList.toggle('menu-toggle');
}

menu__burger.addEventListener('click', hamburger);