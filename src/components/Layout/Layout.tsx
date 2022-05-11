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
  gap?: 'none';
  /**
   * Sidebar property
   * 1) Adjust the size of the sidebar
   */
  sidebar?: 'wide';
  /**
   * Sidebar property
   * 1) Adjust the size of the sidebar
   */
  variant?: 'right-sidebar';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Layout} from "@chanzuckerberg/eds";
 * ```
 *
 * Component that controls an overarching page layout. By default, the layout renders
 * a fixed-position left sidebar on larger screens.
 */
export const Layout = ({
  behavior,
  children,
  className,
  variant,
  gap,
  sidebar,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['layout'],
    className,
    variant === 'right-sidebar' && styles['layout--right-sidebar'],
    behavior === 'fixed-sidebar' && styles['layout--fixed-sidebar'],
    gap === 'none' && styles['layout--gap-none'],
    sidebar === 'wide' && styles['layout--sidebar-wide'],
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
