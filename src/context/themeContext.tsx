// import { createContext, useContext, useState, useEffect, ReactNode } from "react";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("theme1");

  useEffect(() => {
    const storedTheme = localStorage.getItem("app-theme") as Theme;
    if (storedTheme) setThemeState(storedTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
