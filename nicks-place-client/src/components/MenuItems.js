import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMenuItems } from '../actions/menuItems'

class MenuItems extends Component {

    componentDidMount() {
        this.props.fetchMenuItems()
    }

    render() {
        return (
            <div>
                Menu items!
            </div>
        );
    }
}

const mapStateToProps = ({ menuItems }) => ({ menuItems })

export default connect(mapStateToProps, { fetchMenuItems })(MenuItems);