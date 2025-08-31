let current = "";
let display = document.getElementById("screen");

function press(value) {
  current += value;
  display.textContent = current;
}
function calculate() {
  try {
    let result = eval(current);
    display.textContent = result;
    current = result.toString();
  } catch {
    display.textContent = "Error";
    current = "";
  }
}
function clearScreen() {
  current = "";
  display.textContent = "0";
}
function backspace() {
  if (current.length > 1) {
    current = current.slice(0, -1);
  } else {
    current = "0";
  }
  display.textContent = current;
}
