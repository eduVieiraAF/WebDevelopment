let double = function (a) { return a * 2 }

double = (a) => { return a *2 }

double = a => a * 2

console.log(double(Math.PI).toFixed(4))


let hello = function() { return 'ahoy' }

hello = () => 'ahoy'

hello = _ /*it is an argument/ parameter that can be ignored*/ => "ahoy"

console.log(hello().toUpperCase())
