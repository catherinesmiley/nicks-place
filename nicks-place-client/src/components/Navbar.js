import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink 
                to="/"
                exact
            >Home</NavLink>
            <br />
            <NavLink
                to="/menus"
                exact
            >Menus</NavLink>
            <br />
            <NavLink
                to="/specials"
                exact
            >Weekly Specials</NavLink>
            <br />
            <NavLink
                to="/hoursandlocation"
                exact
            >Hours & Location</NavLink>
            <br />
            <NavLink
                to="/about"
                exact
            >About</NavLink>
            <br />
            <br />
        </div>
    );
};

export default Navbar;