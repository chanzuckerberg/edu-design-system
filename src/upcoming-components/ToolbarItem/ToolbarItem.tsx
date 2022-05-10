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
 * Primary UI component for user interaction
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
