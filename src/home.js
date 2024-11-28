(function() {
    const introWords = ['like home', 'WOW', 'just right', 'amazing', 'nostalgic'];
    let introWordIndex = 0;
    const introSpan = document.querySelector('span.intro-word');

    introSpan.textContent = introWords[0];
    introSpan.style.transition = '120ms ease-in-out';

    introSpan.addEventListener('click', () => {
        let nextIndex = ++introWordIndex;

        if (nextIndex === introWords.length) {
            nextIndex = 0;
            introWordIndex = 0;
        }

        introSpan.textContent = introWords[nextIndex];
    });
})();