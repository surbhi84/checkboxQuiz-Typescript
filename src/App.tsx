import { Routes, Route } from "react-router-dom";
import { Category, Home, Results, Quiz, UrlNotFound } from "./pages";
import { Header, Footer, Rules } from "components";
import { useThemeContext } from "context/ThemeContext";
import "./App.css";
import { Highscore } from "pages/highscore/Highscore";

function App() {
  const { lightTheme } = useThemeContext();
  return (
    <>
      <div className={`${lightTheme ? "light" : "dark"} app`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/highscores" element={<Highscore />} />

          <Route path="*" element={<UrlNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
