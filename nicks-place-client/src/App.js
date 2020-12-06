import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import MenusContainer from './components/MenusContainer'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
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