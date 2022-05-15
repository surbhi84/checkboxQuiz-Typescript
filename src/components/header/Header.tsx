import { Link, NavLink } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useThemeContext } from "context/ThemeContext";
import "./header.css";
import { useState } from "react";

export const Header = () => {
  const { setTheme, lightTheme } = useThemeContext();
  const [isAuth, setIsAuth] = useState(false);
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
        <nav className="mg-left-auto">
          <ul className="nav-links">
            <li>
              <button
                className="themeBtn nav-link"
                onClick={() => setTheme((p: Boolean) => !p)}
              >
                {lightTheme ? <MdDarkMode /> : <MdLightMode />}
              </button>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                to="/categories"
              >
                <b>Categories</b>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                to="/highscores"
              >
                <b>High-Scores</b>
              </NavLink>
            </li>

            {/* <!-- Profile  --> */}
            <li>
              {isAuth ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-link-active outline-btn"
                      : "nav-link outline-btn"
                  }
                  to="/profile"
                >
                  <AiOutlineUser />
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link nav-link-active outline-btn play-btn-style"
                      : "nav-link outline-btn play-btn-style"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
      {/* <!-- end of header --> */}
    </div>
  );
};
