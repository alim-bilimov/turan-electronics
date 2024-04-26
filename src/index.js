import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainContext from "./Context/MainContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainContext>
);
