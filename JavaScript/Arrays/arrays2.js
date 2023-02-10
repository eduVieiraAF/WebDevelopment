//* Important methods

const pilots = ["Vettel", "Alonso", "Raikonen", "Massa"]
pilots.pop() // Removes last element "Massa"
printArray(pilots)

divider()

pilots.push("Verstappen") // adds to the last index
printArray(pilots)

divider()

pilots.shift() // removes 1st element "Vettel"
printArray(pilots)

divider()

pilots.unshift("Senna") // adds to the first index
printArray(pilots)

divider()

//* splice() can both add and remove elements

pilots.splice(2, 0, "Hamilton", "Massa") // adds to index 2, removing 0, the elements "Hamilton" and "Massa"                                                            //bumping down the other elements
printArray(pilots)

divider()

pilots.splice(3, 1) // removes at index 3 ("Massa"), 1 element
printArray(pilots)

divider()

const somePilots1 = pilots.slice(2) // returns a new array starting at index 2
printArray(somePilots1)

divider()

const somePilots2 = pilots.slice(0, 3) // new array starting at index 0 till before index 3
printArray(somePilots2)


// **********************************************
function printArray(array){ array.forEach(it => console.log(it)) }
function divider() { 
    console.log()
    console.log("••••••••••••••••••••••••••••••••••••••••••••••••••••••") 
    console.log()
}


