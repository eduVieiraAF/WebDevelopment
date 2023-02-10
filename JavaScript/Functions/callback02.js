const marks = [7.5, 8.7, 5.5, 9.0, 8.0, 4.8, 7.0]

// without callback
let badMarks = []

for (let i in marks) {
    if (marks[i] < 7) badMarks.push(marks[i])
}

console.log(badMarks)

// with callback

// const lowMarks = marks.filter(function (mark) { return mark < 7 })
const lowMarks = marks.filter((mark) => mark < 7)
console.log(lowMarks)

const getGoodMarks = mark => mark > 7
const goodMArks = marks.filter(getGoodMarks)

console.log(goodMArks)
