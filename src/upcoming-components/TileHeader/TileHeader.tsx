import React, { ReactNode } from 'react';

export interface Props {
  /* Child node(s) that can be nested inside component */
  children: ReactNode;
  /* CSS class names that can be appended to the component. */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TileHeader} from "@chanzuckerberg/eds";
 * ```
 *
 * Component presents the container for the TileHeader.
 */
export const TileHeader = ({ children, className, ...other }: Props) => {
  return (
    <header className={className} {...other}>
      {children}
    </header>
  );
};
