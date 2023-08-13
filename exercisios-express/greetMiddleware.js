function greet(name) {
    return function (req, res, next) {
        console.log(`Ahoy, ${name}!`)
        next()
    }
}

module.exports = greet