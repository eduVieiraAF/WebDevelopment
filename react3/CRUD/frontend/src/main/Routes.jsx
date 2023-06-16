/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../components/home/Home";
import UserCRUD from "../components/user/UserCRUD";

export default props => (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users' element={<UserCRUD />} />
        <Route path='*' element={<Home />} />
    </Routes>
)