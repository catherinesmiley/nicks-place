import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import MenusContainer from './components/MenusContainer'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <MenusContainer />
                </div>
            </Router>

        );
    }
}

export default App;