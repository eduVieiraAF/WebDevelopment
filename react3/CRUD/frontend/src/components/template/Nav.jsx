/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Nav.css'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Start
            </a>
            <a href="#/users">
                <i className="fa fa-users"> Users</i>
            </a>
        </nav>
    </aside>