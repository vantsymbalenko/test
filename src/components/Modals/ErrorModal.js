import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SlideModalToLeft } from "./SlideModalToLeft";
import { TextNode } from "./TextNode";
import { AdditionalTextNode } from "./AdditionalTextNode";
import { toggleErrorModal } from "../../actions/toggleErrorModal";

const ErrorModal = props => {
  return (
    <SlideModalToLeft
      show={props.isShowErrorModal}
      toggleToLeftModal={props.toggleErrorModal}
    >
      <TextNode>{props.errorCode}</TextNode>
      <AdditionalTextNode>{props.errorMessage}</AdditionalTextNode>
    </SlideModalToLeft>
  );
};

ErrorModal.propTypes = {
  errorCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMessage: PropTypes.string,
  isShowErrorModal: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isShowErrorModal: state.appData.isShowErrorModal,
    errorCode: state.appData.errorCode,
    errorMessage: state.appData.errorMessage
  };
};

const mapStateToDispatch = {
  toggleErrorModal
};

export default connect(mapStateToProps, mapStateToDispatch)(ErrorModal);
