export function createMenuPage() {    
    const jsonFile = require('./menu-items.json');

    console.log(jsonFile[0].menuItems);

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