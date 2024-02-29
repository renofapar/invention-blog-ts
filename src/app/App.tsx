import './styles/index.scss'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../entities/theme/useTheme'
import classNames from 'classnames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

export const App: React.FC = () => {
  const { theme } = useTheme()

  const appClass = classNames('app', {
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
