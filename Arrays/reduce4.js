Array.prototype.reduce2 = function(callback, initialValue) {
    const initialIndex =  initialValue ? 0 : 1
    let accumulator = initialValue || this[0]

    for (let i = initialIndex; i < this.length; i++) {
        accumulator = callback(accumulator,this[i], i, this) // * accumulator, current value, index, array
    }

    return accumulator
}

const sum = (total, value) => total + value

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums.reduce2(sum, 5))