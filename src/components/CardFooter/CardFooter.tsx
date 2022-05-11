import clsx from 'clsx';
import React, { ReactNode } from 'react';

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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Footer of the Card component.
 */
export const CardFooter = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx('card__footer', className, {});
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};
