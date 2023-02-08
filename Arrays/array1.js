// console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array("Sasha", "Dennis", "Carlos")
approved = ["Beatriz", "Douglas", "Anne"] // recommended way to create an array

console.log(approved)

console.log(approved[0])
console.log(approved[3]) // does not cause a crash

approved[3] = "Justin"
approved.push("Nick") // recommend way to add an element to an array
approved[9] = "Paul" // 4 items will be empty in this case (also will return as undefined)

console.log(approved)
console.log(approved.length)
console.log(approved[7] === undefined)

console.log("••••••••••••••")

approved.sort()
approved.forEach(it => console.log(it))

console.log("••••••••••••••")

delete approved[1]
console.log(approved[1]) // undefined
console.log("••••••••••••••")
approved.forEach(it => console.log(it))

approved[1] = "Juan"
console.log(approved)

console.log("••••••••••••••")

approved.splice(1, 1) //will delete index 1 and only 1 elemente (second argument)
// it's possible to add elements with splice(index, elements to delete, "add element 1", "add element 2")
console.log(approved)