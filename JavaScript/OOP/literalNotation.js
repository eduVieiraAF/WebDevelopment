const a =1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //no longer necessary to be done this way
const obj2 = {a, b, c}
console.log(obj1, obj2)

const attr = "mark"
const value = 8.9
const obj3 = {}
obj3[attr] = value
console.log(obj3)

const obj4 = { [attr]: value }
console.log(obj4)

// functions
const obj5 = {
    f1: function() { /* ... */ },
    f2() { /* ... */ } // new way to add a function to an object
}
console.log(obj5)