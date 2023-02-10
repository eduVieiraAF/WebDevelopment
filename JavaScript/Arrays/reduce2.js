const students =[
    {name: "Kevin", grade: 8.4, scholarship: false},
    {name: "Joseph", grade: 7.3, scholarship: true},
    {name: "Rachel", grade: 6.4, scholarship: false},
    {name: "Mandy", grade: 8.0, scholarship: true},
    {name: "Anne", grade: 9.8, scholarship: true},
]

// all have a scholarchip
const allS = (result, scholarship) => result && scholarship
console.log(students.map(s => s.scholarship).reduce(allS))

//at least one has a scholarship
const oneS = (result, scholarship) => result || scholarship
console.log(students.map(it => it.scholarship).reduce(oneS))