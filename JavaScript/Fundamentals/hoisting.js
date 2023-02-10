console.log(a)

const println = it => console.log(it)

/*
* the first output will be "undefined" and not cause an error as "a" was declared as var an was hoisted
* during compile time
*/
var a = "Hello, World"

println(a)