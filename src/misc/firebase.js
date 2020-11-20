import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyD-5qf1MlCMWiwvDDk1e_V_HyzSV0GWC48",
  authDomain: "makuzya-76203.firebaseapp.com",
  databaseURL: "https://makuzya-76203.firebaseio.com",
  projectId: "makuzya-76203",
  storageBucket: "makuzya-76203.appspot.com",
  messagingSenderId: "923717843167",
  appId: "1:923717843167:web:4210b5c804972fb379516a",
  measurementId: "G-GLS4C02BD4",
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
