import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import Context from "./Context";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
