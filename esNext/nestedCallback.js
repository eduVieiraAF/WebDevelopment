
const http = require('http')

const getClass = (group, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${group}.json`

    http.get(url, res => {
        let result = ""

        res.on("data", info => {
            result += info
        })

        res.on("end", () => {
            callback(JSON.parse(result))
        })
    })
}

let _names = []
getClass("A", students => {
    _names = _names.concat(students.map(a => `A: ${a.nome}`))
    
    getClass("B", students => {
        _names = _names.concat(students.map(b => `B: ${b.nome}`))
    
        getClass("C", students => {
            _names = _names.concat(students.map(c => `C: ${c.nome}`))

            console.log(_names)
        })
    })
})