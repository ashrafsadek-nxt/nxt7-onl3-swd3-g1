let registeredUserNames = ['Ali', 'Ahmed', 'Fadi']
const usernameField = document.querySelector('#username')
const passwordField = document.querySelector('#password')
let registeredPassword = 123

document.querySelector('#username').addEventListener('input', ()=> {
    let currentUser = usernameField.value

    if (registeredUserNames.includes(currentUser)) {

        document.querySelector('#password-field').classList.remove('d-none')

        document.querySelector('#user-check').classList.add('d-none')
    }
    else {
        document.querySelector('#user-check').classList.remove('d-none')
    }
})

document.getElementById('submit').addEventListener('click', () => {
    if(passwordField.value == registeredPassword) {
        window.alert('successful login')
    }
    else {
        document.querySelector('#password-reset').classList.remove('d-none')
    }
    console.log(passwordField.value)
    console.log(registeredPassword)
})



