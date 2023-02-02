for (var i = 1; i <= 15; i++) {
    console.log(`→ ${ i }`)
}

console.log(i)

//* with var 'i' can be accessed outside of the scope of the for loop

for (let i = 1; i <=10; i++) {
    console.log(`→ ${ i }`)
}

console.log(i) //* the one declared as "var"