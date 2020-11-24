import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchMeals } from '../actions/meals'
import Meals from './Meals'

class MealsContainer extends Component {

    componentDidMount() {
        this.props.fetchMeals()
    }

    render() {
        return (
            <div>
                <Meals menuID={this.props.menu.id} meals={this.props.meals} />
            </div>
        );
    }
}

const mapStateToProps = ({ meals }) => ({ meals })

export default connect(mapStateToProps, { fetchMeals })(MealsContainer);