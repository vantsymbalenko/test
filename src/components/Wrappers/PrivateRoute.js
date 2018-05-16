import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { withRouter, Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: `/login` }} />
        )
      }
    />
  );
};

/*** connect to Redux ***/
const mapStateToProps = state => {
  return {
    isAuth: state.authData.isAuth
  };
};

const mapStateToDispatch = {};

export default withRouter(
  connect(mapStateToProps, mapStateToDispatch)(PrivateRoute)
);

/*** Prop Types ***/
PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};
