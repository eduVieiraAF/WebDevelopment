const cart = ['{"item":"eraser", "price": 1.10}',
'{"item":"pen", "price": 0.20}',
'{"item":"pencil", "price": 0.10}',
'{"item":"notebook", "price": 5.30}']

// return an array with prices

const toObj = json => JSON.parse(json)
const price = product => product.price

const result = cart.map(toObj).map(price)

console.log(result)