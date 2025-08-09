const user = document.getElementById("user");
const userBtn = document.getElementById("user-btn");
userBtn.addEventListener("click", checkUsername);
const userSpn = document.getElementById("usernameSpn");

let registeredNames = ["Ahmad", "Aly", "Sara"];

function checkUsername() {
  const username = user.value.trim();
  let userCheck = registeredNames.includes(username);

  if (userCheck) {
    userSpn.innerText = "This username is already taken";
    userSpn.style.color = "red";
    return false;
  } else if (username === "") {
    userSpn.innerText = "Username cannot be empty";
    userSpn.style.color = "red";
    return false;
  } else {
    userSpn.innerText = "Username is available";
    userSpn.style.color = "green";

    registeredNames.push(user.value.trim()); // تضيف الاسم الجديد للقائمة

    // userBtn.style.display = "none";
    const passwordDiv = document.getElementById("password");
    passwordDiv.style.display = "block";
    console.log("Registered names:", registeredNames);

    return true;
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
  // console.log(e);
  const usernameValid = userSpn.innerText === "Username is available";
  const passwordValid = checkPassword();
});
