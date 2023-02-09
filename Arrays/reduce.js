// * Changes an array

const students =[
    {name: "Kevin", grade: 8.4, scholarship: false},
    {name: "Joseph", grade: 7.3, scholarship: false},
    {name: "Rachel", grade: 6.4, scholarship: true},
    {name: "Mandy", grade: 8.0, scholarship: true},
    {name: "Anne", grade: 9.8, scholarship: true},
]

const result = students
    .map(it => it.grade)
    .reduce(function(added, current) {
        console.log(added, current) // show the sum of grades && the current grade to be added

        return added + current
    }, 0) // initial value

    console.log(result.toFixed(2))