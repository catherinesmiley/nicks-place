import React, { Component } from 'react';

class Meals extends Component {
    render() {
        console.log("props in Meals", this.props)
        return (
            <div>
                Meals
            </div>
        );
    }
}

export default Meals;