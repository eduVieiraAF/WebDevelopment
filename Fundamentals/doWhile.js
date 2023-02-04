function getRandomBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0
let times = 0

 do {
    option = getRandomBetween(-5, 20)
    console.log(`Option was ${ option }`)
    times++
} while (option != -1)

console.log(`Thanks for playing. Program has run ${ times } times`)

