const form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
})

function Login(){
    // html elements
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const message = document.querySelector('.message');

    // mail and password regex
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    // condition
    if(validateEmailRegex.test(emailInput) && passwordRegex.test(passwordInput)){
        message.innerText = 'You are logged in successfully';
    }
    else if(!validateEmailRegex.test(emailInput)){
        message.innerText = 'Enter valid mail formate';
    }
    else{
        message.innerText = 'Enter valid password formate';
    }
}