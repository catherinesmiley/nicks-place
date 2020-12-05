import React from 'react';
import { useParams } from 'react-router-dom'

import MealsContainer from './MealsContainer'
import MenutypesContainer from './MenutypesContainer'

const Menu = ({ menus, menutypes }) => {
    const { id } = useParams()
    const menu = menus.find(m => m.id === parseInt(id))

    const menutypesList = menutypes.filter(m => m.menu_id === menu.id)
    console.log("menutypesList", menutypesList)

    if (menus.length === 0) return null 


    return (
        <>
            <h1>{menu.name}</h1>
            <MealsContainer menu={menu} />
            <MenutypesContainer menutypes={menutypesList} menu={menu} />
        </>
    );
};

export default Menu;