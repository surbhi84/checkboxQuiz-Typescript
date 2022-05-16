import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Twopirest from "twopi-rest";
import axios from "axios";
import { useThemeContext } from "context/ThemeContext";
import "./App.css";
import {
  Category,
  Home,
  Results,
  Quiz,
  UrlNotFound,
  Profile,
  Login,
  Signup,
  Highscore,
} from "./pages";
import { Header, Footer, Rules } from "components";
import { sample_requests } from "backend/sample-requests";
import { setUser } from "userRedux";

function App() {
  const { lightTheme } = useThemeContext();
  const [isInitialRender, setIsInitialRender] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      setIsInitialRender(false);
      let token = localStorage.getItem("token");
      if (token !== null || token !== "") {
        const response = await axios.get("/user", {
          headers: { authorization: token as string },
        });

        dispatch(setUser(response.data));
      }
    })();
  }, []);

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/test"
            element={<Twopirest preset={sample_requests} />}
          />

          <Route path="*" element={<UrlNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
import { useDispatch } from "react-redux";

export default App;
