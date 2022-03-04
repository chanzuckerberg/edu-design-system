import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Tab.module.css';

export interface Props {
  /**
   * aria-labelledby attribute that associates a tab panel with its accompanying tab title text
   */
  ariaLabelledBy?: any;
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
  id?: any;
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
export const Tab: React.FC<Props> = ({
  children,
  className,
  id,
  ariaLabelledBy,
  title,
  ...other
}) => {
  const componentClassName = clsx(styles['tabs__panel'], className, {});
  return (
    <div
      role="tabpanel"
      id={id}
      aria-hidden={false}
      aria-labelledby={ariaLabelledBy}
      className={componentClassName}
      {...other}
    >
      {children}
    </div>
  );
};
