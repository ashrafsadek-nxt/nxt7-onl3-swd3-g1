function price() {
    // get native language
    const native = document.getElementById('native');
    let nativeLang = native.value;
    // get target language
    const target = document.getElementById('target');
    let targetLang = target.value;
    // get number of words
    const count = document.getElementById('count');
    let wordCount = count.value;
    let wordNum = parseFloat(wordCount);
    let totalPrice = 0;
    //To Handel TargetLang Cases
    switch (targetLang) {
        case "English":
            totalPrice = wordNum * 0.5;
            break;
        case "French":
            totalPrice = wordNum * 0.9;
            break;
        case "German":
            totalPrice = wordNum * 0.8;
            break;
        case "Italy":
            totalPrice = wordNum * 1.5;
            break;
        default:
            totalPrice = 0;
    }
    const total = document.getElementById('showPrice');
    total.innerText = totalPrice;

}