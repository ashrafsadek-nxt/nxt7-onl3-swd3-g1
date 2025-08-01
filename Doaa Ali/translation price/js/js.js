function price(){
    const native = document.getElementById('native');
    let nativeLang = native.value;
    const target = document.getElementById('target');
    let targetLang = target.value;
    const count = document.getElementById('count');
    let wordCount = count.value;;
    let wordNumber = parseFloat(wordCount);
    let totalPrice = 0;
    if(targetLang == "English")
    {
        totalPrice = wordNumber * 0.5;
    }
    else if(targetLang == "French"){
        totalPrice = wordNumber * 0.7;
    }
    else if(targetLang == "German"){
        totalPrice = wordNumber * 0.9;
    }
    else if(targetLang == "Chinese")
    {
        totalPrice = wordNumber * 1.1;
    }
    else{
        totalPrice = 0;
    }
    const total = document.getElementById('showPrice');
    total.innerText = totalPrice;
}