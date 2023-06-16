/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Main.css'
import Header from "./Header";

export default props =>
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content">
            • Content
        </main>
    </React.Fragment>