// * First-class Object (Citizen)
// * Higher-order function

// * Standard way
function fun1(data) {}

//* Storing a function in a variable
const fun2 = function(data) {}

//* storing inside an array
const array = [
    function sum(a, b) { return a + b },
    fun1,
    fun2
]

console.log(array[0](5, 45))

//* Passing a function as a parameter
function run (fun) {
    fun()
}

run(function() { console.log("Running...") })

//* Passing as an object attribute
const obj = {}
obj.greet = function (name) { return `Hello ${ name }` }

console.log(obj.greet("Edu"))

//* May return/contain a function
function add(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

add(1, 2)(3)

const plus = add(1, 2)
plus(3)