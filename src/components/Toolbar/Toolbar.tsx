import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Toolbar.module.css';
import ToolbarItem from '../ToolbarItem';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Vertical align
   * - **bottom** vertically aligns toolbar items to the bottom of toolbar
   * - **top** vertically aligns toolbar items to the top of toolbar
   */
  variant?: 'bare';
  /**
   * Vertical align:
   * - **bottom** vertically aligns t
   */
  verticalAlign?: 'bottom' | 'top';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Toolbar} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const Toolbar = ({
  className,
  children,
  variant,
  verticalAlign,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['toolbar'],
    variant === 'bare' && styles['toolbar--bare'],
    verticalAlign === 'bottom' && styles['toolbar--vertical-align-bottom'],
    verticalAlign === 'top' && styles['toolbar--vertical-align-top'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

Toolbar.Item = ToolbarItem;
