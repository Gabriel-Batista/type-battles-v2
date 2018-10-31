import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";

import { LoginAdapters } from "../Adapters/LoginAdapters";
import LoginModal from "./LoginModal";
import Logout from "./Logout";

import UserActions from "../Actions/UserActions";

class Nav extends Component {
    componentDidMount = () => {
      if(this.props.loggedIn === false && localStorage.getItem("token"))  {
        this.props.toggleLoggedIn()
      }
    };

    handleLogin = (email, password) => {
        LoginAdapters.login(email, password).then(res => {
            localStorage.setItem("token", res.token);
            this.props.updateEmail(email);
            this.props.updateName(res.name);
            this.props.toggleLoggedIn();
        });
    };

    render() {
        return (
            <Menu>
                    {this.props.loggedIn ? (
                        <Logout clearUser={this.props.clear} />
                    ) : (
                        <LoginModal handleLogin={this.handleLogin} />
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
