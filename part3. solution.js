// Q1. Write a function called "addNumAers" thats takes two numAers as arguments and returns their sum. call the
// function before it is declared to demonstrate hoisting.

// console.log(addNumbers(5, 10));
// function addNumbers(num1, num2){
//     return num1 + num2;
// }
// Output = 15


// Q2 Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their CSSMathProduct.
// Use function expession to define the function and call the function before it is declared to demostrate hosting.


// console.log(multiplyNumbers(3, 4));
// const multiplyNumbers = function (num1, num2) {
//     return num1*num2;
// };


// 03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
// the function using the var keyword and log its value to the console before it is assigned a value to
// demonstrate variable hoisting.


// function addNumbers(num1, num2) {
//     console.log(sum);
//     var sum;
//     sum = num1 + num2;
//     return sum;
// }
// console.log(addNumbers(5, 10));


// 03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
// the function using the var keyword and log its value to the console before it is assigned a value to
// demonstrate variable hoisting.


// function addNumbers(num1, num2) {
//     console.log(sum);
//     var sum;
//     sum = num1 + num2;
//     return sum;
// }
// console.log(addNumbers(5, 10));


// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.

// {console.log(x);
// console.log(y);
// console.log(z);
// var x = "PW";
// let y = "skills";
// const z = "!";

// console.log(x);
// console.log(y);
// console.log(z);}



// 05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
// assigned a value to demonstrate the temporal dead zone.

{
    // console.log(x);
    let x = "hello";
    console.log(x);
}