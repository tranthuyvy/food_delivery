import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from 'react-redux'
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Provider> */}
      <App />
      {/* </Provider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
