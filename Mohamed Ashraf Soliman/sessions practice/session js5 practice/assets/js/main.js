const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const loginForm = document.querySelector('form');
const loginBtn = document.querySelector('#login');
const result = document.querySelector('.result');

let users = ["mohamed", "ali", "mahmoud", "ibrahim", "amr"];
let passwords = ["password123","password","pass123","word123","ps123"];

usernameField.addEventListener('input', (e)=>{
    if (users.includes(usernameField.value.trim())) {
        result.innerText = '';
        passwordField.parentNode.style.display = "block";
        loginBtn.style.display = 'block';
    } else {
        result.innerText = 'wrong user name';
    }
});

loginForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (passwords.includes(passwordField.value.trim())) {
        result.innerText = 'logging you in ...';
    } else {
        result.innerHTML = '<a class="button" href="#">forgot password?</a>';
    }
});