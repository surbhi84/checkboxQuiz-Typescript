import { Routes, Route } from "react-router-dom";
import { Category, Home } from "./pages";
import { Header, Footer, Rules, QuestionCard } from "components";
import { useThemeContext } from "context/ThemeContext";
import "./App.css";

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
          <Route path="/quiz" element={<QuestionCard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
