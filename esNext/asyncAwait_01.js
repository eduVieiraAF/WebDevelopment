function waitFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, time)
    })
}

waitFor(3000)
    .then(() => console.log("Promise #1 running..."))
    .then(waitFor)
    .then(() => console.log("Promise #2 running..."))
    .then(waitFor)
    .then(() => console.log("Promise #3 running..."))

function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


async function execute() {
    let value = await returnValue()

    await waitFor() // await used with a promise - no need for then
    console.log(`Async && Await #1 ${value}`)

    await waitFor()
    console.log(`Async && Await #2 ${value + 1}`)

    await waitFor()
    console.log(`Async && Await #3 ${value + 2}`)

    return value * 3
}

async function run() {
    const outcome = await execute()

    console.log(outcome)
}

run()

