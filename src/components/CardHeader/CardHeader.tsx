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
 * ```ts
 * import {CardHeader} from "@chanzuckerberg/eds";
 * ```
 *
 * Header of the Card component.
 */
export const CardHeader = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx('card__header', className, {});
  return (
    <header className={componentClassName} {...other}>
      {children}
    </header>
  );
};
