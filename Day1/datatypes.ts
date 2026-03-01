// #2

// To run the program =>    tsx datatypes.ts
// To check for the errors =>    tsc datatypes.ts

// Statically typed programming language
let data :number = 10;
// data = "Ashish";
console.log(data)

// Type or Datatype
// Annotations
// Type Inference

let xyz:number = 30
// Type or Datatype ===> number
// Annotations ===> :number

let mnp:boolean = true
// Type Inference ===> Type Script will automatically allocate a datatype,
// based on the value we provided to the variable

console.log("----------------------------------------------------------------")

// Primitive Datatypes(Built-in)
// Number
// Boolean
// String
// null
// undefined
// any
// union
// void

// Non-Primitive DataTypes(Objects)
// Array
// Class
// function
// Interface
// Tuple etc...

// Number datatype
let age:number = 39
let weight:number = 67.5
let big:number = 9876543211234567890

console.log("Age", age)
console.log("Weight", weight)
console.log("Time on Earth", big)

console.log(typeof(big))

console.log("----------------------------------------------------------------")

// String datatype
let firstName:string = "Ashish"
let lastName: string = 'Naidu'
let initial: string = `M`       //Most used way in Automation for parameterization & data-driven testing

let greeting:string = `Hello ${firstName} ${initial} ${lastName}`
console.log(greeting)

console.log("----------------------------------------------------------------")

// Boolean datatype
let active: boolean = true
let isStudent:boolean = false

// Null & Undefined datatypes ===> NOT recommended
let emptyValue:null = null;
let notAssigned:undefined;

console.log(emptyValue)
console.log(notAssigned)

console.log("----------------------------------------------------------------")

// Any datatype ===> If used, loses the TypeScript benefits ===> NOT Recommended
let value:any = "Avinash"
console.log(typeof(value))
value = 100
console.log(typeof(value))
value = true
console.log(typeof(value))

console.log("----------------------------------------------------------------")

// Union datatype ===> combine multiple datatypes
let id:number | string | boolean;
id = "ABC123"
console.log(id)

id = 12345
console.log(id)

id = true
console.log(id)

// id = null   Type 'null' is not assignable to type 'string | number | boolean'

console.log("----------------------------------------------------------------")

// Void datatype ===> used for 'functions' and not for 'variables'
// this 'function' is NOT returning anything
function sum():void {
    console.log(10 + 20)
} 

sum()

console.log("----------------------------------------------------------------")

// this 'function with parameters' is NOT returning anything
function sum1(x:number, y:number):void {
    console.log(x + y)
} 

sum1(100, 200)

console.log("----------------------------------------------------------------")

// this 'function' is returning number
function sub():number {
    return(30 - 2)
} 

console.log(sub())

console.log("----------------------------------------------------------------")

// this 'function with parameters' is returning number
function sub1(p:number, q:number):number {
    return(p - q)
} 

let result:number = sub1(1000, 200)
console.log(result)
