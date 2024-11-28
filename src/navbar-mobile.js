(function switchNavBar() {
    const removeNavBar = (type) => {
        if (type === 'desktop') {
            document.querySelector('nav.desktop').remove();
        } else {
            document.querySelector('.nav-container.mobile').remove();
            document.querySelector('.nav-button').remove();
        }
    }

    const addNavBar = (type) => {
        const header = document.querySelector('.header-container');
        const navBar = document.createElement('nav');
        const buttonHome = document.createElement('button');
        const buttonMenu = document.createElement('button');
        const buttonAbout = document.createElement('button');
        const content = document.getElementById('content');

        buttonHome.textContent = 'Home';
        buttonMenu.textContent = 'Menu';
        buttonAbout.textContent = 'About';

        buttonHome.classList.add('home');
        buttonMenu.classList.add('menu');
        buttonAbout.classList.add('about');
        navBar.append(buttonHome, buttonMenu, buttonAbout);

        if (type === 'desktop') {
            navBar.classList.add('desktop');
            header.appendChild(navBar);
            content.classList.remove('hide');
        } else {   
            const headerContainer = document.querySelector('.header-container');
            const navContainerMobile = document.createElement('div');
            const navButtonMobile = document.createElement('button');

            navButtonMobile.textContent = 'mobile';

            navButtonMobile.addEventListener('click', () => {
                if (!navContainerMobile.classList.contains('active')) {
                    navContainerMobile.classList.add('active');
                    content.classList.add('hide');
                } else {
                    navContainerMobile.classList.remove('active');
                    content.classList.remove('hide');
                }
            });

            navBar.classList.add('mobile');
            navContainerMobile.className = 'nav-container mobile';
            navButtonMobile.classList.add('nav-button');

            navContainerMobile.appendChild(navBar);
            document.body.insertBefore(navContainerMobile, document.getElementById('content'));
            headerContainer.appendChild(navButtonMobile);
        }
    }

    const mediaQuery = window.matchMedia('screen and (max-width: 764px)');
    const mediaQuery2 = window.matchMedia('screen and (min-width: 764px)');

    function swapNavBar(e) {
        if (e.matches) {
            removeNavBar('desktop');
            addNavBar('mobile');
        }
    }

    function swapNavBar2(e) {
        if (e.matches) {
            removeNavBar('mobile');
            addNavBar('desktop');
        }
    }

    mediaQuery.addEventListener('change', swapNavBar);
    mediaQuery2.addEventListener('change', swapNavBar2);
})();