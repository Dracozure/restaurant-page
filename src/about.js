
export default function createAboutPage() {
    const regionsFile = require('./locations.json');

    for (let i = 0; i < regionsFile.length; i++) {
        const activeElement = (i === 0) ? true : false;


    }

    const createRegionElement = (region, locationsArr, activeStatus) => {
        const regionsElement = document.createElement('div');

        regionsElement.className = (activeStatus) ? `region ${region} active` : `region ${region}`;

        for (const location of locationsArr) {
            regionsElement.appendChild(location);
        }

        return regionsElement;
    }

    const createLocationElement = (city, address, hours, phone, email) => {
        const locationElement = document.createElement('div');
        const cityElement = document.createElement('h3');
        const addressElement = document.createElement('p');
        const hoursElement = document.createElement('p');
        const phoneElement = document.createElement('p');
        const emailElement = document.createElement('p');

        locationElement.classList.add('location');
        addressElement.classList.add('address');
        hoursElement.classList.add('hours');
        phoneElement.classList.add('phone');
        emailElement.classList.add('email');

        cityElement.textContent = city;
        addressElement.textContent = address;
        hoursElement.textContent = hours;
        phoneElement.textContent = phone;
        emailElement.textContent = email;

        locationElement.append(cityElement, addressElement, hoursElement, phoneElement, emailElement);

        return locationElement;
    }
}

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