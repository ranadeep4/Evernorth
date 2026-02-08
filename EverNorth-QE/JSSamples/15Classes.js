// Classes in JavaScript
// Classes are a template for creating objects.
// They encapsulate data with code to work on that data.
// Classes in JavaScript are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
// 1. Defining a Class
class Person {
    constructor(name, age) {
        this.name = name; // instance variable
        this.age = age;   // instance variable
    }
    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// 2. Creating an Object
const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John and I am 30 years old.

// type of constructors in classes
// 1. Default Constructor
// A constructor that is automatically created if no constructor is defined in the class.

class Animal {
    // default constructor
}
// If no constructor is defined, a default constructor is used.

// 2. Parameterized Constructor
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
const myCar = new Car("Toyota", "Corolla");
console.log(`My car is a ${myCar.brand} ${myCar.model}.`); // Output: My car is a Toyota Corolla.

// A constructor that takes parameters to initialize object properties.

// 3. Private Fields
// Private fields are declared with a # prefix and are only accessible within the class.
class BankAccount {
    #balance; // private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(`My account balance is $${myAccount.getBalance()}.`); // Output: My account balance is $1500.
// console.log(myAccount.#balance); // Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class

// 4. Static Methods
// Static methods are called on the class itself, not on instances of the class.
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 10)); // Output: 15
// const mathUtilInstance = new MathUtil();
// console.log(mathUtilInstance.add(5, 10)); // Uncaught TypeError: mathUtilInstance.add is not a function

// static variables
class Counter {
    static count = 0; // static variable
    constructor() {
        Counter.count++;
    }
}

const c1 = new Counter();
const c2 = new Counter();
console.log(`Number of Counter instances: ${Counter.count}`); // Output: Number of Counter instances: 2

// Summary
// Classes in JavaScript provide a clear and concise way to create objects and manage their behavior.
// They support features like constructors, private fields, and static methods/variables to enhance encapsulation and functionality.

//Inheritance in classes
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
const myDog = new Dog();
myDog.speak(); // Output: Dog barks
// The Dog class inherits from the Animal class and overrides the speak method.

// super keyword
class Cat extends Animal {
    speak() {
        super.speak(); // Call the parent class method
        console.log("Cat meows");
    }
}
const myCat = new Cat();
myCat.speak();
// Output:
// Animal speaks
// Cat meows
// The super keyword is used to call methods from the parent class.
// Getters and Setters
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() { // when we access area property, this method is called
        return this.width * this.height;
    }
    set area(value) { // when we set area property, this method is called
        this.width = value / this.height;
    }
}

const rect = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${rect.area}`); // Output: Area of Rectangle: 50
rect.area = 100; // sets width to 20 (100 / 5)
console.log(`New width of Rectangle: ${rect.width}`); // Output: New width of Rectangle: 20 
// Getters and setters allow us to define how to access and modify properties of an object.
// Example of using classes with inheritance, getters, and setters.

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
console.log(emp instanceof Person); // Output: true
console.log(emp instanceof Employee); // Output: true
// The Employee class extends the Person class and adds a new property and method.
// The instanceof operator checks the inheritance relationship between objects and classes.
Car.prototype.getDetails = function () {
    return this.year + " " + this.make + " " + this.model;
}
console.log("Car Details: ", myCar.getDetails());

// Method overriding and overloading
class Parent {
    showMessage() {
        console.log("Message from Parent");
    }
}
class Child extends Parent {
    showMessage() { // overriding the method
        console.log("Message from Child");
    }
}
const child = new Child();
child.showMessage(); // Output: Message from Child
// Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass.
// JavaScript does not support method overloading directly, but we can achieve similar behavior using default parameters or rest parameters.
class Calculator {
    add(a, b, c = 0) { // c is optional
        return a + b + c;
    }
}
const calc = new Calculator();
console.log(calc.add(5, 10)); // Output: 15
console.log(calc.add(5, 10, 15)); // Output: 30

// The add method can be called with two or three arguments, simulating method overloading.
// 8. Class Static Blocks
// Static blocks allow for static initialization of class properties.
class Config {
    static settings;
    static {
        // complex initialization logic
        this.settings = {
            apiUrl: "https://api.example.com",
            timeout: 5000
        };
    }
}   
console.log("Config Settings: ", Config.settings);

// Static blocks are executed once when the class is defined, allowing for complex setup of static properties.
// They can be useful for initializing static data that requires more than simple assignment.
// 9. Class Fields
// Class fields allow us to define properties directly within the class body.
class User {
    role = "guest"; // public field
    #password; // private field
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    getPassword() {
        return this.#password;
    }
}
const user = new User("admin", "secret");
console.log(`Username: ${user.username}, Role: ${user.role}`); // Output: Username: admin, Role: guest
console.log(`Password: ${user.getPassword()}`); // Output: Password: secret
// Class fields provide a cleaner syntax for defining properties and support private fields for encapsulation.
// 10. Summary
// Classes in JavaScript provide a powerful way to create objects and manage their behavior.
// They support features like inheritance, encapsulation, and static properties/methods to enhance code organization and reusability.
// Understanding classes is essential for modern JavaScript development, especially in object-oriented programming paradigms.
// This code demonstrates the creation and manipulation of JavaScript classes, including inheritance, method overriding, static blocks, and class fields.
