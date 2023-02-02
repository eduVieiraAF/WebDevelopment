function rand({min = 50, max = 200}) {
    const value = Math.random() * (max - min) + min

    return Math.floor(value)
}

console.log(rand({}))
console.log(rand({max: 400}))
console.log(rand({min: 160}))
console.log(rand({min: 30, max: 45}))