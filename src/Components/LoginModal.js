import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Button,
    Header,
    Icon,
    Modal,
    Input,
    Form,
    Menu
} from "semantic-ui-react";
import { LoginAdapters } from "../Adapters/LoginAdapters";
import UserActions from "../Actions/UserActions";

class LoginModal extends Component {
    state = {
        modalOpen: false,
        email: "",
        username: "",
        password: "",
        error: false
    };

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    handleLogin = (email, password) => {
        LoginAdapters.login(email, password).then(res => {
            if (res.token !== undefined) {
                localStorage.setItem("token", res.token);
                this.props.updateEmail(email);
                this.props.updateName(res.name);
                this.props.toggleLoggedIn();
                this.handleClose();
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
                    <Menu.Item position="right" onClick={this.handleOpen}>
                        Login
                    </Menu.Item>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size="small"
            >
                <Header icon="lock" content="Login" />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Email</label>
                            <Form.Input
                                error={this.state.error}
                                autoFocus
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
                                this.state.password
                            );
                        }}
                        inverted
                    >
                        <Icon name="checkmark" /> Login
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default connect(
    null,
    UserActions
)(LoginModal);
