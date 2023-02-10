function purchase(job1, job2) {
    const getIceCream = job1 || job2
    const get50InchTV = job1 && job2
    // ? const get32InchTV = !!(job1 ^ job2) bitwise operator
    const get32InchTV = job1 != job2
    const stayHealthy = !getIceCream

    return { getIceCream, get50InchTV, get32InchTV, stayHealthy }
}

console.log(purchase(true, true))
console.log(purchase(true, false))
console.log(purchase(false, true))
console.log(purchase(false, false))