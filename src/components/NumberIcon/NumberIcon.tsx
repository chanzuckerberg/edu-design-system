import { clsx } from 'clsx';
import React from 'react';
import Icon from '../Icon';
import Text from '../Text';
import styles from './NumberIcon.module.css';

export interface Props {
  /**
   * Screen-reader text for the number icon.
   */
  'aria-label': string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Incomplete prop to show incomplete state
   */
  incomplete?: boolean;
  /**
   * Number to be shown as the icon.
   */
  number?: number;
  /**
   * The size of the icon. Defaults to 'lg'.
   */
  size?: 'sm';
  /**
   * The color variant of the icon. Defaults to 'base'.
   */
  variant?: 'base' | 'success';
  /**
   * Number icon title
   */
  numberIconTitle?: string;
}

/**
 * `import {NumberIcon} from "@chanzuckerberg/eds";`
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
  size,
  variant = 'base',
  incomplete,
  numberIconTitle,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['number-icon'],
    styles[`number-icon--${variant}`],
    size && styles[`number-icon--${size}`],
    incomplete && styles['number-icon--incomplete'],
    className,
  );

  return (
    <Text
      /**
       * Set as 'span' since icon use is more inline than block, but no effect since display is 'flex'.
       */
      as="span"
      className={componentClassName}
      role="img"
      size="sm"
      variant={variant === 'base' ? 'neutral-medium' : 'white'}
      {...other}
    >
      {/**
       *
       * When `incomplete` is defined and there is a numberIconTitle on the circle icon, then this will render
       * the proper icon with the incomplete text provided to that icon.
       */}
      {incomplete && numberIconTitle ? (
        <Icon
          className={styles['number-icon__icon']}
          color="inherit"
          name="circle"
          purpose="informative"
          size={size === 'sm' ? '0.25rem' : '0.5rem'}
          title={numberIconTitle}
        />
      ) : (
        /**
         * If this is not incomplete, then the number prop provided will show within the border.
         */
        number
      )}
    </Text>
  );
};
