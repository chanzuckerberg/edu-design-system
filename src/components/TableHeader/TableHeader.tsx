import type { ReactNode } from 'react';
import React from 'react';

export type Props = React.HTMLAttributes<HTMLTableSectionElement> & {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * `import {TableHeader} from "@chanzuckerberg/eds";`
 *
 * HTML `thead` of the `Table` component
 */
export const TableHeader = ({ children, className, ...other }: Props) => {
  return (
    <thead className={className} {...other}>
      {children}
    </thead>
  );
};
