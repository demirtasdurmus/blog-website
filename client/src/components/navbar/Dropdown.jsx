import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../assets/styles/Dropdown.css";


export default function Dropdown({ closeMobileMenu }) {
    const [click, setClick] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.assign('/sign-in');
    }

    return (
        <div className="d-flex justify-content-center">
            <ul
                onClick={closeMobileMenu}
                className={click ? "sub-topics clicked" : "sub-topics"}
            >
                <li key={0}>
                    <Link
                        to="/account"
                        className="sub-topic-link"
                        onClick={() => setClick(false)}
                    >
                        <i class="far fa-user"></i>
                        Account
                    </Link>
                </li>

                <li
                    key={1}
                    className="sub-topic-link"
                    onClick={handleLogout}
                >
                    <i class="fas fa-sign-out-alt"></i>
                    Logout
                </li>
            </ul>

        </div>
    )
}
