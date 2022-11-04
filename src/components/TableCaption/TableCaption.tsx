import React, { type ReactNode } from 'react';

export type Props = React.HTMLAttributes<HTMLTableCaptionElement> & {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableCaption} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML caption cell for the `Table` component.
 * Must be first descendant of the `Table` component.
 */
export const TableCaption = ({ children, ...other }: Props) => {
  return <caption {...other}>{children}</caption>;
};
