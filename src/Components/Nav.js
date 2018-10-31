import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";

import { LoginAdapters } from "../Adapters/LoginAdapters";
import LoginModal from "./LoginModal";

class Nav extends Component {
    handleLogin = (email, password) => {
        LoginAdapters.login(email, password).then(res =>
            localStorage.setItem("token", res.token)
        )
    }

    render() {
        return (
            <Menu>
                <Menu.Item
                    position="right"
                    name="Login"
                    active={true}
                >
                    <LoginModal handleLogin={this.handleLogin}/>
                </Menu.Item>
            </Menu>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);
