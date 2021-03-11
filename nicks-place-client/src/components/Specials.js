import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchSides } from '../actions/sides'
import Sides from './Sides'

class Specials extends Component {

    componentDidMount() {
        this.props.fetchSides()
    }

    render() {
        return (
            <>
                <h1>Weekly Specials</h1>
                <h4>$8.50 • Served with cornbread or toast, a drink, and choice of 2 sides</h4>
                <hr />
                <h2>Tuesday</h2>
                <p>Pork Chop - fried or grilled</p>
                <h2>Wednesday</h2>
                <p>Pork Ribs</p>
                <h2>Thursday</h2>
                <p>Meatloaf</p>
                <h2>Friday</h2>
                <p>Hamburger Steak</p>
                <hr />
                <div className="sides">
                    <h2>Sides</h2>
                    <Sides sides={this.props.sides} />
                </div>
            </>
        );
    };
}

const mapStateToProps = ({ sides }) => ({ sides })

export default connect(mapStateToProps, { fetchSides })(Specials);