import React, { createContext, useContext, useState } from "react";

interface theme {
  lightTheme: Boolean;
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
  return (
    <ThemeContext.Provider value={{ lightTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): theme => useContext(ThemeContext);
