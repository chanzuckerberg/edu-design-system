import clsx from 'clsx';
import React from 'react';
import Icon from '../Icon';
import styles from './Avatar.module.css';

export type UserData = {
  /**
   * The full name of the attached user (e.g., Jane Doe, David S. Pumpkins)
   */
  fullName: string;
  /**
   * User ID associated with the attached user
   */
  id?: string | number;
  /**
   * Additional data for an attached user (email, etc.)
   */
  [k: string]: string | number | boolean | undefined;
};

export interface Props {
  /**
   * Label for the given avatar. Defaults to a string using user data.
   */
  ariaLabel?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The shape of the avatar
   */
  shape?: 'circle' | 'square';
  /**
   * The size of the component
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The URL to an image resource (loaded lazily)
   */
  src?: string;
  /**
   * The user associated with this avatar
   */
  user?: UserData;
  /**
   * Variants of how the avatar will be portrayed
   */
  variant?: 'icon' | 'initials' | 'image';
}

function getInitials(fromName: string): string {
  /**
   * Scenarios:
   * - User's name is spelled as first and last name: John Smith
   * - User's name has a middle name or initial: John C. Smith
   * - User's Name has dashes in it
   */
  return fromName
    .split(' ')
    .map((part) => part[0])
    .reduce(
      (prev, curr, idx, arr) =>
        idx === 0 || idx === arr.length - 1 ? prev + curr : prev,
      '',
    )
    .toUpperCase();
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Avatar} from "@chanzuckerberg/eds";`
 *
 * Representation of a single, unique user, keyed by the user name
 */
export const Avatar = ({
  ariaLabel,
  className,
  shape = 'circle',
  size = 'md',
  user,
  variant = 'initials',
  src,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['avatar'],
    shape && styles[`avatar--${shape}`],
    size && styles[`avatar--${size}`],
    variant && styles[`avatar--${variant}`],
    className,
  );

  const descriptiveLabel =
    ariaLabel ??
    `Avatar for ${user ? '' : 'unknown '}user ${user?.fullName || ''}`;

  return (
    <div
      aria-label={descriptiveLabel}
      className={componentClassName}
      role="img"
      {...other}
    >
      {variant === 'initials' && (user ? getInitials(user.fullName) : '??')}
      {variant === 'icon' && <Icon name="avatar" purpose="decorative" />}
      {variant === 'image' && <img alt="user" src={src} />}
    </div>
  );
};
