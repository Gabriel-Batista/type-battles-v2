import React from "react";
import { connect } from "react-redux";
import { UserAdapters } from "../Adapters/UserAdapters";
import GameActions from "../Actions/GameActions";

const Results = props => {
    const resetGameReducer = () => {
        UserAdapters.leaveMatch(props.userId);
        props.updateMatchId(null);
    };

    return <React.Fragment>
            {props.complete && props.gameOver ? <React.Fragment>
                    <p>You win!</p>
                    {resetGameReducer()}
                </React.Fragment> : <React.Fragment>
                    <p>You lose!</p>
                    {resetGameReducer()}
                </React.Fragment>}
        </React.Fragment>;
};

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
