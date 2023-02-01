const values = [8.3, 7.8, 12.7, 5.6]

console.log(values[0], values[3])

values[10] = 18.66
console.log(values) //* output → [ 8.3, 7.8, 12.7, 5.6, <6 empty items>, 18.66 ]
console.log(values.length)

values.push({id: 45}, false, null, "string")
values.pop()

for (i in values) console.log(values[i])