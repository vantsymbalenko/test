import { SET_LOADER } from "../constants/appConst";

export const setLoader = state => {
  return {
    type: SET_LOADER,
    payload: state
  };
};
