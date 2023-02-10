const makes = ["Mercedes", "Volvo", "BMW", "Audi", "Nissan"]

function print(name, index) {
    console.log(`${ index +1 } → ${ name }`)
}

makes.forEach(print)
makes.forEach(function(make) { console.log(make) })
makes.forEach((make) => console.log(make))