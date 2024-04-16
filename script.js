let a = ''
let b = ''
// let opVal = ''
let operator = ''

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

// Store user input
const userInput = [] 
const container = document.querySelector("#container");
// Create display div to show result and add DOM
const display = document.createElement("div");
display.classList.add("display");
//display.textContent = calculator.mul;
container.appendChild(display);

// Create a div container 'calculator' and add to DOM
const calc = document.createElement("div");
calc.classList.add("calc");
container.appendChild(calc);

// Build Calculator
makeCalcLeft();
makeCalcRight();

function operate() {
    const calculator = {
        add: addNums(a, b),
        sub: subNums(a, b),
        mul: multNums(a, b),
        div: divNums(a, b),
    };
    let key = operator;
    console.log(a, key, b);
    // console.log(calculator['add']);
    a = calculator[key];
    b = '';
    display.textContent = a;
}

// Create calculator display
function makeDisplay() {

}

// Create left side of Calculator
function makeCalcLeft() {
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
    makeButton("spBtn", "C", calcLeft)
}

// Create right side of Calculator
function makeCalcRight() {
    const calcRight = document.createElement("div");
    calcRight.classList.add("calcRight");
    calc.appendChild(calcRight);
    makeButton("opBtn", "div", calcRight);
    makeButton("opBtn", "mul", calcRight);
    makeButton("opBtn", "sub", calcRight);
    makeButton("opBtn", "add", calcRight);
    // makeButton("opBtn", "÷", calcRight);
    // makeButton("opBtn", "×", calcRight);
    // makeButton("opBtn", "-", calcRight);
    // makeButton("opBtn", "+", calcRight);
    makeButton("equalBtn", "=", calcRight);
}

// Create buttons
function makeButton(cls, val, parent) {
    const btn = document.createElement("button");
    btn.classList.add(cls);
    btn.textContent = val;
    parent.appendChild(btn);
    addBtnClick(btn, cls, val)
}

// Add button clicks for each class
function addBtnClick(btn, cls, val) {
    btn.addEventListener("click", function (e) {
        switch (cls) {
            case 'numBtn':
                userInput.push(val);
                display.textContent = userInput.join(``) 
                break;
            case 'opBtn':
                if (userInput.join('') !== '') storeValue();
                if (b !== '') operate();
                return operator = val;
            case 'spBtn': 
                clearAll();
                break;
            case 'equalBtn':
                storeValue()
                operate();
                break;

        }
    })
}

// Create function to clear all memory (userInput, a, b)
function clearAll() {
    a = ''
    b = ''
    userInput.length = 0;
    display.textContent = userInput.join('') // update display (to blank)
}

// Store userInput as a (if empty) or b
function storeValue() {
    if (a === '') {a = parseFloat(userInput.join(''))}
    else {b = parseFloat(userInput.join(''))};
    userInput.length = 0;
    console.log(`a: ${a}  operator: ${operator}  b: ${b}`) // log current values for operate function
}


// console.log(calculator.mul)
// console.log(operate(a, b, operator));




// console.log(addNums(a, b));
// console.log(subNums(a, b));
// console.log(multNums(a, b));
// console.log(divNums(a, b));


