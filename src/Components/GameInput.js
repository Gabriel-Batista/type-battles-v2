import React, { Component } from "react";
import { connect } from "react-redux";

import GameActions from "../Actions/GameActions";
import { GameAdapters } from "../Adapters/GameAdapters";

class GameInput extends Component {
    componentDidUpdate = () => {
        this.gameOver();
    };

    handleInput = value => {
        let right = "";
        let wrong = "";

        for (var i = 0; i < value.length; i++) {
            value.charAt(i) === this.props.paragraph.charAt(i) &&
            wrong.length === 0
                ? (right += value.charAt(i))
                : (wrong += value.charAt(i));
        }

        this.props.updateRight(right);
        this.props.updateWrong(wrong);
        this.props.updateInput(value);
    };

    gameOver = () => {
        if (this.props.input === this.props.paragraph) {
            this.props.gameOver();
            console.log(this.props.matchId)
            GameAdapters.gameOver(this.props.matchId);
        }
    };

    render() {
        return (
            <input
                value={this.props.input}
                onChange={e => this.handleInput(e.target.value)}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        input: state.game.input,
        paragraph: state.game.paragraph,
        matchId: state.game.matchId
    };
};

export default connect(
    mapStateToProps,
    GameActions
)(GameInput);
