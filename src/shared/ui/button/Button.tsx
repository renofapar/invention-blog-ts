import React, {FC, ButtonHTMLAttributes} from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames';
export enum ThemeButton {
  CLEAR = 'clear',

}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: ThemeButton
}
export const Button:FC<IButton> = (props) => {
  const {children, className, theme,  ...otherProps} = props;
  const styled = classNames(styles.button, className, {
    [styles.clear]: theme === ThemeButton.CLEAR
  })
  return (
    <button  className={styled} {...otherProps}>
      {children}
    </button>
  )
}

