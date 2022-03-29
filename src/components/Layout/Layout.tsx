import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Layout.module.css';

export interface Props {
  /**
   * Behavior
   */
  behavior?: 'fixed-sidebar';

  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Stylistic variations:
   * - **reversed** switches the order of the sidebar and main content
   */
  variant?: 'right-sidebar';
}

/**
 * Primary UI component for user interaction
 */
export const Layout = ({
  behavior,
  children,
  className,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['layout'], className, {
    [styles['layout--right-sidebar']]: variant === 'right-sidebar',
    [styles['layout--fixed-sidebar']]: behavior === 'fixed-sidebar',
  });
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
