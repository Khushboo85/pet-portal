import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import App from "./modules/App";
import store from "./store";

function AppRoot() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppRoot;
