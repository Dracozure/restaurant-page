import './styles.css';
import aboutPage from './about.js';
import menuPage from './menu.js';
import homePage from './home.js';
import './navbar-mobile.js';

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contentElement = document.getElementById('content');

aboutPage();

const homeButtonListener = () => {
    homeButton.addEventListener('click', () => {
        contentElement.firstChild.remove();
        homePage();
    });
}

const menuButtonListener = () => {
    menuButton.addEventListener('click', () => {
        contentElement.firstChild.remove();
        menuPage();
    });
};