import React, { Component } from "react";
import { GameAdapters } from "../Adapters/GameAdapters";

class WaitingPage extends Component {
    componentDidMount = () => {
        GameAdapters.join().then(console.log);
    };

    render() {
        return <p>waiting for players to join</p>;
    }
}

export default WaitingPage
