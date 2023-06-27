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
 * `import {TableBody} from "@chanzuckerberg/eds";`
 *
 * HTML `tbody` of the `Table` component
 */
export const TableBody = ({ children, ...other }: Props) => {
  return <tbody {...other}>{children}</tbody>;
};
