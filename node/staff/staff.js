const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinese = f => f.pais === "China"
const females = f => f.genero === "F"
const smallestSalary = (members, curMember) => {
    return members.salario < curMember.salario ? members : curMember
}


axios.get(url).then(response => {
    const staff = response.data

    // console.log(staff)

    // Chinese woman with the smallest salary
    const funStaff = staff
        .filter(chinese)
        .filter(females)
        .reduce(smallestSalary)
    
        console.log(funStaff)

})