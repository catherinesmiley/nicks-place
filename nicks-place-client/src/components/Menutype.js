import React from 'react';

const Menutype = ({ meals, menutypes }) => {
    const menutypeTitles = menutypes.map((menutype, index) => {
        return <div key={menutype.id}>
            <h2>{menutype.title}</h2>
        </div>
    })

    return (
        <div>
            {menutypeTitles}
        </div>
    );
};

export default Menutype;