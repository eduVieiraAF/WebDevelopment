/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Main.css'
import Header from "./Header";

export default props =>
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content container-fluid">
            <div className="p-4 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>