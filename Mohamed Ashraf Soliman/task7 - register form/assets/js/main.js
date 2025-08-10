const usernameField = document.querySelector('#username');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const passwordConfirmField = document.querySelector('#password-confirm');
const loginForm = document.querySelector('form');
const result = document.querySelector('.result');
const sbmtBtn = document.querySelector('#login');

let usernames = ['mohamed', 'ali', 'mahmoud', 'ibrahim', 'omar', 'ahmed'];
let emails = ['mohamed@example.com','ali@example.com','mahmoud@example.com','ibrahim@example.com','omar@example.com','ahmed@example.com']

usernameField.addEventListener('input', validateUsername);
emailField.addEventListener('input', validateEmail);
passwordField.addEventListener('input', validatePassword);
passwordConfirmField.addEventListener('input', confirmPassword);

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateUsername(null) && validateEmail(null) && validatePassword(null) && confirmPassword(null)) {
        document.querySelectorAll('input').forEach(input => {
            input.setAttribute('disabled', 'disabled');
        });
        let username = usernameField.value.trim();
        result.innerText = `welcome ${username}, we're logging you in...`;
    }

});

function validateUsername(e) {
    let username = usernameField.value.trim();
    if (!username.match(/^(?=.{3,16}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g)) {
        result.innerText = 'username can only contain letters, numbers, dots, and underscores, and must be between 3 and 16 characters long.';
        return 0;
    }
    if (usernames.includes(username)) {
        result.innerText = 'username already exists.';
        return 0;
    }
    result.innerText = '';
    emailField.parentNode.style.display = 'flex';
    return 1;
}

function validateEmail(e) {
    let email = emailField.value.trim();
    if (!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g)) {
        result.innerText = 'please enter a valid email address.';
        return 0;
    }
    if (emails.includes(email)) {
        result.innerText = 'email already exists.';
        return 0;
    }
    result.innerText = '';
    passwordField.parentNode.style.display = 'flex';
    return 1;
}

function validatePassword(e) {
    let password = passwordField.value.trim();
    if (!password.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/g)) {
        result.innerText = 'password must be at least 8 characters long, contain letters, numbers, and special characters.';
        return 0;
    }
    result.innerText = '';
    passwordConfirmField.parentNode.style.display = 'flex';
    return 1;
}

function confirmPassword(e) {
    let password = passwordField.value.trim();
    let passwordConfirm = passwordConfirmField.value.trim();
    if (password !== passwordConfirm) {
        result.innerText = "password confirmation doesn't match match.";
        return 0;
    }
    result.innerText = '';
    sbmtBtn.style.display = 'block';
    return 1;
}