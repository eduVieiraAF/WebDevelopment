// * Brief explanation

const object = {
    value1: "String",
    value2: 0,
    procedure: function () { console.log(this.value1, this.value2) }
}

object.value1 =  "OOP"
object.value2 = 40
object.procedure()

// * 1 → OOP is the abstraction of real world objects
    // A car has attributes like doors, motor, color, battery
                // behaviour like accelerate, brake, park

// * 2 → Encapsulation is the packing of data and functions into one component (for example, a class) 
    //* and then controlling access to that component to make a "blackbox" out of the object
    //* it allows for inner changes without changing so much the external interface(s)

// * 3 → Heritance is when a class inherits attributes and behavior from a (parent) class i.e.

//* 4 → Polymorphism (multiple forms) is going from a generic class to a more specific one


// Examples

const product = new Object
product.name = "Mouse" 
product["type of item"] = "Gamer" // not recommended
product.price = 9.78
product.isAvailable = true

console.log(product)

delete product.isAvailable

console.log(product)



const car = {
    model: "A4",
    price: 12000,
    owner: {
        name: "Doug",
        age: 48,
        address: {
            street: "Main Ave.",
            num: 39,
            city: "Louisville",
            state: "KY"
        }
    },
    allowedToDrive: [
        {
            name: "Junior",
            age: 19
        },
        {
            name: "Heather",
            age: 21
        }
    ]
}

console.log(`The ${car.model} belongs to a(n) ${car.owner.name},
 who is ${car.owner.age} from ${car.owner.address.city}, ${car.owner.address.state}`)

car["owner"]["address"]["num"] = 12 // can be accessed like in Python
console.log(car["owner"]["address"]["num"])

car.allowedToDrive[0].age = 25
console.log(car)
