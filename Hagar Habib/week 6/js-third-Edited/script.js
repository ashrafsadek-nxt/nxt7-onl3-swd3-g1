function price() {
  // get native language
  const native = document.getElementById("native");
  let nativeLang = native.value;
  console.log(nativeLang);
  // get target language
  const target = document.getElementById("target");
  let targetLang = target.value;
  console.log(targetLang);
  // get number of words
  const count = document.getElementById("count");
  let wordCount = count.value;
  console.log(wordCount);
  console.log(typeof wordCount);
  let wordNumber = parseFloat(wordCount);
  console.log(typeof wordNumber);
  let totalPrice = 0;
  if (targetLang == "English") {
    totalPrice = wordNumber * 0.5;
    console.log(totalPrice);
  } else if (targetLang == "French") {
    totalPrice = wordNumber * 0.7;
  } else if (targetLang == "German") {
    totalPrice = wordNumber * 0.9;
  } else if (targetLang == "Chinese") {
    totalPrice = wordNumber * 1.1;
  }
  // show price in browser
  const total = document.getElementById("showPrice");
  total.innerText = totalPrice;
}
// task 2
function user() {
  let storedUsername = "ahmed";
  const username = document.getElementById("username");
  let un = username.value;
  console.log(un);
  const contain = document.getElementById("container");
  if (un == storedUsername) {
    contain.style.display = "block";
  }
}
function login() {
  const head = document.getElementById("result");
  const passwordRegex =
    /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
  let storedUsername = 123;
  const username = document.getElementById("username");
  let un = username.value;
  const password = document.getElementById("password");
  let pwd = password.value;
  if (un != storedUsername) {
    head.innerText = "username is wrong";
  } else {
    if (passwordRegex.test(pwd)) {
      head.innerText = "you are login";
    } else {
      head.innerText =
        "password must contain capital letter, small letter, number, symbols and more than 8 characters";
    }
  }
}
