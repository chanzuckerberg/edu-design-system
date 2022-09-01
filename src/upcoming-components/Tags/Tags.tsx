import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Tags.module.css';

export interface Props {
  /* Child node(s) that can be nested inside component */
  children?: ReactNode;
  /* CSS class names that can be appended to the component. */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Tags} from "@chanzuckerberg/eds";
 * ```
 *
 * Component represents the container pill layout for the buttons of tag items.
 */
export const Tags = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['tags'], className);
  return (
    <ul className={componentClassName} {...other}>
      {children}
    </ul>
  );
};
