let num1 = '';
let num2 = '';
let operator = '';


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