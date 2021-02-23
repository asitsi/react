import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import { Lines } from "react-preloaders";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <Lines color={"#FEE715FF"} />
  </React.StrictMode>,
  document.getElementById("root")
);
