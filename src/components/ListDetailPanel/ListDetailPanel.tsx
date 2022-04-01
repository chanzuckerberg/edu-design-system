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
   * HTML id for the component
   */
  id?: any;
  /**
   * Heading
   */
  title?: string;
  /**
   * Available _stylistic_ variations available for the component
   */
  variant?: 'error' | 'warning' | 'success' | 'number'
}

/**
 * Primary UI component for user interaction
 */
export const ListDetailPanel = ({
  ariaLabelledBy,
  children,
  className,
  id,
  title,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['list-detail__panel'], className, {});
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
