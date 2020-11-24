import React from 'react';
import { useParams } from 'react-router-dom'

import MealsContainer from './MealsContainer'

const Menu = ({ menus }) => {
    const { id } = useParams()
    const menu = menus.find(m => m.id === parseInt(id))

    if (menus.length === 0) return null 

    return (
        <>
            <h2>{menu.name}</h2>
            <MealsContainer menu={menu} />
        </>
    );
};

export default Menu;