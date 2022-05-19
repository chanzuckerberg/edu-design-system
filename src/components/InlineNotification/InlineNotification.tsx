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
  text?: string;
  /**
   * The score as a string to be appended after the text.
   */
  score?: string;
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
  isFullWidth,
  isStrong,
  score,
  text,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['inline-notification'],
    styles[`inline-notification--${variant}`],
    isFullWidth && styles[`inline-notification--full-width`],
    isStrong && styles[`inline-notification--${variant}-strong`],
    className,
  );
  const iconClassName = clsx(
    styles['inline-notification__icon'],
    styles[`inline-notification__icon-${variant}`],
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
      <Text as="span" variant={variant === 'yield' ? 'base' : variant}>
        {text}
        {score && (
          <Text as="span" variant="base">
            {' '}
            Score:
          </Text>
        )}
        {score && (
          <Text as="span" variant="base" weight="bold">
            {' '}
            {score}
          </Text>
        )}
      </Text>
    </div>
  );
};
