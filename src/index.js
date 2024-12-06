import './styles.css';
import aboutPage from './about.js';
import menuPage from './menu.js';
import homePage from './home.js';
import './navbar-mobile.js';

const homeButton = document.querySelector('button.home');
const menuButton = document.querySelector('button.menu');
const aboutButton = document.querySelector('button.about');
const contentElement = document.getElementById('content');

homePage();

homeButton.addEventListener('click', () => {
    contentElement.firstChild.remove();
    homePage();
});

menuButton.addEventListener('click', () => {
    contentElement.firstChild.remove();
    menuPage();
});

aboutButton.addEventListener('click', () => {
    contentElement.firstChild.remove();
    aboutPage();
});
