// Reuse Module

//update type to module in package.json to use ES6 modules
//before we use commonjs syntax
// import { greet } = require('./Module1.js');
// Now using ES6 module syntax
// Importing the greet function from Module1.js

// ES6 module import syntax
// Note the file extension is required in ES6 modules
// For Node.js, set "type": "module" in package.json
// or use .mjs file extension
// Example of importing a named export

import { greet} from './Module1.js';

// Using the imported function
const message = greet('World');
console.log(message); // Output: Hello, World!

// Importing multiple named exports
import { PI, Circle, incrementCounter, counter } from './Module1.js';
console.log(`Value of PI: ${PI}`); // Output: Value of PI: 3.14159
const myCircle = new Circle(5);
console.log(`Area of circle: ${myCircle.area()}`); // Output: Area of circle: 78.53975
incrementCounter();
console.log(`Counter value: ${counter}`); // Output: Counter value: 1

// Importing the default export
import farewell from './Module1.js';
const goodbyeMessage = farewell('World');
console.log(goodbyeMessage); // Output: Goodbye, World!

// Importing all exports as an object
import * as Module1 from './Module1.js';
console.log(Module1.mathConstants); // Output: { E: 2.71828, GOLDEN_RATIO: 1.61803 }    

// difference between commonjs and ES6 modules
// CommonJS uses require() and module.exports
// ES6 modules use import and export keywords
// ES6 modules are statically analyzable, allowing for better optimization
// ES6 modules support asynchronous loading, while CommonJS is synchronous

// difference between named and default exports
// Named exports allow multiple exports per module and must be imported with the same name
// Default exports allow a single export per module and can be imported with any name

// Example of named export import
import { fetchData } from './Module1.js';
fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));