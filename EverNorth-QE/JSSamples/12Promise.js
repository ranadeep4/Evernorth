// Promises in JavaScript
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promises provide a cleaner and more manageable way to handle asynchronous operations compared to traditional callbacks, helping to avoid "callback hell".
// Promises can be in one of three states: pending, fulfilled, or rejected.

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// Promises are widely used in modern JavaScript development, especially in scenarios involving API calls, file operations, and other asynchronous tasks.
// They help improve code clarity and error handling compared to traditional callback-based approaches.

// syntax of creating a Promise
// let promise = new Promise(function(resolve, reject) {
//     // asynchronous operation
//     if (/* operation successful */) {
//         resolve(result); // fulfilled
//     } else {
//         reject(error); // rejected
//     }
// });
// syntax of consuming a Promise
// promise.then(function(result) {
//     // handle fulfilled state
// }).catch(function(error) {
//     // handle rejected state
// });

// Example of using Promises to simulate fetching user data from a server

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { id: 1, name: "John Doe", age: 25 }; // Simulated fetched data
            console.log("User Data Fetched:", userData);
            let result = true; // Simulate success or failure
            if (result) {
                resolve(userData);
            } else {
                reject(new Error("Failed to fetch user data"));
            }
        }, 3000);
    });
}

function updateUserData(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userData.age += 1; // Simulated update
            console.log("User Data Updated:", userData);
            resolve(userData);
        }, 5000);
    });
}

fetchUserData()
    .then((userData) => {
        return updateUserData(userData);
    })
    .then((updatedData) => {
        console.log("Final User Data:", updatedData);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// In this example, fetchUserData returns a Promise that simulates an asynchronous data fetch operation.
// Once the data is fetched, the Promise is resolved, and the then() method is called to handle the fulfilled state.
// The updateUserData function is then called, which also returns a Promise.
// Finally, the updated user data is logged to the console.
// If any error occurs during the process, the catch() method handles the rejected state.

// Async and Await
// Async/Await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous-looking manner.
// The async keyword is used to declare an asynchronous function, which returns a Promise.
// The await keyword is used to pause the execution of the async function until the Promise is resolved or rejected.

// Example of using Async/Await to fetch and update user data

// create async function and call promises inside it using await to handle them synchronously
// await works only inside async function
// await pauses the execution of the async function until the Promise is resolved or rejected
// await must be used before a call to a function that returns a Promise
// if the Promise is resolved, await returns the resolved value
// if the Promise is rejected, await throws the rejected value, catch it using try/catch block

async function processUserData() {
    try {
        const userData = await fetchUserData();
        const updatedData = await updateUserData(userData);
        console.log("Final User Data with Async/Await:", updatedData);
    } catch (error) {
        console.error("Error with Async/Await:", error);
    }
}

processUserData();

// The test automation tools like selenium, playwright have already implemented async/await to handle asynchronous operations like page loading, element interaction, etc.
// we dont need create promises to make them work asynchronously.
// we just need to use async/await keywords to handle those operations synchronously in our test scripts.
// when a promise is called in a function, by default the function returns a promise with undefined
// to get the resolved value of the promise, we need to use await keyword before calling the promise inside an async function
