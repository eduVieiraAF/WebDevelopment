// console.log(global)

global.myApp = {
    greeter() { console.log("I'm everywhere") },
    name: "eduVieiraAF"
}

// console.log(global.myApp)

/** with freeze() to avoid risky changes in the object
 
 global.myApp = Object.freeze({
    greeter() { console.log("I'm everywhere") },
    name: "eduVieiraAF"
})
*/ 