// * Function which returns an object

/*
const prod1 = {
    name: "Iron man t-shirt",
    price: 7.90,
    sizes: ["S", "M", "L", "XL"]
}

const prod2 = {
    name: "War Machine t-shirt",
    price: 6.90,
    sizes: ["S", "M", "L", "XL"]

}*/ //* Instead of doing this, use factory ↓

// Simple factory function as an example
function createPerson() {
    return {
        name: "Edu",
        familyName: "Vieira"
    }
}

// console.log(createPerson())

function createProduct(item, price, size) {
    return {
        item,
        price,
        size,
        discount: 0.05
    }
}

console.log(createProduct("Iron man t-shirt", 7.90.toFixed(2), "M"))
console.log(createProduct("War Machine t-shirt", 6.90.toFixed(2), "M"))