const parent = { name: "Edu", hairColor: "black" }

const child1 = Object.create(parent)
child1.name = "Dani"

console.log(child1.hairColor)

const child2 = Object.create(parent, {
    name: { value: "Sofia", writable: false, enumerable: true }
})

console.log(child1.name, child2.name)
console.log(`${child1.name} has ${child1.hairColor} hair`)

console.log(Object.keys(child1))
console.log(Object.keys(child2))

for (let key in child2) {
    child2.hasOwnProperty(key) ?
        console.log(key) : console.log(`By inhritance: ${key}`)
}