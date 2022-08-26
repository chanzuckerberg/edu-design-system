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
 * import {PopoverBody} from "@chanzuckerberg/eds";
 * ```
 *
 * Body for the Popover component.
 */
export const PopoverBody: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};
