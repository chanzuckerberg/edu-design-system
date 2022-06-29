import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Tab.module.css';

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
 * BETA: This component is still a work in progress and is subject to change.
 *
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
  const componentClassName = clsx(styles['tabs__panel'], className, {});
  return (
    <div
      aria-hidden={false}
      aria-labelledby={ariaLabelledBy}
      className={componentClassName}
      id={id}
      role="tabpanel"
      {...other}
    >
      {children}
    </div>
  );
};
