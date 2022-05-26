import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {ToolbarItem} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const ToolbarItem = ({
  align,
  className,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(
    'toolbar__item',
    className,
    align === 'center' && styles['toolbar__item--align-center'],
    align === 'right' && styles['toolbar__item--align-right'],
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
