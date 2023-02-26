
function numbersRangingFrom(min, max) {
    if (min > max) [max, min] = [min, max] 

    return new Promise(resolve => {
        const random = parseInt(Math.random() * (max - min))
        
        resolve(random)
    })
}

numbersRangingFrom(1, 60)
    . then(num => console.log(`Random number is ${num}`))