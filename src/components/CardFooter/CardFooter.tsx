import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Card/Card.module.css';

export interface Props {
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {CardFooter} from "@chanzuckerberg/eds";
 * ```
 *
 * Footer of the Card component.
 */
export const CardFooter = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['card__footer'], className, {});
  return (
    <footer className={componentClassName} role="generic" {...other}>
      {children}
    </footer>
  );
};
