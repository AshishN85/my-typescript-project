// #5

// break
// continue

// The key reason:-
// 'n' is already declared somewhere earlier in your file or project.
for(n = 0; n <= 20; n+=3)       
{
    if(n === 12)
        break;

    console.log(n)
}

console.log("********************************************************************")

// The key reason:-
// 'm' is already declared somewhere earlier in your file or project.
for(m = 0; m <= 20; m+=3)       
{
    if(m === 3 || m === 9 || m === 15)
        continue;

    console.log(m)
}

console.log("********************************************************************")

// The key reason:-
// 'abcd' is already declared somewhere earlier in your file or project.

for(abcd = 0; abcd <= 5; abcd++)
{
    console.log(abcd)
}

console.log("********************************************************************")

for(pqrst = 0; pqrst <= 20; pqrst+=3)       
{
    console.log(pqrst)

    if(pqrst === 12)
        break;

}
