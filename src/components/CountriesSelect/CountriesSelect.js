import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { countries } from "../../constants/countries";
import { CheckboxItem } from "./CheckboxItem";

export const CountriesSelect = props => {
  return (
    <Form>
      {countries.map(item => (
        <CheckboxItem
          onChange={props.onChange}
          key={item.code31}
          countryName={item.name}
          countryCode={item.code21}
          name={props.name}
          value={item.dialCode}
          checked={item.dialCode===props.dialCode}
          onClick={props.closeModal}
        />
      ))}
    </Form>
  );
};

CountriesSelect.propTypes = {
  closeModal : PropTypes.func,
  dialCode: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const Form = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
  height:100%;
`;
