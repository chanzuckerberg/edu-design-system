import clsx from 'clsx';
import React from 'react';
import styles from './NumberIcon.module.css';
import Text from '../Text';

export interface Props {
  /**
   * Screen-reader text for the number icon.
   */
  'aria-label'?: string;
  /**
   * Id that links a label text for the number icon.
   */
  'aria-labelledby'?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Number to be shown as the icon.
   */
  number: number;
  /**
   * The size of the icon. Defaults to 'lg'.
   */
  size?: 'sm' | 'lg';
  /**
   * The color variant of the icon. Defaults to 'base'.
   */
  variant?: 'base' | 'success';
}

/**
 * ```ts
 * import {NumberIcon} from "@chanzuckerberg/eds";
 * ```
 *
 * Encloses a number in a circle to be used as an icon.
 *
 * Example usage:
 *
 * ```tsx
 * <NumberIcon aria-label="1" number={1} />
 * ```
 */
export const NumberIcon = ({
  className,
  number,
  size = 'lg',
  variant = 'base',
  ...other
}: Props) => {
  if (
    process.env.NODE_ENV !== 'production' &&
    !other['aria-label'] &&
    !other['aria-labelledby']
  ) {
    console.warn('No accessible name for the number icon.');
  }
  const componentClassName = clsx(
    styles['number-icon'],
    styles[`number-icon--${variant}`],
    styles[`number-icon--${size}`],
    className,
  );

  /**
   * 1) Set as 'span' since icon use is more inline than block, but no effect since display is 'flex'.
   */
  return (
    <Text
      as="span" /* 1 */
      className={componentClassName}
      role="img"
      size="sm"
      variant={variant === 'base' ? 'base' : 'white'}
      {...other}
    >
      {number}
    </Text>
  );
};
