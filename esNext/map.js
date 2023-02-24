const technologies = new Map()
technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

console.log(technologies.get('react'))
console.log(technologies.get('angular').framework)

const severalKeys = new Map([
    [function () {}, 'function'],
    [{}, 'object'],
    [123, 'number']
])

severalKeys.forEach((value, key) => {
    console.log(key, value)
})

console.log(severalKeys.has(123))

severalKeys.delete(123)

console.log(severalKeys.size)

severalKeys.set(123, 'a')
severalKeys.set(123, 'b') // will override due to key

console.log(severalKeys)