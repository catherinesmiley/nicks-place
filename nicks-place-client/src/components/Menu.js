import React from 'react';
import { useParams } from 'react-router-dom'

import MealsContainer from './MealsContainer'
import Menutypes from './Menutypes'

const Menu = ({ menus, menutypes }) => {
    const { id } = useParams()
    const menu = menus.find(m => m.id === parseInt(id))
    console.log("menu in menu", menu)

    const menutypesList = menutypes.filter(m => m.menu_id === menu.id)

    if (menus.length === 0) return null 


    return (
        <>
            <h1>{menu.name}</h1>
            <h3>{menu.description}</h3>
            <MealsContainer menu={menu} />
            {/* <Menutypes menutypes={menutypesList} menu={menu} /> */}
        </>
    );
};

export default Menu;