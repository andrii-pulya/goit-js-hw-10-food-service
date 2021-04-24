import menu from '../menu.json';
import foodcards from '../templates/menu-cards.hbs';

const menuRef = document.querySelector(".js-menu");

const markup = foodcards(menu);
menuRef.insertAdjacentHTML('beforeend', markup);