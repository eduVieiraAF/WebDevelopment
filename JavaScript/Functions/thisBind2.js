function Person() {
    this.age = 15

    const self = this // defines the "this" from this scope

    setInterval(function () {
        console.log(self.age)
        // this.age++
        self.age++
    }/*.bind(this)*/, 1000) // this invoke "this.age"
}

new Person // "this" is not triggered properly  without "bind(this)"