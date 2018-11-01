import React, { Component } from "react";
import { Button, Header, Icon, Modal, Input, Form, Menu } from "semantic-ui-react";

class LoginModal extends Component {
    state = {
        modalOpen: false,
        email: "",
        username: "",
        password: ""
    };

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    render() {
        return (
            <Modal
                trigger={<Menu.Item position="right" onClick={this.handleOpen}>Login</Menu.Item>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size="small"
            >
                <Header icon="lock" content="Login" />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Email</label>
                            <Input
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
                            <Input
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
                          this.props.handleLogin(this.state.email, this.state.password);
                          this.handleClose()
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

export default LoginModal;
