const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-value]');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');
const equalsBtn = document.getElementById('equals');

let currentInput = '0';

function updateDisplay() {
  display.textContent = currentInput;
}

function appendValue(val) {
  if (currentInput === '0' && val !== '.') {
    currentInput = val;
  } else {
    // Prevent multiple dots in a number
    if (val === '.') {
      // Find last number segment
      const parts = currentInput.split(/[\+\-\*\/\%]/);
      const last = parts[parts.length - 1];
      if (last.includes('.')) return;
    }
    currentInput += val;
  }
  updateDisplay();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    appendValue(button.getAttribute('data-value'));
  });
});
clearBtn.addEventListener('click', () => {
  currentInput = '0';
  updateDisplay();
});

backspaceBtn.addEventListener('click', () => {
  if (currentInput.length === 1) {
    currentInput = '0';
  } else {
    currentInput = currentInput.slice(0, -1);
  }
  updateDisplay();
});

equalsBtn.addEventListener('click', () => {
  try {
    let expression = currentInput.replace(/%/g, '/100');
    let result = eval(expression);
    if (result === Infinity || result === -Infinity) {
      currentInput = 'Error';
    } else {
      currentInput = String(result);
    }
  } catch {
    currentInput = 'Error';
  }
  updateDisplay();
});

updateDisplay();