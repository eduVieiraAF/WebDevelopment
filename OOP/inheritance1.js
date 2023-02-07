const ferrari = {
    model: "f40",
    topSpeed: 324
}

const volvo = {
    model: "V40",
    topSpeed: 210
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

function myObject() {}
console.log(typeof Object, typeof myObject)
console.log(Object.prototype, myObject.prototype)