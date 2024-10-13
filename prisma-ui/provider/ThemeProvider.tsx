"use client";

import React, { useState } from "react";

type ThemeType = "dark" | "light";

// Define the shape of the context data
interface ThemeContextType {
  currentTheme: ThemeType;
  toggleTheme: () => void;
}

// Create the context with a default value
export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: "light",
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    document.querySelector("html").setAttribute("data-theme", theme);

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
