for (var i = 1; i <= 15; i++) {
    console.log(`→ ${i}`)
}

console.log(i)

//* with var 'i' can be accessed outside of the scope of the for loop

for (let i = 1; i <= 10; i++) {
    console.log(`→ ${i}`)
}

console.log(i) //* the one declared as "var"


const funs = []

for (var j = 1; j <= 10; j++) {
    funs.push(
        function () {
            console.log(`•→ ${j}`)
        }
    )
}

funs[2]() // output "11" because var does not have scope of function
funs[3]() // output "11" because var does not have scope of function

const funs2 = []

for (let i = 1; i <= 15; i++) {
    funs2.push(
        function () {
            console.log(`•→ ${i}`)
        }
    )
}

funs2[4]()
funs2[5]()