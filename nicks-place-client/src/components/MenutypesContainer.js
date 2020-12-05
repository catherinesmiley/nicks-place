import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchMenutypes } from '../actions/menutypes'

class MenutypesContainer extends Component {

    componentDidMount() {
        this.props.fetchMenutypes()
    }

    render() {
        return (
            <div>
                Menu Types
            </div>
        );
    }
}

const mapStateToProps = ({ menutypes }) => ({ menutypes })

export default connect(mapStateToProps, { fetchMenutypes })(MenutypesContainer);