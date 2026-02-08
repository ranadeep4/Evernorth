// Scopes in JavaScript
// Scope determines the accessibility of variables, objects, and functions in different parts of your code.
// JavaScript has three types of scopes: Global Scope, Local Scope (Function Scope), and Block Scope.
// 1. Global Scope
// Variables declared outside of any function or block are in the global scope.
// They can be accessed from anywhere in the code.
let globalVar = "I am a global variable";
function showGlobalVar() {
    console.log(globalVar); // Accessible here
}
showGlobalVar();
console.log(globalVar); // Accessible here too
// 2. Local Scope (Function Scope)
// Variables declared within a function are in the local scope of that function.
// They cannot be accessed from outside the function.
function localScopeExample() {
    let localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
localScopeExample();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined
// 3. Block Scope
// Variables declared with let or const inside a block (e.g., inside { }) are in the block scope.
if (true) {
    let blockVar = "I am a block-scoped variable";
    const blockConst = "I am also block-scoped";
    console.log(blockVar); // Accessible here
    console.log(blockConst); // Accessible here
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined

// What is closure ?
// A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has finished executing.
// A closure is a function in side of function
// closure function can accesse global, parent and current scope
// We can use closures to create private variables and functions.
// Now we can use classes to create private variables and functions.

function initCounter() {
    let x=0;

    return function demo() { //this is a closure function
        return ++x;
    }
}
// a closure function can access its parent function scope even after its life time

let orangeCounter = initCounter();
console.log(orangeCounter());
console.log(orangeCounter());
let appleCounter = initCounter();
console.log(appleCounter());
console.log(appleCounter());
console.log(orangeCounter());