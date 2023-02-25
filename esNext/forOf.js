for (let letter of "What's shaking JavaScripters?") {
    console.log(letter)
}

const ecmaTopics = ["Map", "Set", "Promise"]

for (let it of ecmaTopics) {
    console.log(it)
}

for (let i in ecmaTopics) { // will show indexes due to "in"
    console.log(i)
}

const topics = new Map(
    [
        ["Map", { taught: true }],
        ["Set", { taight: true }],
        ["Promise", { taught: false }]
    ]
)

console.log(topics)

for (let it of topics) {
    console.log(it)
}

for (let it of topics.keys()) {
    console.log(it)
}

for (let it of topics.values()) {
    console.log(it)
}

for (let [key, value] of topics) {
        console.log(key, value)
}

const aSet = new Set(["a", "b", "c"])

for (let i of aSet) {
    console.log(i)
}