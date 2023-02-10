const nearArray = {
    0: "Eduardo",
    1: "Daniel",
    2: "Sofia"
}
console.log(nearArray)

Object.defineProperty(nearArray, 'toString', {
    value: function() { return  Object.values(this)},
    enumerable: false // reason why this function did not go in when creating an object
})

console.log(nearArray[1]) // just like you'd do with arrays

const myArray = ["Eduardo", "Daniel", "Sofia"]
console.log(nearArray.toString(), myArray) // identical output

//! It's better to use arrays unless you need to restrict how the data is handled by a team
