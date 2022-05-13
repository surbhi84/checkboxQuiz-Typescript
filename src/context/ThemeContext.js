import { createContext, useContext, useState } from "react";

let ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ lightTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
