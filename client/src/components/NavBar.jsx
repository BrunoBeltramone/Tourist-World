import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={'/countries'}> Home </NavLink>
                </li>
                <li>
                    <NavLink to={'/activity'}> Activity </NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}> About </NavLink>
                </li>
            </ul>
        </nav>
    )
}