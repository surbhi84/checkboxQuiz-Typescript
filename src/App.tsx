import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "userRedux";
import { useThemeContext } from "context/ThemeContext";
import { Header, Footer, Loader, AppRoutes } from "components";
import { tokenLoginHandler } from "updateHandlers";
import "./App.css";
import { RootState } from "userRedux/store";

function App() {
  const { lightTheme } = useThemeContext();
  const [isInitialRender, setIsInitialRender] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      let token = localStorage.getItem("token");
      if (token !== null && token !== "") {
        try {
          await tokenLoginHandler(token, dispatch);
        } catch (err) {
          console.error(err);
        } finally {
          setIsInitialRender(false);
        }
      } else {
        dispatch(setAuth(false));
        setIsInitialRender(false);
      }
    })();
  }, []);

  return (
    <>
      {isInitialRender ? (
        <Loader />
      ) : (
        <div className={`${lightTheme ? "light" : "dark"} app`}>
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
