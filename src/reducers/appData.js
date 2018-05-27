import { SET_LOADER } from "../constants/appConst";
import { ERROR_MODAL } from "../constants/authConst";

const initialState = {
  isLoading: false,
  isShowErrorModal: false,
  errorCode: "404",
  errorMessage: "Some Error Message"
};

export const appData = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case ERROR_MODAL: {
      return {
        ...state,
        isShowErrorModal: !state.isShowErrorModal,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
