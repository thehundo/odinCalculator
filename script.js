const addNums = (a, b) => a + b;
const subNums = (a, b) => a - b;
const multNums = (a, b) => a * b;
const divNums = (a, b) => a / b;

let a = 47
let b = 3
let operator = 'mul'

const calculator = {
    add: addNums(a, b),
    sub: subNums(a, b),
    mul: multNums(a, b),
    div: divNums(a, b),
}


console.log(operate(a, b, operator));


function operate(a, b, operator) {
    let key = operator;
    return calculator[key]
}


// console.log(addNums(a, b));
// console.log(subNums(a, b));
// console.log(multNums(a, b));
// console.log(divNums(a, b));


