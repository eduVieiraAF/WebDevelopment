// * Params && Return

function area(length, height) {
    const area = length * height

    if (area > 20) return `${area}m2 is higher than expected`
    else return area
}

console.log(area(2,5))
console.log(area(2))
console.log(area())
console.log(area(2,5,10,15))
console.log(area(5,5))
