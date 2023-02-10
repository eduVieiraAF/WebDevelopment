function printSum(a, b) { console.log(a + b) }

printSum(6, 45)

function sum(a, b=0) { return a + b }
console.log(sum(4, 7))
console.log(sum(2))