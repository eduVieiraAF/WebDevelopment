
// * Example #1
function registerPhone1() {
    const phone = {
        brandName: "ASUS",
        screenSize: {
            vertical: 155,
            horizontal: 77
        },
        battery: 5000,
        call: () => console.log("Calling...")
    }
    return phone
}

console.log(registerPhone1())

// * Example #2
function registerPhone2() {
    return {
        brandName: "ASUS",
        screenSize: {
            vertical: 155,
            horizontal: 77
        },
        battery: 5000,
        call: () => console.log("Calling...")
    }
} // hard coded and tough to alter values so parameters should apply

console.log(registerPhone2())

// * Example #3
function registerPhone3(brandName, screenSize, battery) {
    return {
        brandName: brandName, // key and value have the same name it's not necessary to do "brandName: brandName", only "brandName"
        screenSize: screenSize,
        battery: battery,
        call: contact => console.log(`Calling ${contact}...`)
    }
}

const asus = registerPhone3("Asus", "155x77", "5000")
const motorola = registerPhone3("Motorola", "185x88", "9000")
console.log(registerPhone3())
console.log(asus, motorola)
asus.call()
asus.call("Edu")
motorola.call("Daniel")
