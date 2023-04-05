
//* SYNTAX → map(element, index, array) => {... return some value}

// #1

const num = [2, 3, 4, 5, 6]
const doubleArr = num.map(item => { return item * 2 })

doubleArr.forEach(it => console.log(it))

// #2

const makeDouble = item => item * 2
const doubleArr2 = num.map(makeDouble)

doubleArr2.forEach(e => console.log(e))

// #3

const doubleArray3 = num.map(n => n * 2)
doubleArray3.forEach(it => console.log(it))