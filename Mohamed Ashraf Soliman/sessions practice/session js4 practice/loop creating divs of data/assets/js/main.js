// number of objects with for in object

const container = document.querySelector('.container');

let data = [
    {
        name: 'iphone',
        description: 'iphone 7 plus',
        img: 'assets/images/iphone.png',
    },
    {
        name: 'laptop',
        description: 'hp notebook',
        img: 'assets/images/laptop.png',
    },
    {
        name: 'monitor',
        description: 'lg monitor',
        img: 'assets/images/monitor.png',
    },
    {
        name: 'controller',
        description: 'ps4 controller',
        img: 'assets/images/controller.png',
    }
];

createContent();

function createContent() {
    for (const product of data) {
        let div = document.createElement('div');
        for (let key in product) {
            let value = product[key];
            if (key == 'img') {
                let img = document.createElement('img');
                img.src = value;
                img.alt = 'product image';
                img.style.height = "100px";
                div.appendChild(img);
                continue;
            }
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(`${key} : ${value}`));
            div.appendChild(p);
        }
        container.appendChild(div);
    }
}