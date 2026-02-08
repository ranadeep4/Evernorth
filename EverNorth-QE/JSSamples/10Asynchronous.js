// Asynchronous JavaScript
// Asynchronous programming allows JavaScript to perform tasks to asynchronously, meaning it can continue executing other code while waiting for certain operations to complete (like fetching data from a server).
// This is typically done using callbacks, promises, or async/await syntax.

//how it works

setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("This message is displayed after 3 seconds");
}, 3000);

setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);


setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
    setTimeout(() => {
        console.log("This message is displayed after 3 seconds");
        setTimeout(() => {
            console.log("This message is displayed after 1 seconds");
        }, 1000);
    }, 3000);
}, 2000);

// In the above example, the messages will be displayed after their respective delays without blocking the execution of other code.
// This allows for a more responsive user experience, as the main thread is not blocked while waiting for these operations to complete.
// Asynchronous operations are essential for tasks like data fetching, file reading, and timers, where waiting for the operation to complete would otherwise block the execution of other code.

