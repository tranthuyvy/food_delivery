import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";

import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)