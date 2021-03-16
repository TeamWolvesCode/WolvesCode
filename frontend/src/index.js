import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//App
import App from "./pages/App";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
