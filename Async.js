// Question 2 — Simple Callback
// Create a function:
// greet(name)
// and another function:
// welcome(callback)
// that calls the callback with:
// "Ritik"

// Expected Output
// Hello Ritik

// Scenario
// A website welcomes users after login.
// What is this question asking?
// Pass a function into another function and execute it later.

// Concepts Tested
// Callbacks
// Functions as Arguments

function Greet(name) {
    //console.log(`hello ${name}`);

}
function welcome(callback) {
    const user = 'ritik'
    callback(user)
}
welcome(Greet);

// Question 3 — setTimeout with Arguments
// Create:
// function greet(name) {
// console.log(`Hello ${name}`);
// }
// Use setTimeout() to print:
// Hello Ritik
// after 2 seconds.

// Concepts Tested
// setTimeout
// Passing Arguments

function greet(name) {
    //console.log(`Hello ${name}`);
}
setTimeout(() => {
    greet("abhi")
}, 2000);

// Question 4 — Stop a Timer
// Create a timer:
// setTimeout(...)
// scheduled for 5 seconds.
// Cancel it before execution.

// Expected Output
// Nothing should print.

// Phase 5 Practice Questions 3

// Scenario
// User closes a popup before it appears.
// Concepts Tested
// clearTimeout()

let timer = setTimeout(() => {
    //console.log("5 sec baad chalao");

}, 5000);

clearTimeout(timer)

//🟡 Moderate Level (Q5 - Q8)

// Question 5 — Countdown Timer
// Create a countdown:
// 5
// 4
// 3
// 2
// 1
// Done
// using:
// setInterval()

// //Scenario
// OTP resend countdown.

// What is this question asking?
// Use repeated execution and stop it automatically when complete.
// Concepts Tested
// setInterval

let count = 5;
const timerId = setInterval(() => {
    //console.log(count);
    count--;
    if (count === 0) {
       // console.log("done");
        clearInterval(timerId);

    }
}, 1000)

// Question 6 — Fake API Call
// Create:
// fetchUser(callback)
// After 2 seconds return:
// {
// id:1,
// name:"Ritik"
// }
// using:
// setTimeout()
// Expected Output
// Fetching User...
// {id:1,name:"Ritik" }
// Scenario
// Simulate server response.
// Concepts Tested
// Callbacks
// Async Operations


function fetchUser(callback) {
    //console.log("Fetching user...");
setTimeout(() => {
    let user = {
        id: 1,
        name: "Ritik"
    };
    callback(user);
},2000);
}
fetchUser((user) => {
    //console.log(user);
    });

//     🔴 Hard Level (Q9 - Q12)

// Question 9 — Promise Chaining
// Create:
// addTen(num)
// which returns a Promise.
// Starting from:
// 0

// perform:
// +10
// +10
// +10

// using Promise chaining.
// Expected Output
// 10
// 20

// Phase 5 Practice Questions 7

// 30

// Scenario
// Processing data through multiple stages.
// What is this question asking?
// Understand how .then() chains work.

// Concepts Tested
// Promise Chaining
// then()

function addTen(num) {
    return new Promise((resolve, reject) => {
        resolve(num + 10);
    });
}

// Starting from 0
addTen(0)
    .then(result => {
        console.log(result); // 10
        return addTen(result);
    })
    .then(result => {
        console.log(result); // 20
        return addTen(result);
    })
    .then(result => {
        console.log(result); // 30
    })
    .catch(err => console.log(err));
