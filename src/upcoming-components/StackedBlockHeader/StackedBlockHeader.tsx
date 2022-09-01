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
 * import {StackedBlockHeader} from "@chanzuckerberg/eds";
 * ```
 *
 * StackedBlockHeader component is the header container for the stackedblock items lists.
 */
export const StackedBlockHeader = ({
  children,
  className,
  ...other
}: Props) => {
  return (
    <header className={className} {...other}>
      {children}
    </header>
  );
};
