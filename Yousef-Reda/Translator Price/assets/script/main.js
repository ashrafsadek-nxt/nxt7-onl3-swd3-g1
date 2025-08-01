const native = document.querySelector('#native')
const target = document.querySelector('#target')
const count = document.querySelector('#count')
const price = document.getElementById('price')

let wordPrice = {
    Arabic: 0.5,
    English: 0.75,
    French: 1,
    Chinese: 1.5,
}

let nativeLang = ''
let targetLang = ''
let wordsCount = 0
let totalPrice = 0

function handleSubmit(event) {
    event.preventDefault()
    targetLang = target.value
    wordsCount = count.value

    for (let lang in wordPrice) {
        if (lang == targetLang) {
            totalPrice = wordPrice[lang] * wordsCount
        }
    }

    price.innerText = `${totalPrice.toFixed(2)}`;
}