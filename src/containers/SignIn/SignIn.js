import React, { Component } from "react";
import {Header} from "../../components/Header";
import FormSignUp from './FormSignUp';

export default class SignIn extends Component {
  render() {
    return [
      <Header headerText={"Sign Up"} key = {1}/>,
      <FormSignUp key = {2}/>
    ];
  }
}

