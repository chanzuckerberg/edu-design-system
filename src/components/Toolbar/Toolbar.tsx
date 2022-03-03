import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Toolbar.module.css';

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
export const Toolbar: React.FC<Props> = ({
  className,
  children,
  variant,
  verticalAlign,
  ...other
}) => {
  const componentClassName = clsx(styles['toolbar'], className, {
    [styles['toolbar--bare']]: variant === 'bare',
    [styles['toolbar--vertical-align-bottom']]: verticalAlign === 'bottom',
    [styles['toolbar--vertical-align-top']]: verticalAlign === 'top',
  });
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
