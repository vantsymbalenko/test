import {fire} from "../FirebaseConfig/Fire";

export const verifyEmail = (actionCode) => {
    return fire.auth().applyActionCode('5AIgfG357hVE5SVkBF5aKyZ-RT7_cSsk8DsY8Ftv6wwAAAFjl_R6fQ');
};
