import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  emailRule,
  firstNameRule,
  lastNameRule,
  passwordRule
} from "../../validationRules/rules";
import Validation from "react-validation-utils";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import {CountriesSelect} from "../../components/CountriesSelect/CountriesSelect";
import { fire } from "../../FirebaseConfig/Fire";
import { registerNewUser } from "../../actions/registerNewUser";

const Validator = new Validation({
  email: {
    rule: emailRule,
    message: "Email is incorrect"
  },
  password: {
    rule: passwordRule,
    message: "Password is incorrect",
    id: "repeatRule"
  },
  confirmPassword: {
    rule: passwordRule,
    message: "Those passwords didn't match. Try again.",
    id: "repeatRule"
  },
  firstName: {
    rule: firstNameRule,
    message: "Name can't contain numbers"
  },
  lastName: {
    rule: lastNameRule,
    message: "Name is incorrect"
  }
});

export default class FormSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = Validator.addValidation({
      refCode: "",
      lastName: "",
      email: "",
      firstName: "",
      mobile: "",
      telegramID: "",
      password: "",
      confirmPassword: "",
      mobileCode: "",
      isShowModal : true,
    });
  }

  onChange = e => {
    const { name, value } = e.target;
    if (name === "password") {
      Validator.updateRules({
        rePassword: {
          repeatRule: val => val === value
        }
      }).fieldsToValidate(["password", "rePassword"]);
    } else if (name === "rePassword") {
      Validator.updateRules({
        password: {
          repeatRule: val => val === value
        }
      }).fieldsToValidate(["password", "rePassword"]);
    }
    this.setState(Validator.validate({ [name]: value }));
  };

  getBorderColor = fieldName => {
    const statuses = this.state.validationStorage[fieldName];
    if (statuses.indexOf("validation-failed") !== -1) {
      return "red";
    }

    if (statuses.indexOf("prevalidation-failed") !== -1) {
      return "#51526b";
    }

    if (statuses.indexOf("validation-passed") !== -1) {
      return "green";
    }
  };

  onSubmit = e => {
    e.preventDefault();
    if (!Validator.isFormValid(this.state)) {
      // validate all fields in the state to show all error messages
      return this.setState(Validator.validate());
    }
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        registerNewUser(this.state, user.user.uid);
      });
  };

  toggleModal = () => {
    this.setState({
        isShowModal: !this.state.isShowModal
    });
  };

  render() {
    const {
      refCode,
      firstName,
      lastName,
      email,
      mobile,
      telegramID,
      password,
      confirmPassword
    } = this.state;
    return (
      <Form>
          <Modal display={this.state.isShowModal} onClose={this.toggleModal}>
            <CountriesSelect onChange={this.onChange} name={"mobileCode"}/>
          </Modal>
        <Input
          name={`refCode`}
          value={refCode}
          labelText={"Referral Code"}
          placeholder={"enter referral code"}
          onChange={this.onChange}
        />
        <TwoInputRows>
          <Input
            value={firstName}
            name={`firstName`}
            borderColor={this.getBorderColor("firstName")}
            labelText={"First Name*"}
            placeholder={"first name"}
            marginRight={`30px`}
            onChange={this.onChange}
          />
          <Input
            value={lastName}
            name={`lastName`}
            borderColor={this.getBorderColor("lastName")}
            placeholder={"last name"}
            labelText={"Last Name*"}
            onChange={this.onChange}
          />
        </TwoInputRows>
        <TwoInputRows>
          <Input
            value={email}
            name={`email`}
            placeholder={"enter email address"}
            labelText={"Email Address*"}
            onChange={this.onChange}
            borderColor={this.getBorderColor("email")}
          />
        </TwoInputRows>
        <TwoInputRows>
          <Input
            value={mobile}
            name={`mobile`}
            labelText={"Mobile Number*"}
            marginRight={`30px`}
            placeholder={"incl. country code"}
            onChange={this.onChange}
          >
              <img src={`${process.env.PUBLIC_URL}/images/usaFlag.jpg`} alt={"falg_usa"} width={"22px"} height={"14px"} onClick={this.toggleModal}/>
              <span style={{fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontWeight: "300",
                  fontStyle: "normal",
                  fontStretch: "normal",
                  lineHeight: "1",
                  letterSpacing: "normal",
                  color: "#ffffff"}}>+1</span>
          </Input>
          <Input
            value={telegramID}
            name={`telegramID`}
            labelText={"Telegram ID"}
            placeholder={"telegram ID"}
            onChange={this.onChange}
          />
        </TwoInputRows>
        <RowWithHeader>
          <LabelTitlte>
            <CapitalizeText>Password*</CapitalizeText>
            <AdditionalText>
              {" "}
              (Min. 8 characters with at least one letter and one number)
            </AdditionalText>
          </LabelTitlte>
          <TwoInputRows marginTop={"0"}>
            <Input
              labelMargin={"0"}
              type={"password"}
              value={password}
              name={`password`}
              borderColor={this.getBorderColor("password")}
              placeholder={"password"}
              marginRight={`30px`}
              onChange={this.onChange}
            />
            <Input
              labelMargin={"0"}
              type={"password"}
              borderColor={this.getBorderColor("confirmPassword")}
              value={confirmPassword}
              name={`confirmPassword`}
              placeholder={"password confirm"}
              onChange={this.onChange}
            />
          </TwoInputRows>
        </RowWithHeader>
        <RulesText>
          <Paragraph>
            By signing up, you agree to all
            <LinkText> terms of service</LinkText>
          </Paragraph>
          <Paragraph>
            Already have an account?
            <Link to={`/login`}>
              <Span> Log in</Span>
            </Link>
          </Paragraph>
        </RulesText>
        <Button type={"submit"} onClick={this.onSubmit}>
          Sign Up Now
        </Button>
      </Form>
    );
  }
}

const Form = styled.form`
  padding: 17px;
`;
const TwoInputRows = styled.div`
  display: flex;
  margin-top: ${props => props.marginTop || "11px"};
`;
const LabelTitlte = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 0.6px;
  color: #66688f;
`;
const CapitalizeText = styled.span`
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 0.6px;
  color: #66688f;
`;
const AdditionalText = styled.span`
  font-family: Helvetica, sans-serif;
  font-size: 9px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.22;
  letter-spacing: normal;
  color: #66688f;
`;
const RowWithHeader = styled.div`
  margin-top: 37px;
`;
const RulesText = styled.div`
  text-align: center;
  margin-top: 33px;
  font-family: Helvetica, sans-serif;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
`;
const Paragraph = styled.div`
  color: #66688f;
  padding-left: 10px;
  font-family: Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
`;
const LinkText = styled.a`
  text-decoration: none;
  color: #229ae8;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Span = styled.span`
  text-decoration: none;
  color: #229ae8;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
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
  background-image: linear-gradient(to bottom, #4eace0, #2a64b4);
  margin: 12px auto;
  transition: 400ms easy;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to top, #4eace0, #2a64b4);
  }
`;
