import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Header } from "../../components/Header";
import FormSignIn from "./FormSignIn";
import { AUTH_USER } from "../../constants/authConst";

class Login extends Component {
  render() {
    if (this.props.authStatus === AUTH_USER) {
      return <Redirect to={{ pathname: `/` }} />;
    }
    return (
      <LoginBody>
        <Header toggle={true} headerText={"Log In"} />
        <FormSignIn />
      </LoginBody>
    );
  }
}

Login.propTypes = {
  authStatus: PropTypes.string
};

const mapStateToProps = state => {
  return {
    authStatus: state.authData.authStatus
  };
};

const mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(Login);

const LoginBody = styled.div``;
