import ramenBowlImg from './img/ramen-bowl.jpeg';

(function() {
    const contentContainer = document.getElementById('content');
    const homeContent = document.createElement('div');
    const intro = document.createElement('div');
    const h1Intro = document.createElement('h1');
    const introSpan = document.createElement('span');
    const ramenBowl = document.createElement('img');

    homeContent.classList.add('home-content');
    intro.classList.add('intro');
    introSpan.classList.add('intro-word');
    ramenBowl.classList.add('ramen-bowl');

    h1Intro.textContent = 'At Matte, it always tastes... ';
    ramenBowl.src = ramenBowlImg;
    ramenBowl.setAttribute('alt', 'Seafood ramen bowl');

    contentContainer.appendChild(homeContent);
    homeContent.appendChild(intro);
    homeContent.appendChild(ramenBowl);
    intro.appendChild(h1Intro);
    h1Intro.appendChild(introSpan);

    (function setWordRotation() {
        const introWords = ['like home', 'WOW', 'just right', 'amazing', 'nostalgic'];
        let introWordIndex = 0;
    
        introSpan.textContent = introWords[0];
        introSpan.style.transition = '120ms ease-in-out';
    
        setInterval(() => {
            let nextIndex = ++introWordIndex;
    
            if (nextIndex === introWords.length) {
                nextIndex = 0;
                introWordIndex = 0;
            }
    
            changeWord(introSpan, introWords[nextIndex]);
        }, 7000);
    })();

    const changeWord = (element, newWord, opacity = 1, wordChanged = false) => {
        const interval = setInterval(() => {
            if (!wordChanged) {
                if (opacity > 0) {
                    element.style.opacity = opacity - 0.1;
                    clearInterval(interval);
                    changeWord(element, newWord, opacity - 0.1, false);
                } else {
                    clearInterval(interval);
                    const wait = setInterval(() => {
                        clearInterval(wait);
                        element.textContent = newWord;
                        changeWord(element, newWord, opacity = 0, true);
                    }, 300);
                }
            } else {
                if (opacity < 1) {
                    element.style.opacity = opacity + 0.1;
                    clearInterval(interval);
                    changeWord(element, newWord, opacity + 0.1, true);
                } else {
                    clearInterval(interval);
                }
            }
        }, 50);
    }
})();