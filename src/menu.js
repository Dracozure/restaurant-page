export default function createMenuPage() {    
    const contentContainer = document.getElementById('content');
    const menuContainer = document.createElement('div');
    const jsonFile = require('./menu-items.json');
    const menuSectionArr = [];

    menuContainer.classList.add('menu-container');

    const createMenuSection = (menuSectionTitle, itemsArr) => {
        const menuSection = document.createElement('div');
        const menuSectionTitleE = document.createElement('h2');
        const itemsContainer = document.createElement('div');

        menuSection.classList.add('menu-section');
        itemsContainer.classList.add('items-container');

        menuSectionTitleE.textContent = menuSectionTitle;

        menuSection.append(menuSectionTitleE, itemsContainer);

        for (const item of itemsArr) {
            itemsContainer.appendChild(item);
        }

        return menuSection;
    }

    const createItem = (name, price, description) => {
        const item = document.createElement('div');
        const itemHeader = document.createElement('div');
        const itemName = document.createElement('span');
        const itemPrice = document.createElement('span');
        const itemDescription = document.createElement('span');

        item.classList.add('item');
        itemHeader.classList.add('item-header');
        itemName.classList.add('item-name');
        itemPrice.classList.add('item-price');
        itemDescription.classList.add('item-description');

        itemName.textContent = name;
        itemPrice.textContent = `$${price}`;
        itemDescription.textContent = description;

        item.append(itemHeader, itemDescription);
        itemHeader.append(itemName, itemPrice);

        return item;
    }

    for (const menuSection of jsonFile) {
        const itemsArr = [];

        for (const item of menuSection.menuItems) {
            const itemE = createItem(item.itemName, item.itemPrice, item.itemDescription);

            itemsArr.push(itemE);
        }

        menuSectionArr.push(createMenuSection(menuSection.menuSectionTitle, itemsArr));
    }

    for (const menuSectionE of menuSectionArr) {
        menuContainer.appendChild(menuSectionE);
    }

    contentContainer.appendChild(menuContainer);
};