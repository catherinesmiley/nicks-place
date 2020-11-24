import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMenus } from '../actions/menus'
import { Switch, Route } from 'react-router-dom'

import Meals from './Meals'
import Menus from './Menus'

class MenusContainer extends Component {

    componentDidMount() {
        this.props.fetchMenus()
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

const mapStateToProps = ({ menus }) => ({ menus })

export default connect(mapStateToProps, { fetchMenus })(MenusContainer);