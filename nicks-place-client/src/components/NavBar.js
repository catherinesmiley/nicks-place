import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <ul id="navbar">
                <li>
                    <NavLink 
                        to="/"
                        exact
                    >Home • </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/menus"
                        exact
                    >Menus • </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/specials"
                        exact
                    >Weekly Specials • </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/hoursandlocation"
                        exact
                    >Hours & Location • </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        exact
                    >About • </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/photos"
                        exact
                    >Photos</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;