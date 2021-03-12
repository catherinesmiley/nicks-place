import React from 'react';

import Map from './Map'

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
            <hr />
            <h1>Location</h1>
            <h3>115 Broad St, Crawfordville, GA 30631</h3>
            <Map />

        </>
    );
};

export default HoursAndLocation;