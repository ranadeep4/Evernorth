// Modules in JavaScript

// Exporting a function
export function greet(name) {
    return `Hello, ${name}!`;
}

// Exporting a constant
export const PI = 3.14159;
// Exporting a class
export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return PI * this.radius * this.radius;
    }
}

// Exporting a variable
export let counter = 0;
export function incrementCounter() {
    counter++;
}
// Exporting multiple items
export { greet as sayHello, Circle as ShapeCircle };
// Default export
export default function farewell(name) {
    return `Goodbye, ${name}!`;
}
// Named export of an object
export const mathConstants = {
    E: 2.71828,
    GOLDEN_RATIO: 1.61803
};
// Exporting an async function
export async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

// multi export example
// export { PI, Circle, incrementCounter, counter };