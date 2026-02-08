// Operators in JavaScript
// Operators are special symbols or keywords that perform operations on operands (values or variables).

// 1. Arithmetic Operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0
console.log("Exponentiation: " + (a ** b)); // 100000 (10^5)

// 2. Assignment Operators
let c = 10;
c += 5; // equivalent to c = c + 5
console.log("Addition Assignment: " + c); // 15
c -= 3; // equivalent to c = c - 3
console.log("Subtraction Assignment: " + c); // 12
c *= 2; // equivalent to c = c * 2
console.log("Multiplication Assignment: " + c); // 24
c /= 4; // equivalent to c = c / 4
console.log("Division Assignment: " + c); // 6
c %= 4; // equivalent to c = c % 4
console.log("Modulus Assignment: " + c); // 2
c **= 3; // equivalent to c = c ** 3
console.log("Exponentiation Assignment: " + c); // 8
// 3. Comparison Operators
let x = 10;
let y = "10";
console.log("Comparison Operators:");
console.log("Equal (==): " + (x == y)); // true (compares value)
console.log("Strict Equal (===): " + (x === y)); // false (compares value and type)
console.log("Not Equal (!=): " + (x != y)); // false
console.log("Strict Not Equal (!==): " + (x !== y)); // true
console.log("Greater Than (>): " + (x > 5)); // true
console.log("Less Than (<): " + (x < 15)); // true
console.log("Greater Than or Equal (>=): " + (x >= 10)); // true
console.log("Less Than or Equal (<=): " + (x <= 20)); // true
// 4. Logical Operators
let p = true;
let q = false;
console.log("Logical Operators:");
console.log("AND (&&): " + (p && q)); // false
console.log("OR (||): " + (p || q)); // true
console.log("NOT (!): " + !p); // false

// 5. Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Ternary Operator: Can vote? " + canVote); // Yes
// 6. Typeof Operator
console.log("Typeof Operator:");
console.log("Type of a: " + typeof a); // number
console.log("Type of p: " + typeof p); // boolean
console.log("Type of canVote: " + typeof canVote); // string

// End of Operators in JavaScript
