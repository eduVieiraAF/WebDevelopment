const value = "Global"

function myFun() {
    console.log(value)
}

function exec() {
    const value = "Local"
    myFun() // output → "Global" as this function carries the context from outside exec()
    console.log(value) // output → "Local" as this function carries the context from within exec()
}

exec()