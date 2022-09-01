import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './FooterNav.module.css';
import FooterNavItem from '../FooterNavItem';

export interface Props {
  children?: ReactNode /* Child node(s) that can be nested inside component */;
  className?: string /* CSS class names that can be appended to the component. */;
  items?: any /* The array of items to be passed into the component. The array must take on the specified shape */;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FooterNav} from "@chanzuckerberg/eds";
 * ```
 *
 * Component presents footer navigation bar with additional styles passed in with props className
 */
export const FooterNav = ({ children, className, items, ...other }: Props) => {
  const componentClassName = clsx(styles['footer-nav'], className);
  return (
    <nav className={componentClassName} {...other}>
      <ul className={styles['footer-nav__list']}>{children}</ul>
    </nav>
  );
};

FooterNav.Item = FooterNavItem;
