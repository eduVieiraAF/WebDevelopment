const person = { name: "Edu" }
console.log(person.name)

person.name = "Tony"
console.log(person.name) 
// * Even thought it's a const you can change to attributes of object but not where it's stored

// * Now you cannot change or add attributes of object cuz the object itself is now a const
Object.freeze(person)
person.name = "Mandy"
console.log(person.name) // output → Tony

person.age = 45
console.log(person.age) // output → undefined
console.log(person)