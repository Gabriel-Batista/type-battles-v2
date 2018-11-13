import React, { Component } from "react";
import { connect } from "react-redux";
import { UserAdapters } from "../Adapters/UserAdapters";
import GameActions from "../Actions/GameActions";

class Results extends Component {
    resetGameReducer = () => {
        UserAdapters.leaveMatch(this.props.userId);
        this.props.gameClear();
    };

    componentWillUnmount() {
        this.resetGameReducer();
    }

    render() {
        return (
            <React.Fragment>
                {this.props.complete && this.props.gameOver ? (
                    <React.Fragment>
                        <p>You win!</p>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p>You lose!</p>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        complete: state.game.complete,
        gameOver: state.game.gameOver,
        userId: state.user.userId
    };
};

export default connect(
    mapStateToProps,
    GameActions
)(Results);
