// * Using promise

const http = require('http')

const getClass = group => {
    const url = `http://files.cod3r.com.br/curso-js/turma${group}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ""

            res.on("data", info => {
                result += info
            })

            res.on("end", () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let _names = []
getClass("A").then(students => {
    _names = _names.concat(students.map(a => `A: ${a.nome}`))

    getClass("B").then(students => {
        _names = _names.concat(students.map(b => `B: ${b.nome}`))

        getClass("C").then(students => {
            _names = _names.concat(students.map(c => `C: ${c.nome}`))

            console.log(_names)
        })
    })
})

// * a better way

Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(classes => [].concat(...classes))
    .then(students => students.map(s => `Name: ${s.nome}`))
    .then(names => console.log(names))
    .catch(e => console.log(e.message))

getClass('D').catch(e => console.log(e.message))