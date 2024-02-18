import { createRoot } from 'react-dom/client';
import { router } from "./App"
import { RouterProvider } from "react-router-dom"
import React from "react"
import ThemeProvider from './theme/ThemeProvider';

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    
  </React.Suspense>
)


