import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Tab.module.css';

export interface Props {
  /**
   * aria-labelledby attribute that associates a tab panel with its accompanying tab title text
   */
  ariaLabelledBy?: string;
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
 * Primary UI component for user interaction
 */
export const Tab = ({
  children,
  className,
  id,
  ariaLabelledBy,
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
