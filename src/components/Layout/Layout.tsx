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
   * 1) Adjust the gap between layout sections.
   */
  gap?: 'none' | 'lg-xl';
  /**
   * Sidebar property
   * 1) Adjust the size of the sidebar
   */
  sidebar?: 'wide';
  /**
   * Sidebar property
   * 1) Adjust the size of the sidebar
   */
  variant?: 'right-sidebar' | '50-50' | '60-40';
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
    variant === '60-40' && styles['layout--60-40'],
    variant === 'right-sidebar' && styles['layout--right-sidebar'],
    variant && styles[`layout--${variant}`],
    behavior === 'fixed-sidebar' && styles['layout--fixed-sidebar'],
    gap && styles[`layout--gap-${gap}`],
    sidebar === 'wide' && styles['layout--sidebar-wide'],
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
