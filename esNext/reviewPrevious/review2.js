//* Arrow functions

const sum = (a, b) => console.log(a + b)
sum(4, 5)

//* Arrow function (this) 
    // in an arrow funtion this does point to goblal scope

const lexical = () => console.log(this === exports)
lexical()

// default params
function log(input = "node") {
    console.log(input)
}

log()
log("Dude")
log(null)

const log2 = (input = "node") => console.log(input)
log2()
log2("Dude2")
log2(null)

// rest || spread operator

const total = (...num) => {
    let total = 0

    num.forEach(n => total += n)

    return total
}

console.log(total(1, 5, 9, 70))