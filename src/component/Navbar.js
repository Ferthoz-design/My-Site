import "../component/Navbar.css"
import React from 'react';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
 import { handleClick } from "@testing-library/user-event/dist/click";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scrollY", changeColor);
    return (
        <div className="Header" >
            <Link to="/">
                <h1>Website</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>
                <li>
                    <Link to="/Contact">contact</Link>
                </li>
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#000" }} />)}


            </div>
        </div>
    )
}
export default Navbar;
