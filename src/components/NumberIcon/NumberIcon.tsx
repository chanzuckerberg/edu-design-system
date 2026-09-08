import clsx from 'clsx';
import React from 'react';

import type { Size } from '../../util/variant-types';

import Text from '../Text';

import styles from './NumberIcon.module.css';

export type NumberIconProps = {
  // Component API
  /**
   * (Required) Screen-reader text for the number icon.
   */
  'aria-label': string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:
   *
   * - `--number-icon__bg`
   * - `--number-icon__border`
   * - `--number-icon__fg`
   */
  style?: NumberIconCSSProperties;
  // Design API
  /**
   * Whether `NumberIcon` can be focused on, clicked, etc.
   */
  isInteractive?: boolean;
  /**
   * Number to be shown as the icon. Maximum of two digits.
   */
  number?: number;
  /**
   * The size of the icon.
   *
   * **Default is `"lg"`**.
   */
  size?: Extract<Size, 'md' | 'lg'>;
  /**
   * Indication of the status of the referenced item
   */
  status?: 'completed' | 'incomplete' | 'default';
};

export interface NumberIconCSSProperties extends React.CSSProperties {
  /**
   * Custom property to customize the background color of this component (e.g., background color)
   */
  '--number-icon__bg'?: string;

  /**
   * Custom property to customize the border color of this component
   */
  '--number-icon__border'?: string;

  /**
   * Custom property to customize the foreground color of this component (e.g., text, icon, etc.)
   */
  '--number-icon__fg'?: string;
}

/**
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Progress indicator | Shows where you are in a process that contains multiple distinct steps. | Filter selectors; user profile actions; navigation inside buttons. |
 * | Steps | Emphasizes steps in a procedure that is outlined on screen. | Process steps. |
 *
 * ### Best Practices
 *
 * * Be sure the number icon size is consistent throughout your application.
 * * When used next to text, the number icon should be center-aligned.
 * * Adding adequate space around the icon allows for legibility and touch. A minimum touch target area of 48px is recommended.
 */
export const NumberIcon = ({
  className,
  isInteractive = false,
  number,
  status = 'default',
  size = 'lg',
  ...other
}: NumberIconProps) => {
  const componentClassName = clsx(
    className,
    styles['number-icon'],
    isInteractive && styles['number-icon--is-interactive'],
    size && styles[`number-icon--size-${size}`],
    status && styles[`number-icon--status-${status}`],
  );

  return (
    <Text
      as="span"
      className={componentClassName}
      preset={size === 'md' ? 'label-md' : 'label-lg'}
      role="img"
      tabIndex={isInteractive ? 0 : -1}
      {...other}
    >
      {number}
    </Text>
  );
};

NumberIcon.displayName = 'NumberIcon';
