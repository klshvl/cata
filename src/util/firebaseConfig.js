import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeSSnV71WyuWiGzWai8TM-iyREJJExktM",
  authDomain: "react-native-21c0f.firebaseapp.com",
  databaseURL: "https://react-native-21c0f-default-rtdb.firebaseio.com",
  projectId: "react-native-21c0f",
  storageBucket: "react-native-21c0f.appspot.com",
  messagingSenderId: "116508965608",
  appId: "1:116508965608:web:69847a1689905408c7675d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
