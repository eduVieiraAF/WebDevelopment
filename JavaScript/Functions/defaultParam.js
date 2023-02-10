//* Strategy #1
function sum(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(sum())
console.log(sum(2))
console.log(sum(4, 3))
console.log(sum(4, 7, 2))
console.log(sum(0, 0, 0)) //? due to default value it does not accept ZERO as it returns false and triggers '||'

//* Strategy #2, #3 and #4 
function sum2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(sum2())
console.log(sum2(2))
console.log(sum2(4, 3))
console.log(sum2(4, 7, 2))
console.log(sum2(0, 0, 0))

//* default value after ES2015
function sum3(a = 1, b = 1, c = 1) { return a + b + c }

console.log(sum3())
console.log(sum3(2))
console.log(sum3(4, 3))
console.log(sum3(4, 7, 2))
console.log(sum3(0, 0, 0))


