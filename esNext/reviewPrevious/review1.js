// destructuring
const [l, e, ...tters] = "Eduardo"

console.log(l)
console.log(l, e, tters)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {name: _name, age} = {
    name: "Edu",
    age: 41
}

console.log(`My name's ${_name}, I'm ${age}`)
