import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const CheckboxItem = props => {
  return (
    <CheckboxLabel>
      <CheckboxInput
        type={`checkbox`}
        value={props.dialCode}
        onChange={props.onChange}
      />
      {props.name}
    </CheckboxLabel>
  );
};

CheckboxItem.propTypes = {
  name: PropTypes.string,
  dialCode: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const CheckboxLabel = styled.label``;
const CheckboxInput = styled.input``;
