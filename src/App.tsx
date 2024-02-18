import React from "react";
import "./styles/index.scss";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { useTheme } from "./theme/useTheme";
import classNames from "classnames";


export const App = () => {

  const {theme, toggleTheme} = useTheme()

  const appClass = classNames('app',
  {
    dark: theme === 'dark',
    light: theme === 'light'
  })

  return (
    <div className={appClass}>
      <Link to={"/"}>Home</Link>
      <Link to={"main"}>Main</Link>
      <Link to={"about"}>About</Link>
      <button className="btn-theme" onClick={toggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
      <Outlet />
    </div>
  );
};

export const Root = (
  <Route path="/" element={<App />}>
    <Route path="about" element={<AboutPageLazy />} />
    <Route path="main" element={<MainPageLazy />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(Root));
