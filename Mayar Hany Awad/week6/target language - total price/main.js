function GetTotal(){
    // html elements
    const nativeLanguageSelect = document.getElementById('native').value;
    const targetLanguageSelect = document.getElementById('target').value;
    const wordCountInput = document.getElementById('count').value;
    const totalPriceEl = document.getElementById('total-price');

    let wordCount = parseFloat(wordCountInput);

    let totalPrice = 0;

    // condition
    if(targetLanguageSelect.toLowerCase() === 'english'){
        totalPrice = wordCount * 0.5;
    }
    else if(targetLanguageSelect.toLowerCase() === 'french'){
        totalPrice = wordCount * 0.7;
    }
    else if(targetLanguageSelect.toLowerCase() === 'german'){
        totalPrice = wordCount * 0.9;
    }
    else if(targetLanguageSelect.toLowerCase() === 'arabic'){
        totalPrice = wordCount * 1.5;
    }
    else{
        totalPrice = wordCount * 1.7;
    }

    // show total price
    totalPriceEl.innerText = 'Total Price = ' + totalPrice;
}