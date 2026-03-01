// #3

let x:number = 10, y:number = 20;

//Arithmetic Operators => +, -, *, **, /, %, ++, --

//Assignment Operators => =, +=, -=, *=, /=, %=

//Relational or Comparison Operators => ==, ===, !=, !==, >, <, >=, <=, ?

//Logical Operators => &&, ||, !

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)
console.log("***********************************")
// post increment
console.log(x++)
console.log(x)
// post decrement
console.log(x--)
console.log(x)
console.log("***********************************")
// pre increment
console.log(++x)
console.log(x)
// pre decrement
console.log(--x)
console.log(x)

console.log("=================================================================")

let m:number = 103, n:number = 50;
m += n    // m = m + n
console.log(m)

m -= n    // m = m - n
console.log(m)

m *= n    // m = m * n
console.log(m)

m /= n    // m = m / n
console.log(m)

m %= n    // m = m % n
console.log(m)

console.log("=================================================================")

let p:number = 35, q:number = 16;
console.log(p == q)
console.log(p === q)
console.log(p != q)
console.log(p !== q)
console.log(p > q)
console.log(p < q)
console.log(p >= q)
console.log(p <= q)

let r:number = 100, s:string = "100"
// console.log(r == s)
// console.log(r != s)
// console.log(r === s)
// console.log(r !== s)

console.log("=================================================================")

// Ternary or Conditional Operator
// Replacement for 'if-else' statement
// (exp) ? res1 : res2
console.log(p < q ? p : q)      // it will print 'q' value as condition is 'False'
console.log(p > q ? p : q)      // it will print 'p' value as condition is 'True'

let personAge:number = 39
let res:string = (personAge >= 18) ? "ADULT" : "MINOR"
console.log(res)

console.log("=================================================================")

let b1:boolean = true, b2:boolean = false
console.log(b1 && b2)
console.log(b1 || b2)
console.log(!(b1))
console.log(!(b2))

console.log("--------------------------------------------------------")

let a:number=89, b:number=67, c:number=42;
console.log((a > b) && (b > c))
console.log((a < b) && (b > c))
console.log((a < b) || (b > c))
console.log((a > b) || (b < c))
console.log("***********************************")
// Negation operator
console.log((a > b))
console.log(!(a > b))
console.log((a < b))
console.log(!(a < b))
