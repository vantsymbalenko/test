import {fire} from "../FirebaseConfig/Fire";

export const verifyEmail = (actionCode) => {
    return fire.auth().applyActionCode(actionCode);
};
