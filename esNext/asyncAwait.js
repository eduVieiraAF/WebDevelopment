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

// * simplifyy the use of Primise

let fetchStudent = async () => {
    const classA = await getClass('A')
    const classB = await getClass('B')
    const classC = await getClass('C')

    return [].concat(classA, classB, classC)
} // return an async function object

fetchStudent()
    .then(student => student.map(s => s.nome))
    .then(names => console.log(names))