// Functions in TypeScript
// Function are reusable blocks of code that perform a specific task. 
// They can take parameters and return values.

// A functions can be created without using Objects or Classes.
// A method is a function that is created inside a Classes or an Objects. 
        // It is associated with the Class or Object and can access its properties and other methods.
        // It can be accessible only through the Class or Object it is defined in.

// Named Function => A named function is a function that has a name. 
                    // It can be called by its name to execute the code inside it.

/* Syntax:-
// Declaring a named function
function functionName(parameters) : returnType {
    // function body
    return value; // optional
}

// Calling or invoking a named function
functionName(parameters);
*/

// Example of a named function with no parameters and no return value
function greet() : void {
    console.log("Hello, Ashish!");
}   
greet(); // Output: Hello, Ashish!

console.log("-----------------------------------")

// Example of a named function with parameters and no return value
function greetUser(name: string) : void {
    console.log(`Buhbye, ${name}!`);
}
greetUser("Alice"); // Output: Hello, Alice!

console.log("-----------------------------------")

// Example of a named function with parameters and a return value
function add(a: number, b: number) : number {
    return a + b;
}   
const sum = add(5, 3);
console.log(sum); // Output: 8

console.log(add(10, 20)); // Output: 30

let x = sum*2;
console.log(x); // Output: 16

console.log("-----------------------------------")

// Named function with Rest Parameters
// "...numbers: number[]" is a rest parameter that allows the function to accept 
    // an indefinite number of arguments as an array of numbers.
function sumAll(...numbers: number[]) {
    let i;
    let sum: number = 0;
    for (i = 3; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("sum of the numbers:", sum);
}   
sumAll(1, 2, 3, 4, 5); // Output: 15

console.log("-----------------------------------")

// Named function with Rest Parameters and different types of parameters and return type
function displayInfo(...elements: (string | number)[]) : number {
    return elements.length;
}
console.log(displayInfo("Ashish", 25, "Developer", 5)); // Output: 4
console.log(displayInfo("Alice", "Bob", "Charlie")); // Output: 3
console.log(displayInfo(1, 2, 3, 4, 5)); // Output: 5

console.log("-----------------------------------")

// Named function with optional parameters
// If we make first parameter optional, then we have to make all the other parameters optional, 
// otherwise it will give an error.
function greetPerson(name: string, age?: number, emailID?: string) : void {
    if (age !== undefined && emailID !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old and your email ID is ${emailID}.`);
    } else if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}!`);
    }
    console.log("Age:", age);
    console.log("Email ID:", emailID);
}
greetPerson("Ashish", 30, "bob@example.com"); // Output: Hello, Ashish! You are 30 years old.
greetPerson("Alice"); 

console.log("-----------------------------------")

// Named function with default parameters
function greetWithDefault(name: string, greeting: string = "Hello") : void {
    console.log(`${greeting}, ${name}!`);
}
greetWithDefault("Ashish"); // Output: Hello, Ashish!
greetWithDefault("Alice", "Hi"); // Output: Hi, Alice!

function calculateArea(radius: number, pi: number = 3.14) : number {
    return pi * radius * radius;
}
console.log(calculateArea(5)); // Output: 78.5
console.log(calculateArea(5, 3.14159)); // Output: 78.53975

function calculateDiscount(price: number, rate: number = 0.25) : void {
    let discount: number = price * rate;
    console.log("Discount amount:", discount);
}
calculateDiscount(1000); // Output: Discount amount: 250
calculateDiscount(1000, 0.1); // Output: Discount amount: 100

console.log("-------------------------------------------------------------------------------")
