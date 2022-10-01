import React, { useState } from 'react'
import "../../assets/styles/Button.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";


export default function Button({ isLoggedIn, activeUser }) {
    const [dropdown, setDropdown] = useState(false);

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
    };

    return (
        <div>
            {isLoggedIn === false ?
                <Link to="/sign-in" >
                    <button className="head-button">Sign In</button>
                </Link>
                :
                <li
                    onClick={extendElement}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <p className="active-user text-white">{activeUser && activeUser}<i className="fas fa-caret-down" /></p>
                    {dropdown && <Dropdown />}
                </li>
            }
        </div>
    )
};
