//All For Loops Examples

// Default For Loop
for (let i = 0; i < 5; i++) {
    console.log("Default For Loop iteration: " + i);
}
// For Loop with Array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);
}
// for of loop that iterates over array elements
for (let fruit of fruits) {
    console.log("Fruit (for...of): " + fruit);
}

// for in loop that iterates over array indices
for (let index in fruits) {
    console.log("Fruit Index (for...in): " + index + ", Fruit: " + fruits[index]);
}

// For Loop with Object Properties
let person = {
    name: "John",   
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for in loop is for object properties
// for of loop is for iterable objects like arrays, strings, etc.

// for each loop using array method
fruits.forEach(function(fruit, index) {
    console.log("Fruit (forEach): " + fruit + ", Index: " + index);
});

// Nested For Loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("Outer Loop: " + i + ", Inner Loop: " + j);
    }
}

// Break and Continue in For Loop
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log("Number: " + i);
}
// Reverse For Loop
for (let i = 10; i >= 1; i--) {
    console.log("Reverse For Loop Number: " + i);
}
// For Loop with Step
for (let i = 0; i <= 20; i += 2) {
    console.log("Even Number: " + i);
}
// For Loop to Calculate Sum
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100: " + sum);
// For Loop to Find Factorial
let number = 6;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial of " + number + " is " + factorial);
// For Loop to Generate Multiplication Table
let tableNumber = 7;
console.log("Multiplication Table of " + tableNumber + ":");
for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}