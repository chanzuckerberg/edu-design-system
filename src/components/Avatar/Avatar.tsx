import clsx from 'clsx';
import Graphemer from 'graphemer';

import React from 'react';
import type { Preset, Size } from '../../util/variant-types';
import Icon, { type IconName } from '../Icon';
import Text from '../Text';
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
   * The display shortcut for the user name. Can be initials, emoji, or other text symbols (recommended max: 2)
   */
  displayName?: string;
  /**
   * Additional data for an attached user (email, etc.)
   */
  [k: string]: string | number | boolean | undefined;
};

type AvatarProps = {
  // Component API
  /**
   * Label for the given avatar. Defaults to a string using user data.
   */
  ariaLabel?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The URL to an image resource (loaded lazily)
   */
  src?: string;
  /**
   * The user associated with this avatar
   *
   * `UserData` takes the format ([] is optional):
   *
   * ```
   * - fullName (string)
   * - [id] (string | number)
   * - [displayName] (string)
   * - [key:string] (string | number | boolean)
   * ```
   */
  user?: UserData;
  // Design API
  /**
   * Icon to use when an "icon" variant of the avatar. Default is "person"
   */
  icon?: IconName;
  /**
   * Marking whether the Avatar is intended to be interactive (have focus/hover states)
   */
  isInteractive?: boolean;
  /**
   * The size of the avatar
   */
  size?: Extract<Size, 'sm' | 'md' | 'lg' | 'xl'>;
  /**
   * Variants of how the avatar will be portrayed
   */
  variant?: 'icon' | 'text' | 'image';
};

/**
 * Use graphemer to take a name part, and select the first grapheme (emoji, surrogate pair, ASCII character)
 */
function produceAbbreviation(fromName: string): string {
  const splitter = new Graphemer();
  return fromName ? splitter.splitGraphemes(fromName)[0] : '?';
}

export function getInitials(fromName: string): string {
  /**
   * Scenarios:
   * - User's name is spelled as first and last name: John Smith => JS
   * - User's name has a middle name or initial: John C. Smith => JS
   * - User's Name has dashes in it: Kelly Davis-Johnson => KD
   */
  const initials = fromName
    .split(' ')
    .filter((part) => part !== '')
    .map(produceAbbreviation)
    .reduce(
      (prev, curr, idx, arr) =>
        idx === 0 || idx === arr.length - 1 ? prev + curr : prev,
      '',
    )
    .toUpperCase();
  return initials;
}

/**
 * `import {Avatar} from "@chanzuckerberg/eds";`
 *
 * Representation of a single, unique user, keyed by the user name
 * export const PopoverContainer = React.forwardRef<
   HTMLDivElement,
   PopoverContainerProps
 >(({ className, children, ...other }, ref) => {
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      ariaLabel,
      className,
      icon = 'person',
      isInteractive,
      size = 'md',
      user,
      variant = 'text',
      src,
      ...other
    }: AvatarProps,
    ref,
  ) => {
    const componentClassName = clsx(
      styles['avatar'],
      styles[`avatar--circle`],
      isInteractive && styles['avatar--is-interactive'],
      size && styles[`avatar--${size}`],
      variant && styles[`avatar--${variant}`],
      className,
    );

    const descriptiveLabel =
      ariaLabel ??
      `Avatar for ${user ? '' : 'unknown '}user ${user?.fullName || ''}`;

    // use the display name if prop is provided. Otherwise, try to calculate initials
    let avatarDisplayName = user ? getInitials(user.fullName) : '??';

    if (user?.displayName) {
      avatarDisplayName = user.displayName;
    }

    const presetMap: Record<NonNullable<AvatarProps['size']>, Preset> = {
      sm: 'title-sm',
      md: 'title-md',
      lg: 'title-md',
      xl: 'headline-md',
    };

    const iconSizeMap: Record<NonNullable<AvatarProps['size']>, number> = {
      sm: 16,
      md: 24,
      lg: 32,
      xl: 40,
    };

    return (
      <div
        aria-label={descriptiveLabel}
        className={componentClassName}
        role="img"
        {...other}
      >
        {variant === 'text' && (
          <Text as="span" preset={presetMap[size]}>
            {avatarDisplayName}
          </Text>
        )}
        {variant === 'icon' && (
          <Icon
            name={icon}
            purpose="decorative"
            size={`${iconSizeMap[size]}px`}
          />
        )}
        {variant === 'image' && src && (
          <img alt="user" className={styles['avatar__image']} src={src} />
        )}
        {variant === 'image' && !src && (
          <Text as="span" preset={presetMap[size]}>
            {avatarDisplayName}
          </Text>
        )}
      </div>
    );
  },
);
