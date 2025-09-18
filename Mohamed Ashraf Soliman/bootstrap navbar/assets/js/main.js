const searchField = document.querySelector('.search [type="text"]');
const searchForm = document.querySelector('.search');
const contentContainer = document.querySelector('main');
const collapsingText = document.querySelector('.post p');
let fullText = collapsingText.innerText;
const toggleText = document.querySelector('.post button');

searchField.addEventListener('input', searchContent);
searchForm.addEventListener('submit', searchContent);
collapsingText.innerText = fullText.substr(0,250) + '...';
toggleText.addEventListener('click',(e)=>{
    if(toggleText.innerText.toLowerCase() == 'show more'){
        collapsingText.innerText = fullText;
        toggleText.innerText = 'show less';
    } else {
        collapsingText.innerText = fullText.substr(0,250) + '...';
        toggleText.innerText = 'show more';
    }
});

function searchContent(event) {
    event.preventDefault();
    let keyword = searchField.value.toLowerCase();
    contentTitles = contentContainer.querySelectorAll('.card-title');
    contentBody = contentContainer.querySelectorAll('.card-text');
    console.log(contentTitles, contentBody)
    Array.from(contentContainer.children).forEach(post => {
        post.style.display = 'none';
    });
    contentTitles.forEach(title => {
        if (title.innerText.toLowerCase().includes(keyword)) {
            title.parentNode.parentNode.style.display = 'block';
        }
    });
    contentBody.forEach(post => {
        if (post.innerText.toLowerCase().includes(keyword)) {
            post.parentNode.parentNode.style.display = 'block';
        }
    });
}