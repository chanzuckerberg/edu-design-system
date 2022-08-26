import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {OverflowListItem} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const OverflowListItem = ({ className, children, ...other }: Props) => {
  const componentClassName = clsx(styles['overflow-list__item'], className);
  return (
    <li className={componentClassName} {...other}>
      {children}
    </li>
  );
};
