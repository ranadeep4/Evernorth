//Conditions and Switch Statements

// Print a number is odd or even
let number = 7;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Find the largest of three numbers
let num1 = 10;
let num2 = 25;
let num3 = 15;

if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else if (num3 >= num1 && num3 >= num2) {
    console.log("The largest number is: " + num3);
} else if (num1 === num2 && num1 === num3) {
    console.log("All three numbers are equal.");
}

//find big number between two numbers using if else
let a = 45;
let b = 30;
if (a > b) {
    console.log(a + " is greater than " + b);
} else if (a < b) {
    console.log(b + " is greater than " + a);
} else {
    console.log("Both numbers are equal.");
}

// find bug number using ternary operator
// sytax: var result = condition ? expr1 : expr2
let x = 20;
let y = 20;
let result = (x > y) ? x : (x < y) ? y : "Both numbers are equal";
console.log("The bigger number is: " + result);

// Switch statement to print day of the week
let dayNumber = 3;
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log("The day is: " + dayName);

//Difference between if-else and switch
// 1. The if-else statement is used for conditional branching based on boolean expressions, while the switch statement is used for selecting one of many possible values based on a single expression.
// 2. The if-else statement can handle a wide range of conditions, including complex expressions, while the switch statement is limited to discrete values (like integers, strings, or enums).
// 3. The switch statement can be more efficient and easier to read when dealing with multiple discrete values compared to multiple if-else statements.
// 4. The if-else statement allows for more flexibility in conditions, while the switch statement requires exact matches for case values.
// 5. The switch statement uses strict comparison (===) for case values, while the if-else statement can use any comparison operators.