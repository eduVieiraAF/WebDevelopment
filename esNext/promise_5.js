function runOrNot(value, errOdds) {
    return new Promise((resolve, reject) => {
        if (Math.random() < errOdds) reject("Odds are against you")
        else resolve(value)
    })
}

runOrNot("it works", 0.5)
    .then(console.log)
    .catch(e => console.log(e))