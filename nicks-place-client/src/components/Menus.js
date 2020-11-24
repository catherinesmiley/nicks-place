import React from 'react';

const Menus = ({ menus }) => {
    const menusList = menus.map((menu, index) => {
        return <div key={menu.id}>
            <h2>{menu.name}</h2>
        </div>
    })
    return (
        <div>{menusList}</div>
    );
};

export default Menus;