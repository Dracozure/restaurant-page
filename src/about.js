
export default function createAboutPage() {
    const content = document.getElementById('content');
    const aboutTopContainer = document.createElement('div');
    const regionsJsonFile = require('./locations.json');
    const regionParentContainer = createRegionParentContainer(regionsJsonFile);
    const aboutParentContainer = createAboutIntro();

    aboutTopContainer.classList.add('about-container');

    aboutTopContainer.append(aboutParentContainer, regionParentContainer);
    content.appendChild(aboutTopContainer);

    addLocationCycling();

    function createRegionParentContainer(regionsJsonFile) {
        const regionsTopParent = document.createElement('div');
        const locationsTitle = document.createElement('h1');
        const regionsContainer = createRegionsContainer(regionsJsonFile);
    
        regionsTopParent.classList.add('regions');
    
        locationsTitle.textContent = 'Locations';
    
        regionsTopParent.append(locationsTitle, regionsContainer);

        return regionsTopParent;
    }

    function createAboutIntro() {
        const aboutContainer = document.createElement('div');
        const aboutTitle = document.createElement('h1');
        const aboutDescription = document.createElement('p');

        aboutContainer.classList.add('about');

        aboutTitle.textContent = 'The Place';
        aboutDescription.textContent = "The place. It's where people can enjoy and relax. There is no need to rush. It can be your bedroom, library, or even on a bench. Here, it's a humble ramen shop. Our motto is simple: to provide customers a comfortable place to eat and enjoy after a hard day's work. Because at Matte, we want to remind you of home.";

        aboutContainer.append(aboutTitle, aboutDescription);

        return aboutContainer;
    }

    function createRegionsContainer(regionsFile) {
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

        return regionsContainerElement;
    }

    function createRegionsBarElement(regionsBarButtonsInfoArr) {
        const regionsBarElement = document.createElement('div');

        regionsBarElement.classList.add('regions-bar');

        for (let i = 0; i < regionsBarButtonsInfoArr.length; i++) {
            const buttonElement = document.createElement('button');
            const region = regionsBarButtonsInfoArr[i];
            
            buttonElement.classList.add(region.region);
            buttonElement.setAttribute('data-index', region.dataIndex);
            buttonElement.textContent = region.regionName;

            if (i === 0) { buttonElement.classList.add('selected'); }

            regionsBarElement.appendChild(buttonElement);
        }

        return regionsBarElement;
    }

    function createRegionInfoElement(regionsArr) {
        const regionsInfoElement = document.createElement('div');
        let regionDefaultTranslateXMultiplier = 0;

        regionsInfoElement.classList.add('regions-info');

        for (const region of regionsArr) {
            region.style.transform = `translateX(${regionDefaultTranslateXMultiplier * 100}%)`;

            regionsInfoElement.appendChild(region);

            regionDefaultTranslateXMultiplier++;
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
        const regionButtonsArr = Array.from(document.querySelector('.regions-bar').childNodes);
        const regionsArr = Array.from(document.querySelector('.regions-info').childNodes);

        for (const button of regionButtonsArr) {
            button.addEventListener('click', (e) => {
                const indexAdd = parseInt(button.dataset.index) * -1;
                        
                const currentActiveElement = document.querySelector('.active');
                const newActiveElement = document.querySelector(`.region.${button.classList[0]}`);
                const currentActiveButton = document.querySelector('button.selected');
                const newActiveButton = e.target;
    
                if (indexAdd === 0) {
                    return;
                }

                for (let i = 0; i < regionsArr.length; i++) {
                    const regionAdd = parseInt(regionButtonsArr[i].dataset.index) + indexAdd;

                    regionsArr[i].style.transform = `translateX(${regionAdd * 100}%)`;

                    regionButtonsArr[i].dataset.index = regionAdd;
                }

                newActiveElement.classList.add('active');
                currentActiveElement.classList.remove('active');

                currentActiveButton.classList.remove('selected');
                newActiveButton.classList.add('selected');
            });
        }
    }
}