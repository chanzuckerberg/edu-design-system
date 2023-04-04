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
 * `import {CardHeader} from "@chanzuckerberg/eds";`
 *
 * Header of the Card component.
 */
export const CardHeader = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['card__header'], className);
  return (
    <header className={componentClassName} {...other}>
      {children}
    </header>
  );
};

CardHeader.displayName = 'CardHeader';
