import React from 'react';
import Menutype from './Menutype'

const Menutypes = ({ menutypes, menu }) => {
    
    const mealsList = menu.meals.map((meal, index) => {
        return meal
    })

    return (
        <div>
            <Menutype meals={mealsList} menutypes={menutypes} />
        </div>
    );
};

export default Menutypes;