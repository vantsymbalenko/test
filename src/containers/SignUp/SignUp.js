import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import FormSignUp from "./FormSignUp";
import { SlideModalToLeft } from "../../components/Modals/SlideModalToLeft";
import {TextNode} from "../../components/Modals/TextNode";
import {AdditionalTextNode} from "../../components/Modals/AdditionalTextNode";

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
            {/*<Header tooggle={true}/>*/}
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