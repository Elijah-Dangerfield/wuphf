import AppNavigator from "./navigation/navigator";
import React from "react";
import * as firebase from "firebase";

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCSAXlJ184CHgMfJQqJLKXDvRVnvw0IN58",
    authDomain: "wuphf-hack-mt.firebaseapp.com",
    databaseURL: "https://wuphf-hack-mt.firebaseio.com",
    projectId: "wuphf-hack-mt",
    storageBucket: "wuphf-hack-mt.appspot.com",
    messagingSenderId: "262897004327",
    appId: "1:262897004327:web:cb247777fd6ee4acfe0302",
    measurementId: "G-8GKHPXY76P"
  };

  firebase.initializeApp(firebaseConfig)
  return <AppNavigator />;
}
