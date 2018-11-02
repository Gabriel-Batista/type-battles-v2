import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionCable } from "react-actioncable-provider";
import { GameAdapters } from "../Adapters/GameAdapters";
import GameActions from "../Actions/GameActions";

import { Redirect } from "react-router-dom";

class WaitingPage extends Component {
    state = {
        redirect: false,
        seatsTaken: 0,
        createWebSocket: false
    };

    componentDidMount = () => {
        GameAdapters.join().then(res => {
            if (res.error && this.props.matchId === null) {
                this.setState({ redirect: true });
            } else {
                console.log("fetch:", res);
                this.props.updateMatchId(res.id);
                this.setState(
                    {
                        seatsTaken: res.seats_taken
                    },
                    () => this.setState({ createWebSocket: true })
                );
            }
        });
    };

    handleReceived = res => {
        console.log("ActionCable:", res);
        this.setState({
            seatsTaken: res.match.seats_taken
        });
    };

    renderWaitingPage = () => (
        <React.Fragment>
            {this.state.createWebSocket ? (
                <ActionCable
                    channel={{
                        channel: "MatchesChannel",
                        match_id: this.props.matchId
                    }}
                    onReceived={this.handleReceived}
                />
            ) : null}
            <p>{"waiting for " + (4 - this.state.seatsTaken) + " player/s"}</p>
        </React.Fragment>
    );

    render() {
        return (
            <div>
                {this.state.redirect ? (
                    <Redirect to="/" />
                ) : (
                    this.renderWaitingPage()
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        matchId: state.game.matchId
    };
};

export default connect(
    mapStateToProps,
    GameActions
)(WaitingPage);
