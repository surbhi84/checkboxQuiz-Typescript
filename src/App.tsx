import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages";
import "./App.css";
import { useThemeContext } from "context/ThemeContext";

function App() {
  const { lightTheme } = useThemeContext();
  return (
    <>
      <div className={`${lightTheme ? "light" : "dark"} app`}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
