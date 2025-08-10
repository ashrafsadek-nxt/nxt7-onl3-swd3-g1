const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const loginForm = document.querySelector('form');
const result = document.querySelector('.result');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = emailField.value.trim();
    let password = passwordField.value.trim();
    if (email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g)) {
        if (password.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/g)) {
            result.innerText = 'Loging you in...';
        } else {
            result.innerText = 'password must be at least 8 characters long, contain letters, numbers, and special characters.';   
        }
    } else {
        result.innerText = 'Please enter a valid email address.';
    }
});