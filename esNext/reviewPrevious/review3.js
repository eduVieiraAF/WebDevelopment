// * Objects.values && Object.entries

const obj = { a:1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

// * Classes

class Animal {}
class Dog extends Animal {
    bark() { console.log("Woof") }
}

const pittBull = new Dog()
pittBull.bark()