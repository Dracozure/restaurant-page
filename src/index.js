import './styles.css';
import aboutPage from './about.js';
import menuPage from './menu.js';
import homePage from './home.js';
import './navbar-mobile.js';

const homeButton = document.querySelector('button.home');
const menuButton = document.querySelector('button.menu');
const aboutButton = document.querySelector('button.about');
const contentElement = document.getElementById('content');
const buttonMap = { 'home':homePage, 'menu':menuPage, 'about':aboutPage }

homePage();

[homeButton, menuButton, aboutButton].forEach(button => {
    button.addEventListener('click', () => {
        if (button !== document.querySelector('button.nav-select')) {
            const currentButtonSelected = document.querySelector('button.nav-select');

            contentElement.firstChild.remove();
            buttonMap[button.classList[0]]();

            currentButtonSelected.classList.remove('nav-select');
            button.classList.add('nav-select');
        }
    });
});