import React, { Component } from "react";
import { Button, Header, Icon, Modal, Input, Form } from "semantic-ui-react";

class LoginModal extends Component {
    state = { modalOpen: false };

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    render() {
        return (
            <Modal
                trigger={<Button onClick={this.handleOpen}>Login</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size="small"
            >
                <Header icon="lock" content="Login" />
                <Modal.Content>
                    <Form>
                      <Form.Field>
                        <label for="email">Email</label>
                        <Input id="email" placeholder="Email..."></Input>
                      </Form.Field>
                      <Form.Field>
                        <label for="password">Password</label>
                        <Input id="password" placeholder="Password..."></Input>
                      </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="red" size="medium" onClick={this.handleClose} inverted>
                      <Icon name="x" /> Cancel
                    </Button>
                    <Button color="green" size="medium" onClick={this.handleClose} inverted>
                        <Icon name="checkmark" /> Login
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default LoginModal
