import React from 'react';
import { useParams } from 'react-router-dom'

const Menu = ({ menus }) => {
    const { id } = useParams()
    const menu = menus.find(m => m.id === parseInt(id))

    if (menus.length === 0) return null 

    return (
        <div>
            <h2>{menu.name}</h2>
        </div>
    );
};

export default Menu;