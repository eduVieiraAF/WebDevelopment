const items = [
    {name: "Banana", price: 3.72},
    {name: "Pear", price: 4.15},
    {name: "Grapes", price: 2.94},
    {name: "Apples", price: 1.80},
]

let totalPrice = 0
items.forEach(it => totalPrice += it.price)
console.log(totalPrice.toFixed(2))

//* now with reduce

const totalPrice2 = items.reduce((total, item) => total + item.price)
console.log(totalPrice2.toFixed(2))