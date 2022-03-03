import React, { ReactNode, useState } from 'react';

import clsx from 'clsx';
import styles from './Header.module.css';
import { Button } from '../Button/Button';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

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
  const [isActive, setisActive] = useState(false);

  const toggleMenu = () => {
    setisActive(!isActive);
  };

  const componentClassName = clsx(styles['header'], className, {});

  return (
    <header role="banner" className={componentClassName} {...other}>
      {children}
    </header>
  );
};
