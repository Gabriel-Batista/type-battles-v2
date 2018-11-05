import React from "react";
import { connect } from "react-redux";
import Paragraph from "./Paragraph";
import GameInput from "./GameInput";
import Results from "./Results";

import { ContainingDivStyles } from '../Styles/PlayAreaStyles'

const PlayArea = props => (
    <React.Fragment>
        {props.gameOver || props.complete ? (
            <Results />
        ) : (
            <div styles={ContainingDivStyles}>
                <Paragraph />
                <GameInput />
            </div>
        )}
    </React.Fragment>
);

const mapStateToProps = state => {
    return {
        gameOver: state.game.gameOver,
        complete: state.game.complete
    };
};

export default connect(
    mapStateToProps,
    null
)(PlayArea);
