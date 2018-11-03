import React from "react";
import { connect } from "react-redux";
import Paragraph from "./Paragraph";
import GameInput from "./GameInput";
import Results from "./Results";

const PlayArea = props => (
    <React.Fragment>
        {props.gameOver ? (
            <Results />
        ) : (
            <React.Fragment>
                <Paragraph />
                <GameInput />
            </React.Fragment>
        )}
    </React.Fragment>
);

const mapStateToProps = state => {
    return {
        gameOver: state.game.gameOver
    };
};

export default connect(
    mapStateToProps,
    null
)(PlayArea);
