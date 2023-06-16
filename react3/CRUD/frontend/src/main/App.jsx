/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
// import Main from "../components/template/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Routes from "./Routes";
import Footer from "../components/template/Footer";

export default (props) => 
  <BrowserRouter>
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Routes />
      <Footer></Footer>
    </div>
  </BrowserRouter>

