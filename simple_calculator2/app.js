let num1 = 0;
let num2 = 0;
let operator = '';

function add() {
    num1 = parseFloat(document.getElementById("input").value);
    operator = "+";
    document.getElementById("input").value = "";
}

function substract() {
    num1 = parseFloat(document.getElementById("input").value);
    operator = "-";
    document.getElementById("input").value = "";
}

function multiply() {
    num1 = parseFloat(document.getElementById("input").value);
    operator = "*";
    document.getElementById("input").value = "";
}

function divide() {
    num1 = parseFloat(document.getElementById("input").value);
    operator = "/";
    document.getElementById("input").value = "";
}

function clearInput() {
    document.getElementById("input").value = ""
}

function deleting() {
    document.getElementById("input").value = document.getElementById("input").value.slice(0,-1)
}
function equals() {
    num2 = parseFloat(document.getElementById("input").value);
    let result = 0;
    switch(operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    document.getElementById("input").value = result;
}