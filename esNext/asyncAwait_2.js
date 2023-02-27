function numbersRangingFrom(min, max, exclude) {
    if (min > max) [max, min] = [min, max] 

    return new Promise((resolve, reject) => {
        const random = parseInt(Math.random() * (max - min))

        if (exclude.includes(random)) reject("Number repeated")
        else resolve(random)
    })
}

async function lottery(nums, tries = 1) {
    try {
        const numbers =[]
        for (let _ of Array(nums).fill()) {
            numbers.push(await numbersRangingFrom(1, 60, numbers))
        }
    
        return numbers
    } catch (e) {
        if (tries > 25) throw `No can do`
        else return lottery(nums, tries + 1)
    }
}

lottery(6)
    .then(console.log)
    .catch(console.log)
