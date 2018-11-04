import React from "react";
import { connect } from "react-redux";

const Results = props => {
    return (
        <React.Fragment>
            {props.complete && props.gameOver ? (
                <p>You win!</p>
            ) : (
                <p>You lose!</p>
            )}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        complete: state.game.complete,
        gameOver: state.game.gameOver
    };
};

export default connect(mapStateToProps)(Results);
