import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import {
    Grid,
    Button,
    Icon,
    Header,
    Segment,
    Image,
    Rail,
    Divider,
    List
} from "semantic-ui-react";
import {
    HeaderRowStyle,
    PlayButtonStyle,
    H1Style,
    H2Style,
    ScreenshotStyle,
    RailStyle,
    QuoteStyle,
    QuoteContainerStyle,
    QuoteAuthorStyle,
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

    renderAppDescription = () => (
        <div>
            <Image
                bordered
                rounded
                fluid
                src={require("../Assets/PlayScreenShot.png")}
                style={ScreenshotStyle}
            />
            <Rail size="massive" position="left" style={RailStyle}>
                <Header as="h1">Compete for the Top Score!</Header>
                <Divider />
                <List>
                    <List.Item>
                        <Icon name="right triangle" />
                        <List.Content>
                            <List.Header>Compete Online!</List.Header>
                            <List.Description>
                                Race against friends from around the world to
                                see who is the fastest!
                            </List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Icon name="right triangle" />
                        <List.Content>
                            <List.Header>Dynamic Content!</List.Header>
                            <List.Description>
                                Dynamic quotes guarantees a fair game every
                                time.
                            </List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <Icon name="right triangle" />
                        <List.Content>
                            <List.Header>Collectables!</List.Header>
                            <List.Description>
                                Compete for points and unlock new cars (*Coming
                                Soon*)
                            </List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </Rail>
            <Rail position="right" style={RailStyle}>
                <Header as="h1">What People are Saying!</Header>
                <Divider />
                <div style={QuoteContainerStyle}>
                    <Segment style={QuoteStyle}>
                        "The most fun I've had on the internet!" <br />
                        <span style={QuoteAuthorStyle}>-Albert Einstein</span>
                    </Segment>
                    <Segment style={QuoteStyle}>
                        "You would be a fool not to hire this guy!" <br />
                        <span style={QuoteAuthorStyle}>-Elon Musk</span>
                    </Segment>
                    <Segment style={QuoteStyle}>
                        "This is amazing, and im not even made up!" <br />
                        <span style={QuoteAuthorStyle}>-Madeup person</span>
                    </Segment>
                </div>
            </Rail>
        </div>
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
                    <Grid.Column>{this.renderAppDescription()}</Grid.Column>
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
