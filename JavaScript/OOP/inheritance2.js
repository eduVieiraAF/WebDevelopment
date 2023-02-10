//* Prototype chain

const grandparent = { attr1 : "A" }
const parent = { __proto__: grandparent, attr2: "B" }
const child = { __proto__: parent, attr3: "C" }

console.log(child.attr1)

const car = {
    currSpeed: 0,
    topSpeed: 200,
    accelerate(delta) {
        if (this.currSpeed + delta <= this.topSpeed) this.currSpeed += delta
        else this.currSpeed = this.topSpeed
    },
    status() {
        return `${this.currSpeed}km/h out of ${this.topSpeed}km/h`
    }
}

const ferrari = {
    model: "F40",
    topSpeed: 314, // shadowing
}

const volvo = {
    model: "V12",
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

console.log(ferrari.topSpeed)
console.log(volvo.topSpeed)

ferrari.accelerate(20)
volvo.accelerate(215)

console.log(ferrari.status())
console.log(volvo.status())

ferrari.accelerate(50)
volvo.accelerate(15)

console.log(ferrari.status())
console.log(volvo.status())