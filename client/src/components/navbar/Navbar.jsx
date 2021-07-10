import React, { useState } from 'react';
import Button from "./Button";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../../assets/styles/Navbar.css";


export default function Navbar() {
    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const toggleMobileDropdown = () => setClick2(!click2)
    const closeMobileMenu = () => setClick(false)

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

    const extendElement = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
    }

    return (
        <div className="header">
            <Link to="/" className="header-logo" onClick={closeMobileMenu}>
                D BLOG <i class="fas fa-blog"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "header-menu visible" : "header-menu"}>
                <li className="head-item">
                    <Link to="/" className="head-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li
                    className="head-item"
                    onClick={extendElement}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {dropdown && <Dropdown closeMobileMenu={closeMobileMenu} />}
                    <Link
                        to="/topics"
                        className={click2 ? "head-links active" : "head-links"}
                        onClick={toggleMobileDropdown}
                    >
                        Topics <i className="fas fa-caret-down" />
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
                    <Link
                        to="/sign-up"
                        className="head-links-mobile"
                        onClick={closeMobileMenu}
                    >
                        Sign Up
                    </Link>
                </li>
            </ul>
            <Button />
        </div>
    )
};

