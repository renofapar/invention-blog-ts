import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";
import classNames from "classnames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  to: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
}) => {
  const styledClass = classNames(styles.AppLink, className, {
    [styles.primary]: theme === AppLinkTheme.PRIMARY,
    [styles.secondary]: theme === AppLinkTheme.SECONDARY,
  });
  return (
    <Link className={styledClass} to={to}>
      {children}
    </Link>
  );
};
