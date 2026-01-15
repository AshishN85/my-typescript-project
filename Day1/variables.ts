// #1

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

// Syntax => keyword variableName:datatype(optional) = value
var age:number = 39
// var age = "Thirty Nine"
var age = 40
var x;

var firstName = "Ashish"

let active:boolean = true
// let active = false
active = false
let y;

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

// Hoisting => We NEVER PERFORM this*****
// console.log(pqr) =>    undefined
var pqr = 10;

// console.log(mnp)    ReferenceError: Cannot access 'mnp' before initialization
let mnp = 10;
// console.log(season)     ReferenceError: Cannot access 'season' before initialization
const season = "Winter"
