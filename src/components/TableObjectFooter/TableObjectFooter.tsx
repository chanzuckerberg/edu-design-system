import type { ReactNode } from 'react';
import React from 'react';

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
 * import {TableObjectFooter} from "@chanzuckerberg/eds";
 * ```
 *
 * TableObjectFooter component represents the footer section of the TableObject container.
 */
export const TableObjectFooter = ({ children, className, ...other }: Props) => {
  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};
