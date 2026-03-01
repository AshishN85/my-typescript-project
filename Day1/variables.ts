// #1

/* 
To install TypeScript globally on your machine, 
you can use the following command in your terminal or command prompt:-

npm install -g typescript
npm install -g tsx => to run TypeScript files without compiling them to JavaScript first
*/

// This is a comment

/* shift + Alt + A */

// 'var' vs 'let' vs 'const'
// we consider 5 parameters when differentiating
/*
1. Scope => Functional scope & Block scope
2. Declaration or Value Assignment
3. Re-declaration
4. Re-initialization or Re-assignment
5. Hoisting
 */  

// 'var' keyword is NOT RECOMMENDED to use in JavaScript & TypeScript in current era*****

console.log("Welcome to TypeScript!!")

// Syntax => keyword variableName:datatype(optional) = value
var x;  // Declaration
var age:number = 39 // Initialization or Value Assignment
// var age = "Thirty Nine"
var age = 40  // Re-initialization or Re-assignment
console.log(x)

var firstName = "Ashish"

let y;  // Declaration
let active:boolean = true // Initialization or Value Assignment
// let active = false
active = false  // Re-initialization or Re-assignment
console.log(y)

const lastName:string = "Naidu"
// lastName = "Munni"
// const z;

console.log("=================================================================")

function blockScope() {
    if(true) {
        let msg = "Hello World!!"
        console.log(msg)
        const greet = "How are you doin?"
        console.log(greet)
    }
    // console.log(msg)    ReferenceError: msg is not defined
    // console.log(greet)
}

blockScope();

console.log("=================================================================")

function scopeDifference() {
    if(true) {
        var a = 10
        let b = 20
        const c = 30
    }
    console.log(a)  // 10 => var is function scoped, so it is accessible outside the block
    // console.log(b)  ReferenceError: b is not defined => let is block scoped, 
                                                    // so it is NOT accessible outside the block
    // console.log(c)  ReferenceError: c is not defined => const is block scoped, 
                                                    // so it is NOT accessible outside the block
}   
scopeDifference()

console.log("=================================================================")

// Hoisting => We NEVER PERFORM this*****
// console.log(pqr) =>    undefined
var pqr = 10;

// console.log(mnp)  ReferenceError: Cannot access 'mnp' before initialization or Not initialized
let mnp = 10;
// console.log(season)   ReferenceError: Cannot access 'season' before initialization or Not initialized
const season = "Winter"
