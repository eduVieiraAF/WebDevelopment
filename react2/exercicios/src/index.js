import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// import { BoaTarde, BoaNoite } from './components/Multiplos'
// import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'


// const title1 = <Primeiro />

const root = document.getElementById('root')

ReactDOM.render(
   <div>
      <Pai nome="Edu" sobrenome="Vieira">
         <Filho nome="Daniel"></Filho>
         <Filho nome="Sofia" sobrenome="Vieira"></Filho>
      </Pai>
   </div>
   , root
)