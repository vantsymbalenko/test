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
          name={props.name}
          value={item.dialCode}
        />
      ))}
    </Form>
  );
};

CountriesSelect.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const Form = styled.section``;
