let a = 47
let b = 3
let operator = 'mul'

const addNums = (a, b) => a + b;
const subNums = (a, b) => a - b;
const multNums = (a, b) => a * b;
const divNums = (a, b) => a / b;

const calculator = {
    add: addNums(a, b),
    sub: subNums(a, b),
    mul: multNums(a, b),
    div: divNums(a, b),
}

const container = document.querySelector("#container");

// Create display div to show result and add DOM
const display = document.createElement("div");
display.classList.add("display");
display.textContent = calculator.mul;
container.appendChild(display);

// Create a div container 'calculator' and add to DOM
const calc = document.createElement("div");
calc.classList.add("calc");
container.appendChild(calc);


// Create divs for left and right of calculator
const calcLeft = document.createElement("div");
calcLeft.classList.add("calcLeft");
calc.appendChild(calcLeft);
makeButton("numBtn", "00", calcLeft);
makeButton("numBtn", "0", calcLeft);
makeButton("numBtn", ".", calcLeft);
makeButton("numBtn", "1", calcLeft);
makeButton("numBtn", "2", calcLeft);
makeButton("numBtn", "3", calcLeft);
makeButton("numBtn", "4", calcLeft);
makeButton("numBtn", "5", calcLeft);
makeButton("numBtn", "6", calcLeft);
makeButton("numBtn", "7", calcLeft);
makeButton("numBtn", "8", calcLeft);
makeButton("numBtn", "9", calcLeft);
makeButton("spBtn", "C", calcLeft);

// makeBtnRow("row", calcLeft);


const calcRight = document.createElement("div");
calcRight.classList.add("calcRight");
calc.appendChild(calcRight);
makeButton("opBtn", "÷", calcRight);
makeButton("opBtn", "×", calcRight);
makeButton("opBtn", "-", calcRight);
makeButton("opBtn", "+", calcRight);
makeButton("spBtn", "=", calcRight);

// Create rows
function makeBtnRow(cls, parent) {
    const row = document.createElement("div");
    row.classList.add(cls);
    parent.appendChild(row);
    makeButton("numBtn", "7", row);
    makeButton("numBtn", "8", row);
    makeButton("numBtn", "9", row);
}


// Create buttons
function makeButton(cls, val, parent) {
    const btn = document.createElement("button");
    btn.classList.add(cls);
    btn.textContent = val;
    parent.appendChild(btn);
}
// const btn = document.createElement("button");
// btn.classList.add("opBtn")


// Create divs on left for 'Clear' and number buttons


console.log(calculator.mul)
console.log(operate(a, b, operator));


function operate(a, b, operator) {
    let key = operator;
    return calculator[key]
}


// console.log(addNums(a, b));
// console.log(subNums(a, b));
// console.log(multNums(a, b));
// console.log(divNums(a, b));


