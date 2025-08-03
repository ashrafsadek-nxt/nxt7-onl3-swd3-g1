const productsSection = document.querySelector('.products')
let products = [
    {
        title: 'iPhone',
        img: './assets/images/iphone.jpg',
        quantity: 5,
        price: 1000,
    },
    {
        title: 'Samsung',
        img: './assets/images/samsung.jpg',
        quantity: 5,
        price: 1500,
    },
    {
        title: 'TV',
        img: './assets/images/tv.jpg',
        quantity: 5,
        price: 2000,
    },
    {
        title: 'Lenovo',
        img: './assets/images/laptop.jpg',
        quantity: 1,
        price: 1800,
    },
    {
        title: 'msi',
        img: './assets/images/msi.jpeg',
        quantity: 5,
        price: 2500,
    },
    {
        title: 'oppo',
        img: './assets/images/oppo.jpg',
        quantity: 5,
        price: 3000,
    },
]

let productsElements = ''

function getProduct(product) {
    return (
        `
            <div class='outer'>
                <div class='inner'>
                    <h2>${product.title}</h2>
                    <h3>price: ${product.price}</h3>
                    <img src='${product.img}'>
                </div>
            </div>
        `
    )
}

for (let i = 0; i < products.length; i++) {
    if (products[i].quantity > 0) {
        productsElements += getProduct(products[i])
    }
}

productsSection.innerHTML = productsElements

