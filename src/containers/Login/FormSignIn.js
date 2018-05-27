import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Validation from "react-validation-utils";
import { connect } from "react-redux";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { EXTERNAL_LINK_HELP_LOGIN_PAGE } from "../../constants/appConst";
import { emailRule } from "../../validationRules/rules";
import getBorderColor from "../../helpers/getBorderColor";
import { auth } from "../../actions/auth";
import { getUserInfo } from "../../actions/getUserInfo";
import { PRESIGN_IN } from "../../constants/authConst";

const Validator = new Validation({
  email: {
    rule: emailRule,
    message: "Invalid email type"
  }
});

class FormSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = Validator.addValidation({
      email: "",
      password: "",
      googleCode: ""
    });
    this.getBorderColor = getBorderColor.bind(this);
  }
  onChange = e => {
    const { name, value } = e.target;
    this.setState(
      Validator.validate({
        [name]: value
      })
    );
  };
  onEnter = e => {
    e.preventDefault();
    if (!Validator.isFormValid(this.state)) {
      // validate all fields in the state to show all error messages
      return this.setState(Validator.validate());
    }
    this.props.getUserInfo(this.state.email, this.state.password);
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
          borderColor={this.getBorderColor(`email`)}
        />
        <Input
          type={"password"}
          name={"password"}
          labelText={"Password"}
          placeholder={"password"}
          onChange={this.onChange}
          value={this.state.password}
          rowReverse
        >
          <HelpLink to={`/reset-password`}>Reset Password</HelpLink>
        </Input>
        <Input
          name={"googleCode"}
          labelText={"Google authenticator code"}
          placeholder={"****"}
          type={`password`}
          onChange={this.onChange}
          value={this.state.googleCode}
          rowReverse
        >
          <HelpExternalLink href={`${EXTERNAL_LINK_HELP_LOGIN_PAGE}`}>
            Help
          </HelpExternalLink>
        </Input>
        <AdditionalInfo>
          Google 2-Factor-Authentication (2FA) is required during all sign-in
          attempts.
        </AdditionalInfo>
        <AdditionalInfo toBottom>
          Don't have an account?
          <HelpLink to={`/sign-in`}>Sign Up</HelpLink>
        </AdditionalInfo>
        <Button
          type={`submit`}
          onClick={this.onEnter}
          disabled={this.props.authStatus === PRESIGN_IN}
        >
          Log In
        </Button>
      </Form>
    );
  }
}

FormSignIn.propTypes = {};

const mapStateToProps = state => ({
  authStatus: state.authData.authStatus
});

const mapStateToDispatch = {
  auth,
  getUserInfo
};
export default connect(mapStateToProps, mapStateToDispatch)(FormSignIn);

const Form = styled.form`
  padding: 17px;
  height: 100%;
  flex-wrap: wrap;
  margin-top: 146px;
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
  background-image: linear-gradient(to top, #4eace0, #2a64b4);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 45px;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
  &[disabled] {
    background: #1f1f2f;
  }
`;

const styleForExternalLink = () => css`
  text-decoration: none;
  white-space: nowrap;
  font-family: Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #229ae8;
  &:hover {
    text-decoration: underline;
  }
`;

const HelpLink = styled(Link)`
  ${styleForExternalLink()};
`;

const HelpExternalLink = styled.a`
  ${styleForExternalLink()};
`;

const AdditionalInfo = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 9px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #66688f;
  margin: 20px auto;
  text-align: center;
  ${props =>
    props.toBottom &&
    css`
      position: fixed;
      bottom: 77px;
      width: 100%;
      left: 0;
    `};
`;

AdditionalInfo.propTypes = {
  toBottom: PropTypes.bool
};
