import React from 'react';

import Meals from './Meals'

const Menutype = ({ meals, menutypes }) => {

    console.log("menutypes in menutype", menutypes)
    console.log("meals in menutype", meals)

    return (
        <>
            {menutypes.map(menutype => {
                return (<div key={menutype.id}><h2>{menutype.title}</h2></div>)
            })}
            <Meals meals={meals} menutypes={menutypes} />
        </>
    );
};

export default Menutype;