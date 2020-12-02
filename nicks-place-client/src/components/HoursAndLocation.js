import React from 'react';
import map from '../images/map.jpg'

const HoursAndLocation = () => {
    return (
        <>
            <h1>Hours</h1>
            <h3>Monday</h3>
            <p>Closed</p>
            <h3>Tuesday-Thursday</h3>
            <p>10:30 AM-8 PM</p>
            <h3>Friday & Weekends</h3>
            <p>8 AM-8 PM</p>

            <h1>Location</h1>
            <h3>114 Monument St, Crawfordville, GA 30631</h3>
            <img src={map} height="250" width="415" />
            {/* embed map */}

        </>
    );
};

export default HoursAndLocation;