import React, { createContext, useContext, useEffect, useState } from "react";

interface theme {
  lightTheme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<theme>({
  lightTheme: true,
  setTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lightTheme, setTheme] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === "false") {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ lightTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): theme => useContext(ThemeContext);
