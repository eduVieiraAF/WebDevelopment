// * does not accepet repetition and is not indexed

const teams = new Set()

teams.add("Brazil")
teams.add("Canada")
teams.add("USA")
teams.add("Argentina").add("Uruguay").add("Mexico")
teams.add("Canada") // will not repeat

teams.forEach(it => console.log(it))
console.log(teams.size)
console.log(teams.has("France") || "not found")

teams.delete("USA")

teams.forEach(it => console.log(it))

const names = ["Dennis", "Larry", "Martha", "Larry"]
const nameSet = new Set(names) // will not repeat "Larry"
console.log(nameSet)