const user = document.getElementById("username");
user.addEventListener("input", checkUsername);

function checkUsername() {
    let names = ["Ahmed", "Merna", "Sara"];
    const userSpn = document.getElementById("usernameSpn");
    let username = user.value;
    let userChk = names.includes(username);

    if (userChk === true) {
        userSpn.innerText = "username is correct";
        userSpn.style.color = "green";
        const passwordDiv = document.getElementById("password");
        passwordDiv.style.display = "block";
    }
    else {
        userSpn.innerText = "username is wrong, please try again";
        userSpn.style.color = "red";
        const passwordDiv = document.getElementById("password");
        passwordDiv.style.display = "none";
    }
}

// Password check
const pwd = document.getElementById("pwd");
pwd.addEventListener("input", checkPassword);

function checkPassword() {
    const pwdSpn = document.getElementById("pwdSpn");
    const pwdValue = pwd.value;
    const strongPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (strongPwd.test(pwdValue)) {
        pwdSpn.innerText = "Password is Valid";
        pwdSpn.style.color = "green";
    }
    else {
        pwdSpn.innerText = "Must contain uppercase, lowercase, number, and be at least 8 characters long";
        pwdSpn.style.color = "red";
    }
}
