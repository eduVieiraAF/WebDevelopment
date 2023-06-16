/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'user',
    subtitle: 'Registration: Create, Read, Update and Delete'
}

export default class UserCRUD extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Users
            </Main>
        )
    }
}