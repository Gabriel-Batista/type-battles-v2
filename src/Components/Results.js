import React, { Component } from "react";
import { connect } from "react-redux";
import GameActions from "../Actions/GameActions";

import { H1Style, HeaderRowStyle } from "../Styles/ResultStyle";
import { Header, Icon, Grid } from "semantic-ui-react";

class Results extends Component {
    resetGameReducer = () => {
        this.props.gameClear();
    };

    componentWillUnmount() {
        this.resetGameReducer();
    }

    renderHeader = (headerContent, iconName) => (
        <React.Fragment>
            <Header as="h1" icon textAlign="center" />
            <Icon name={iconName} size="massive" inverted />
            <Header.Content style={H1Style}>{headerContent}</Header.Content>
        </React.Fragment>
    );

    renderResult = () => {
        if (this.props.complete) {
            return (
                <Grid centered columns={2}>
                    <Grid.Row centered style={HeaderRowStyle}>
                        <Grid.Column textAlign="center" verticalAlign="middle">
                            {this.props.gameOver
                                ? this.renderHeader("You Win!", "winner")
                                : this.renderHeader("You Lose!", "thumbs down")}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row />
                </Grid>
            );
        }
    };

    render() {
        return <React.Fragment>{this.renderResult()}</React.Fragment>;
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
