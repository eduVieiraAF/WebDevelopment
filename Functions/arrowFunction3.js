function Person() {
    this.age = 15

    setInterval(() => {
        console.log(this.age)
        this.age++
    }, 1000)
}

new Person // with () => there's no need to use bind()