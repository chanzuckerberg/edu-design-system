import clsx from 'clsx';
import React from 'react';
import styles from './Badge.module.css';

export interface Props {
  /**
   * Text or icon to be placed on the upper right corner of the badgeable element.
   *
   * TODO-JL: prop naming / typing
   */
  badge?: React.ReactNode;
  /**
   * Child node to apply the badge to.
   */
  children: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Badge} from "@chanzuckerberg/eds";`
 *
 * Wraps an element to apply a small pill shaped container (Badge) on the upper righthand corner of the element.
 * A badge indicates something has changed in regards to the attached element.
 */
export const Badge = ({ badge, children, className, ...other }: Props) => {
  const componentClassName = clsx(
    styles['badge'],
    !badge && styles['badge--empty'],
    className,
  );

  return (
    <span className={styles['badge__wrapper']}>
      <div className={componentClassName} {...other}>
        {badge}
      </div>
      {children}
    </span>
  );
};
