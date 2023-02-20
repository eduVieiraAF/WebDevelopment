const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {

}

function saveProduct(item) {
    if (!item.if) item.id = sequence.id
    products[item.id] = item

    return item
}

function getProduct() { return products[id] || {} }

function getProducts() { return Object.values(products) }

module.exports = { saveProduct, getProduct, getProducts }