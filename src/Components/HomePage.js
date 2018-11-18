import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { GameAdapters } from "../Adapters/GameAdapters";

import { Grid, Button, Icon, Header } from "semantic-ui-react";
import {
    HeaderRowStyle,
    PlayButtonStyle,
    H1Style,
    H2Style
} from "../Styles/HomePageStyles";
import LoginModal from "./LoginModal";

class HomePage extends Component {
    renderHeader = () => (
        <React.Fragment>
            <Header as="h1" content="TYPE BATTLES" inverted style={H1Style} />
            <Header
                as="h2"
                content="To the winner, the spoils."
                inverted
                style={H2Style}
            />
        </React.Fragment>
    );
    renderPlayButton = () => (
        <React.Fragment>
            {this.props.loggedIn ? (
                <NavLink to="/play">
                    <Button
                        size="massive"
                        style={PlayButtonStyle}
                        animated="vertical"
                    >
                        {this.props.matchId ? (
                            <Button.Content visible>
                                Rejoin Match!
                            </Button.Content>
                        ) : (
                            <Button.Content visible>Race Now!</Button.Content>
                        )}
                        <Button.Content hidden>
                            <Icon name="car" />
                        </Button.Content>
                    </Button>
                </NavLink>
            ) : (
                <LoginModal />
            )}
        </React.Fragment>
    );

    render() {
        return (
            <React.Fragment>
                <Grid centered columns={2}>
                    <Grid.Row centered style={HeaderRowStyle}>
                        <Grid.Column textAlign="center">
                            {this.renderHeader()}
                            {this.renderPlayButton()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row />
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        matchId: state.game.matchId,
        loggedIn: state.user.loggedIn
    };
};

export default connect(mapStateToProps)(HomePage);
