// #5

// Looping Statements =>

// while loop
// do-while loop
// for loop

// for-in loop
// for-of loop

let i:number = 1;      // Starting point or Initialization
while(i <= 10)      // Condition need to be false at certain point of time
{
    console.log(i)
    i++;    // i = i + 1    // Increment
}

console.log("*************************")

let j:number = 10;      // Starting point or Initialization
while(j >= 1)      // Condition need to be false at certain point of time
{
    console.log(j)
    j--;    // j = j - 1    // Decrement
}

console.log("*************************")

let k:number = 0;      // Starting point or Initialization
while(k <= 10)      // Condition need to be false at certain point of time
{
    console.log(k)
    k+=2;    // k = k + 2    // Increment
}

console.log("********************************************************************")

let a:number = 1;      // Starting point or Initialization
while(a <= 10)      // Condition need to be false at certain point of time
{
    if(a % 2 !== 0) 
    {
    console.log(a)
    }
    a++;    // a = a + 1    // Increment
}

console.log("********************************************************************")

let b:number = 10;      // Starting point or Initialization
while(b > 0)      // Condition need to be false at certain point of time
{
    if(b % 2 === 0) 
    {
    console.log(b)
    }
    b--;    // b = b - 1    // Increment
}

console.log("********************************************************************")

let m:number = 100;
do 
{
console.log(m)
m++;
}
while(m <= 99);     // Condition is checked after executing the statement at least once

console.log("********************************************************************")

let n:number    //Global scope
for(n = 0; n <= 20; n+=3)       //(initialization; condition; increment or decrement)
{
    console.log(n)
}
console.log(n)      // => can access the variable 

console.log("********************************************************************")

let abcd:number     //Global scope

console.log("********************************************************************")

for(let pqrs:number  /*Local scope*/ = 1; pqrs <= 10; pqrs++) {
    if(pqrs % 2 === 0)
    {
        console.log(pqrs)
    }
}
// console.log(pqrs) => cannot access the variable

console.log("********************************************************************")

let pqrst:number;
for(pqrst = 1; pqrst <= 5; pqrst++);    // semi-colon used here to end 'for' loop

    console.log(pqrst)  // 6

console.log("********************************************************************")

let mnop:number;
for(let mnop:number = 1; mnop <= 5; mnop++);    // semi-colon used here to end 'for' loop

    // console.log(mnop)    => Variable 'mnop' is used before being assigned.
