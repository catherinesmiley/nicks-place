import React from 'react';

const Meals = ({ menuID, meals }) => {
    let mealsList = meals.filter(m => m.menu_id === menuID)

    return (
        <>
            {mealsList.map(meal => {
                return (<p key={meal.id}>{meal.name} - {meal.price}
                <br />
                    {meal.description}</p>)
            })}
        </>
    );
};

export default Meals;