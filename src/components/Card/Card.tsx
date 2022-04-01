import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
export const Card = ({ className, children, inverted, ...other }: Props) => {
  const componentClassName = clsx(
    styles['card'],
    className,
    inverted && styles['card--inverted'],
  );
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
