import clsx from 'clsx';
import React from 'react';
import styles from './Badge.module.css';
import Icon from '../Icon';
import type { IconName, IconProps } from '../Icon';

type BadgeProps = {
  /**
   * Text or icon to be placed on the upper right corner of the badgeable element.
   */
  children?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // TODO-JL: appropriate prop name? i.e. variant?: 'empty' or empty?: boolean?
  /**
   * Empty variant of the badge with a smaller badge circle.
   */
  empty?: boolean;
};

type BadgeIconProps = Omit<IconProps, 'purpose' | 'name'> & {
  /**
   * Name of icon to render.
   */
  name: IconName;
};

type BadgeTextProps = {
  /**
   * Text to be placed on the upper right corner of the badgeable element.
   */
  children: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

const BadgeIcon = ({ className, ...other }: BadgeIconProps) => {
  const componentClassName = clsx(styles['badge'], className);
  return (
    <div aria-hidden className={componentClassName}>
      <Icon purpose="decorative" size="1rem" {...other} />
    </div>
  );
};

const BadgeText = ({ children, className, ...other }: BadgeTextProps) => {
  const componentClassName = clsx(
    styles['badge'],
    !children && styles['badge--empty'],
    className,
  );
  /**
   * Throws error if string length is too long for badge.
   */
  if (process.env.NODE_ENV !== 'production' && children.length > 3) {
    throw 'Max badge text length is 3';
  }
  return (
    <div aria-hidden className={componentClassName} {...other}>
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
 * The attached element MUST have accessible name and other relevant aria properties in relevance to the badge.
 *
 * Example usage:
 *
 * ```tsx
 * <Badge empty>
 *  {badgeableObject}
 * </Badge>
 *
 * <Badge>
 *   {badgeableObject}
 *   <Badge.Text>1</Badge.Text>
 * </Badge>
 *
 * <Badge>
 *   {badgeableObject}
 *   <Badge.Icon name="alarm"/>
 * </Badge>
 * ```
 */
export const Badge = ({ children, className, empty, ...other }: BadgeProps) => {
  const componentClassName = clsx(styles['badge__wrapper'], className);
  const emptyBadgeClassName = clsx(styles['badge'], styles['badge--empty']);
  return (
    <div className={componentClassName} {...other}>
      {children}
      {empty && <div aria-hidden className={emptyBadgeClassName} {...other} />}
    </div>
  );
};

Badge.Icon = BadgeIcon;
Badge.Text = BadgeText;
