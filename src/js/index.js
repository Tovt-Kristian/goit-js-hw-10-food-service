import '../sass/main.scss'

import menu from '../menu.json'
import menuCardsTpl from '../templates/menu-cards.hbs';


import refs from "./refs";
const { menuList, themeSwitchToggle, body } = refs;


const menuCardsMarkup = createMenuCardsMarkup(menu)
menuList.insertAdjacentHTML('beforeend', menuCardsMarkup);

function createMenuCardsMarkup(menu) {
  return menuCardsTpl(menu);
}


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

function setTheme() {
        if (localStorage.getItem('theme')){
            body.classList.add(localStorage.getItem('theme'));

            if(localStorage.getItem('theme') === 'light-theme'){
                themeSwitchToggle.checked = false;       
                body.classList.add('light-theme');
            }else {
                themeSwitchToggle.checked = true;       
            }   
        }
        else {
            body.classList.add(Theme.LIGHT);
            localStorage.setItem('theme', Theme.LIGHT)
        }
}

setTheme();

themeSwitchToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        body.classList.replace('light-theme', 'dark-theme');
    } 
    else {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.replace('dark-theme', 'light-theme')
    }
});




