/* eslint-disable no-empty-character-class */

module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const data = rows
                .filter(filterValid)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(" ")
                .map(word => word.toLowerCase())
                .map(str => str.charAt(0).toUpperCase() + str.slice(1))
                .map(quotes => quotes.replace("\"", ""))

            resolve(data)
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}

function filterValid(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes("-->")
    const notLink = !row.includes("www")

    return notNumber && notEmpty && notInterval && notLink
}


function removePunctuation(row) {
    return row.replace(/[,?!:;.-]/g, "")
}


function removeTags(row) {
    return row.replace(/(<[^>]+)>/g, "").trim()
}

function mergeRows(fullText, rowText) {
    return `${fullText} ${rowText}`
}