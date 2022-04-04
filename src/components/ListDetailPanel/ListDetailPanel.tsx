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
<<<<<<< HEAD
   * Number passed down from ListDetail to show the active index state of ListDetail
   */
  title?: string;
  /**
   * Stylistic variations for the list detail item type.
   * - **success** - results in a green list detail item and add icon
   * - **warning** - results in a yellow list detail item and add icon
   * - **error** - results in a red list detail item and adds icon
   */
  variant?: 'success' | 'warning' | 'error';
=======
   * The tab variant
   */
  variant?: 'error' | 'number' | 'success' | 'warning';
  /**
   * The tab title
   */
  title?: string;
>>>>>>> next
}

/**
 * Primary UI component for user interaction
 */
<<<<<<< HEAD
export const ListDetailPanel: React.FC<Props> = ({
  children,
  className,
  id,
  ariaLabelledBy,
  title,
  variant,
  ...other
}) => {
=======
export const ListDetailPanel = ({
  ariaLabelledBy,
  children,
  className,
  id,
  variant,
  title,
  ...other
}: Props) => {
>>>>>>> next
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
