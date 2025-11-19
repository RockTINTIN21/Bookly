"use client";

import { createContext, FC, ReactNode, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  onChange: () => null,
});

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const onChange = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);

    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark",
    );
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === "light" || localStorageTheme === "dark") {
      onChange(localStorageTheme);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
      document.documentElement.classList.toggle(
        "dark",
        !("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches,
      );
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, onChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
