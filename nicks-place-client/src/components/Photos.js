import React from 'react';

import breakfastquesadilla from '../images/breakfastquesadilla.jpg'
import chickensalad from '../images/chickensalad.jpg'
import grilledchickenplate from '../images/grilledchickenplate.jpg'
import chickenwrap from '../images/chickenwrap.jpg'
import phillycheesesteak from '../images/phillycheesesteak.jpg'

const Photos = () => {
    return (
        <div>
            <img src={breakfastquesadilla} height="250" width="250" alt="breakfast quesadilla" />
            <img src={chickensalad} height="250" width="250" alt="chicken salad" />
            <img src={grilledchickenplate} height="250" width="250" alt="grilled chicken plate" />
            <img src={chickenwrap} height="250" width="250" alt="chicken wrap" />
            <img src={phillycheesesteak} height="250" width="250" alt="philly cheesesteak" />
        </div>
    );
};

export default Photos;