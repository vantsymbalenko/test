import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Modal = (props) => {
  return(
    <ModalBody display={props.display}>
      {props.children}
    </ModalBody>
  );
};

Modal.defaultProps = {
  display: "none"
};

Modal.propTypes = {
  display: PropTypes.string
};

const ModalBody = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;
  display: ${props => props.display};
  background: #191A2A;
`;


