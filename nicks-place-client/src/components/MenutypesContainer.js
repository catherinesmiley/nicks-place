import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchMenutypes } from '../actions/menutypes'
import Menutypes from './Menutypes'

class MenutypesContainer extends Component {

    componentDidMount() {
        this.props.fetchMenutypes()
    }

    render() {
        return (
            <div>
                <Menutypes menutypes={this.props.menutypes} />
                {/* menutypeID={this.props.menutype.id} */}
            </div>
        );
    }
}

const mapStateToProps = ({ menutypes }) => ({ menutypes })

export default connect(mapStateToProps, { fetchMenutypes })(MenutypesContainer);