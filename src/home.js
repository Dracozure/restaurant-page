(function() {
    const introWords = ['like home', 'WOW', 'just right', 'amazing', 'nostalgic'];
    let introWordIndex = 0;
    const introSpan = document.querySelector('span.intro-word');

    introSpan.textContent = introWords[0];
    introSpan.style.transition = '120ms ease-in-out';

    const rotateWords = setInterval(() => {
            let nextIndex = ++introWordIndex;

            if (nextIndex === introWords.length) {
                nextIndex = 0;
                introWordIndex = 0;
            }
    
            changeWord(introSpan, introWords[nextIndex]);
        }, 8000);

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