export function createMenuPage() {    
    const jsonFile = require('./menu-items.json');

    console.log(jsonFile[0].menuItems);

    const createMenuSection = (menuSectionTitle, ...itemBlocks) => {
        const menuSection = document.createElement('div');
        const menuSectionTitleE = document.createElement('h2');
        const itemsContainer = document.createElement('div');

        menuSection.classList.add('menu-section');
        itemsContainer.classList.add('items-container');

        menuSectionTitleE.textContent = menuSectionTitle;

        menuSection.append(menuSectionTitle, itemsContainer);

        for (const itemBlock of itemBlocks) {
            itemsContainer.appendChild(itemBlock);
        }

        return menuSection;
    }

    const createItemBlock = (...items) => {
        const itemBlock = document.createElement('div');

        itemBlock.classList.add('block');

        for (const item of items) {
            itemBlock.appendChild(item);
        }

        return itemBlock;
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
        itemPrice.textContent = price;
        itemDescription.textContent = description;

        item.append(itemHeader, itemDescription);
        itemHeader.append(itemName, itemPrice);

        return item;
    }
};