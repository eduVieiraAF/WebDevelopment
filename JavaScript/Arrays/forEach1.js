
const approved = ["Beatriz", "Douglas", "Anne", "Elvis"]
approved.forEach(function (name, index) {  // index is always second argument
    console.log(`${index + 1} → ${name}`)
})

approved.forEach(function (name, index, array) {  // third item is the array itself
    console.log(`${index + 1} → ${name}`)
    console.log(array)
})

approved.forEach((it => console.log(it)))

const showApproved = passed => console.log(passed)
approved.forEach(showApproved)