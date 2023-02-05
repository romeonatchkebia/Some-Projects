
const screen = document.getElementById("screen");
const allClear = document.getElementById("AC");
const clear = document.getElementById("C");
const percent = document.getElementById("percent");
const slash = document.getElementById("slash");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const mult = document.getElementById("mult");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("plus");
const zero = document.getElementById("zero");
const dote = document.getElementById("dote");
const equal = document.getElementById("equal");


let num1 = "";
let operator = "";


allClear.addEventListener("click", () => {
    screen.value = "";
});
clear.addEventListener("click", () => {
    screen.value = screen.value.slice(0,-1);
}); 
percent.addEventListener("click", () => {
    screen.value += "%";
});
seven.addEventListener("click", () => {
    screen.value += "7";
});
eight.addEventListener("click", () => {
    screen.value += "8";
});
nine.addEventListener("click", () => {
    screen.value += "9";
});
four.addEventListener("click", () => {
    screen.value += "4";
});
five.addEventListener("click", () => {
    screen.value += "5";
});
six.addEventListener("click", () => {
    screen.value += "6";
});
one.addEventListener("click", () => {
    screen.value += "1";
});
two.addEventListener("click", () => {
    screen.value += "2";
});
three.addEventListener("click", () => {
    screen.value += "3";
});
zero.addEventListener("click", () => {
    screen.value += "0";
});
dote.addEventListener("click", () => {
    screen.value += ".";
});
minus.addEventListener("click", () => {
    operator = "+";
    num1 = parseFloat(screen.value);
    screen.value = "";
});
plus.addEventListener("click", () => {
    operator = "+";
    num1 = parseFloat(screen.value);
    screen.value = "";
});
mult.addEventListener("click", () => {
    operator = "+";
    num1 = parseFloat(screen.value);
    screen.value = "";
});
slash.addEventListener("click", () => {
    operator = "+";
    num1 = parseFloat(screen.value);
    screen.value = "";
});
equal.addEventListener("click", () => {
    let num2 = parseFloat(screen.value);
    let result = "";
    
    switch (operator){
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
        default: 0;
    }
    screen.value = result;
});



