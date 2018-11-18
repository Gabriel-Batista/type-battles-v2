import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Header, Icon, Modal, Form, Menu } from "semantic-ui-react";
import { LoginButtonStyle, SignupButtonStyle } from "../Styles/LoginModalStyles";
import { LoginAdapters } from "../Adapters/LoginAdapters";
import { UserAdapters } from "../Adapters/UserAdapters";
import UserActions from "../Actions/UserActions";
import GameActions from "../Actions/GameActions";

class LoginModal extends Component {
    state = {
        modalOpen: false,
        signup: false,
        name: "",
        email: "",
        username: "",
        password: "",
        error: false
    };

    handleOpen = signup =>
        signup
            ? this.setState({ modalOpen: true, signup: true })
            : this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false, signup: false });

    handleLogin = (email, password, name) => {
        console.log(this.state.signup);
        let response = this.state.signup
            ? LoginAdapters.signup(email, password, name)
            : LoginAdapters.login(email, password);
        response.then(res => {
            if (res.token !== undefined) {
                console.log(res);
                localStorage.setItem("token", res.token);
                this.props.updateEmail(email);
                this.props.updateName(res.name);
                this.props.updateUserId(res.id);
                this.props.toggleLoggedIn();
                UserAdapters.getUserInfo(res.id).then(res => {
                    if (res.current_match !== null) {
                        this.props.updateMatchId(res.current_match.id);
                        this.props.updateParagraph(res.current_match.paragraph);
                    }
                    this.handleClose();
                });
            } else {
                this.setState({
                    error: true
                });
            }
        });
    };

    render() {
        return (
            <Modal
                trigger={
                    this.props.nav ? (
                        <Menu.Menu position="right">
                            <Menu.Item onClick={() => this.handleOpen(true)}>
                                Signup
                            </Menu.Item>
                            <Menu.Item onClick={() => this.handleOpen(false)}>
                                Login
                            </Menu.Item>
                        </Menu.Menu>
                    ) : (
                        <React.Fragment>
                            <Button
                                size="massive"
                                onClick={() => this.handleOpen(true)}
                                style={SignupButtonStyle}
                            >
                                <Button.Content visible>Signup</Button.Content>
                            </Button>
                            <Button
                                size="massive"
                                onClick={() => this.handleOpen(false)}
                                style={LoginButtonStyle}
                            >
                                <Button.Content visible>Login</Button.Content>
                            </Button>
                        </React.Fragment>
                    )
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size="small"
            >
                <Header icon="lock">
                    {this.state.signup ? "Signup" : "Login"}
                </Header>
                <Modal.Content>
                    <Form>
                        {this.state.signup ? (
                            <Form.Field>
                                <label>Name</label>
                                <Form.Input
                                    error={this.state.error}
                                    autoFocus
                                    id="name"
                                    placeholder="Name..."
                                    value={this.state.name}
                                    onChange={e =>
                                        this.setState({ name: e.target.value })
                                    }
                                />
                            </Form.Field>
                        ) : null}
                        <Form.Field>
                            <label>Email</label>
                            <Form.Input
                                error={this.state.error}
                                autoFocus={this.state.signup ? undefined : true}
                                id="email"
                                placeholder="Email..."
                                value={this.state.email}
                                onChange={e =>
                                    this.setState({ email: e.target.value })
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <Form.Input
                                error={this.state.error}
                                type="password"
                                id="password"
                                placeholder="Password..."
                                value={this.state.password}
                                onChange={e =>
                                    this.setState({ password: e.target.value })
                                }
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color="red"
                        size="medium"
                        onClick={this.handleClose}
                        inverted
                    >
                        <Icon name="x" /> Cancel
                    </Button>
                    <Button
                        color="green"
                        size="medium"
                        onClick={() => {
                            this.handleLogin(
                                this.state.email,
                                this.state.password,
                                this.state.name
                            );
                        }}
                        inverted
                    >
                        <Icon name="checkmark" />
                        {this.state.signup ? "Signup" : "Login"}
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...UserActions(dispatch),
        ...GameActions(dispatch)
    };
};

export default connect(
    null,
    mapDispatchToProps
)(LoginModal);
