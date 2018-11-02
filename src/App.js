import React, { Component } from "react";

import GameInput from "./Components/GameInput";
import Paragraph from "./Components/Paragraph";
import Nav from "./Components/Nav";

import { ActionCable } from "react-actioncable-provider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlayArea from "./Components/PlayArea";
import HomePage from "./Components/HomePage";

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
                        <Route path="/play" exact component={PlayArea} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
