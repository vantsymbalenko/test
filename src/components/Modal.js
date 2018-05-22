import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Modal = props => {
  const display = props.display ? "block" : "none";
  return <ModalBody display={display}>
          <CloseIcon onClick={props.onClose}>&#10006;</CloseIcon>
            {props.children}
          </ModalBody>;
};

Modal.defaultProps = {
  display: false
};

Modal.propTypes = {
  onClose: PropTypes.func,
  display: PropTypes.bool
};

const CloseIcon = styled.div`
  position: absolute;
  color:#ffffff;
  top: 45px;
  right: 17px;
  font-size: 23px;
  font-weight: lighter;
  font-family: Helvetica-Light, sans-serif;
`;
const ModalBody = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: ${props => props.display};
  background: #191a2a;
`;
