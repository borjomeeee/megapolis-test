import React from "react";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./static/styles/index.scss";

import AppNavigation from "./navigation";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
