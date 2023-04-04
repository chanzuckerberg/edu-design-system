import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
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
 * `import {CardFooter} from "@chanzuckerberg/eds";`
 *
 * Footer of the Card component.
 */
export const CardFooter = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['card__footer'], className);
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};

CardFooter.displayName = 'CardFooter';
