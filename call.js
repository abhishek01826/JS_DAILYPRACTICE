// Question 3 — call()
// function introduce() {
// console.log(this.name);
// }
// const person= {
// name:"Ritik"
// };
// Print:
// Ritik

// using call() .
// Scenario
// You want to borrow a function for another object.
// What is this question asking?
// Manually decide what this should be.
// Concepts Tested
// call()

function introduce() {
console.log(this.name);
}
const person= {
name:"Ritik"
};

introduce.call(person)