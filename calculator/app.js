
const screen = document.getElementById("screen");
const allClear = document.getElementById("AC");
const clear = document.getElementById("C");
const percent = document.getElementById("percent");
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



allClear.addEventListener("click", () => {
    screen.value = "";
});
clear.addEventListener("click", () => {
    screen.value = screen.value.slice(0,-1);
}); 
allClear.addEventListener("click", () => {
    screen.value += "";
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
mult.addEventListener("click", () => {
    screen.value += "x";
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
minus.addEventListener("click", () => {
    screen.value += "-";
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
plus.addEventListener("click", () => {
    screen.value += "+";
});
zero.addEventListener("click", () => {
    screen.value += "0";
});
dote.addEventListener("click", () => {
    screen.value += ".";
});
equal.addEventListener("click", () => {
    screen.value += "=";
});



