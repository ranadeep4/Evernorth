// Async/Await in JavaScript
// Async/Await is a modern syntax for handling asynchronous operations in JavaScript, built on top of Promises.
// It allows you to write asynchronous code that looks and behaves like synchronous code, improving readability and maintainability.
// Example of using async/await to fetch user data from a database (simulated with setTimeout)
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

// calling promises without async/await for comparison
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

// Using async/await to handle the same operations
async function processUserData() {
    try {
        const userData = await fetchUserData();
        const updatedData = await updateUserData(userData);
        console.log("Final User Data:", updatedData);
    } catch (error) {
        console.error("Error:", error);
    }
}

processUserData();

// use IIFE with async/await
(async () => {
    try {
        const userData = await fetchUserData();
        const updatedData = await updateUserData(userData);
        console.log("Final User Data from IIFE:", updatedData);
    } catch (error) {
        console.error("Error in IIFE:", error);
    }
})();

// In this example, the processUserData function is declared as async, allowing the use of await within it.
// The await keyword pauses the execution of the function until the Promise is resolved, making it easier to read and understand the flow of asynchronous operations.
// Error handling is done using try/catch blocks, similar to synchronous code.