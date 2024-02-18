import React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";


interface useThemeInterface {
  toggleTheme: () => void;
  theme: Theme;
}


export const useTheme = (): useThemeInterface => {
  const {theme, setTheme} = React.useContext(ThemeContext)

  const toggleTheme = () => {
    const changeTheme = theme === Theme.light ? Theme.dark : Theme.light
    setTheme(changeTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, changeTheme)
  }

  return {
    toggleTheme,
    theme
  }
}