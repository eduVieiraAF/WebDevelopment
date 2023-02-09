Array.prototype.filter2 = function(callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) newArray.push(this[i])
    }

    return newArray
}

const products = [
    {item: "laptop", price: 810.80, fragile: true},
    {item: "printer", price: 97.40, fragile: true},
    {item: "hammer", price: 10.90, fragile: false},
    {item: "cup holder", price: 2.00, fragile: false},
    {item: "sofa", price: 502.10, fragile: false},
    {item: "jacuzzi", price: 720.85, fragile: false},
    {item: "water mattress", price: 738.40, fragile: true}
]


const isFragile = products.filter2(function(p) {
    return p.fragile == true
})
const isExpensive = products.filter2(p => p.price > 500)
const specialHandle = products.filter2(it => it.price > 500 && it.fragile == true)


console.log(isFragile)
console.log(isExpensive)
console.log(specialHandle)
