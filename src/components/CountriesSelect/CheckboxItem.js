import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const CheckboxItem = props => {
  return (
    <CheckboxLabel>
      <CheckboxInput
        name={props.name}
        data-country-code={props.countryCode}
        type={`radio`}
        value={`${props.value}`}
        onChange={props.onChange}
        checked={props.checked}
        onClick={props.onClick}
      />
      {props.countryName}
    </CheckboxLabel>
  );
};

CheckboxItem.propTypes = {
  checked: PropTypes.bool,
  countryCode: PropTypes.string,
  countryName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

const CheckboxLabel = styled.label`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: block;
  line-height: 60px;
  width: 100%;
  color: #66688f;
  font-size: 24px;
  font-family: Helvetica Light, sans-serif;
  &:hover{
    cursor: pointer;
  }
`;
const CheckboxInput = styled.input`
  display: none;
`;
