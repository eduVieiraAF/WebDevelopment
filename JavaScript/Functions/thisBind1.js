const person = {
    greet: "Good morning",
    speak() {
        console.log(this.greet)
    }
}

person.speak()

const speak = person.speak
speak() // conflict between 2 paradigms → function programming and OOP : "this" is out of  context

const speakFromPerson = person.speak.bind(person) // binds the 'this' from the object and associates properly
speakFromPerson()