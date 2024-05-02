import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesProvider from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RoutesProvider />
  </BrowserRouter>
);
