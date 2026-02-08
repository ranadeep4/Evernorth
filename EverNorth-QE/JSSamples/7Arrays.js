//Working with Arrays in JavaScript
// Arrays are used to store multiple values in a single variable. They are ordered collections of items.

"use strict";
// 1. Creating Arrays
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = ["Hello", 42, true, null];
console.log("Fruits Array: " + fruits);
console.log("Numbers Array: " + numbers);
console.log("Mixed Array: " + mixedArray);

// 2. Accessing Array Elements
console.log("First fruit: " + fruits[0]); // Apple
console.log("Second number: " + numbers[1]); // 2

// 3. Modifying Array Elements
fruits[1] = "Blueberry"; // Change Banana to Blueberry
console.log("Modified Fruits Array: " + fruits);

// 4. Array Properties and Methods
console.log("Length of Fruits Array: " + fruits.length); // 3
fruits.push("Date"); // Add Date to the end
console.log("Fruits after push: " + fruits);

let lastFruit = fruits.pop(); // Remove last element
console.log("Popped Fruit: " + lastFruit);
console.log("Fruits after pop: " + fruits);

fruits.unshift("Mango"); // Add Mango to the beginning
console.log("Fruits after unshift: " + fruits);

let firstFruit = fruits.shift(); // Remove first element
console.log("Shifted Fruit: " + firstFruit);
console.log("Fruits after shift: " + fruits);

// find index of an element
let index = fruits.indexOf("Cherry");
console.log("Index of Cherry: " + index);

// find if an element exists
let hasApple = fruits.includes("Apple");
console.log("Does fruits array include Apple? " + hasApple);

// 5. Looping through Arrays
console.log("Looping through Fruits Array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Loop using for...of
console.log("Looping through Numbers Array using for...of:");
for (let number of numbers) {
    console.log(number);
}
// Loop using forEach method
console.log("Looping through Mixed Array using forEach:");
mixedArray.forEach(function (item, index) {
    console.log("Index " + index + ": " + item);
});

// 6. Multidimensional Arrays. Create 2X2 array (matrix)

let matrix = [
    [1, 2],
    [3, 4]
];
console.log("2x2 Matrix:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log("Element at (" + i + "," + j + "): " + matrix[i][j]);
    }
}
// 7. Array Methods: map, filter, reduce
let squaredNumbers = numbers.map(function (num) {
    return num * num;
});
console.log("Squared Numbers: " + squaredNumbers);
let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log("Even Numbers: " + evenNumbers);
let sumOfNumbers = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("Sum of Numbers: " + sumOfNumbers);

// 8. Converting Arrays to Strings and vice versa
let fruitsString = fruits.join(", ");
console.log("Fruits as String: " + fruitsString);
let newFruitsArray = fruitsString.split(", ");
console.log("New Fruits Array from String: " + newFruitsArray);

// 9. Sorting and Reversing Arrays
let unsortedNumbers = [5, 2, 9, 1, 5, 6];
console.log("Unsorted Numbers: " + unsortedNumbers);
unsortedNumbers.sort(function (a, b) {
    return a - b;
});
console.log("Sorted Numbers: " + unsortedNumbers);
unsortedNumbers.reverse();
console.log("Reversed Sorted Numbers: " + unsortedNumbers);

// 10. Finding Max and Min in an Array
let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);
console.log("Max Number: " + maxNumber);
console.log("Min Number: " + minNumber);

// assigning array values to variables using destructuring
let [fruit1, fruit2, fruit3] = fruits;
console.log("Destructured Fruits: " + fruit1 + ", " + fruit2 + ", " + fruit3);

// Sort the values of below array in ascending order without use sort function
let students=["Anushka", "Pravardhan", "Abhi", "Aryaman", "SaiTeja", "Sathvik", "Abdul", "Ranadeep", "Sahith"];
for (let i = 0; i < students.length - 1; i++) {
    for (let j = 0; j < students.length - i - 1; j++) {
        if (students[j] > students[j + 1]) {
            // Swap
            let temp = students[j];
            students[j] = students[j + 1];
            students[j + 1] = temp;
        }
    }
}
console.log("Sorted Students Array: " + students);

// Sort the values of below array in ascending order without using sort
//  Use array methods like unshift, pop etc to move values
// Do not use other array or temporary variable to hold values

let cities=["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"];
for (let i = 0; i < cities.length - 1; i++) {
    for (let j = 0; j < cities.length - i - 1; j++) {
        if (cities[j] > cities[j + 1]) {
            // Swap using array methods
            let firstCity = cities[j];
            let secondCity = cities[j + 1];
            cities.splice(j, 2); // Remove both cities
            cities.splice(j, 0, secondCity, firstCity); // Add them back in swapped order
        }
    }
}
console.log("Sorted Cities Array: " + cities);