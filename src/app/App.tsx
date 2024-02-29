import React from 'react'
import './styles/index.scss'
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements
  , Link
} from 'react-router-dom'

import { AboutPageLazy } from '../pages/AboutPage/ui/AboutPageLazy'
import { MainPageLazy } from '../pages/MainPage/ui/MainPageLazy'
import { useTheme } from '../entities/theme/useTheme'
import classNames from 'classnames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

export const App = () => {
  const { theme } = useTheme()

  const appClass = classNames('app',
    {
      dark: theme === 'dark',
      light: theme === 'light'
    })

  return (
    <div className={appClass}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}
