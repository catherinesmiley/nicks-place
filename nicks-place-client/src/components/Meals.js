import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMeals } from '../actions/meals'

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

const mapStateToProps = ({ meals }) => ({ meals })

export default connect(mapStateToProps, { fetchMeals })(Meals);