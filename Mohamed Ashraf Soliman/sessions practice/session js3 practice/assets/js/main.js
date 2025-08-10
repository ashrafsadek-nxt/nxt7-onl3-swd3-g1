const languageSelect = document.querySelector('#language');
const wordCountField = document.querySelector('#wordcount');
const sbmt = document.querySelector('form');
const price = document.querySelector('#price');
const baseprice = 2;

sbmt.addEventListener('submit',(e)=>{
    e.preventDefault();
    let wordCount = parseInt(wordCountField.value);
    switch (languageSelect.value) {
        case 'english':
            price.innerText = baseprice * wordCount * 0.5;
            break;
        case 'french':
            price.innerText = baseprice * wordCount * 0.8;
            break;
        case 'german':
            price.innerText = baseprice * wordCount * 0.9;
            break;
        case 'chinese':
            price.innerText = baseprice * wordCount * 1.2;
            break;
    }
});