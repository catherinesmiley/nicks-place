import React from 'react';
import { Link } from 'react-router-dom'

import Search from './Search'

const Menus = ({ menus }) => {
    const menusList = menus.map((menu, index) => {
        return <div key={menu.id}>
            <Link 
                style={{ color: '#cf0015' }}
                to={`/menus/${menu.id}`}
                ><h2>{menu.name}</h2>
                </Link>
        </div>
    })
    // console.log(menus)
    return (
        <>
            <Search />
            <div>{menusList}</div>
            <br />
            <hr />
            <div>
                <h4>FOOD ALLERGY NOTICE</h4>
                <p>PLEASE BE ADVISED THAT FOOD PREPARED HERE MAY CONTAIN THESE INGREDIENTS:
                    <br /> 
                    MILK, EGGS, WHEAT, SOYBEAN, PEANUTS, TREE NUTS, FISH AND SHELLFISH</p>
            </div>
        </>
    );
};

export default Menus;