import React from 'react'
import "../../assets/styles/Button.css";
import { Link } from "react-router-dom";

export default function Button() {
    return (
        <Link to="/sign-up" >
            <button className="head-button">Sign Up</button>
        </Link>
    )
};
