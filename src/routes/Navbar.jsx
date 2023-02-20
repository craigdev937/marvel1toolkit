import React from "react";
import "./Navbar.css";
import { NavLink, useLocation, 
    Outlet } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <nav className="navbar">
                <ul className="navbar__ul">
                    <li>
                        <NavLink to="/" 
                            className="navbar__link">
                            {location.pathname === "/" 
                                ? "HOME" : "GO BACK"}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


