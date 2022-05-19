import clsx from 'clsx';
import React from 'react';
import styles from './InlineNotification.module.css';
import { Icon, Text } from '../../';

export const VARIANTS = ['brand', 'success', 'warning', 'yield'] as const;

const variantToIconAssetsMap: {
  [key in 'brand' | 'success' | 'warning' | 'yield']: {
    name: 'info' | 'check-circle' | 'warning' | 'error';
    title: 'info' | 'success' | 'alert' | 'review';
  };
} = {
  brand: {
    name: 'info',
    title: 'info',
  },
  success: {
    name: 'check-circle',
    title: 'success',
  },
  warning: {
    name: 'warning',
    title: 'alert',
  },
  yield: {
    name: 'error',
    title: 'review',
  },
};

type Variant = typeof VARIANTS[number];

type Props = {
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  /**
   * Indicates inactive state for the full width variant. Overrides variant prop.
   * Only to be used with isFullWidth.
   */
  inactive?: boolean;
  /**
   * Toggles notification that fills the full width of its container.
   * Used for CardWithNotification recipe.
   */
  isFullWidth?: boolean;
  /**
   * Toggles the stronger background variants.
   */
  isStrong?: boolean;
  /**
   * The text contents of the tag, nested inside the component, in addition to the icon.
   */
  text: React.ReactNode;
  /**
   * The color variant of the tag. New variants should be supported
   * in the VARIANTS array and by its separate style in CSS file.
   */
  variant: Variant;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {InlineNotification} from "@chanzuckerberg/eds";
 * ```
 *
 * This component provides an inline banner accompanied with an icon for messaging users.
 */
export const InlineNotification = ({
  className,
  inactive,
  isFullWidth,
  isStrong,
  text,
  variant,
  ...other
}: Props) => {
  if (!isFullWidth && inactive && process.env.NODE_ENV !== 'production') {
    throw new Error('inactive prop must be used with isFullWidth prop.');
  }
  const componentClassName = clsx(
    styles['inline-notification'],
    styles[`inline-notification--${variant}`],
    !inactive && isStrong && styles[`inline-notification--${variant}-strong`],
    isFullWidth && styles[`inline-notification--full-width`],
    className,
  );
  const iconClassName = clsx(
    styles['inline-notification__icon'],
    styles[`inline-notification__icon--${variant}`],
    inactive && styles[`inline-notification__icon--inactive`],
  );
  const textClassName = clsx(
    styles[`inline-notification__text`],
    inactive && styles[`inline-notification__text--inactive`],
  );
  return (
    <div className={componentClassName} {...other}>
      <Icon
        className={iconClassName}
        name={variantToIconAssetsMap[variant].name}
        purpose="informative"
        size="1.5rem"
        title={variantToIconAssetsMap[variant].title}
      />
      <Text
        as="span"
        className={textClassName}
        variant={variant === 'yield' ? 'base' : variant}
      >
        {text}
      </Text>
    </div>
  );
};
