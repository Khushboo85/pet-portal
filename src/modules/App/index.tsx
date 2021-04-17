import firebase from "firebase";
import React, { useEffect } from "react";
import firebaseConfig from "../../firebaseConfig";
import Routes from "./routes";
const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  return <Routes />;
};
export default App;
