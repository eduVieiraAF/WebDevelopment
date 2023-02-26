const { lowerCase } = require("lodash")

let p = new Promise(function(keepPromise) {
    keepPromise([3, 8, 9, 10])
})

console.log(p)
console.log(typeof p)

p
    .then(value => value[3])
    .then(element => element * element)
    .then(math => console.log(math))

let names = new Promise(function(entries) {
    entries(["Bill", "Aaron", "John", "Judy"])
})

names
    .then(first => first[0]) // Bill
    .then(letter => letter[0]) // B
    .then(lower => lower.toLowerCase()) // b
    //.then(it => console.log(it))
    .then(console.log)