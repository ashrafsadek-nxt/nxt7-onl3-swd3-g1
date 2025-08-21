document.addEventListener('DOMContentLoaded', function() {
    // html elements
    const usernameInput = document.getElementById('username');
    const passwordGroup = document.getElementById('passwordGroup');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const usernameValid = document.getElementById('usernameValid');
    const passwordValid = document.getElementById('passwordValid');
    const loginForm = document.getElementById('loginForm');

    const userRegex = /^[a-zA-Z0-9._-]{3,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate username and show password field when valid
    usernameInput.addEventListener('input', function() {
        if (userRegex.test(usernameInput.value)) {
            passwordGroup.style.display = 'block';
            usernameValid.classList.add('show');
        } else {
            passwordGroup.style.display = 'none';
            usernameValid.classList.remove('show');
        }
});

    // Password validation 
    passwordInput.addEventListener('input', function() {
        if (passwordRegex.test(passwordInput.value)) {
            passwordValid.classList.add('show');
        } else {
            passwordValid.classList.remove('show');
        }
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        errorMessage.textContent = '';

        if (userRegex.test(usernameInput.value) && passwordRegex.test(passwordInput.value)) {
            // Successful login
            errorMessage.textContent = '';
            errorMessage.style.color = '#4CAF50';
            errorMessage.textContent = 'Login successful! Redirecting...';
        } else {
            // Failed login
            errorMessage.style.color = '#ff6b6b';
            if (!userRegex.test(usernameInput.value)) {
                errorMessage.textContent = 'Please enter a valid username';
            } else if (!passwordRegex.test(passwordInput.value)) {
                errorMessage.textContent = 'Please enter a valid password';
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        }
    });
});