// Exception Handling in JavaScript
// Exception handling is a mechanism to handle runtime errors in a controlled manner, allowing the program to continue executing or fail gracefully.
// JavaScript provides the try, catch, finally, throw, and custom error objects for exception handling.

// try block contains the code that may throw an exception.
// catch block contains the code that handles the exception.
// finally block contains the code that will always execute, regardless of whether an exception was thrown or not.
// throw statement is used to create custom errors.

// types errors in JavaScript
// 1. SyntaxError: Occurs when there is a syntax mistake in the code.
// 2. ReferenceError: Occurs when a non-existent variable is referenced.
// 3. TypeError: Occurs when a value is not of the expected type.
// 4. RangeError: Occurs when a number is outside the allowable range.
// 5. EvalError: Occurs when there is an error in the eval() function.
// 6. URIError: Occurs when there is an error in encodeURI() or decodeURI() functions.
// 7. Custom Errors: User-defined errors created using the Error constructor.

// Example of try-catch-finally
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("Execution completed.");
    }
}

divide(10, 0); // This will throw an error
divide(10, 2); // This will execute successfully
// Example of custom error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateAge(age) {
    if (age < 0 || age > 120) {
        throw new ValidationError("Age must be between 0 and 120.");
    }
    console.log("Valid age:", age);
}
try {
    validateAge(150); // This will throw a ValidationError
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation Error: ${error.message}`);
    } else {
        console.error(`Error: ${error.message}`);
    }
}
validateAge(25); // This will execute successfully
// This code demonstrates exception handling in JavaScript using try, catch, finally, throw, and custom error objects.
