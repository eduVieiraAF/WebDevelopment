/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from "react";
import './App.css'
import Main from "../components/template/Main";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import Logo from "../components/template/Logo";

export default props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
    </div>