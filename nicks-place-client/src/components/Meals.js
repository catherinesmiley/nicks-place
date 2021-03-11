import React from 'react';

const Meals = ({ menuID, meals, menutypes }) => {
    let mealsList = meals.filter(m => m.menu_id === menuID)

    // console.log("menutypes in meals", menutypes)

    // let menutypesList = menutypes.filter(mt => mt.menu_id === menuID)

    return (
        <div className="meals">
            {mealsList.map(meal => {
                return (<p key={meal.id}>{meal.name} - {meal.price}
                <br />
                    {meal.description}</p>)
            })}
        </div>
    );
};

export default Meals;