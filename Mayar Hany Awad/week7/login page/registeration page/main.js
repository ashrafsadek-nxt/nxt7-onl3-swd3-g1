// Regex patterns
const patterns = {
    username: /^[a-zA-Z0-9]{3,20}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

// Form elements
const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn');
const registrationContainer = document.getElementById('registration-container');
const welcomeContainer = document.getElementById('welcome-container');

// Error message elements
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const emailExistsError = document.getElementById('email-exists-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const successMessage = document.getElementById('registration-success');

// Validation functions
function validateUsername() {
    const isValid = patterns.username.test(usernameInput.value);
    updateFieldValidation(usernameInput, usernameError, isValid, 'Username must be 3-20 characters, letters and numbers only');
    return isValid;
}

function validateEmail() {
    const isValid = patterns.email.test(emailInput.value);
    updateFieldValidation(emailInput, emailError, isValid, 'Please enter a valid email address');

    if (isValid) {
        checkEmailExists();
    } 
    else {
        emailExistsError.classList.remove('show');
    }

    return isValid;
}

function validatePassword() {
    const isValid = patterns.password.test(passwordInput.value);
    updateFieldValidation(passwordInput, passwordError, isValid, 'Password must be at least 8 characters with uppercase, lowercase, number, and special character');
    validateConfirmPassword();
    return isValid;
}

function validateConfirmPassword() {
    const isValid = passwordInput.value === confirmPasswordInput.value && passwordInput.value !== '';
    updateFieldValidation(confirmPasswordInput, confirmPasswordError, isValid, 'Passwords do not match');
    return isValid;
}

function updateFieldValidation(input, errorElement, isValid, errorMessage) {
    if (isValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        errorElement.classList.remove('show');
    } 
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('show');
    }
    updateSubmitButton();
}

function checkEmailExists() {
    const email = emailInput.value;
    const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');

    if (registeredEmails.includes(email)) {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        emailExistsError.classList.add('show');
        emailError.classList.remove('show');
        return true;
    } 
    else {
        emailExistsError.classList.remove('show');
        return false;
    }
}

function updateSubmitButton() {
    const isUsernameValid = patterns.username.test(usernameInput.value);
    const isEmailValid = patterns.email.test(emailInput.value) && !checkEmailExists();
    const isPasswordValid = patterns.password.test(passwordInput.value);
    const isConfirmPasswordValid = passwordInput.value === confirmPasswordInput.value && passwordInput.value !== '';

    submitBtn.disabled = !(isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid);
}

// Event listeners
usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

form.addEventListener('submit', function(e) {
    e.preventDefault();
            
    if (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword() && !checkEmailExists()) {
        // Save email to localStorage
        const email = emailInput.value;
        const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');

        if (!registeredEmails.includes(email)) {
            registeredEmails.push(email);
            localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
        }

        // Show success message
        successMessage.classList.add('show');

        // Redirect to welcome page after 2 seconds
        setTimeout(() => {
            registrationContainer.style.display = 'none';
            welcomeContainer.style.display = 'block';
        }, 2000);
    }
});

function goBack() {
    welcomeContainer.style.display = 'none';
    registrationContainer.style.display = 'block';
    form.reset();

    // Reset validation states
    const inputs = [usernameInput, emailInput, passwordInput, confirmPasswordInput];
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });

    // Hide all error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.classList.remove('show'));

    successMessage.classList.remove('show');
    submitBtn.disabled = true;
}

// Initial setup
updateSubmitButton();