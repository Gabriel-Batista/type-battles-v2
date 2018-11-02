import React, { Component } from "react";

import Nav from "./Components/Nav";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import WaitingPage from "./Components/WaitingPage";
import HomePage from "./Components/HomePage";
import PrivateRoute from "./Components/PrivateRoute";

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route component={Nav} />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <PrivateRoute path="/play" component={WaitingPage} />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
