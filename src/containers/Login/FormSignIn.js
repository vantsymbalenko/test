import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Input } from "../../components/Input";

export default class FormSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
        googleCode: ""
    };
  }
  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <Form>
        <Input
          placeholder={"Email"}
          labelText={"Email Address"}
          name={"email"}
          onChange={this.onChange}
          value={this.state.email}
        />
        <Input
          type={"password"}
          name={"password"}
          labelText={"Password"}
          placeholder={"password"}
          onChange={this.onChange}
          value={this.state.password}
        />
          <Input
              name={"googleCode"}
              labelText={"Google authenticator code"}
              placeholder={"****"}
              onChange={this.onChange}
              value={this.state.googleCode}
          />
          <Button>Log In</Button>
      </Form>
    );
  }
}

FormSignIn.propTypes = {};

const Form = styled.form`
padding: 17px;
height: 100%;
flex-wrap: wrap;
margin-top:146px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 343px;
  height: 45px;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 0.8px;
  color: #ffffff;
  background: #1f1f2f;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 45px;
  margin: auto;
  &:hover{
    cursor:pointer;
  }
`;
