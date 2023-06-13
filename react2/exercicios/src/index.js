import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'

// const title1 = <Primeiro />
const bomDia = <BomDia nome="Eduardo" idade="41"/>
const root = document.getElementById('root')

ReactDOM.render(bomDia, root)