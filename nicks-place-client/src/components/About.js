import React from 'react';

import chefnick from '../images/chefnick.jpg'

const About = () => {
    return (
        <div className="about">
            <h1>About Nick's Place</h1>
            <p>Nick's Place serves fresh, locally-sourced, delicious Southern comfort food. We opened on November 17, 2020, after operating as Mama Chucha's Cafe for over 4 years. Nick's Place is a tribute to Mama Chucha, Chef Nick's beloved late mother. We're located just under 3 miles off I-20 in Crawfordville and we promise it's worth the trip! Hope to see you soon!</p>
            <hr />
            <h1>About Chef Nick</h1>
            <img src={chefnick} height="250" width="250" alt="chef nick" />
            <p>Chef Nick was born and raised in Mexico City. He served as Head Chef in several hotels in Texas and the Washington DC metro area before opening Mama Chucha's Cafe in 2016.</p>
        </div>
    );
};

export default About;