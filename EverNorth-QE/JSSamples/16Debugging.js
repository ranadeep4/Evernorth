// Debugging in JavaScript using VSCode
// 1. Setting up breakpoints
// You can set breakpoints in your JavaScript code by clicking on the left margin next to the line numbers in VSCode.
// A red dot will appear indicating a breakpoint is set. When you run the debugger, execution will pause at these points.
// 2. Running the Debugger
// To start debugging, go to the Run and Debug view in VSCode (Ctrl+Shift+D) and click on the green play button.
// You can also press F5 to start debugging. Make sure you have a launch configuration set up if needed.
// 3. Using the Debug Console
// The Debug Console allows you to evaluate expressions and execute JavaScript code while debugging.
// You can access it from the Debug view or by pressing Ctrl+Shift+Y.
// 4. Inspecting Variables
// When the debugger is paused, you can hover over variables to see their current values.
// You can also view all local and global variables in the VARIABLES section of the Debug view.
// 5. Step Through Code
// You can step through your code line by line using the following commands:
// F10 - Step Over: Executes the next line of code without stepping into functions.
// F11 - Step Into: Steps into the next function call.
// Shift+F11 - Step Out: Steps out of the current function.
// 6. Call Stack
// The CALL STACK section in the Debug view shows the current execution context.
// You can click on any stack frame to navigate to that point in the code.
// 7. Watch Expressions
// You can add expressions to the WATCH section in the Debug view to monitor their values as you step through the code.
// Right-click in the WATCH section and select "Add Expression" to add a new watch.
// 8. Conditional Breakpoints
// You can set conditional breakpoints that only pause execution when a specific condition is met.
// Right-click on a breakpoint and select "Edit Breakpoint" to add a condition.
// 9. Logpoints
// Logpoints allow you to log messages to the Debug Console without pausing execution.
// Right-click on a line number and select "Add Logpoint" to create one.
// 10. Debugging Node.js Applications
// If you're debugging a Node.js application, make sure to select the appropriate launch configuration for Node.js in the Run and Debug view.
// This code provides an overview of debugging techniques in JavaScript using VSCode.

// // Example code to demonstrate debugging
// function factorial(n) {
//     if (n < 0) {
//         throw new Error("Negative numbers are not allowed.");
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log("Factorial of 5: ", factorial(5)); // Expected output: 120
// console.log("Factorial of -1: ", factorial(-1)); // This will throw an error
// You can set breakpoints on the lines above to debug the factorial function.

// Example of debugging a simple loop
for (let i = 0; i < 5; i++) {
    console.log("Current value of i: ", i);
}
// Set breakpoints inside the loop to inspect the value of 'i' during each iteration.
// Example of debugging with try-catch
try {
    let result = factorial(10); 
    console.log("Factorial of 10: ", result);
} catch (error) {
    console.error("Error occurred: ", error.message);
}
// You can set a breakpoint inside the catch block to handle errors during debugging.
// This code demonstrates various debugging techniques in JavaScript using VSCode.
// 9. Inheritance, Getters, and Setters
// Inheritance allows a class to inherit properties and methods from another class.
// Getters and setters are special methods that allow controlled access to object properties.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   
    get info() {
        return `${this.name}, ${this.age} years old`;
    }   
    set info(value) {
        const parts = value.split(", ");
        this.name = parts[0];
        this.age = parseInt(parts[1]);
    }   
}

const person = new Person("John", 30);
console.log(person.info); // Output: John, 30 years old
person.info = "Jane, 25";   
console.log(person.info); // Output: Jane, 25 years old
// This code demonstrates inheritance, getters, and setters in JavaScript classes.
// You can set breakpoints in the class methods to debug the behavior of getters and setters.
class Employee extends Person { 
    constructor(name, age, position) {
        super(name, age); // call the parent class constructor
        this.position = position;
    }   
    getDetails() {
        return `${this.name}, Age: ${this.age}, Position: ${this.position}`;
    }
}
const emp = new Employee("Alice", 28, "Developer");
console.log(emp.getDetails()); // Output: Alice, Age: 28, Position: Developer
// You can debug the Employee class and its methods similarly by setting breakpoints.