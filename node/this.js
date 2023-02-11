console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports) // * IMPORTANT

function logThis() {
    console.log("from within a function...", this === module.exports) // * IMPORTANT
                                            // → this "this" is within a different scope  
    console.log(this === global) // now it's true
}

logThis()