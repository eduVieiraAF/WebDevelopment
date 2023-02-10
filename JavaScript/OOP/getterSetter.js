const seq = {
    _value: 1, // _ means you're meaning it to be private although it isn't
    get value() { return this._value++ },
    set value(value) {
        if (value > this._value) this._value = value
    }
}

console.log(seq.value, seq.value)
seq.value = 200
console.log(seq.value, seq.value)
seq.value = 100 // validation (if) prevents from setting a lower value - in this case
console.log(seq.value, seq.value)
