import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useThemeContext } from "context/ThemeContext";
import "./header.css";

export const Header = () => {
  const { setTheme, lightTheme } = useThemeContext();
  return (
    <div>
      {/* <!-- header --> */}
      <header className="nav-head">
        {/* <!-- logo --> */}
        <div className="flex-row flex-center">
          <img
            src="/assets/icon/box.svg"
            alt="Profile icon"
            className="logo-icon"
          />

          <Link className="text-dec-none" to="/">
            <div className="flex-row">
              <h1 className="marg-un logo">check</h1>
              <h1 className="marg-un logo1">Box</h1>
            </div>
          </Link>
        </div>
        {/* <!-- end of logo --> */}

        <ul className="nav-links ">
          <li>
            <button
              className="themeBtn nav-link"
              onClick={() => setTheme((p: Boolean) => !p)}
            >
              {lightTheme ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </li>
          <li>
            <Link className="nav-link" to="/categories">
              <b>Categories</b>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/highscores">
              <b>High-Scores</b>
            </Link>
          </li>

          {/* <!-- Profile  --> */}
          <li>
            <Link className="nav-link outline-btn" to="/profile">
              <AiOutlineUser />
            </Link>
          </li>
        </ul>
      </header>
      {/* <!-- end of header --> */}
    </div>
  );
};
