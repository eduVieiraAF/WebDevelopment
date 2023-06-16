/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
// import Main from "../components/template/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "./App.css";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import Home from "../components/home/Home";

export default (props) => (
  <div className="app">
    <Logo></Logo>
    <Nav></Nav>
    <Home></Home>
    <Footer></Footer>
  </div>
);
