import React from 'react';
import { Link } from 'react-router-dom'

const Menus = ({ menus }) => {
    const menusList = menus.map((menu, index) => {
        return <div key={menu.id}>
            <Link 
                to={`/menus/${menu.id}`}
                ><h2>{menu.name}</h2></Link>
        </div>
    })
    return (
        <div>{menusList}</div>
    );
};

export default Menus;