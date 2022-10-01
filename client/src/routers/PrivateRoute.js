import React from "react";
import { Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";


export default function PrivateRoute(props) {

    const { component: Component } = props;

    if (localStorage.getItem("token") === null ||
        jwtDecode(localStorage.getItem("token")).id === null) {
        return <Redirect to="/sign-in" />
    } else {
        return <Component {...props} />
    }
};