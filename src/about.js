
export default function createAboutPage() {
    const regionsFile = require('./locations.json');
    const regionsContainerElement = document.createElement('div');
    const regionsArr = [];
    const regionsBarButtonsInfo = [];

    regionsContainerElement.classList.add('regions-container');

    for (let i = 0; i < regionsFile.length; i++) {
        const activeStatus = (i === 0) ? true : false;
        const locationsArr = []

        for (const location of regionsFile[i].locations) {
            locationsArr.push(createLocationElement(location.city, location.address, location.hours, location.phone, location.email));
        }

        regionsArr.push(createRegionElement(regionsFile[i].region, locationsArr, activeStatus));
        regionsBarButtonsInfo.push({ 'region': regionsFile[i].region, 'dataIndex': regionsFile[i].dataIndex, 'regionName': regionsFile[i].regionName });
    }

    regionsContainerElement.append(createRegionsBarElement(regionsBarButtonsInfo), createRegionInfoElement(regionsArr));

    function createRegionsBarElement(regionsBarButtonsInfoArr) {
        const regionsBarElement = document.createElement('div');

        regionsBarElement.classList.add('regions-bar');

        for (const region of regionsBarButtonsInfo) {
            const buttonElement = document.createElement('button');
            
            buttonElement.classList.add(region.region);
            buttonElement.setAttribute('data-index', region.dataIndex);
            buttonElement.textContent = region.regionName;

            regionsBarElement.appendChild(buttonElement);
        }

        return regionsBarElement;
    }

    function createRegionInfoElement(regionsArr) {
        const regionsInfoElement = document.createElement('div');

        regionsInfoElement.classList.add('regions-info');

        for (const region of regionsArr) {
            regionsInfoElement.appendChild(region);
        }

        return regionsInfoElement;
    }

    function createRegionElement(region, locationsArr, activeStatus) {
        const regionsElement = document.createElement('div');

        regionsElement.className = (activeStatus) ? `region ${region} active` : `region ${region}`;

        for (const location of locationsArr) {
            regionsElement.appendChild(location);
        }

        return regionsElement;
    }

    function createLocationElement(city, address, hours, phone, email) {
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

    function addLocationCycling() {
        const koreaButton = document.querySelector('button.korea');
        const japButton = document.querySelector('button.japan');
        const usButton = document.querySelector('button.us');
        
        const regionUs = document.querySelector('.region.us');
        const regionKor = document.querySelector('.region.korea');
        const regionJap = document.querySelector('.region.japan');
        
        [koreaButton, japButton, usButton].forEach(button => {
            button.addEventListener('click', () => {
                const indexAdd = parseInt(button.dataset.index) * -1;
    
                if (indexAdd === 0) {
                    return;
                }
        
                const currentActiveElement = document.querySelector('.active');
                const newActiveElement = document.querySelector(`.region.${button.classList[0]}`);
        
                const koreaAdd = parseInt(koreaButton.dataset.index) + indexAdd;
                const japAdd = parseInt(japButton.dataset.index) + indexAdd;
                const usAdd = parseInt(usButton.dataset.index) + indexAdd;
        
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
}