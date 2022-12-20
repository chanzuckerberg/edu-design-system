import clsx from 'clsx';
import React from 'react';
import styles from './Badge.module.css';

type BadgeWrapperProps = {
  /**
   * Child node to apply the badge to.
   */
  children: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

type BadgeProps = {
  /**
   * Text or icon to be placed on the upper right corner of the badgeable element.
   */
  children?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * Helper to the Badge component to wrap the Badge and associated badge-able object.
 */
const BadgeWrapper = ({ children, className, ...other }: BadgeWrapperProps) => {
  const componentClassName = clsx(styles['badge__wrapper'], className);

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Badge} from "@chanzuckerberg/eds";`
 *
 * Wraps an element to apply a small pill shaped container (Badge) on the upper righthand corner of the element.
 * A badge indicates something has changed in regards to the attached element.
 *
 * Example usage:
 *
 * ```tsx
 * <Badge.Wrapper>
 *   {badgeableObject}
 *   <Badge>1</Badge>
 * </Badge.Wrapper>
 * ```
 */
export const Badge = ({ children, className, ...other }: BadgeProps) => {
  const componentClassName = clsx(
    styles['badge'],
    !children && styles['badge--empty'],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

Badge.Wrapper = BadgeWrapper;
