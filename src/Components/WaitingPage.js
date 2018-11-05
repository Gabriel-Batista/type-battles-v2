import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionCable } from "react-actioncable-provider";
import { GameAdapters } from "../Adapters/GameAdapters";
import GameActions from "../Actions/GameActions";

import { Redirect } from "react-router-dom";

import PlayArea from "./PlayArea";

class WaitingPage extends Component {
    state = {
        redirect: false,
        seatsTaken: 0,
        createWebSocket: false,
        matchReady: false
    };

    componentDidMount = () => {
        GameAdapters.join().then(res => {
            if (res.error && this.props.matchId === null) {
                this.setState({ redirect: true });
            } else {
                console.log("fetch:", res);
                this.props.updateMatchId(res.id);
                this.setState({
                    seatsTaken: res.seats_taken,
                    createWebSocket: true
                });
            }
        });
    };

    componentDidUpdate = () =>  {
      if (this.state.matchReady !== true && this.state.seatsTaken === 4)  {
        this.setState({
          matchReady: true
        })
      }
    }

    handleReceived = ({ match: res }) => {
        console.log("ActionCable:", res);
        if(res.complete)  {
          this.props.setComplete();
        }
        this.setState({
            seatsTaken: res.seats_taken,
        });
    };

    renderActionCable = () => (
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
        </React.Fragment>
    )

    renderWaitingPage = () => (
        <React.Fragment>
            {this.state.matchReady ? (
                <PlayArea />
            ) : (
                <p>
                    {"waiting for " + (4 - this.state.seatsTaken) + " player/s"}
                </p>
            )}
        </React.Fragment>
    );

    render() {
        return (
            <div>
                {this.state.redirect ? (
                    <Redirect to="/" />
                ) : (
                    <React.Fragment>
                        {this.renderActionCable()}
                        {this.renderWaitingPage()}
                    </React.Fragment>
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
