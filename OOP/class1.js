class Lancamento {
    constructor(nome = "any", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancementos) {
        lancementos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento("Salário", 12000)
const contaLuz = new Lancamento("Luz", -134)
const contaAgua = new Lancamento("Água", -64)
const contaGas = new Lancamento("Gás", -85)
const mercado = new Lancamento("Mercado", -987)
const escola = new Lancamento("Escola", -1015)
const cc = new Lancamento("C. crédito", -560)
const outros = new Lancamento("Outros", 570)

const contas = new CicloFinanceiro(3, 2023)
contas.addLancamentos(
    salario,
    contaLuz,
    contaAgua,
    contaGas,
    mercado,
    escola,
    cc,
    outros
)

console.log(contas.sumario())
