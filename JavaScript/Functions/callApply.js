function setPrice(tax =0, currency = "AUD$") {
    return `${currency} ${this.price * (1 - this.disc) * (1 - tax)}`
}

const product = {
    name: "Laptop",
    price: 900.00,
    disc: 0.10,
    setPrice
}

console.log(setPrice()) // NaN
console.log(product.setPrice())

const car = {
    model: "Civic",
    price: 6000,
    disc: 0.15
}

console.log(setPrice.call(car))
console.log(setPrice.apply(car))
console.log(setPrice.apply(product))

console.log(setPrice.call(car, 0.17, "USD$")) // context, parameters
console.log(setPrice.apply(product, [0.20, "CAD$"])) // same but as an array