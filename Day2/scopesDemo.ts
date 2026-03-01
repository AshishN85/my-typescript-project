// Scopes in TypeScript refer to the accessibility of variables, functions, and objects 
    // in different parts of the code.
// There are three types of scopes in TypeScript: Global Scope, Function Scope, and Block Scope.

//1️⃣ Global Scope
// Variables declared outside of any function or block are in the global scope.
// They can be accessed from anywhere in the code.

let globalVar = "I am global";

function test() {
    console.log(globalVar);
}
test(); // Output: I am global

//2️⃣ Function Scope
// Variables declared inside a function are in the function scope.
// They can only be accessed within that function.

function test1() {
    let functionVar = "I am function scoped";
    console.log(functionVar);
}
test1(); // Output: I am function scoped

//3️⃣ Block Scope
// Variables declared with let or const inside a block (e.g., inside an if statement or a loop) 
    // are in the block scope. They can only be accessed within that block.

if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar);
}
// console.log(blockVar); // Error: blockVar is not defined

// 4️⃣ Module Scope
// Variables declared in a module (a file) are in the module scope.
// They can only be accessed within that module unless they are exported.

// file1.ts
export const moduleVar = "I belong to this module only";

// 5️⃣ Script Scope
// Variables declared in a script (a file that is not a module) are in the script scope.
// They can be accessed from anywhere in the script but not from other scripts.

var scriptVar = "I belong to this script file";

// 6️⃣ Lexical Scope
// Lexical scope refers to the fact that the accessibility of variables is determined by their position in the source code. 
// A function can access variables from its own scope and from the scopes of its parent functions.

function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer(); // Output: 10

// Understanding scopes is crucial for writing clean and efficient code, 
// as it helps in managing variable lifetimes and avoiding naming conflicts.

// 7️⃣ Local Scope
// Variables declared inside a function or block are in the local scope.
// They can only be accessed within that function or block.

function test2() {
    let localVar = "I am local";
    console.log(localVar);
}
test2(); // Output: I am local
// console.log(localVar); // Error: localVar is not defined

// 8️⃣ Closure Scope
// A closure is a function that has access to its own scope, 
// the scope of the outer function, and the global scope.

function outer1() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const increment = outer1();
increment(); // Output: 1
