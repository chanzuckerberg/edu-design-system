import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './LayoutContainer.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component. `PrimaryNavItem` the only permissible children of the PrimaryNav
   */
  children: ReactNode;
  /**
   * Expands component to the full height of the container
   */
  fullHeight?: boolean;
  /**
   * Stylistic variations:
   * - **narrow** yields a LayoutContainer with a narrower width
   */
  variant?: 'narrow';
}

/**
 * Primary UI component for user interaction
 */
export const LayoutContainer: React.FC<Props> = ({
  className,
  children,
  fullHeight,
  variant,
  ...other
}) => {
  const componentClassName = clsx(
    styles['layout-container'],
    className,
    variant === 'narrow' && styles['layout-container--narrow'],
    fullHeight && styles['layout-container--narrow'],
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
