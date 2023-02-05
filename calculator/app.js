

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector("#clear");
const clearAll = document.querySelector("#clearAll");
const equal = document.querySelector("#equal");
const screen = document.querySelector("#screen");
const screenTwo = document.querySelector("#screenTwo");


let num1 = "";
let operator = "";


numbers.forEach(button => {
    button.addEventListener("click", () => {
        screen.value = button.innerText;
        num1 = parseFloat(screen.value);
    });
});
operators.forEach(button => {
    button.addEventListener("click", () => {
        screen.value = button.innerText;
        operator = parseFloat(screen.value);
    });
});
clear.addEventListener("click", () => {
    screen.value = screen.value.slice(0, -1);
    screenTwo.value = screenTwo.value.slice(0, -1);
})
clearAll.addEventListener("click", () => {
    screen.value = "";
    screenTwo.value = "";
})

equal.addEventListener("click", () => {
    let result = "";

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;  
            break;
        default: 0;          
    }
    result = screen.value;
}); 

