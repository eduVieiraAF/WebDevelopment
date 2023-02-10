Array.prototype.map2 = function(callback) {
    const newArray = []

    for (i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}


const cart = ['{"item":"eraser", "price": 1.10}',
'{"item":"pen", "price": 0.20}',
'{"item":"pencil", "price": 0.10}',
'{"item":"notebook", "price": 5.30}']

// return an array with prices

const toObj = json => JSON.parse(json)
const price = product => product.price

const result = cart.map2(toObj).map2(price)

console.log(result)