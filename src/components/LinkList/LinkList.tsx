import clsx from 'clsx';
import React, {ReactNode} from 'react';
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
 * ```ts
 * import {LinkList} from "@chanzuckerberg/eds";
 * ```
 *
 * List of links.
 */
export const LinkList = ({
  behavior,
  children,
  className,
  size,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['link-list'],
    size === 'sm' && styles['link-list--sm'],
    variant === 'lined' && styles['link-list--lined'],
    behavior === 'responsive' && styles['link-list--responsive'],
    behavior === 'horizontal' && styles['link-list--horizontal'],
    className,
  );
  return (
    <ul className={componentClassName} {...other}>
      {children}
    </ul>
  );
};
