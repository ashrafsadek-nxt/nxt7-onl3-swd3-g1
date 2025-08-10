// product gallery

const container = document.querySelector('.container');
let data = [
    {
        "name": "adidas shoe",
        "price": 250,
        "img": "assets/images/adidas-shoe.jpg",
        "quantity": 50
    },
    {
        "name": "puma shoe",
        "price": 200,
        "img": "assets/images/puma-shoe.jpg",
        "quantity": 30
    },
    {
        "name": "nike shoe",
        "price": 300,
        "img": "assets/images/nike-shoe.jpg",
        "quantity": 20
    },
    {
        "name": "cap",
        "price": 150,
        "img": "assets/images/cap.jpg",
        "quantity": 0
    }
    
]


data.forEach(product => container.appendChild(createCard(product)));

function createCard(product) {
    // create card components
    let card = document.createElement('div');
    card.classList.add('card');
    let content = document.createElement('div');
    content.classList.add('content');
    let name = document.createElement('h3');
    let img = document.createElement('img');
    // add product data
    name.appendChild(document.createTextNode(product.name));
    img.src = product.img;
    img.alt = 'product photo';
    card.appendChild(img);
    card.appendChild(content);
    content.appendChild(name);
    if (product.quantity) { // if quantity > 0, add price and quantity
        let price = document.createElement('p');
        let quantity = document.createElement('p');
        let buyBtn = document.createElement('a');
        price.appendChild(document.createTextNode(`price: ${product.price}$`));
        quantity.appendChild(document.createTextNode(`quantity: ${product.quantity} items`));
        buyBtn.appendChild(document.createTextNode('buy now'));
        buyBtn.href = '#';
        content.appendChild(price);
        content.appendChild(quantity);
        content.appendChild(buyBtn);
    } else { // if quantity == 0, product is unavailable
        let unavailable = document.createElement('p');
        unavailable.appendChild(document.createTextNode('unavailable currently'));
        unavailable.classList.add('unavailable');
        content.appendChild(unavailable);
    }
    return card;
}