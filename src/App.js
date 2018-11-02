import React, { Component } from "react";

import GameInput from "./Components/GameInput";
import Paragraph from "./Components/Paragraph";
import Nav from "./Components/Nav";

import { ActionCable } from "react-actioncable-provider";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import PlayArea from "./Components/PlayArea";
import HomePage from "./Components/HomePage";
import PrivateRoute from "./Components/PrivateRoute";

import { Button } from "semantic-ui-react";

class App extends Component {
    handleReceived = res => {
        console.log(res);
    };

    render() {
        return (
            <Router>
                <div>
                    <Route component={Nav} />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <PrivateRoute path="/play" component={PlayArea} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
