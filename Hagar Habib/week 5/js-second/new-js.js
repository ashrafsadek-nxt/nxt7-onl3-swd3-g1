// document.getElementById("head").innerText = "Hi there";
// document.getElementById("head2").innerHTML = "<h3> Hello World! </h3>";
// document.getElementById("ipt").value = 10;
const heading = document.getElementById("head");
console.log(heading);
console.log(typeof heading);
heading.innerText = "Welcome";
const dv = document.getElementById("head2");
dv.innerHTML = "<h1>abcd</h1>";
const inp = document.getElementById("ipt");
inp.value = 50;

const inp2 = document.getElementById("ipt2").value;
console.log(inp2);
console.log("end of code");
if (inp2 > 50) {
  console.log(parseInt(inp2) + 20);
}
const num1 = document.getElementById("ipt3").value;
console.log(typeof num1);

if (num1 == Number) {
  console.log(parseInt(inp2) + num1);
} else {
  console.log(parseInt(inp2) + parseInt(num1));
}
console.log("end of code");
//function
function total() {
  const firstNum = document.getElementById("num");
  let x = parseInt(firstNum.value);
  const secNum = document.getElementById("num1");
  let y = parseInt(secNum.value);
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
  const deg1 = document.getElementById("deg");
  if (degree > 90) {
    deg1.innerHTML = "<h2>Great</h2>";
    deg1.style.background = "lightgreen";
  } else if (degree > 80) {
    deg1.innerHTML = "<h2>very good</h2>";
  } else if (degree > 50) {
    deg1.innerHTML = "<h2>good</h2>";
    deg1.classList.add("clr");
  } else {
    deg.innerHTML = "<h2> fail</h2>";
    deg1.style.background = "red";
    deg1.style.color = "white";
  }
}
