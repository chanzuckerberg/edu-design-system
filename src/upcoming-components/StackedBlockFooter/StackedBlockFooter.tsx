import React, { ReactNode } from 'react';

export interface Props {
  /* Child node(s) that can be nested inside component */
  children?: ReactNode;
  /* CSS class names that can be appended to the component. */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {StackedBlockFooter} from "@chanzuckerberg/eds";
 * ```
 *
 * StackedBlockFooter component is the footer container for the stackedblock items lists.
 */
export const StackedBlockFooter = ({
  children,
  className,
  ...other
}: Props) => {
  return (
    <footer className={className} {...other}>
      {children}
    </footer>
  );
};
