import React, { ReactNode } from 'react';

export interface Props {
  /**
   * aria-labelledby attribute that associates a tab panel with its accompanying tab title text
   */
  'aria-labelledby'?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Number passed down from Tabs to show the active index state of Tabs
   */
  isActiveIndex?: number;
  /**
   * Number passed down from Tabs to show the active index state of Tabs
   */
  title?: string;
}

/**
 * ```ts
 * import {Tab} from "@chanzuckerberg/eds";
 * ```
 *
 * Individual tab within the Tabs component.
 */
export const Tab = ({
  children,
  className,
  id,
  'aria-labelledby': ariaLabelledBy,
  title,
  ...other
}: Props) => {
  return (
    <div
      aria-hidden={false}
      aria-labelledby={ariaLabelledBy}
      className={className}
      id={id}
      role="tabpanel"
      {...other}
    >
      {children}
    </div>
  );
};
