import React from 'react';
import Heading from '../Heading';
type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactNode);
};

export type Props = {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
} & RenderProps<{ open: boolean }>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {AccordionTitle} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const AccordionTitle = ({ children, className, ...other }: Props) => {
  return (
    <Heading className={className} size="h4" {...other} as="h2">
      {children}
    </Heading>
  );
};
