import React from 'react';
import Menutype from './Menutype'

const Menutypes = ({ menutypes, menu }) => {
    
    const mealsList = menu.meals.map((meal, index) => {
        return meal
    })

    console.log("menutypes prop in menutypes", menutypes)

    return (
        <div>
            <Menutype meals={mealsList} menutypes={menutypes} />
        </div>
    );
};

export default Menutypes;