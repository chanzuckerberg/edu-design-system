import clsx from 'clsx';
import React from 'react';
import styles from './Badge.module.css';
import Icon from '../Icon';
import type { IconName, IconProps } from '../Icon';

type BadgeProps = {
  /**
   * Badgeable object MUST have accessible name describing the attached badge.
   * Wraps the badgeable object and the element on its upper right corner.
   */
  children?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
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
  children?: string;
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
  if (
    process.env.NODE_ENV !== 'production' &&
    children &&
    children.length > 3
  ) {
    throw 'Max badge text length is 3';
  }
  return (
    <div aria-hidden className={componentClassName} {...other}>
      {children}
    </div>
  );
};

const BadgeDot = () => <BadgeText />;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Badge} from "@chanzuckerberg/eds";`
 *
 * A badge is used to communicate an update or change to an object since the last interaction.
 *
 * A badged object MUST have screen reader text describing the attached badge (i.e. dot: has notification, number: has number updates)
 *
 * Example usage:
 *
 * ```tsx
 * <Badge>
 *  {badgeableObject}
 *  <Badge.Dot />
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
export const Badge = ({ children, className, ...other }: BadgeProps) => {
  const componentClassName = clsx(styles['badge__wrapper'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

Badge.Dot = BadgeDot;
Badge.Icon = BadgeIcon;
Badge.Text = BadgeText;
