import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Header } from "../../components/Header";
import FormSignIn from "./FormSignIn";

export default class Login extends Component {
  render() {
    return (
      <LoginBody>
        <Header toggle={true} headerText={"Log In"}/>
        <FormSignIn/>
      </LoginBody>
    );
  }
}

Login.propTypes = {};

const LoginBody = styled.div``;
