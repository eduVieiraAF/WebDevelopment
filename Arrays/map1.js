//* maps and changes data in an array to be carried into another array

const nums = [1, 2, 3, 4, 5]
let doubled = nums.map(e => e * 2)
console.log(doubled)


const add10 = e => e + 10
let plus10 = nums.map(add10)
console.log(plus10)

const triple = e => e * 3
let times3 = nums.map(triple)
console.log(times3)

const toCurrency = e => `USD ${parseFloat(e).toFixed(2)}`
let savings = nums.map(toCurrency)
savings.forEach(it => console.log(it))

const toBrl = e => `BRL ${parseFloat(e * 5.20).toFixed(2).replace('.', ',')}`
let real = nums.map(toBrl)
real.forEach(it => console.log(it))

let allTogetherBrl = nums.map(add10).map(triple).map(toBrl)
allTogetherBrl.forEach(it => console.log(it))

let allTogetherUsd = nums.map(add10).map(triple).map(toCurrency)
allTogetherUsd.forEach(it => console.log(it))
