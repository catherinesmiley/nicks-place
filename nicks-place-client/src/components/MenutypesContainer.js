import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchMenutypes } from '../actions/menutypes'
import Menutypes from './Menutypes'

class MenutypesContainer extends Component {

    componentDidMount() {
        this.props.fetchMenutypes()
    }

    render() {
        console.log("menu id", this.props.menu.id)
        return (
            <div>
                hi
            </div>
        );
    }
}

const mapStateToProps = ({ menutypes }) => ({ menutypes })

export default connect(mapStateToProps, { fetchMenutypes })(MenutypesContainer);