import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {

    return (
        <React.Fragment>
            <nav className="navbar">
                <ul className="navbar__ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


