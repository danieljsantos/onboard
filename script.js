

const span = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-menu-hamburguer');

const menu = function () {
    // span.style.display = 'none';
    nav.classList.toggle('visivel')
}


span.onclick = menu;