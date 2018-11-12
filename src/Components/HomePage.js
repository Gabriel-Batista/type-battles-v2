import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { Grid, Button, Icon, Header } from "semantic-ui-react";

import {
    HeaderRowStyle,
    PlayButtonStyle,
    H1Style,
    H2Style
} from "../Styles/HomePageStyles";

const HomePage = props => {
    const renderHeader = () => (
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
    const renderPlayButton = () => (
        <NavLink to="/play">
            <Button size="massive" style={PlayButtonStyle} animated="vertical">
                {props.matchId ? (
                    <Button.Content visible>Rejoin Match!</Button.Content>
                ) : (
                    <Button.Content visible>Race Now!</Button.Content>
                )}
                <Button.Content hidden>
                    <Icon name="car" />
                </Button.Content>
            </Button>
        </NavLink>
    );
    return (
        <React.Fragment>
            <Grid centered columns={2}>
                <Grid.Row centered style={HeaderRowStyle}>
                    <Grid.Column textAlign="center">
                        {renderHeader()}
                        {renderPlayButton()}
                        <p>Login to play</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <p>PLACEHOLDER</p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <p>Other</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        matchId: state.game.matchId
    };
};

export default connect(mapStateToProps)(HomePage);
