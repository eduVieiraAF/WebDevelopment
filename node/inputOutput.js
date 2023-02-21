const annonymous = process.argv.indexOf('-a') !== -1
console.log(annonymous)

if (annonymous) {
    process.stdout.write("Yo what up\n")
    
    process.exit()
} else {
    process.stdout.write("Type in your name: ")
    process.stdin.on('data', data => {
        const name = data.toString().replace("\n", "")
        
        process.stdout.write(`Suup ${data}\n`)

        process.exit()
    })
}
