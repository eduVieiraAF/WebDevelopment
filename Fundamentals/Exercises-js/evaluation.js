const weight1 = 1.0
const weight2 = Number('2.0')

console.log(Number.isInteger(weight2))

let grade1 = 9.4517
let grade2 = 5.8917

const total = (grade1 * weight1) + (grade2 * weight2)
const average = total / (weight1 + weight2)

console.log(average.toFixed(2))