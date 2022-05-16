import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContextProvider } from "context/ThemeContext";

import { makeServer } from "./backend/server";

makeServer();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>
);
