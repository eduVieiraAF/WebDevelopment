// * Closure is the scope when declaring a function
// allows the function to handle variables from outside the function within a given scope

// Lexical context in action
const x = "Global"

function outside() {
    const x = "Local"

    function inside() {
        return x
    }

    return inside
}

const myFun = outside()
console.log(myFun())