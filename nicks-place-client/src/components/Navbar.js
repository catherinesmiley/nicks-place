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
            <br />
        </div>
    );
};

export default Navbar;