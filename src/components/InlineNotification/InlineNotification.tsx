import clsx from 'clsx';
import React from 'react';
import styles from './InlineNotification.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {InlineNotification} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const InlineNotification = ({ className, ...other }: Props) => {
  const componentClassName = clsx(styles['inline-notification'], className);

  return (
    <div className={componentClassName} {...other}>
      Hello!
    </div>
  );
};
