const names = ["ahmed", "aly", "am"];
const passwords = {
  ahmed: "123",
  aly: "456",
  am: "789",
};

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameSpn = document.getElementById("usernameSpn");
const passwordSpn = document.getElementById("passwordSpn");
const success = document.getElementById("success");
const forgotBtn = document.getElementById("forgotBtn");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", checkLogin);

function checkLogin() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  let isUsernameCorrect = false;
  let isPasswordCorrect = false;

 
  usernameSpn.innerText = "";
  passwordSpn.innerText = "";
  success.innerText = "";
  forgotBtn.style.display = "none";

 
  if (!names.includes(username)) {
    usernameSpn.innerText = " Username is incorrect";
  } else {
    isUsernameCorrect = true;
  }

  
  if (isUsernameCorrect) {
    if (passwords[username] === password) {
      isPasswordCorrect = true;
    } else {
      passwordSpn.innerText = " Password is incorrect";
      forgotBtn.style.display = "inline";
    }
  }

  
  if (isUsernameCorrect && isPasswordCorrect) {
    success.innerText = "✔️ Logged in successfully!";
    success.classList.add("success");
  } else {
    success.classList.remove("success");
  }
}
