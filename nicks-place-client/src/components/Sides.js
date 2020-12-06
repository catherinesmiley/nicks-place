import React from 'react';

const Sides = ({ sides }) => {
    const sidesList = sides.map((side, index) => {
        return <>• {side.name} • </>
    })
    return (
        <div>
            {sidesList}
        </div>
    );
};

export default Sides;