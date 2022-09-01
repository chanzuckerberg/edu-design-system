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
 * import {StackedBlock} from "@chanzuckerberg/eds";
 * ```
 *
 * Component represents the container for the stacked blocks items vertically aligned with hyperlinked.
 */
export const StackedBlock = ({ children, className, ...other }: Props) => {
  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};
