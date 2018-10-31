import React from "react";
import { Button, Menu } from 'semantic-ui-react'

const Logout = props => {
    const logout = () =>  {
      props.clearUser();
      localStorage.removeItem("token")
    }
    return <Menu.Item position="right" onClick={logout}>Logout</Menu.Item>;
};

export default Logout