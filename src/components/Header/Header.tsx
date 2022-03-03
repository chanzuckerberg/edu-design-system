import clsx from 'clsx';
import React, { ReactNode } from 'react';

import styles from './Header.module.css';

export interface HeaderProps {
  /**
   * Behavior variants
   * - **relative** (default) yields a Header whose position is styled "relative".
   * - **sticky** yields a Header whose position is styled "sticky".
   */
  behavior?: 'relative' | 'sticky';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component. `PrimaryNavItem` the only permissible children of the PrimaryNav
   */
  children?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  children,
  ...other
}) => {
  const componentClassName = clsx(styles['header'], className, {});

  return (
    <header role="banner" className={componentClassName} {...other}>
      {children}
    </header>
  );
};
