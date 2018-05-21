import firebase from "firebase";
import { FIREBASE_COLLECTION_USER } from "../constants/appConst";

export const registerNewUser = (data, uid) => {
  const firestoreDB = firebase.firestore();
  const settings = { timestampsInSnapshots: true };

  firestoreDB.settings(settings);

  return firestoreDB
    .collection(FIREBASE_COLLECTION_USER)
    .doc(uid)
    .set({
      firstName: data.firstName,
      lastName: data.lastName,
      mobile: data.mobile,
      telegramID: data.telegramID
    });
};
