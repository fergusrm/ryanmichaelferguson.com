import React from "react";
import { NavLink } from "react-router-dom";

import Resume from "../../assets/resume/ferguson_resume.pdf";
import styles from "./Header.module.scss";

function Header() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <a href={Resume}>Resume</a>
                </li>
            </ul>
        </nav>
    )
};

export default Header;