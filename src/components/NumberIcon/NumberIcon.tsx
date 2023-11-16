import clsx from 'clsx';
import React from 'react';

import type { Size } from '../../util/variant-types';

import Icon, { type IconName } from '../Icon';
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
   * Icon override for component.
   */
  icon?: Extract<IconName, 'circle'>;

  /**
   * Incomplete prop to show incomplete state
   */
  incomplete?: boolean;
  /**
   * Number to be shown as the icon.
   */
  number?: number;
  /**
   * The size of the icon.
   *
   * **Default is `"lg"`**.
   */
  size?: Extract<Size, 'sm' | 'lg'>;
  /**
   * The variant of the icon.
   *
   * **Default is `"base"`**.
   *
   * Variant `success` will use a symbol to mark success, along with different color tokens
   */
  variant?: 'base' | 'success';
  /**
   * Number icon title
   *
   * When using `incomplete` this is required.
   */
  numberIconTitle?: string;
}

/**
 * `import {NumberIcon} from "@chanzuckerberg/eds";`
 *
 * Treats a numeral as an icon by wrapping it in a container and adding color/spacing.
 *
 */
export const NumberIcon = ({
  className,
  number,
  size = 'lg',
  variant = 'base',
  icon = 'circle',
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
      as="span"
      className={componentClassName}
      preset={size === 'sm' ? 'body-xs' : 'body-sm'}
      role="img"
      {...other}
    >
      {incomplete && numberIconTitle ? (
        <Icon
          className={styles['number-icon__icon']}
          color="inherit"
          name={icon}
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

NumberIcon.displayName = 'NumberIcon';
