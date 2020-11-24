import React, { Component } from 'react';

class Meals extends Component {

    componentDidMount() {
        this.props.fetchMeals()
    }

    render() {
        return (
            <div>
                Meals
            </div>
        );
    }
}

export default Meals;