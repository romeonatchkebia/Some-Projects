

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector("#clear");
const clearAll = document.querySelector("#clearAll");
const equal = document.querySelector("#equal");
const screen = document.querySelector("#screen");
const screenTwo = document.querySelector("#screenTwo");


let num1 = "";
let operator = "";


numbers.forEach((button) => {
    button.addEventListener("click", () => {
        screen.value += button.innerText;
    });
});
operators.forEach((button) => {
    button.addEventListener("click", () => {
        num1 = parseFloat(screen.value); 
        operator = button.innerText;
        screen.value = "";
    });
});
clear.addEventListener("click", () => {
    screen.value = screen.value.slice(0, -1);
})
clearAll.addEventListener("click", () => {
    screen.value = "";
})

equal.addEventListener("click", () => {
    let num2 = parseFloat(screen.value);
    let result;

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
        default: 
            result = 0;          
    };
    screen.value = result;
}); 

