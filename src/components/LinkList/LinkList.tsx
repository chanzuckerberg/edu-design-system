import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './LinkList.module.css';

export interface Props {
  /**
   * Behavioral variant
   * - **responsive** renders a horizontal wrapping link list that converts to a stacked link list on large screens
   * - **horizontal** renders a horizontal wrapping link list on all screens
   */
  behavior?: 'responsive' | 'horizontal';
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Color theme for the component. "inverted" theme is for use on dark backgrounds
   */
  inverted?: boolean;
  /**
   * Size variants:
   * - **sm** yields a link list with smaller typography
   */
  size?: 'sm';
  /**
   * Stylistic variations:
   * - **lined** yields a link list with lines separating each link
   */
  variant?: 'lined';
}

/**
 * Primary UI component for user interaction
 */
export const LinkList: React.FC<Props> = ({
  behavior,
  children,
  className,
  inverted,
  size,
  variant,
  ...other
}) => {
  const componentClassName = clsx(styles['link-list'], className, {
    [styles['link-list--sm']]: size === 'sm',
    [styles['link-list--inverted']]: inverted === true,
    [styles['link-list--lined']]: variant === 'lined',
    [styles['link-list--responsive']]: behavior === 'responsive',
    [styles['link-list--horizontal']]: behavior === 'horizontal',
  });
  return (
    <ul className={componentClassName} {...other}>
      {children}
    </ul>
  );
};
