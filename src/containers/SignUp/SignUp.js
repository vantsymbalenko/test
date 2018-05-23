import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import FormSignUp from "./FormSignUp";
import { SlideModalToLeft } from "../../components/SlideModalToLeft";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false
    };
  }
  toggleToLeftModal = () => {
    this.setState({
      isShowModal: !this.state.isShowModal
    });
  };

  render() {
    return (
      <Wrapper>
        <Header headerText={"Sign Up"} toggle={!this.state.isShowModal} />,
        <FormSignUp
          toggleToLeftModal={this.toggleToLeftModal}
          toggle={!this.state.isShowModal}
        />
        <SlideModalToLeft
          show={this.state.isShowModal}
          toggleToLeftModal={this.toggleToLeftModal}
        >
          <TextNode>
              Thanks for signing up to DRIP Beta!
              <br/>
              <br/>
              Before you can log in, we need to confirm your
              email address and mobile number. Please
              check the email we just sent you.
          </TextNode>
            <AdditionalTextNode>
                If you haven’t received the email within two<br/>
                minutes, please check your spam folder. If you still<br/>
                cant see it, resend the email
            </AdditionalTextNode>
          <Button>
            Log in now
          </Button>
        </SlideModalToLeft>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  position: relative;
`;
const TextNode = styled.article`
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #ffffff;
  margin: 131px auto 0 auto;
  width: 100%;
  max-width: 343px;
  max-height: 230px;
  text-align:center;
`;

const AdditionalTextNode = styled.div`
  text-align: center;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #66688f;
  margin-top: 33px;
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
  position: absolute;
  left: 0;
  right: 0;
  bottom: 45px;
  margin: auto;
  &:hover{
    cursor:pointer;
  }
`;