// alert("hello");
// confirm("okay?");
// prompt('whats your name?');
// document.getElementById("head").innerText = "hellllllllllllo";
// document.getElementById("head2").innerHTML = "<h2>aaaa dddd</h2>"
// document.getElementById("ipt").value = 10;
const heading = document.getElementById("head");
console.log(heading);
console.log(typeof heading);
heading.innerText = "hellllllllllllo";
const dv = document.getElementById("head2");
dv.innerHTML = "<h2>aaaa dddd</h2>";
const inp = document.getElementById("ipt");
inp.value = 10;
// arthematic operators + -
// comparsion operators < > == !=
// conditions => if, if else, if else if, nested if
// function
// events => onclick, onmouseover
// .style.background, style.color, style.display
// .classList.add
const inpt = document.getElementById("ipt2").value;
console.log(inpt);
// if
if (inpt > 150) {
  console.log(parseInt(inpt) + 20);
}
const num1 = document.getElementById("ipt3").value;
console.log(typeof num1);
// if else
if (typeof num1 == Number) {
  console.log(parseInt(inpt) + num1);
} else {
  console.log(parseInt(inpt) + parseInt(num1));
}
console.log("end of code");
function total() {
  // function defenation
  const firstNum = document.getElementById("num");
  let x = parseInt(firstNum.value);
  const secondNum = document.getElementById("num1");
  let y = parseInt(secondNum.value);
  const result = document.getElementById("head3");
  if (x < y) {
    result.innerText = y - x;
  } else {
    result.innerText = x - y;
  }
}
function showHead() {
  const x = document.getElementById("gender");
  let a = x.value;
  console.log(a);
  const result = document.getElementById("head4");
  if (a != "female") {
    result.style.display = "block";
  } else {
    result.style.display = "none";
  }
}
function mark() {
  const ipt = document.getElementById("grade");
  let degree = parseInt(ipt.value);
  const deg = document.getElementById("deg");
  if (degree > 100) {
    deg.innerHTML = "<h2>great</h2>";
    deg.style.background = "lightgreen";
  } else if (degree > 80) {
    deg.innerHTML = "<h2>very good</h2>";
  } else if (degree > 60) {
    deg.innerHTML = "<h2> good</h2>";
    deg.classList.add("clr");
  } else {
    deg.innerHTML = "<h2> fail</h2>";
    deg.style.background = "red";
    deg.style.color = "white";
  }
}
