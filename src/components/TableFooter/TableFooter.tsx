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
 * import {TableFooter} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML `tfoot` of the `Table` component
 */
export const TableFooter = ({ children, className, ...other }: Props) => {
  return (
    <tfoot className={className} {...other}>
      {children}
    </tfoot>
  );
};
