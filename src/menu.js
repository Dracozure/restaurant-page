export default function createMenuPage() {    
    const contentContainer = document.getElementById('content');
    const menuContainer = document.createElement('div');
    const jsonFile = require('./menu-items.json');
    const menuSectionArr = [];

    menuContainer.classList.add('menu-container');

    const createMenuSection = (menuSectionTitle, itemBlocks) => {
        const menuSection = document.createElement('div');
        const menuSectionTitleE = document.createElement('h2');
        const itemsContainer = document.createElement('div');

        menuSection.classList.add('menu-section');
        itemsContainer.classList.add('items-container');

        menuSectionTitleE.textContent = menuSectionTitle;

        menuSection.append(menuSectionTitleE, itemsContainer);

        for (const itemBlock of itemBlocks) {
            itemsContainer.appendChild(itemBlock);
        }

        return menuSection;
    }

    const createItemBlock = (items) => {
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

    for (const menuSection of jsonFile) {
        const itemsArr = [];
        const blocksArr = [];

        for (const item of menuSection.menuItems) {
            const itemE = createItem(item.itemName, item.itemPrice, item.itemDescription);

            itemsArr.push(itemE);
        }

        for (let i = 0; i < itemsArr.length; i += 3) {
            const firstIndex = i;
            const lastIndex = (i + 2) >= itemsArr.length ? length - 1 : i + 2;
            const splicedItemsArr = itemsArr.slice().splice(firstIndex, lastIndex + 1);
            const itemBlock = createItemBlock(splicedItemsArr);

            blocksArr.push(itemBlock);
        }

        menuSectionArr.push(createMenuSection(menuSection.menuSectionTitle, blocksArr));
    }

    for (const menuSectionE of menuSectionArr) {
        menuContainer.appendChild(menuSectionE);
    }

    contentContainer.appendChild(menuContainer);
};