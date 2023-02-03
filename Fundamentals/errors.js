function shout(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        handleError(e)
    } finally {
        console.log("Exiting code...")
    }
}

function handleError(error) { 
    //throw new Error(`\n\t...something went wrong :\\ \n\t\t\t${error}`) 
    throw {
        name: error.name,
        msg: error.msg,
        date: new Date
    }
}

const obj = { nome: "dude" }
shout(obj)