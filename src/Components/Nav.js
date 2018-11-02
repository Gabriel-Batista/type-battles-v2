import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import LoginModal from "./LoginModal";
import Logout from "./Logout";

import UserActions from "../Actions/UserActions";

class Nav extends Component {
    componentDidMount = () => {
        if (this.props.loggedIn === false && localStorage.getItem("token")) {
            this.props.toggleLoggedIn();
        }
    };

    render() {
        return (
            <Menu>
                <Menu.Item header>
                    <NavLink to="/">TYPE BATTLES</NavLink>
                </Menu.Item>
                {this.props.loggedIn ? (
                    <Logout clearUser={this.props.clear} />
                ) : (
                    <LoginModal />
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

export default connect(
    mapStateToProps,
    UserActions
)(Nav);
