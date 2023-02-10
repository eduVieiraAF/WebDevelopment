// litetal notation
const obj = {}

// Object
const obj2 = new Object

// constructor functions
function Product(name, price, id,) {
    this.name = name
    this.price = price // this is public and id is encapsulated
    this.getDiscount = x => (this.price - (this.price * (x / 100))).toFixed(2)
    
    function generateID() {
        // *CODE*
    }
}

const p1= new Product("Phone", 452.40)
console.log(p1)
console.log(p1.getDiscount(7))


// Factory function
function registerEmployee(fullName, salay, deduct) {
    return {
        fullName,
        salay,
        deduct,
        calculateSalary() {
            return ((salay / 30) * (30 - deduct)).toFixed(2)
        }
    }
}

const f1 = registerEmployee("Jon Smith", 6000, 4)
const f2 = registerEmployee("Nancy Goldwin", 6000, 3)

console.log(f1.calculateSalary(), f2.calculateSalary())

//* Object.create
const child = Object.create(null)
child.name = "Sofia"
child.age = 8
child.hasPet = true

console.log(child)

// JSON example
const fromJSON = JSON.parse('{"info": "JSON file"}')
console.log(fromJSON.info)
