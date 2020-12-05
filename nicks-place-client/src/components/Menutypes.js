import React from 'react';

const Menutypes = ({ menutypes }) => {
    const menutypesList = menutypes.map((menutype, index) => {
        return <div key={menutype.id}>
            <h2>{menutype.title}</h2>
        </div>
    })
    return (
        <div>{menutypesList}</div>
    );
};

export default Menutypes;