//Loops

//For Loop

//print number 10 for 5 times
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// print odd numbers from 1 to 20 without using if condition
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
// print multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}
// print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// While Loop

// write a while loop for waiting for a bus
let busArrived = false;
let waiting = 0;
while (!busArrived) {
    console.log("Waiting for the bus... " + waiting + " minutes");
    waiting++;
    if (waiting === 5) {
        busArrived = true;
        console.log("The bus has arrived!");
    }
}
// Do loop

do {
    console.log("This will print at least once.");
} while (false);

//difference between do loop and while loop
// A do loop executes the code block at least once before checking the condition, while a while loop checks the condition first and may not execute the code block at all if the condition is false initially.
