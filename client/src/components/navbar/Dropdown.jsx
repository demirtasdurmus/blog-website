import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "../../assets/styles/Dropdown.css";


export default function Dropdown({ closeMobileMenu }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <div>
            <ul
                onClick={closeMobileMenu}
                className={click ? "sub-topics clicked" : "sub-topics"}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={item.cName}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
