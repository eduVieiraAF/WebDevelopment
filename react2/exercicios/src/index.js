import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// import { BoaTarde, BoaNoite } from './components/Multiplos'
import Saudacao from './components/Saudacao'


// const title1 = <Primeiro />

const root = document.getElementById('root')

ReactDOM.render(
    <div>
       <Saudacao tipo="Bom dia" nome="Edu"></Saudacao>
    </div>
    , root
    )