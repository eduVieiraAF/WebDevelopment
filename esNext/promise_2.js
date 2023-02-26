// ! Callback hell

setTimeout(function() {
    console.log("Callback running...")
    
    setTimeout(function() {
        console.log("Callback #2 running...")
        
        setTimeout(function() {
            console.log("Callback #3 running...")
        }, 2000)
    }, 3000)
}, 2000)

// * now with Promise

function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("\nPromise running...")
            resolve("\tWait for it!\n")
        }, time)
    })
}

waitFor().then(text => console.log(text))