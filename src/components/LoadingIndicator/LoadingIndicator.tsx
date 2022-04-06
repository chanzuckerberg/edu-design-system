import clsx from 'clsx';
import React from 'react';
import styles from './LoadingIndicator.module.css';
import { EdsThemeColorTextNeutralDefault } from '../../tokens-dist/colors';
import Icon from '../Icon';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Width/Height string (px, rem, em, vh, etc.)
   */
  size?: string;
}

/**
 * Primary UI component for user interaction
 */
export const LoadingIndicator = ({ className, size, ...other }: Props) => {
  const componentClassName = clsx(styles['loading-indicator'], className, {});
  return (
    <div className={componentClassName} {...other}>
      <Icon
        className={styles['loading-indicator__icon']}
        color={EdsThemeColorTextNeutralDefault}
        name="spinner"
        purpose="decorative"
        size={size || '3rem'}
      />
    </div>
  );
};
