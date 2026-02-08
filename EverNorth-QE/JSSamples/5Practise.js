// Practice Assignments

// Write code to find a number is prime or not
let number = 29;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
}
for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
// write code to find factorial of a number
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial of " + num + " is " + factorial);

// write code to find factors of a number
let n = 28;
console.log("Factors of " + n + " are:");
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}
// Write code to generate Fibonacci series up to n terms
let terms = 10;
let fib1 = 0, fib2 = 1;
console.log("Fibonacci series up to " + terms + " terms:");
for (let i = 1; i <= terms; i++) {
    console.log(fib1);
    let nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib;
}
// Write code to check if a string is a palindrome
let str = "racecar";
let reversedStr = str.split('').reverse().join('');
if (str === reversedStr) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}
// Write code to find the sum of digits of a number
let numberToSum = 12345;
let sum = 0;
while (numberToSum > 0) {
    sum += numberToSum % 10;
    numberToSum = Math.floor(numberToSum / 10);
}
console.log("Sum of digits is: " + sum);

// Write code to find the GCD of two numbers
let a = 56;
let b = 98;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log("GCD is: " + a);
// Write code to find the LCM of two numbers
let x = 12;
let y = 15;
let gcd = (function(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
})(x, y);
let lcm = (x * y) / gcd;
console.log("LCM is: " + lcm);

// Write code to reverse a string
let originalStr = "Hello, World!";
let reversedString = originalStr.split('').reverse().join('');
console.log("Reversed string is: " + reversedString);

// give minimal change for indian currency 
let amount = 9876;
let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

let change = {};

for (let denom of denominations) {
        amount -= denom;
        change[denom] = (change[denom] || 0) + 1;
}
console.log("Minimal change for " + (amount + Object.values(change).reduce((a, b) => a + b, 0)) + " is: " + JSON.stringify(change));