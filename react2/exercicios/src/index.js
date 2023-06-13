import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'
import { BoaTarde, BoaNoite } from './components/Multiplos'


// const title1 = <Primeiro />

const root = document.getElementById('root')

ReactDOM.render(
    <div>
        <BomDia nome="Eduardo" idade="41"/>
        <BoaTarde nome="Edu"></BoaTarde>
        <BoaNoite nome="Edu"></BoaNoite>
    </div>
    , root
    )