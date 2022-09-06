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
 * import {TileBody} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const TileBody = ({ children, className, ...other }: Props) => {
  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};
