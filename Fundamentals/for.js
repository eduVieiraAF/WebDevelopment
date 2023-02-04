for (let i = 1; i <= 10; i++) {
    console.log(i)
}

const marks = [7, 8, 9, 6, 10]

for (i = 0; i < marks.length; i++) {
    console.log(`Grade → ${ marks[i] }`)
}

for (let i in marks) {
    console.log(marks[i])
}

const person = {
    name: "Edu",
    age: "40",
    height: 1.70,
    weight: 79
}

for (let item in person) {
    console.log(`${ item } → ${ person[item] }`)
}