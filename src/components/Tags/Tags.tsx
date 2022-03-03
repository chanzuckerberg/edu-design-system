import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Tags.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Tags: React.FC<Props> = ({ children, className, ...other }) => {
  const componentClassName = clsx(styles['tags'], className, {});
  return (
    <ul className={componentClassName} {...other}>
      {children}
    </ul>
  );
};
