const person = {
    name: "Edu",
    age: 40,
    address: {
        street: "Main st.",
        number: 119
    },
    nationality: "Brazilian",
    occupation: "Developer"
}

console.log(person)

// extracting the values || destructuring
const { nationality, occupation } = person

// same but renaming
const{ nationality: n, occupation: o  } = person

console.log(nationality, occupation)
console.log(o, n)

// extracts "street" and "number"
const { address: {street, number} } = person
console.log(number, street)