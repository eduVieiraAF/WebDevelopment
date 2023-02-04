const printResult = function (mark) {
    switch (Math.floor(mark)) {
        case 10: case 9:
            console.log("Highest achievement")
            break
        case 8: case 7:
            console.log("High achievement")
            break
        case 6: case 5:
            console.log("Medium")
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log("Review course content and apply again")
            break
        default:
            console.log("Invalid mark")
    }
}

printResult(8)
printResult(10)
printResult(-8)
printResult(4.5)
