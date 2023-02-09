const students = [
    { name: "Dan", grade: 7.5 },
    { name: "Mitchel", grade: 4.5 },
    { name: "Maria", grade: 8.5 },
    { name: "Brad", grade: 9.0 },
]

// * Imperative

let total1 = 0

for(let i=0; i < students.length; i++) {
    total1 += students[i].grade
}

console.log(total1 / students.length)

// * Declarative

const getGrade =  student => student.grade
const sum = (total, current) => total + current

const total2 = students.map(getGrade).reduce(sum)
console.log(total2 / students.length)