console.log(typeof String)
console.log(typeof Number)
console.log(typeof Array)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log("Eduardo Vieira".reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5,6].first())

// adding 'extension functions' to "Classes" in JS
