import React from "react";
import { connect } from "react-redux"
import { Menu } from 'semantic-ui-react'
import {UserAdapters} from '../Adapters/UserAdapters'

const Logout = props => {
    const logout = () =>  {
      props.clearUser();
      props.clearGame();
      localStorage.removeItem("token")
    }
    return <Menu.Item position="right" onClick={logout}>Logout</Menu.Item>;
};

const mapStateToProps = state =>  {
  return {
    userId: state.user.userId
  }
}

export default connect(mapStateToProps)(Logout)