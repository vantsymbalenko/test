import { combineReducers } from "redux";
import { authData } from "./authData";
import { appData } from "./appData";

export default combineReducers({
  authData,
  appData
});
