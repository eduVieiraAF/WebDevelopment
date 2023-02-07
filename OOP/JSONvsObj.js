const obj = {
    a: 1, b: 2, c: 3,
    sum() { return a + b + c }
}

console.log(obj)
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 2, "name": "Edu", "isValid": true, "d": {}, "e": [1, 2, 3.4]} '))

