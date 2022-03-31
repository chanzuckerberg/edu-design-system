import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './FooterNav.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items?: any;
}

/**
 * Primary UI component for user interaction
 */
export const FooterNav = ({ children, className, items, ...other }: Props) => {
  const componentClassName = clsx(styles['footer-nav'], className, {});
  return (
    <nav className={componentClassName} {...other}>
      <ul className={styles['footer-nav__list']}>{children}</ul>
    </nav>
  );
};
