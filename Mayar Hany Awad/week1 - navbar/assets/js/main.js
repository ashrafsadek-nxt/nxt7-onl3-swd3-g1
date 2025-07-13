const body = document.querySelector('body');
const themeSwitchDiv = document.querySelector('.theme-switch');

themeSwitchDiv.addEventListener('click', () =>{
    body.classList.toggle('dark-theme');
})