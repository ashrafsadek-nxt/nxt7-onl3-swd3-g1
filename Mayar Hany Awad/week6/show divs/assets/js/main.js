// show divs
for (let i = 0; i < 5; i++) {
    const container = document.getElementById('container');
    container.innerHTML += `<div>Div</div>`;  
}
// show images
const urls = {
    url1: './assets/images/testimonial-profile-2.png',
    url2: './assets/images/testimonial-profile-2.png',
    url3: './assets/images/testimonial-profile-2.png'
}
for (const url in urls) {
    const container = document.getElementById('showImages');
    container.innerHTML += `<img src=${urls[url]} />`
}
// show products
let products = [
    {
        name: 'mobile',
        quantity: 5,
        price: 2000,
        img: "./assets/images/testimonial-profile-1.png"
    },
    {
        name: 'tv',
        quantity: 2,
        price: 7000,
        img: "./assets/images/testimonial-profile-1.png"
    },
    {
        name: 'fan',
        quantity: 0,
        price: 8000,
        img: "./assets/images/testimonial-profile-1.png"
    },
    {
        name: 'air condition',
        quantity: 2,
        price: 10000,
        img: "./assets/images/testimonial-profile-1.png"
    }
]
const productDiv = document.getElementById('products');

for(let prd of products){
    if (prd.quantity !== 0) {
        productDiv.innerHTML += `
        <div class="product">
            <img src=${prd.img} alt="" />
            <p>${prd.name}</p>
            <p>${prd.price}</p>
            <p>${prd.quantity}</p>
        </div>
        `;
    }
    else{
        productDiv.innerHTML += `
        <div class="product">
            <img src=${prd.img} alt="" />
            <p>${prd.name}</p>
            <p>${prd.price}</p>
            <p>not avaliable</p>
        </div>
        `;
    }
}