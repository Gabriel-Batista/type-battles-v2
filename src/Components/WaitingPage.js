import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ActionCable } from "react-actioncable-provider";
import { GameAdapters } from "../Adapters/GameAdapters";
import { UserAdapters } from "../Adapters/UserAdapters";
import GameActions from "../Actions/GameActions";

import PlayArea from "./PlayArea";
import CarContainer from "./CarContainer";

import { Grid, Icon, Header } from "semantic-ui-react";
import { H1Style, H2Style, HeaderRowStyle } from "../Styles/WaitingPageStyles";

class WaitingPage extends Component {
    state = {
        redirect: false,
        seatsTaken: 0,
        createWebSocket: false,
        matchReady: false
    };

    componentDidMount = () => {
        GameAdapters.join().then(res => {
            console.log("fetch:", res);
            this.props.updateMatchId(res.id);
            this.props.updateParagraph(res.paragraph);
            this.props.updateAuthor(res.author);
            this.setState({
                seatsTaken: res.seats_taken,
                createWebSocket: true
            });
        });
    };

    componentDidUpdate = () => {
        if (this.state.matchReady !== true && this.state.seatsTaken === 4) {
            this.setState({
                matchReady: true
            });
        }
    };

    handleReceived = ({ match: res }) => {
        console.log("ActionCable:", res);
        if (res.complete) {
            this.props.setComplete();
            UserAdapters.leaveMatch(this.props.userId);
        }
        this.setState({
            seatsTaken: res.seats_taken
        });
    };

    renderActionCable = () => (
        <React.Fragment>
            {this.state.createWebSocket ? (
                <ActionCable
                    channel={{
                        channel: "MatchesChannel",
                        match_id: this.props.matchId
                    }}
                    onReceived={this.handleReceived}
                />
            ) : null}
        </React.Fragment>
    );

    renderWaitingIcons = seatsTaken => {
        let result = [];
        for (let i = 0; i < seatsTaken; i++) {
            result.push(
                <Icon
                    key={`check${i}`}
                    name="check"
                    size="big"
                    color="blue"
                    circular
                    inverted
                />
            );
        }
        for (let i = 0; i < 4 - seatsTaken; i++) {
            result.push(
                <Icon
                    key={`search${i}`}
                    name="search"
                    size="big"
                    color="red"
                    circular
                    inverted
                />
            );
        }
        return result;
    };

    renderWaitingPage = () => (
        <React.Fragment>
            {this.state.matchReady ? (
                <PlayArea />
            ) : (
                <Grid centered column={3}>
                    <Grid.Row style={HeaderRowStyle}>
                        <React.Fragment>
                            <Header>
                                <Header.Content style={H1Style}>
                                    Waiting For Players:
                                </Header.Content>
                                <Header.Subheader style={H2Style}>
                                    {this.renderWaitingIcons(
                                        this.state.seatsTaken
                                    )}
                                </Header.Subheader>
                            </Header>
                        </React.Fragment>
                    </Grid.Row>
                    <Grid.Row>
                        <CarContainer />
                    </Grid.Row>
                </Grid>
            )}
        </React.Fragment>
    );

    render() {
        return (
            <React.Fragment>
                {this.renderActionCable()}
                {this.renderWaitingPage()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        matchId: state.game.matchId,
        userId: state.user.userId
    };
};

export default connect(
    mapStateToProps,
    GameActions
)(WaitingPage);
