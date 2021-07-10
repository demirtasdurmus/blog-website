import React, { useEffect, useState } from 'react'
import "../../assets/styles/Button.css";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";


export default function Button() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [activeUser, setActiveUser] = useState("");

    const checkLogin = () => {
        if (localStorage.getItem("token") !== null) {
            let token = localStorage.getItem("token");
            let userData = jwtDecode(token);
            if (userData.id) {
                setLoggedIn(true)
            }
        }
    };
    const onLogout = () => {
        localStorage.removeItem("token");
        window.location.assign('/sign-in');
    }

    const getUser = () => {
        if (localStorage.getItem("token") !== null) {
            let token = localStorage.getItem("token");
            let userData = jwtDecode(token);
            const userId = userData.id
            axios.post(`/api/users/get-user/${userData.id}`)
                .then((res) => {
                    console.log(res.data);
                    console.log();
                    setActiveUser(res.data.user.name)
                })
        }
    }

    useEffect(() => {
        getUser();
        checkLogin();
    }, [isLoggedIn, activeUser])


    return (
        <>
            {isLoggedIn === false ?
                <Link to="/sign-in" >
                    <button className="head-button">Sign In</button>
                </Link>
                :
                <div>
                    <p className="text-white mt-3">{activeUser && activeUser}<button className="head-button ml-3" onClick={onLogout}>Logout</button></p>

                </div>


            }
        </>

    )
};


