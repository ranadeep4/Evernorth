// What is javascript object?
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// Objects are used to store multiple values in a single variable.

"use strict";
// 1. Creating Objects
let person = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};
console.log("Person Object: ", person);

// 2. Accessing Object Properties
console.log("Name: " + person.name);
console.log("Age: " + person["age"]);

// 3. Modifying Object Properties
person.age = 26;
person["city"] = "New Wonderland";
console.log("Modified Person Object: ", person);

// Adding new property
person.country = "Fantasy Land";
console.log("Person Object after adding country: ", person);
// Deleting a property
delete person.city;
console.log("Person Object after deleting city: ", person);

// Storing different data types in object
let mixedObject = {
    stringProp: "Hello",
    numberProp: 42,
    booleanProp: true,
    nullProp: null,
    undefinedProp: undefined
};
console.log("Mixed Object: ", mixedObject);

// object with array property
let objWithArray = {
    name: "Bob",
    hobbies: ["Reading", "Traveling", "Gaming"]
};
console.log("Object with Array Property: ", objWithArray);
console.log("Bob's Hobbies: ", objWithArray.hobbies);

// store an object inside another object
let nestedObject = {
    company: "Tech Corp",
    address: {
        street: "123 Tech Lane",
        city: "Innovation City",
        zip: "45678"
    }
};
console.log("Nested Object: ", nestedObject);
console.log("Company Address: ", nestedObject.address);

// covert string to JSON and vice versa

let jsonString = '{"name":"Charlie","age":30,"city":"Metropolis"}';
let parsedObject = JSON.parse(jsonString); // convert JSON string to object
console.log("Parsed Object from JSON String: ", parsedObject);
let jsonStringified = JSON.stringify(person); // convert object to JSON string
console.log("Stringified Person Object to JSON String: ", jsonStringified);

// 4. Looping through Object Properties
console.log("Looping through Person Object Properties:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Using Object.keys() to get an array of keys
let keys = Object.keys(person);
console.log("Keys of Person Object: ", keys);
// Using Object.values() to get an array of values
let values = Object.values(person);
console.log("Values of Person Object: ", values);
// Using Object.entries() to get an array of [key, value] pairs
let entries = Object.entries(person);
console.log("Entries of Person Object: ", entries);

// 5. Object Methods
// use: methods are functions defined inside an object
// we can define methods to perform actions related to the object.
let calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};
console.log("Addition: ", calculator.add(5, 3));
console.log("Subtraction: ", calculator.subtract(10, 4));

// Using 'this' keyword in object method
// 'this' refers to the current object.
// we can use 'this' to access other properties of the same object.
let rectangle = {
    width: 10,
    height: 5,
    area: function () {
        return this.width * this.height;
    }
};
console.log("Area of Rectangle: ", rectangle.area());
// 6. Object Constructor
// A constructor is a special function used to create and initialize objects.
// We can define a constructor function and use the 'new' keyword to create instances of the object.
// We can use 'this' to set properties for the new object.
// we can create multiple instances of the same object type using the constructor.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
let myCar = new Car("Toyota", "Corolla", 2020);
console.log("Car Object: ", myCar);

// 7. Object Prototypes
// Prototypes allow us to add properties and methods to constructor functions.
// All instances created from the constructor will inherit these properties and methods.
// its like extending the functionality of the object type.
// prototype methods are shared among all instances, so they cannot have instance-specific data.

Car.prototype.getDetails = function () {
    return this.year + " " + this.make + " " + this.model;
};
console.log("Car Details: ", myCar.getDetails());

// This code demonstrates the creation and manipulation of JavaScript objects, including accessing and modifying properties, looping through properties, using methods, constructors, and prototypes.