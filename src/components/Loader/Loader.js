import React from "react";
import { PropTypes } from "prop-types";

export const Loader = props => {
  if (!props.isLoading) {
    return null;
  }
  return <div>Loading...</div>;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};
