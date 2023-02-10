const sum = function (x, y) { return x + y }

const printResult = function (a, b, operation = sum) {
    console.log(operation(a, b))
}

printResult(7, 3)
printResult(7, 3, sum)
printResult(7, 3, function (x, y){ return x - y })
printResult(7, 3, (x, y) => (x / y).toFixed(2) )

const person = {
    firstName: "Eduardo",
    lastName: "Vieira",
    greet /*: function*/ () { console.log(`Hello ${ this.firstName } ${ this.lastName }`) }
}

person.greet()