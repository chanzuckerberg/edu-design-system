import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../ListDetail/ListDetail.module.css';

export type ListDetailPanelVariant =
  | 'bullet'
  | 'complete'
  | 'error'
  | 'incomplete'
  | 'number'
  | 'success'
  | 'warning';
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
   * Mark list as completed
   */
  completed?: boolean;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * The tab variant
   */
  variant?: ListDetailPanelVariant;
  /**
   * The tab title
   */
  title?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Panel to be used inside of the ListDetail component.
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
