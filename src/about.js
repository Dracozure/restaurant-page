
const addLocationCycling = () => {
    const koreaButton = document.querySelector('button.korea');
    const japButton = document.querySelector('button.japan');
    const usButton = document.querySelector('button.us');
    
    const regionUs = document.querySelector('.region.us');
    const regionKor = document.querySelector('.region.korea');
    const regionJap = document.querySelector('.region.japan');
    
    [koreaButton, japButton, usButton].forEach(button => {
        button.addEventListener('click', () => {
            const indexAdd = parseInt(button.dataset.index) * -1;
    
            const currentActiveElement = document.querySelector('.active');
            const newActiveElement = document.querySelector(`.region.${button.classList[0]}`);
    
            const koreaAdd = parseInt(koreaButton.dataset.index) + indexAdd;
            const japAdd = parseInt(japButton.dataset.index) + indexAdd;
            const usAdd = parseInt(usButton.dataset.index) + indexAdd;
    
            if (indexAdd === 0) {
                return;
            }
    
            regionJap.style.transform = `translateX(${japAdd * 100}%)`;
            regionKor.style.transform = `translateX(${koreaAdd * 100}%)`;
            regionUs.style.transform = `translateX(${usAdd * 100}%)`;
    
            newActiveElement.classList.add('active');
            currentActiveElement.classList.remove('active');
    
            koreaButton.dataset.index = koreaAdd;
            japButton.dataset.index = japAdd;
            usButton.dataset.index = usAdd;
        
            window.scrollTo(0, document.body.scrollHeight);
        });
    });
}

addLocationCycling();