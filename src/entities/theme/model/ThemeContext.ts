import { createContext } from 'react'
import { Theme, type ThemeContextProps } from './types'

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.light })

export const LOCAL_STORAGE_THEME_KEY = 'theme'
