import { useTheme } from '@/entities/theme/useTheme'
import styles from './ThemeSwitcher.module.scss'
import classNames from 'classnames'
import { MdBedtime, MdOutlineBedtime } from 'react-icons/md'
import { Theme } from '@/entities/theme/model/types'
import { Button, ThemeButton } from '@/shared/ui/button/Button'
interface IThemeSwitcher {
  className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcher) => {
  const { theme, toggleTheme } = useTheme()
  const styled = classNames(
    styles.btnTheme,
    {
      [styles.dark]: theme === 'dark',
      [styles.light]: theme === 'light'
    },
    className
  )

  return (
      <Button theme={ThemeButton.CLEAR} className={styled} onClick={toggleTheme}>

          {theme === Theme.dark
            ? (
                <MdOutlineBedtime fill="#fff" size={30} />
              )
            : (
                <MdBedtime size={30} />
              )}
      </Button>
  )
}
