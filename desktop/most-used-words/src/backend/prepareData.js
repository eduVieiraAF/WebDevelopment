module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const data = rows.filter(filterValid)
            
            resolve(data)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

function filterValid(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes("-->")

    return notNumber && notEmpty && notInterval
}