const user = document.getElementById("user");
user.addEventListener("input", checkUsername);
const userSpn = document.getElementById("usernameSpn");

function checkUsername() {
  let names = ["Ahmad", "Aly", "Sara"];
  let username = user.value;
  let userCheck = names.includes(username);

  if (userCheck === true) {
    userSpn.innerText = "usename is correct";
    const passwordDiv = document.getElementById("password");
    passwordDiv.style.display = "block";
  } else {
    userSpn.innerText = "username is wrong , pleade try again";
  }
}

const pwd = document.getElementById("pwd");
const pwdSpn = document.getElementById("pwdSpn");
const submitBtn = document.getElementById("submit-btn");

function checkPassword() {
  const pwdValue = pwd.value;
  const strongPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (strongPwd.test(pwdValue)) {
    pwdSpn.innerText = "Password is Valid";
    pwdSpn.style.color = "green";
    return true;
  } else {
    pwdSpn.innerText =
      "Must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long";
    pwdSpn.style.color = "red";
    return false;
  }
}

submitBtn.addEventListener("click", function (e) {
  const usernameValid = userSpn.innerText === "usename is correct";
  const passwordValid = checkPassword();
});
