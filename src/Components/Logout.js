import React from "react";
import { Menu } from 'semantic-ui-react'
import {UserAdapters} from '../Adapters/UserAdapters'

const Logout = props => {
    const logout = () =>  {
      props.clearUser();
      props.clearGame();
      localStorage.removeItem("token")
      UserAdapters.leaveMatch()
    }
    return <Menu.Item position="right" onClick={logout}>Logout</Menu.Item>;
};

export default Logout