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
