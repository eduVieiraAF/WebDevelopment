// * How to accept multiple params (the old school way)

function sum() {
    let sum = 0

    for (i in arguments) {
        sum += arguments[i]
    }

    return sum
}

console.log(sum(1))
console.log(sum(4,5,6,12))
console.log((1.7, 7, 45.78).toFixed(2))
console.log(sum(3.2, 1.5, "hi"))
console.log("AH", "No", "concat")