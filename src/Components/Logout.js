import React from "react";
import { Menu } from 'semantic-ui-react'

const Logout = props => {
    const logout = () =>  {
      props.clearUser();
      props.clearGame();
      localStorage.removeItem("token")
    }
    return <Menu.Item position="right" onClick={logout}>Logout</Menu.Item>;
};

export default Logout