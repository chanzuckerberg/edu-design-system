import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../ListDetail/ListDetail.module.css';

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
   * Mark list as completed
   */
  completed?: boolean;
  /**
   * HTML id for the component
   */
  id?: any;
  /**
   * The tab variant
   */
  variant?:
    | 'bullet'
    | 'complete'
    | 'error'
    | 'incomplete'
    | 'number'
    | 'success'
    | 'warning';
  /**
   * The tab title
   */
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListDetailPanel = ({
  ariaLabelledBy,
  children,
  className,
  completed,
  id,
  variant,
  title,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['list-detail__panel'], className, {});
  return (
    <nav
      aria-hidden={false}
      aria-labelledby={ariaLabelledBy}
      className={componentClassName}
      id={id}
      role="tabpanel"
      {...other}
    >
      {children}
    </nav>
  );
};
