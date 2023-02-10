class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello, ${this.name}`)
    }
}

const p1 = new Person("Claire")
p1.greet() // however using it in the browser the name will return as undefined as 'this' is obtained from a different scope in the browser

const createPerson = name => {
    return {
        greet: () => console.log(`Hello, ${name}`)
    }
}

const p2 = createPerson("Lara")
p2.greet() // works fine in a browser


//? How to sort out the issue above? 
//* Constructor function!

function Person2(name) {
    this.name = name
    this.greet = function () { console.log(`Hello ${this.name}`) }
}

const p3 = new Person2("Anne")
p3.greet() // works fine in a browser