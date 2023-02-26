function numbersRangingFrom(min, max, time) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function () {
            const random = parseInt(Math.random() * (max - min))

            resolve(random)
        }, time)
    })
}

function severalNums() {
    return Promise.all([
        numbersRangingFrom(1, 60, 100),
        numbersRangingFrom(1, 60, 200),
        numbersRangingFrom(1, 60, 3000),
        numbersRangingFrom(1, 60, 80),
        numbersRangingFrom(1, 60, 700),
    ])
}

console.time("promise")

severalNums()
    .then(nums => console.log(nums))
    .then(() => {
        console.timeLog("promise")
        console.timeEnd("promise")
    })
