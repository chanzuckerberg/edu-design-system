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
 * Primary UI component for user interaction
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
    className,
    variant === 'bare' && styles['toolbar--bare'],
    verticalAlign === 'bottom' && styles['toolbar--vertical-align-bottom'],
    verticalAlign === 'top' && styles['toolbar--vertical-align-top'],
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

Toolbar.Item = ToolbarItem;
