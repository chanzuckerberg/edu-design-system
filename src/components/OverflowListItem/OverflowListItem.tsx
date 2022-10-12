import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from '../OverflowList/OverflowList.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
}

/**
 * ```ts
 * import {OverflowListItem} from "@chanzuckerberg/eds";
 * ```
 *
 * OverflowListItem to be used in the OverflowList component to maintain the body of the elements overflow.
 */
export const OverflowListItem = ({ className, children, ...other }: Props) => {
  const componentClassName = clsx(styles['overflow-list__item'], className);
  return (
    <li className={componentClassName} {...other}>
      {children}
    </li>
  );
};
