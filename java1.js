let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0' || displayValue === '-0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '' && firstOperand !== null) {
        calculate();
    }
    operator = op;
    if (displayValue !== '0' && displayValue !== '-0') {
        firstOperand = parseFloat(displayValue);
        displayValue = '0';
        updateDisplay();
    }
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '' || displayValue === '-') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculate() {
    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                result = firstOperand / secondOperand;
            } else {
                alert("Cannot divide by zero!");
                clearDisplay();
                return;
            }
            break;
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

document.addEventListener('keydown', function (event) {
    if (!isNaN(event.key)) {
        appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendOperator(event.key);
    } else if (event.key === '.') {
        appendDecimal();
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
