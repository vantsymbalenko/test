import { SET_LOADER } from "../constants/appConst";

const initialState = {
  isLoading: false
};

export const appData = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
};
