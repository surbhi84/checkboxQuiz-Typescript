import { useThemeContext } from "context/ThemeContext";
import "./loader.css";
export const Loader = () => {
  const { lightTheme } = useThemeContext();

  return (
    <div
      className={`flex-row flex-center App-logo ${
        lightTheme ? "light" : "dark"
      }`}
    >
      <img
        src="/assets/icon/box.svg"
        alt="Profile icon"
        className="logo-icon"
      />

      <div className="flex-row">
        <h1 className="marg-un logo">check</h1>
        <h1 className="marg-un logo1">Box</h1>
      </div>
    </div>
  );
};
