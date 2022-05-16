import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { store } from "userRedux";
import { Provider } from "react-redux";

import { ThemeContextProvider } from "context/ThemeContext";

import { makeServer } from "./backend/server";

makeServer();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <Router>
          <App />
        </Router>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
