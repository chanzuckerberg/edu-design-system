import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
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
 * `import {LayoutContainer} from "@chanzuckerberg/eds";`
 *
 * Layout container. Caps the width of the content to the maximum width and centers the container.
 */
export const LayoutContainer = ({
  className,
  children,
  fullHeight,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['layout-container'],
    variant === 'narrow' && styles['layout-container--narrow'],
    fullHeight && styles['layout-container--narrow'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
