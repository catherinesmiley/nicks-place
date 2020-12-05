import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Meals from './Meals'
import Menus from './Menus'
import Menu from './Menu'
import HoursAndLocation from './HoursAndLocation'
import Specials from './Specials'
import About from './About'
import { fetchMenus } from '../actions/menus'
import { fetchMenutypes } from '../actions/menutypes'

class MenusContainer extends Component {

    componentDidMount() {
        this.props.fetchMenus()
        this.props.fetchMenutypes()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/menus" render={() => <Menus menus={this.props.menus} />} />
                    <Route path="/menus/:id" render={() => <Menu menus={this.props.menus} menutypes={this.props.menutypes} />} />
                    <Route exact path="/meals" component={Meals} />
                    <Route exact path="/hoursandlocation" component={HoursAndLocation} />
                    <Route exact path="/specials" component={Specials} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ menus, menutypes }) => ({ menus, menutypes })

export default connect(mapStateToProps, { fetchMenus, fetchMenutypes })(MenusContainer);