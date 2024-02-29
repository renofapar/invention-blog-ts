export enum Theme {
  light = 'light',
  dark = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}
