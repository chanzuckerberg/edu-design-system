import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './TextList.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Size variant:
   * - **sm** yields a TextList with smaller typography
   */
  size?: 'sm';
  /**
   * The as name for the list element, defaults to use ul
   */
  as?: string;
  /**
   * Style variant:
   * - **inline** yields a TextList that places items side by side
   */
  variant?: 'inline';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TextList} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const TextList = ({
  children,
  className,
  size,
  as,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['text-list'],
    size === 'sm' && styles['text-list--sm'],
    variant === 'inline' && styles['text-list--inline'],
    as === 'ol' && styles['text-list--ol'],
    className,
  );
  if (as === 'ol') {
    return (
      <ol className={componentClassName} {...other}>
        {children}
      </ol>
    );
  } else {
    return (
      <ul className={componentClassName} {...other}>
        {children}
      </ul>
    );
  }
};
