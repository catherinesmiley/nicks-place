import React from 'react';

import breakfastquesadilla from '../images/breakfastquesadilla.jpg'
import chickensalad from '../images/chickensalad.jpg'
import grilledchickenplate from '../images/grilledchickenplate.jpg'
import chickenwrap from '../images/chickenwrap.jpg'
import phillycheesesteak from '../images/phillycheesesteak.jpg'
import nachos from '../images/nachos.jpg'
import quesadilla from '../images/quesadilla.jpg'
import tacosalad from '../images/tacosalad.jpg'

const Photos = () => {
    return (
        <>
            <p><img 
                src={breakfastquesadilla} 
                height="250" 
                width="250" 
                alt="breakfast quesadilla" 
            />
            <img 
                src={chickensalad} 
                height="250" 
                width="250" 
                alt="chicken salad" 
            />
            <img 
                src={grilledchickenplate} 
                height="250" 
                width="250" 
                alt="grilled chicken plate" 
            />
            </p>
            <p>
            <img 
                src={chickenwrap} 
                height="250" 
                width="250" 
                alt="chicken wrap" 
            />
            <img 
                src={phillycheesesteak} 
                height="250" 
                width="250" 
                alt="philly cheesesteak" 
            />
            <img 
                src={nachos} 
                height="250" 
                width="250" 
                alt="nachos" 
            />
            </p>
            <img 
                src={quesadilla} 
                height="250" 
                width="250" 
                alt="quesadilla" 
            />
            <img 
                src={tacosalad} 
                height="250" 
                width="250" 
                alt="tacosalad" 
            />
        </>
    );
};

export default Photos;