const school = [
    {
        class: "Class 1",
        students: [
            {
                name: "John",
                grade: 7.5
            },
            {
                name: "Peter",
                grade: 9.5
            },
        ]
    },
    {
        class: "Class 2",
        students: [
            {
                name: "Lincoln",
                grade: 8.5
            },
            {
                name: "Lily",
                grade: 10.0
            }
        ]
    }
]

console.log(school)

const getStudentGrade = std => std.grade
const getClassGrade = _class => _class.students.map(getStudentGrade)

const grade1 = school.map(getClassGrade)
console.log(grade1)

const grade2 = school.flatMap(getClassGrade)
console.log(grade2)