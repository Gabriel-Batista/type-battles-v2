import React, { Component } from "react";
import { connect } from "react-redux";

import GameActions from "../Actions/GameActions";
import { GameAdapters } from "../Adapters/GameAdapters";

import { InputStyle, InputWrapperStyle } from "../Styles/GameInputStyles";

class GameInput extends Component {
    constructor(props) {
        super(props);
        this.timeTaken = 0;
    }

    componentDidMount = () => {
        this.intervalHandle = setInterval(() => {
            this.timeTaken++;
        }, 1000);
    };

    wpm = () => {
        let words = this.props.right.split(" ").length;
        return words / this.timeTaken;
    };

    componentWillUnmount = () => {
        clearInterval(this.intervalHandle);
        this.props.updateWpm(Math.round((this.wpm() * 60)));
    };
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
                : (wrong += this.props.paragraph.charAt(i));
        }

        this.props.updateRight(right);
        this.props.updateWrong(wrong);
        this.props.updateInput(value);
    };

    gameOver = () => {
        if (this.props.input === this.props.paragraph) {
            this.props.setGameOver();
            GameAdapters.gameOver(this.props.matchId);
        }
    };

    render() {
        return (
            <div style={InputWrapperStyle}>
                <input
                    autoFocus
                    value={this.props.input}
                    onChange={e => this.handleInput(e.target.value)}
                    style={InputStyle}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        input: state.game.input,
        paragraph: state.game.paragraph,
        matchId: state.game.matchId,
        right: state.game.right
    };
};

export default connect(
    mapStateToProps,
    GameActions
)(GameInput);
