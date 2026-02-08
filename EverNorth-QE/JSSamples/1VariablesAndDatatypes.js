//variables and datatypes in JavaScript

//Declaring variables is optional in JavaScript
// But it is a good practice to declare them using let, const, or var keywords.
// if you don't declare a variable, it becomes a global variable.
// "use strict"; can be used to enforce variable declaration.
// "use strict"; is a directive that helps catch common coding mistakes and "unsafe" actions such as defining global variables unintentionally.
// It is recommended to use "use strict"; at the beginning of your JavaScript files or functions.
// the disadvantages of "use strict"
// 1. It can make your code incompatible with older browsers that do not support it.
// 2. It can cause errors in code that relies on certain JavaScript features that are restricted in strict mode.
// 3. It may require more careful coding practices, which can slow down development for beginners.
// 4. Some third-party libraries may not be compatible with strict mode, leading to potential integration issues.
// Overall, the advantages of using "use strict"; generally outweigh the disadvantages, especially for larger and more complex codebases.

"use strict";
// Declaring variables
let name = "John"; // string
const age = 30; // number
isStudent = false; // boolean

// Data types in JavaScript
// 1. Primitive data types
let str = "Hello, World!"; // string
let num = 42; // number
let bool = true; // boolean
let undef; // undefined
let nul = null; // null
let sym = Symbol("unique"); // symbol
let bigIntNum = 9007199254740991n; // BigInt must be declared with 'n' at the end

// 2. Non-primitive data types
let arr = [1, 2, 3, 4, 5]; // array
let obj = { firstName: "John", lastName: "Doe" }; // object
function greet() {
  console.log("Hello!");
} // function

// Checking data types
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof undef); // undefined
console.log(typeof nul); // object (this is a known quirk in JavaScript)
console.log(typeof sym); // symbol
console.log(typeof bigIntNum); // bigint
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof greet); // function

// Type coercion
let result1 = "5" + 10; // "510" (string), + operator concatenates when one operand is a string
let result2 = "5" - 2; // 3 (number), - operator converts string to number
let result3 = "5" * "2"; // 10 (number), * operator converts strings to numbers
let result4 = "10" / 2; // 5 (number), / operator converts string to number
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// Conversion between data types
let strToNum = Number("123"); // converts string to number
let numToStr = String(456); // converts number to string
let boolToStr = String(true); // converts boolean to string
let numToBool = Boolean(1); // converts number to boolean (1 is true, 0 is false)
let strToBool = Boolean(""); // converts string to boolean (empty string is false, non-empty is true)
console.log(strToNum);
console.log(numToStr);
console.log(boolToStr);

// End of Variables and Data types in JavaScript