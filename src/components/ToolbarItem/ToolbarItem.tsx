import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from '../Toolbar/Toolbar.module.css';

export interface Props {
  /**
   * Align variations:
   * - **center** yields a ToolbarItem that appears centered within the Toolbar container
   * - **right** yields a ToolbarItem that appears right-aligned within the Toolbar container
   */
  align?: 'center' | 'right';
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * `import {ToolbarItem} from "@chanzuckerberg/eds";`
 *
 * Used in the Toolbar component to filter the content based on alignment.
 */
export const ToolbarItem = ({
  align,
  className,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(
    'toolbar__item',
    align === 'center' && styles['toolbar__item--align-center'],
    align === 'right' && styles['toolbar__item--align-right'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
