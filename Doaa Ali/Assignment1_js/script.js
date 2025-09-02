const display = document.getElementById('display');
function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erorr';
    }
}
function clearDisplay() {
    display.value = '';
}
function deleteDigit() {
    display.value = display.value.slice(0, -1);
}