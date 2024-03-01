import clsx from 'clsx';
import React from 'react';
import Icon, { type IconName } from '../Icon';
import Text from '../Text';
import styles from './InlineNotification.module.css';

export const VARIANTS = ['brand', 'success', 'warning'] as const;

const variantToIconAssetsMap: {
  [key in Variant]: {
    icon: Extract<
      IconName,
      'info' | 'check-circle' | 'warning' | 'error-inverted'
    >;
    title: 'info' | 'success' | 'alert';
  };
} = {
  brand: {
    icon: 'info',
    title: 'info',
  },
  success: {
    icon: 'check-circle',
    title: 'success',
  },
  warning: {
    icon: 'warning',
    title: 'alert',
  },
};

type Variant = (typeof VARIANTS)[number];

type Props = {
  /**
   * CSS class names that can be appended to the component for styling.
   */
  className?: string;
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
   * The color variant of the tag.
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
  isFullWidth,
  isStrong,
  text,
  variant,
  ...other
}: Props) => {
  const subtle = !isStrong;
  const componentClassName = clsx(
    styles['inline-notification'],
    styles[`inline-notification--${variant}`],
    subtle && styles['inline-notification--subtle'],
    isFullWidth && styles[`inline-notification--full-width`],
    isFullWidth && subtle && styles[`inline-notification--full-width-subtle`],
    className,
  );

  const iconClassName = clsx(
    styles['inline-notification__icon'],
    styles[`inline-notification__icon--${variant}`],
  );

  const textClassName = clsx(styles[`inline-notification__text`]);

  return (
    <div className={componentClassName} {...other}>
      <Icon
        className={iconClassName}
        name={variantToIconAssetsMap[variant].icon}
        purpose="informative"
        size="1.5rem"
        title={variantToIconAssetsMap[variant].title}
      />
      <Text as="span" className={textClassName} preset="label-md-subtle">
        {text}
      </Text>
    </div>
  );
};

InlineNotification.displayName = 'InlineNotification';
