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
export const Layout: React.FC<Props> = ({
  behavior,
  children,
  className,
  variant,
  ...other
}) => {
  const componentClassName = clsx(
    styles['layout'],
    className,
    variant === 'right-sidebar' && styles['layout--right-sidebar'],
    behavior === 'fixed-sidebar' && styles['layout--fixed-sidebar'],
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
