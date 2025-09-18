let num1 = '';
let num2 = '';
let operator = '';
let isSecondNumber = false;


function addNums(num1, num2) {
    return num1 + num2;
}

function subNums(num1, num2) {
    return num1 - num2;
}
function divideNums(num1, num2) {
    return num1 / num2;
}
function multiplyNums(num1, num2) {
    return num1 * num2;
}

function calculateSums(num1, num2, operator) {
    if(operator === "+") {
        return addNums(num1, num2);
    } else if (operator === "-") {
        return subNums(num1, num2);
    } else if (operator === "/") {
        return divideNums(num1, num2);
    } else if (operator === "*") {
        return multiplyNums(num1, num2);
    } else {
        return "Invalid Operator";
    }
}

//Function to add numbers to the display and for user input.
function appendNumber(num) {
    if (!isSecondNumber) {
        num1 += num;
    } else {
        num2 += num;
    }
    updateDisplay();

}

//Function to add the operator
function appendOperator(op) {
    if (num1 !== '' && num2 !== '') {
        calculate(op);
    } else if (num1 !== '') {
        operator = op;
        isSecondNumber = true;
        updateDisplay();
    }
}

//Clear the display
function clearAll() {
    num1 = '';
    num2 = '';
    operator = '';
    isSecondNumber = false;
    updateDisplay('0');
}

//Function for calculate button
function calculate(newOperator = '') {
    if (num1 !== '' && num2 !== '' && operator !== '') {
        let result = Math.floor(calculateSums(Number(num1), Number(num2), operator));
        updateDisplay(result);
        
        num1 = result.toString();
        num2 = '';
        operator = newOperator;
        isSecondNumber = true;

    } else if (num1 === '' || num2 === '') {
        return updateDisplay('ERROR');

    }

}

//Update Display
function updateDisplay(content = '') {
    const display = document.getElementById('display');
    if (content !== '') {
        display.textContent = content;
    } else {
        display.textContent = num1 + ' ' + operator + ' ' + num2;
    }
}