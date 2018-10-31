import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

import { LoginAdapters } from '../Adapters/LoginAdapters'
import LoginModal from './LoginModal'

class Nav extends Component {
  handleLogin = () => {
    LoginAdapters.login("jeremy", "jeremy@test.com", "123")
    .then(res => localStorage.setItem("token", res.token))
  }

  render()  {
    return (
      <Menu>
        <Menu.Item position="right" name="Login" active={true} onClick={this.handleLogin}>
            <LoginModal></LoginModal>
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) =>  {
  return{
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)