const person = {
    name: "Edu",
    age: 40,
    weight: 78,
    height: 1.69
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

divider()

Object.entries(person).forEach(e => console.log(`${e}`))
Object.entries(person).forEach(e => console.log(`${e[0]} → ${e[1]}`))
divider()
Object.entries(person).forEach(([key, value]) => console.log(`${key} → ${value}`))

divider()

Object.defineProperty(person, 'dob', {
    enumerable: true,
    writable: false,
    value: "20/02/1982"
})

console.log(person)

divider()

const receive = { a:1 }
const o1 = { b:2 }
const o2 = { c: 3, a:4 }

const obj = Object.assign(receive, o1, o2) // assigns to 'recieve'

console.log(obj)








function divider() { console.log("••••••••••••••••••••••••••••••••••••••••••••") }