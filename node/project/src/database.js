const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

function saveProduct(item) {
    if (!item.id) item.id = sequence.id
    products[item.id] = item

    return item
}

function getProduct(id) { return products[id] || {} }

function getProducts() { return Object.values(products) }

function deleteProduct(id) {
    const item = products[id]
    delete products[id]

    return item
}

module.exports = { saveProduct, getProduct, getProducts, deleteProduct }