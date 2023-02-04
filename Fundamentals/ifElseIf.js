Number.prototype.between = function (start, end) {
    return this >= start && this <= end
}

const printResult = function (mark) {

    try {
        if (mark.between(9, 10)) console.log("Highest achievement")
        else if (mark.between(7, 8.9)) console.log("High achievement")
        else if (mark.between(5, 6.99)) console.log("Medium")
        else console.log("Review course content and apply again")
    } catch(e) { console.log(`Invalid mark → ${ e }`) }
}

printResult(8)
printResult(3)
printResult(9.7)
printResult(null)