class Grandparent {
    constructor(familyName) {
        this.familyName = familyName
    }
}

class Parent extends Grandparent {
    constructor(familyName, job = "Programmer") {
        super(familyName)
        this.job = job
    }
}

class Child extends Parent {
    constructor() {
        super("Junior")
    }
}

const child = new Child
console.log(child)

child.job = "Sales Person"
console.log(child)