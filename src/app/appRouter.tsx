import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { App } from "./App";
import { AboutPageLazy } from "@/pages/AboutPage";
import { MainPageLazy } from "@/pages/MainPage";
import React, { Suspense } from "react";

export enum AppRoutes {
  APP = "/",
  MAIN = "main",
  ABOUT = "about",
}

export const AppRouters = [
  {
    path: AppRoutes.MAIN,
    element: <MainPageLazy />,
  },
  {
    path: AppRoutes.ABOUT,
    element: <AboutPageLazy />,
  },
];

export const Root = (
  <Route path="/" element={<App />}>
    {AppRouters.map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<>...</>}>
            <div className="page-wrap">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Route>
);

export const appRouter = () =>
  createBrowserRouter(createRoutesFromElements(Root));

{
  /* <Route path="/" element={<App />}>
    <Route path="about" element={(
      <React.Suspense fallback={<>...</>}>
        <div className="page-wrap">
        <AboutPageLazy />
        </div>
        
      </React.Suspense>
    )} />
    <Route path="main" element={(
      <React.Suspense fallback={<>...</>}>
        <div className="page-wrap">
        <MainPageLazy />
        </div>
        
      </React.Suspense>
    )} />
    </Route>
  </> */
}
