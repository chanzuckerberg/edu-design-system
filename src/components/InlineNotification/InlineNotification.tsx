import clsx from 'clsx';
import React from 'react';
import Icon from '../Icon';
import Text from '../Text';
import styles from './InlineNotification.module.css';

export const VARIANTS = ['brand', 'success', 'warning', 'yield'] as const;

const variantToIconAssetsMap: {
  [key in Variant]: {
    name: 'info' | 'check-circle' | 'warning' | 'error-inverted';
    title: 'info' | 'success' | 'alert' | 'yield';
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
    name: 'error-inverted',
    title: 'yield',
  },
};

type Variant = (typeof VARIANTS)[number];

type Props = {
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
  /**
   * Indicates an inactive state for the full width variant where the icon
   * will be hidden and the text will be lighter.
   * Overrides variant prop and isStrong prop as a result.
   * Only to be used with isFullWidth.
   */
  inactive?: boolean;
  /**
   * Toggles notification that fills the full width of its container.
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
 * `import {InlineNotification} from "@chanzuckerberg/eds";`
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
  const subtle = !isStrong;
  const componentClassName = clsx(
    styles['inline-notification'],
    styles[`inline-notification--${variant}`],
    subtle && styles['inline-notification--subtle'],
    isFullWidth && styles[`inline-notification--full-width`],
    isFullWidth &&
      (subtle || inactive) &&
      styles[`inline-notification--full-width-subtle`],
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
        variant={variant === 'yield' ? 'neutral-medium' : variant}
      >
        {text}
      </Text>
    </div>
  );
};
