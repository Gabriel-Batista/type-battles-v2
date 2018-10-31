import React from "react";
import { Button } from 'semantic-ui-react'

const Logout = props => {
    const logout = () =>  {
      props.clearUser();
      localStorage.removeItem("token")
    }
    return <Button onClick={logout}>Logout</Button>;
};

export default Logout