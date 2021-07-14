import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../assets/styles/Navbar.css";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Dropdown from "./Dropdown";
import Button from "./Button";


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [activeUser, setActiveUser] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const extendElement = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
    };

    const onMouseEnter = () => {
        if (window.innerWidth < 993) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 993) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    const checkLogin = () => {
        if (localStorage.getItem("token") !== null) {
            let token = localStorage.getItem("token");
            let userData = jwtDecode(token);
            if (userData.id) {
                setLoggedIn(true)
            }
        }
    };

    const getUser = () => {
        if (localStorage.getItem("token") !== null) {
            let token = localStorage.getItem("token");
            let userData = jwtDecode(token);
            const userId = userData.id
            axios.post(`/api/users/get-user/${userData.id}`)
                .then((res) => {
                    setActiveUser(res.data.user.name)
                })
        }
    };

    useEffect(() => {
        getUser();
        checkLogin();
    }, [isLoggedIn, activeUser])

    return (
        <div className="header">
            <Link to="/" className="header-logo" onClick={closeMobileMenu}>
                D BLOG <i className="fas fa-blog"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "header-menu visible" : "header-menu"}>
                <li
                    className="head-item"
                >
                    <Link
                        to="/blog"
                        className="head-links"
                        onClick={closeMobileMenu}
                    >
                        Blog
                    </Link>
                </li>
                <li className="head-item">
                    <Link
                        to="/about"
                        className="head-links"
                        onClick={closeMobileMenu}
                    >
                        About
                    </Link>
                </li>
                <li className="head-item">
                    <Link
                        to="/contact-us"
                        className="head-links"
                        onClick={closeMobileMenu}
                    >
                        Contact Us
                    </Link>
                </li>
                <li>
                    {isLoggedIn === false ?
                        <Link
                            to="/sign-in"
                            className="head-links-mobile"
                            onClick={closeMobileMenu}
                        >
                            Sign In
                        </Link>
                        :
                        <li
                            onClick={extendElement}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <p className="active-user-mobile text-white">{activeUser && activeUser}<i className="fas fa-caret-down" /></p>
                            {dropdown && <Dropdown />}
                        </li>
                    }
                </li>
            </ul>
            <Button isLoggedIn={isLoggedIn} activeUser={activeUser} />
        </div>
    )
};

