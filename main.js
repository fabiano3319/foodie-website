const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

function setMenu(open) {
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}

// Clic sur le burger : ouvre ou ferme le menu
burger.addEventListener('click', () => {
    setMenu(!menu.classList.contains('open'));
});

// Clic sur un lien : le menu se referme
menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});