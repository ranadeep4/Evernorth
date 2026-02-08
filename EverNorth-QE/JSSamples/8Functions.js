//function is a reusable block of code that performs a specific task
// it can take input parameters and return a value
// We have named function and anonymous function
// Named Function
function add(a, b) {
    return a + b;
}
console.log("Named Function Add: " + add(5, 3)); // 8

// Anonymous Function assigned to a variable    
let multiply = function (a, b) {
    return a * b;
};
console.log("Anonymous Function Multiply: " + multiply(5, 3)); // 15
// Arrow Function
let subtract = (a, b) => {
    return a - b;
};
console.log("Arrow Function Subtract: " + subtract(5, 3)); // 2
// Arrow function is a shorter syntax for writing functions
let divide = (a, b) => a / b;
console.log("Arrow Function Divide: " + divide(6, 3)); // 2
// Function with Default Parameters
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice!
// Function with Rest Parameters
function sumAll(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log("Sum of all numbers: " + sumAll(1, 2, 3, 4, 5)); // 15
// there will be only one parameter with rest operator (...)
// we can pass array as argument using spread operator (...)
let numbersArray = [1, 2, 3, 4, 5];
console.log("Sum of array elements: " + sumAll(...numbersArray)); // 15

// while defining function if we use ... it is rest operator
// while calling function if we use ... it is spread operator
// passing function as argument to another function
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log("Calculate Add: " + calculate(10, 5, add)); // 15
console.log("Calculate Multiply: " + calculate(10, 5, multiply)); // 50
console.log("Calculate Subtract: " + calculate(10, 5, subtract)); // 5
console.log("Calculate Divide: " + calculate(10, 5, divide)); // 2
// This concept is called callback function


// syntax of arrow function with single parameter and single expression
// let functionName = (parameters) => expression;
let square = x => x * x;
console.log("Square of 4: " + square(4)); // 16

// syntax of arrow function with single parameter and multiple expressions
let cube = x => {
    let result = x * x * x;
    return result;
};

// syntax of arrow function with mutiple parameters and single expression
let power = (base, exponent) => Math.pow(base, exponent);
console.log("2 raised to power 3: " + power(2, 3)); // 8

// syntax of arrow function with mutiple parameters and multiple expressions
let powerWithMultipleExpressions = (base, exponent) => {
    let result = Math.pow(base, exponent);
    return result;
};
console.log("3 raised to power 4: " + powerWithMultipleExpressions(3, 4)); // 81

// IIFE - Immediately Invoked Function Expression
(function () {
    console.log("This is an IIFE function that runs immediately upon definition.");
})();

// IIFE can also have parameters
(function (name) {
    console.log("Hello from IIFE, " + name + "!");
})("Developer");

//IIFE syntax: (() => {})();
// IIFE is often used to create a new scope and avoid polluting the global namespace

// Recursive Function - A function that calls itself
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log("Factorial of 5: " + factorial(5)); // 120