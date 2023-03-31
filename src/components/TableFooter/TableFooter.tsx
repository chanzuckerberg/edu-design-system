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
 * `import {TableFooter} from "@chanzuckerberg/eds";`
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
