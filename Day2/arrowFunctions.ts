// Arrow functions or lambda functions are a more concise syntax for writing anonymous functions in TypeScript.
    // They are often used for short functions that are passed as arguments to other functions 
    // or for simple one-liner functions.
    // Arrow functions do not have their own 'this' context, 
    // which can be useful in certain situations, 
    // such as when working with callbacks or event handlers.

/*
There are 3 parts to lambda or arrow functions:
1. Parameters: The list of parameters that the function takes, enclosed in parentheses. 
   If there is only one parameter, the parentheses can be omitted.
2. Arrow: The '=>' symbol that separates the parameters from the function body.
3. Function Body: The code that defines what the function does. 
   If the function body is a single expression, 
   it can be written without curly braces and the expression will be returned implicitly. 

Note:- 1. Parameters => a function may optinally have parameters, 
                    but the arrow (=>) is mandatory to define an arrow function.
       2. The fat arrow notation or lambda notation "=>" is also called as "goes to" operator, 
       because it indicates that the parameters on the left side of the arrow 
       are passed to the function body on the right side of the arrow.

Note:- Arrow functions are not suitable for all situations, 
       especially when you need to use the 'this' keyword, 
       as they do not have their own 'this' context. 
       In such cases, traditional function expressions may be more appropriate.

NOTE:- Arrow functions are often used in functional programming paradigms, 
       where functions are treated as first-class citizens and can be passed around as values. 
       They provide a more concise syntax for writing functions, 
       making code easier to read and maintain.

Note:- Arrow functions can also be used with higher-order functions, 
       which are functions that take other functions as arguments or return functions as their result. 
       This allows for powerful functional programming techniques, 
       such as map, filter, and reduce operations on arrays.

Note:- Arrow functions can also be used in combination with other features of TypeScript, 
       such as destructuring, default parameters, and rest parameters, 
       to create more flexible and reusable functions.

Note:- Arrow functions can also be used in combination with async/await syntax 
       to create asynchronous functions, which can be useful for handling asynchronous operations 
       in a more readable and maintainable way.

NOTE:- Arrow functions can also be used in combination with TypeScript's type annotations 
       to provide type information for the parameters and return type of the function, 
       making it easier to catch type errors and improve code readability.

NOTE:- Arrow functions can also be used in combination with TypeScript's generics 
       to create reusable functions that can work with different types of data, 
       making it easier to write flexible and maintainable code.

NOTE:- Arrow functions can also be used in combination with TypeScript's type parameters 
       to create generic functions that can work with different types of data, 
       making it easier to write flexible and maintainable code.

NOTE:- VVIP:- Arrow functions are MOST preferred to use in Typescript coding,
              and even in Automation testing, 
              because of their concise syntax and improved readability.*****

Syntax:-
// Declaring an arrow function
let variable = (parameters) : returnType => {
    // function body
    return value; // optional
}
// Calling or invoking an arrow function
variable(parameters);
 */

// Example of an arrow function assigned to a variable with no parameters and no return type
let greet5 = () : void => { console.log("Hello, Ashish!");};
greet5(); // Output: Hello, Ashish!

console.log("-----------------------------------")

// Example of an arrow function with parameters and return type
let add5 = (a: number, b: number) : number => {
    return a + b;
}
console.log(add5(5, 3)); // Output: 8

// Example of an arrow function with a single parameter (parentheses can be omitted)
// Arrow function with a single parameter and an implicit return
// No curly braces are needed for a single expression
// 'return' keyword is not needed when the function body is a single expression
let square = (x: number) : number => x * x;
console.log(square(4)); // Output: 16

// Example of an arrow function used as an argument to another function
function performOperation(operation: () => void) {
    operation();
}
performOperation(() => {
    console.log("Performing an operation...");
}); // Output: Performing an operation...

// Example of an immediately invoked arrow function expression (IIFE)
(() => {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!

console.log("-----------------------------------")

// Arrow function with default parameters
// Arrow function with Rest parameters
// Arrow function with optional parameters
// Arrow function with different types of parameters and return type 
// All the above-mentioned features of named functions can also be implemented in arrow functions,
        // with the same syntax and behavior, but with a more concise and readable syntax.
