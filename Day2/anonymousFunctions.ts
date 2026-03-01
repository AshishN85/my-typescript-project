// Anonymous functions are functions that do not have a name or unnamed or nameless functions. 
    // They are often used as arguments to other functions 
    // or as immediately invoked function expressions (IIFEs).
    // Instead, they are assigned to a variable which acts as a reference or name of the function.

/* Syntax:-
// Declaring a anonymous function
let variable = function(parameters) : returnType {
    // function body
    return value; // optional
}

// Calling or invoking a anonymous function
variable(parameters);
*/

// Example of an anonymous function assigned to a variable
let greet = function() : void {
    console.log("Hello, Ashish!");
};
greet(); // Output: Hello, Ashish!

console.log("-----------------------------------")

// Example of an anonymous function used as an argument to another function
function performOperation(operation: () => void) {
    operation();
}
performOperation(function() {
    console.log("Performing an operation...");
}); // Output: Performing an operation...

// Example of an immediately invoked function expression (IIFE)
(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!

console.log("-----------------------------------")

let msg = function () : string {
    return "Hello, World!";
}
console.log(msg()); // Output: Hello, World!

// Example of an anonymous function with parameters and return type
let multiply = function (a: number, b: number) : number {
    return a * b;
}   
console.log(multiply(5, 3)); // Output: 15

console.log("-----------------------------------")
