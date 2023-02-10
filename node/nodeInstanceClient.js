const counterA = require('./nodeUniqueInstance')
const counterB = require('./nodeUniqueInstance')
const counterC = require('./nodeNewInstance')() // () to return a function
const counterD = require('./nodeNewInstance')()

counterA.inc() 
counterA.inc()
console.log(counterA.ammount, counterB.ammount) // it has cached the value of ammount

counterC.inc()
counterC.inc()
console.log(counterC.ammount, counterD.ammount) // it has not chached the value of ammount

