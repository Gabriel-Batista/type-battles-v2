import React, { Component } from "react";
import { connect } from "react-redux";
import Paragraph from "./Paragraph";
import GameInput from "./GameInput";
import GameActions from "../Actions/GameActions";
import Results from "./Results";

import { Dimmer } from "semantic-ui-react";
import { ContainingDivStyles, DimmerTextStyle } from "../Styles/PlayAreaStyles";

class PlayArea extends Component {
    constructor(props) {
        super(props);
        this.timeTaken = 0;
        this.state = {
            countdown: 10
        };
    }

    componentDidMount = () => {
        this.countdownInterval = setInterval(() => {
            this.setState({
                countdown: this.state.countdown - 1
            });
        }, 1000);
        this.intervalHandle = setInterval(() => {
            console.log(this.timeTaken);
            if (this.state.countdown === 0) {
                this.timeTaken++;
            }
        }, 1000);
    };

    componentDidUpdate = () => {
        console.log(this.state.countdown);
        if (this.state.countdown === 0) {
            clearInterval(this.countdownInterval);
        }
        if (this.props.gameOver || this.props.complete) {
            this.props.updateWpm(this.wpm());
            clearInterval(this.intervalHandle);
        }
    };

    componentWillUnmount = () => {
      clearInterval(this.intervalHandle);
    };

    wpm = () => {
        let words = this.props.right.split(" ").length;
        return Math.round((words / this.timeTaken) * 60);
    };

    render() {
        return (
            <Dimmer.Dimmable
                blurring={this.state.countdown !== 0}
                dimmed={this.state.countdown !== 0}
            >
                <Dimmer active={this.state.countdown !== 0} page>
                    <p style={DimmerTextStyle}>Match starts in:</p>
                    <br />
                    <br />
                    <p style={DimmerTextStyle}>{this.state.countdown}</p>
                </Dimmer>
                {this.props.gameOver || this.props.complete ? (
                    <Results />
                ) : (
                    <div styles={ContainingDivStyles}>
                        <Paragraph />
                  <GameInput disabled={this.state.countdown} focus={this.state.countdown === 0} />
                    </div>
                )}
            </Dimmer.Dimmable>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameOver: state.game.gameOver,
        complete: state.game.complete,
        right: state.game.right
    };
};

export default connect(
    mapStateToProps,
    GameActions
)(PlayArea);
