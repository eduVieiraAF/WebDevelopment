//* Object.preventExtensions

const product = Object.preventExtensions({
    name: "whoever",
    price: 1.90,
    tag: 'on sale'
})

console.log(Object.isExtensible(product))

product.name = "Eraser"
product.description = "School white eraser" //can't
delete product.tag

console.log(product)

//* Object.seal

const person = { name: "Julie", age: 24 }
Object.seal(person)

console.log(Object.isSealed(person))
person.age = 27
person.hairColor = "red"
delete person.name
console.log(person) // nothing has changed or has been added

//* Object.freeze = seal + constant(writeable = false)