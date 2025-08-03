const productsSection = document.querySelector('.products')
let products = ''
let product = '<div class ="product">Product</div>'

for (let i = 0; i < 4; i++) {
    products += product
}

productsSection.innerHTML = products