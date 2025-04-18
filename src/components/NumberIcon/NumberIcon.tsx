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

/**
 * `import {NumberIcon} from "@chanzuckerberg/eds";`
 *
 * Treats a numeral as an icon by wrapping it in a container and adding color/spacing.
 *
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
