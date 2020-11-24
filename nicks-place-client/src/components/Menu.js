import React, { Component } from 'react';

import MenuItems from './MenuItems'

class Menu extends Component {
    render() {
        return (
            <div>
                This is the menu.
                <MenuItems />
            </div>
        );
    }
}

export default Menu;