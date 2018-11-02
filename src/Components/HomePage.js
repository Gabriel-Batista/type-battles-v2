import React from "react";
import { NavLink } from 'react-router-dom'

const HomePage = props => (
    <React.Fragment>
        <NavLink to="/play">play</NavLink>
        <p>Login to play</p>
    </React.Fragment>
);

export default HomePage;
