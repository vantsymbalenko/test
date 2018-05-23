import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

/*** containers ***/
import PrivateRoute from "./components/Wrappers/PrivateRoute";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import SignIn from "./containers/SignUp/SignUp";
import { NotFound } from "./components/NotFound/NotFound";
import { Loader } from "./components/Loader/Loader";

/*** actions ***/
import { setLoader } from "./actions/setLoader";

class App extends Component {
  componentWillMount() {
    this.props.setLoader(true);
  }
  componentDidMount() {
    this.props.setLoader(false);
  }

  render() {
    return [
      <Loader isLoading={this.props.isLoading} key={1} />,
      <Switch key={2}>
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/sign-in`} component={SignIn} />
        <PrivateRoute exact path={`/`} component={Home} />
        <Route component={NotFound} />
      </Switch>
    ];
  }
}

/*** connect ***/
const mapStateToProps = state => {
  return {
    isLoading: state.appData.isLoading
  };
};

const mapStateToDispatch = {
  setLoader
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(App));

/*** Props Types ***/
App.propTypes = {
  setLoader: PropTypes.func,
  isLoading: PropTypes.bool.isRequired
};
