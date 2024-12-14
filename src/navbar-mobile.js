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
        buttonHome.classList.add('nav-select');
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
            const navButtonMobileBox1 = document.createElement('button');
            const navButtonMobileBox2 = document.createElement('button');

            navButtonMobileBox1.classList.add('bar-1');
            navButtonMobileBox2.classList.add('bar-2')

            navButtonMobile.append(navButtonMobileBox1, navButtonMobileBox2);

            navButtonMobile.addEventListener('click', () => {
                if (!navContainerMobile.classList.contains('active')) {
                    navContainerMobile.classList.add('active');
                    content.classList.add('hide');
                    navButtonMobileBox1.classList.add('active');
                    navButtonMobileBox2.classList.add('active');
                } else {
                    navContainerMobile.classList.remove('active');
                    content.classList.remove('hide');
                    navButtonMobileBox1.classList.remove('active');
                    navButtonMobileBox2.classList.remove('active');
                }
            });

            [buttonHome, buttonMenu, buttonAbout].forEach(button => {
                button.addEventListener('click', () => {
                    navContainerMobile.classList.remove('active');
                    content.classList.remove('hide');
                    navButtonMobileBox1.classList.remove('active');
                    navButtonMobileBox2.classList.remove('active');
                });
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

    mediaQuery.addEventListener('change', swapNavBar);
    mediaQuery2.addEventListener('change', swapNavBar2);

    swapNavBar(mediaQuery);

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
})();