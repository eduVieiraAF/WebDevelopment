//* Example 4: Grouping Objects by a property

let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
  ]

function groupBy(objectArray, property) {
    return objectArray.reduce(function(accumulator, currentObject) {
        let key = currentObject[property]

        if (!accumulator[key]) accumulator[key] = []

        accumulator[key].push(currentObject)

        return accumulator
    }, {})
}

const groupedPeople = groupBy(people, "age")

console.log(groupedPeople)