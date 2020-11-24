import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMeals } from '../actions/meals'
import { Switch, Route } from 'react-router-dom'

import Menus from './Menus'

class Meals extends Component {

    componentDidMount() {
        this.props.fetchMeals()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/menus" component={Menus} />
                    <Route exact path="/meals" component={Meals} />
                    Meals
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ meals }) => ({ meals })

export default connect(mapStateToProps, { fetchMeals })(Meals);