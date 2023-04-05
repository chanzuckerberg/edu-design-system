import clsx from 'clsx';
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
 * `import {CardBody} from "@chanzuckerberg/eds";`
 *
 * Body of the Card component.
 */
export const CardBody = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['card__body'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

CardBody.displayName = 'CardBody';
