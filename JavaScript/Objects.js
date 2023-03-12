// * Example #1

const person = {
    name: "Edu Vieira",
    age: 41,
    programmingLang: ["kotlin", "Python", "JavaScript", "TypeScript", "Java"],
    motto: () => {
        console.log("Always a please never a chore")
    },
    workDetails: {
        job: "Analyst",
        wage: 2000
    }
}

console.log(person.name, person.age)
person.motto()
console.log(`Working on ${person.programmingLang}`)
console.log(person.workDetails.job)

console.log("••••••••••••••••••••••••••••••••••••••••••••")

// * Example #2

function Person() {
    this.name = "Edu Vieira",
    this.age = 41,
    this.programmingLang = ["kotlin", "Python", "JavaScript", "TypeScript", "Java"],
    this.motto = () => { console.log("Always a please never a chore") },
    this.workDetails = {
        job: "Analyst",
        wage: 2000
    }
}

const person1 = new Person()

console.log(person1.name, person1.age)
person1.motto()
console.log(`working on ${person1.programmingLang}`)
console.log(person1.workDetails)
