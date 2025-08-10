// number of divs

const numberOfDivsField = document.querySelector('#number-of-divs');
const form = document.querySelector('form');
const container = document.querySelector('.container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let numberOfDivs = parseInt(numberOfDivsField.value.trim());
    console.log(`Creating ${numberOfDivs} divs`);
    for (let i = 0; i < numberOfDivs; i++) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(''));
        container.appendChild(div);
    }
});