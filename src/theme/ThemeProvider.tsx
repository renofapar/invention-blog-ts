import React, { FC } from 'react'
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.light;
const ThemeProvider: FC<{children: React.ReactNode}> = ({children}) => {

  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const defaultProps = React.useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme])


  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider