import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMenus } from '../actions/menus'
import { Switch, Route } from 'react-router-dom'

import Meals from './Meals'
import Menus from './Menus'
import Menu from './Menu'
import HoursAndLocation from './HoursAndLocation'

class MenusContainer extends Component {

    componentDidMount() {
        this.props.fetchMenus()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/menus" render={() => <Menus menus={this.props.menus} />} />
                    <Route path="/menus/:id" render={() => <Menu menus={this.props.menus} />} />
                    <Route exact path="/meals" component={Meals} />
                    <Route exact path="/hoursandlocation" component={HoursAndLocation} />
                    {/* hours and location
                    about
                    specials */}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ menus }) => ({ menus })

export default connect(mapStateToProps, { fetchMenus })(MenusContainer);