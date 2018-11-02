import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            rest.loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mapStateToProps = (state) =>  {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps)(PrivateRouter)