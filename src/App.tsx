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
import {
  Header,
  Footer,
  Rules,
  LoggedInRoutes,
  LoggedOutRoutes,
  Loader,
} from "components";
import { sample_requests } from "backend/sample-requests";
import { setAuth, setUser } from "userRedux";
import { useDispatch } from "react-redux";

function App() {
  const { lightTheme } = useThemeContext();
  const [isInitialRender, setIsInitialRender] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      let token = localStorage.getItem("token");
      console.log(token, "token");
      if (token !== null && token !== "") {
        try {
          const response = await axios.get("/user", {
            headers: { authorization: token as string },
          });
          console.log(response.data, "huh data");
          dispatch(setUser(response.data));
          dispatch(setAuth(true));
        } catch (err) {
          console.error(err);
        } finally {
          setIsInitialRender(false);
        }
      } else dispatch(setAuth(false));
    })();
  }, []);

  return (
    <>
      {isInitialRender ? (
        <Loader />
      ) : (
        <div className={`${lightTheme ? "light" : "dark"} app`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/" element={<LoggedInRoutes />}>
              <Route path="/rules" element={<Rules />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/results" element={<Results />} />
              <Route path="/highscores" element={<Highscore />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/" element={<LoggedOutRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route
              path="/test"
              element={<Twopirest preset={sample_requests} />}
            />

            <Route path="*" element={<UrlNotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
