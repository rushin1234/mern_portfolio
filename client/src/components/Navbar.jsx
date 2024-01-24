import { NavLink } from "react-router-dom"

import './Navbar.css'
import { useState } from "react"

export const Navbar = () => {

    const [showlist, setshowlist] = useState(true)
    const handleClick = () => {
        setshowlist(!showlist)
    }

    return (
        <>
            <header>
                <div className="nav-container">
                    <div className="logo-brand">
                        <NavLink to="/">RushiTechnical</NavLink>
                    </div>

                    <ul
                        style={
                            showlist ? { transform: "translate(0, 0)" } :
                                { transform: "translate(0, -150%)" }
                        }
                    >
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>

                    <i class="fa-solid fa-bars" id="menu" onClick={handleClick}></i>
                </div>
            </header>
        </>
    )
}