

// * creating personal for each
const approved = ["Beatriz", "Douglas", "Anne", "Elvis"]
myForEach(approved)

Array.prototype.myForEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

approved.myForEach2(function (name, index) {  // index is always second argument
    console.log(`${index + 1} → ${name}`)
})

approved.myForEach2(it => console.log(`• ${it}`))

function myForEach(array) {
    for (let i in array) {
        console.log(`my own for each #1 → ${array[i]}`)
    }
}