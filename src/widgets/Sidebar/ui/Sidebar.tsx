import React from 'react'
import styles from './Sidebar.module.scss'
import classNames from 'classnames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface ISidebar {
  className?: string;

}


export const Sidebar:React.FC<ISidebar> = ({className}) => {
  const [collapsed, setCollapsed] = React.useState(false)
  const styled = classNames(styles.sidebar, className, {
    [styles.collapsed]: collapsed
  })
  const onToggle = () => {
    setCollapsed(collapsed => !collapsed)
  }
  return (
    <div className={styled}>
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
      <ThemeSwitcher />
      {/* <langSwitcher />*/ }
      </div>
    </div>
  )
}

