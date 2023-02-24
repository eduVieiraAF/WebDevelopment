function toBRL(parts, ... values) {
    const results = []

    values.forEach((value, index) => {
        value = isNaN(value) ? value : `R$${value.toFixed(2)}`

        results.push(parts[index], value)
    })

    return results.join("")
}

const price = 45.8478
const layerWay = 16
console.log(toBRL `1 time payment ${price} or 3 payments of ${layerWay}`)