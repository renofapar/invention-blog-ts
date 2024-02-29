import React, { type FC, type ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
export enum ThemeButton {
  CLEAR = 'clear',

}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  theme?: ThemeButton
}
export const Button: FC<IButton> = (props) => {
  const { children, className, theme, ...otherProps } = props
  const styled = classNames(styles.button, className, {
    [styles.clear]: theme === ThemeButton.CLEAR
  })
  return (
      <button type='button' className={styled} {...otherProps}>
          {children}
      </button>
  )
}
