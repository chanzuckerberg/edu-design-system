import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

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
   * Card rendered on a dark backgorund
   */
  inverted?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<Props> = ({
  className,
  children,
  inverted,
  ...other
}) => {
  const componentClassName = clsx(styles['card'], className, {
    [styles['card--inverted']]: inverted,
  });
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
