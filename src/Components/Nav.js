import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import LoginModal from "./LoginModal";
import Logout from "./Logout";

import UserActions from "../Actions/UserActions";
import GameActions from "../Actions/GameActions"
import { UserAdapters } from "../Adapters/UserAdapters"

class Nav extends Component {
    componentDidMount = () => {
        if (this.props.loggedIn === false && localStorage.getItem("token")) {
            this.props.toggleLoggedIn();
            UserAdapters.getUserInfo()
            .then(res => {
              this.props.updateUserId(res.id);
              this.props.updateEmail(res.email);
              this.props.updateName(res.name);
              if (res.current_match !== null) {
                this.props.updateMatchId(res.current_match.id)
              }
            })
        }
    };

    render() {
        return (
            <Menu>
                <Menu.Item header>
                    <NavLink to="/">TYPE BATTLES</NavLink>
                </Menu.Item>
                {this.props.loggedIn ? (
                    <Logout clearUser={this.props.userClear} clearGame={this.props.gameClear} />
                ) : (
                    <LoginModal nav/>
                )}
            </Menu>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.user.loggedIn
    };
};

const mapDispatchToProps = dispatch =>  {

  return {
    ...UserActions(dispatch),
    ...GameActions(dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
