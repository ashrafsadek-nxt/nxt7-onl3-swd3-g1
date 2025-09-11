const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.getElementById('display');

let currentInput = '';
let operator = null;
let previousInput = '';

numbers.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            if (operator && previousInput) {
                currentInput = String(calculate(previousInput, currentInput, operator));
                display.value = currentInput;
                operator = null;
                previousInput = '';
            }
        } else {
            if (currentInput) {
                if (previousInput) {
                    currentInput = String(calculate(previousInput, currentInput, operator));
                    display.value = currentInput;
                }
                operator = button.textContent;
                if (operator === 'xⁿ') operator = 'p';
                if (operator === '√') operator = 's';
                previousInput = currentInput;
                currentInput = '';
            }
        }
    });
});

function calculate(num1, num2, operator) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        case 'p':
            return Math.pow(a, b);
        case 's':
            return Math.sqrt(a);
        default:
            return b;
    }
}

window.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key)) {
        currentInput += key;
        display.value = currentInput;
    } else if (['+', '-', '*', '/', 'p', 's'].includes(key)) {
        let op = key;
        if (currentInput) {
            if (previousInput) {
                currentInput = String(calculate(previousInput, currentInput, operator));
                display.value = currentInput;
            }
            operator = op;
            previousInput = currentInput;
            currentInput = '';
        }
    } else if (key === '=' || key === 'Enter') {
        if (operator && previousInput) {
            currentInput = String(calculate(previousInput, currentInput, operator));
            display.value = currentInput;
            operator = null;
            previousInput = '';
        }
    } else if (key === 'c' || key === 'C') {
        currentInput = '';
        operator = null;
        previousInput = '';
        display.value = '';
    }
});

document.getElementById('calculator').addEventListener('submit', (e) => {
    e.preventDefault();
});

