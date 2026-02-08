// Introduction to typescript 
// What is typescript ?
// Typescript is a superset of javascript which adds static typing to the language.
// It is developed and maintained by Microsoft.
// Typescript code is transpiled to javascript code using the typescript compiler (tsc).
// Typescript files have a .ts extension.

// To run typescript code, we need to install typescript compiler globally using npm.
// npm install -g typescript
// To compile typescript code to javascript, we use the command tsc <filename>.ts
// This will generate a javascript file with the same name as the typescript file.
// To run the generated javascript file, we use the command node <filename>.js

// We can run typescript code directly using ts-node.
// To install ts-node, we use the command npm install -g ts-node
// To run typescript code using ts-node, we use the command ts-node <filename>.ts
// the latest feature is node can directly run typescript files without the need of ts-node
// To run typescript code directly using node, we use the command node <filename>.ts
// Note: To run typescript code directly using node, we need to set "type": "module" in package.json file.

// uses of typescript
// 1. Static typing: Typescript adds static typing to javascript, which helps catch errors at compile time.
// 2. Better tooling: Typescript provides better tooling support, including autocomplete and refactoring.
// 3. Code quality: Typescript helps improve code quality by providing better error messages and type checking.
// 4. Scalability: Typescript is great for large applications, as it helps manage complexity and maintainability.

// Basic types in typescript
// 1. number: represents both integer and floating point numbers.
let num: number = 10;
let floatNum: number = 10.5;
// 2. string: represents a sequence of characters.
let str: string = "Hello, Typescript!";
// 3. boolean: represents a logical value, either true or false.
let bool: boolean = true;
// 4. array: represents a collection of values of the same type.
let arr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ["Hello", "World"];
// 5. tuple: represents a fixed-size collection of values of different types.
let tuple: [string, number] = ["Hello", 10];
// 6. enum: represents a collection of related values.
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
// 7. any: represents any type of value.
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
// 8. void: represents the absence of a value.
function logMessage(): void {
    console.log("This is a message");
}
logMessage();
// 9. null and undefined: represent the absence of a value.
let n: null = null;
let u: undefined = undefined;
// 10. never: represents a value that never occurs.
function throwError(message: string): never {   
    throw new Error(message);
}
// throwError("This is an error");

// Interfaces in typescript
interface Person {
    name: string;
    age: number;
    greet(): void;
}
let person1: Person = {
    name: "John",
    age: 30,
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};
person1.greet();

// Classes in typescript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }   
    speak(): void {
        console.log(this.name + " makes a noise.");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }   
    speak(): void {
        console.log(this.name + " barks.");
    }
}
let dog = new Dog("Rex");
dog.speak();
let animal = new Animal("Generic Animal");
animal.speak();
// Generics in typescript
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("Hello, Generics!");
let output2 = identity<number>(10);
console.log(output1);
console.log(output2);
// Modules in typescript
// In typescript, we can use the import and export keywords to create modules.
// This is demonstrated in other files in this project.
// import { add, subtract } from './mathUtils.js';
// console.log("Addition: " + add(5, 3));
// console.log("Subtraction: " + subtract(5, 3));
// This concludes the basic introduction to typescript.

// Javascript in ts files
// Since typescript is a superset of javascript, all javascript code is valid typescript code.
// Here are some examples of javascript code in typescript files.
// Variable declaration using var, let, and const
var x = 10;
let y = 20;
const z = 30;
console.log(x, y, z);
// Functions
function add(a: number, b: number): number {
    return a + b;
}
console.log("Sum: " + add(5, 10));
// Arrow functions
const multiply = (a: number, b: number): number => {
    return a * b;
};
console.log("Product: " + multiply(5, 10));
// Objects
const person = {
    name: "John",
    age: 30,
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet();
// Arrays
const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers: " + numbers.join(", "));


// Difference between typescript and javascript
// 1. Static typing: Typescript has static typing, while javascript is dynamically typed.
// 2. Compilation: Typescript code needs to be compiled to javascript, while javascript code can be run directly.
// 3. Interfaces and types: Typescript has interfaces and types, while javascript does not.
// 4. Advanced features: Typescript has advanced features like generics, enums, and decorators, which are not available in javascript.
// 5. Tooling: Typescript provides better tooling support, including autocomplete and refactoring, compared to javascript.
// 6. Error checking: Typescript provides better error checking at compile time, while javascript errors are caught at runtime.
// 7. Code maintainability: Typescript helps improve code maintainability, especially in large applications, compared to javascript.
// Overall, typescript is a more robust and scalable language compared to javascript, especially for large applications.
// However, javascript is more flexible and easier to use for small scripts and quick prototyping.
// Conclusion
// Typescript is a powerful superset of javascript that adds static typing and advanced features to the language.
// It helps improve code quality, maintainability, and scalability, especially for large applications.
// However, it requires a compilation step and has a steeper learning curve compared to javascript.
// Depending on the project requirements, developers can choose between typescript and javascript based on their needs.

