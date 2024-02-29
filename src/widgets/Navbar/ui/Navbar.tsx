import classNames from "classnames";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";



interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const classes = classNames(styles.navbar, className);
  
  return (
    <div className={classes}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={styles.link}>Home</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"main"} className={styles.link}>Main</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"about"} className={styles.link}>About</AppLink>
      </div>
      
    </div>
  );
};
