import React from 'react';
import nicksplacelogo from '../images/nicksplacelogo.jpg'

const Home = () => {
    return (
        <div>
            <img src={nicksplacelogo} height="250" width="250" alt="logo" />;
            <h1>Welcome to Nick's Place!</h1>
            <h3>In Memory of Mama Chucha</h3>
        </div>
    );
};

export default Home;