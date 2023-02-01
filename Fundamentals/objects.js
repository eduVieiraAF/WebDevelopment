const prod1 = {}

prod1.name = "Black Shark 2"
prod1.price = 978.90

console.log(prod1)

const prod2 = {
    name: "T-shirt",
    price: 8.50,
    size: {
        s: "small",
        m: "medium",
        l: "large",
        xl: "Extra Large"
    },

    color: [
        "pink",
        "red",
        "blue",
        "black",
        "white"
    ]
}

console.log(prod2)
console.log(prod2.size.xl)
console.log(prod2.color[2])