// Callbacks in JavaScript
// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used in asynchronous programming to ensure that certain code doesn't execute until an operation has finished.
// Callbacks are fundamental to JavaScript's asynchronous programming model, enabling non-blocking operations and enhancing user experience.

// Example of a simple callback function
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Alice", sayGoodbye);

// Example of using a callback with an asynchronous operation
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("This message is displayed after 3 seconds");
}, 3000);
setTimeout(() => {
    console.log("This message is displayed after 1 second");
}, 1000);

// Nested callbacks (callback hell) example
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
    setTimeout(() => {
        console.log("This message is displayed after 3 seconds");
        setTimeout(() => {
            console.log("This message is displayed after 1 second");
        }, 1000);
    }, 3000);
}, 2000);

// While callbacks are powerful, they can lead to "callback hell" when dealing with multiple nested asynchronous operations.
// To mitigate this, modern JavaScript often uses Promises or async/await syntax for better readability and maintainability.

// Call backs, Promises, and async/await are different ways to handle asynchronous operations in JavaScript.

// Callback example for calculator
function calculate(x, y, cb) {
    return cb(x, y);
}
function add(a, b) {
    return a + b;
}

// Using named function as callback
console.log("Calculate Add: " + calculate(10, 5, add)); // 15
// Using anonymous function as callback
console.log("Calculate Multiply: " + calculate(10, 5, function (a, b) { return a * b; })); // 50
// Using arrow function as callback
console.log("Calculate Subtract: " + calculate(10, 5, (a, b) => a - b)); // 5


// write a callback function to fetch user data from server with setTimeout, write update user data function after fetching data, // and display user data after updating it.
// write all the functions to make it work synchronously using callbacks.
// Use arrow functions where ever possible.

function fetchUserData(callback) {
    setTimeout(() => {
        const userData = { id: 1, name: "John Doe", age: 25 }; // Simulated fetched data
        console.log("User Data Fetched:", userData);
        callback(userData);
    }, 3000);
}
function updateUserData(userData, callback) {
    setTimeout(() => {
        userData.age += 1; // Simulated update
        console.log("User Data Updated:", userData);
        callback(userData);
    }, 5000);
}

function displayUserData(userData) {
    console.log("Final User Data:", userData);
}

fetchUserData((userData) => {
    updateUserData(userData, (updatedData) => {
        displayUserData(updatedData);
    });
});
// In this example, fetchUserData simulates an asynchronous data fetch operation and calls the provided callback function once the data is ready.
// Then, updateUserData is called to update the fetched data, and finally, displayUserData is called to display the final updated data.
// Each operation waits for the previous one to complete before proceeding, ensuring synchronous behavior using callbacks.
// This approach, while effective, can lead to "callback hell" if there are many nested callbacks.

