const searchField = document.querySelector('.search [type="text"]');
const searchForm = document.querySelector('.search form');
const contentContainer = document.querySelector('main');
const darkThemeSwitch = document.querySelector('.dark-theme-switch');
const asideLinks = document.querySelectorAll('aside ul li a');
const collapsingText = document.querySelector('.post p');
let fullText = collapsingText.innerText;
const toggleText = document.querySelector('.post button');

searchField.addEventListener('input', searchContent);
searchForm.addEventListener('submit', searchContent);
darkThemeSwitch.addEventListener('click',darkThemeToggle);
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


function darkThemeToggle(event) {
    event.preventDefault();
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }
}


function searchContent(event) {
    event.preventDefault();
    let keyword = searchField.value.toLowerCase();
    contentTitles = contentContainer.querySelectorAll('.post-title');
    contentBody = contentContainer.querySelectorAll('.post-body');
    Array.from(contentContainer.children).forEach(post => {
        post.style.display = 'none';
    });
    contentTitles.forEach(title => {
        if (title.innerText.toLowerCase().includes(keyword)) {
            title.parentNode.style.display = 'block';
        }
    });
    contentBody.forEach(post => {
        if (post.innerText.toLowerCase().includes(keyword)) {
            post.parentNode.style.display = 'block';
        }
    });
}