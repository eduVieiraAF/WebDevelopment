require('./global')

global.myApp.greeter()
console.log(global.myApp.name)
console.log(myApp.name)
myApp.greeter() // no need to use 'global'

// * you may changes values but it's not recommended so always turn to freeze()
myApp.name = "duduAF"
console.log(myApp.name)
