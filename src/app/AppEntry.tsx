import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import React from "react";
import ThemeProvider from "@/entities/theme/ThemeProvider";
import { appRouter } from "./appRouter";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider>
    
      <RouterProvider router={appRouter()} />
    
  </ThemeProvider>
);
