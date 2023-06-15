/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Logo.css'
import logo from '../../assets/imgs/logo.png'

export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
