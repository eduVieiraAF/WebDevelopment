// * The OOP of JavaScript

function Car(topSpeed = 200, delta = 5) {
    // private attribute
    let currentSpeed = 0

    // public method
    this.accelerate = function () {
        if ((currentSpeed + delta) <= topSpeed) currentSpeed += delta
        else currentSpeed = topSpeed
    }

    // public method
    this.getCurrentSpeed = function () {
        return currentSpeed
    }
}

const prius = new Car
prius.accelerate()
console.log(prius.getCurrentSpeed())

const ferrari = new Car(360, 20)
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)
console.log(typeof ferrari.getCurrentSpeed())