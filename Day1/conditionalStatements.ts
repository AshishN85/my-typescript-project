// #3

// Control Statements =>
    //1. Conditional Statements
    //2. Looping Statements
    //3. Jumping Statements

let person_Age:number = 10;
if(person_Age >= 18) {
    console.log(`${person_Age} : Eligible to vote!!`)
}
else {
    console.log(`${person_Age} : Need to grow older!!`)    
}

console.log("***********************************")

let math:number = 28;
if(math % 2 === 0) {
    console.log("Even number")
}
else {
    console.log("Odd number")
}

console.log("***********************************")

let weekNo:number = 1;
if(weekNo === 1) {
    console.log(`${weekNo} : Sunday!!`)    
}
else if(weekNo === 2) {
    console.log(`${weekNo} : Monday!!`)      
}
else if(weekNo === 3) {
    console.log("Tuesday!!")      
}
else if(weekNo === 4) {
    console.log("Wednesday!!")      
}
else if(weekNo === 5) {
    console.log("Thursday!!")      
}
else if(weekNo === 6) {
    console.log("Friday!!")      
}
else if(weekNo === 7) {
    console.log("Saturday!!")      
}
else {
    console.log("Not sure which day it is!!")
}

console.log("***********************************")

let weekDay:string = "Dryday";
switch(weekDay) {
    case "Sunday" : console.log(1); break;
    case "Monday" : console.log(2); break;
    case "Tuesday" : console.log(3); break;
    case "Wednesday" : console.log(4); break;
    case "Thursday" : console.log(5); break;
    case "Friday" : console.log(6); break;
    case "Saturday" : console.log(7); break;
    default : console.log("Invalid week name you have provided.")
}

console.log("***********************************")

let x:number = 20, y:number = 5
switch(x - y) {
    case 0 : console.log("zero"); break;
    case 5 : console.log("five"); break;
    case 10 : console.log("ten"); break;
    default : console.log("something else value")
}
