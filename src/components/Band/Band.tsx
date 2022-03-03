import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Band.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Stylistic variations of component.
   * - `brand` yields the primary brand color
   */
  variant?: 'brand';
}

/**
 * Primary UI component for user interaction
 */
export const Band: React.FC<Props> = ({
  children,
  className,
  variant,
  ...other
}) => {
  const componentClassName = clsx(styles['band'], className, {
    [styles['band--brand']]: variant === 'brand',
  });

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
