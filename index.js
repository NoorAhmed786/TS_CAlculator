"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let num1 = parseInt(prompt("please enter a first number :  "));
let num2 = parseInt(prompt("please enter a second number :  "));
let operator = prompt("please select a operator ( + - * /) :  ");
if (operator == "+") {
    console.log(`the answer of  ${num1} ${operator} ${num2} = ${num1 + num2}`);
}
else if (operator == "-") {
    console.log(` the answer of ${num1} ${operator} ${num2} = ${num1 - num2}`);
}
else if (operator == "/") {
    console.log(` the answer of ${num1} ${operator} ${num2} = ${num1 / num2}`);
}
else if (operator == "*") {
    console.log(` the answer of ${num1} ${operator} ${num2} = ${num1 * num2}`);
}
else {
    console.log('please select a correct operator');
}
