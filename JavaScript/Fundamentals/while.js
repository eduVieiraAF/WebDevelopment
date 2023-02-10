function getRandomBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0
let times = 0

while (option != -1) {
    option = getRandomBetween(-1, 5)
    console.log(`Option was ${ option }`)
    times++
}

console.log(`Thanks for playing. Program has run ${ times } times`)

