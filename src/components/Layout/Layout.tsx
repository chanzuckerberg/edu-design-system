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
   * Expandable layout sections
   * 1) Used for hover/focus states showing/hiding extra content
   */
   expandable?: boolean;

   /**
   * Sidebar property
   * 1) Adjust the size of the sidebar
   */
   variant?: 'narrow-sidebar';
}

/**
 * Primary UI component for user interaction
 */
export const Layout: React.FC<Props> = ({
  behavior,
  children,
  className,
  variant,
  expandable,
  ...other
}) => {
  const componentClassName = clsx(styles['layout'], className, {
    [styles['layout--narrow-sidebar']]: variant === 'narrow-sidebar',
    [styles['layout--fixed-sidebar']]: behavior === 'fixed-sidebar',
    [styles['layout--expandable']]: expandable === true,
  });
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
