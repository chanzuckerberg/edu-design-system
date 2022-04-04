import clsx from 'clsx';
import React from 'react';
import styles from './LoadingIndicator.module.css';
import Icon from '../Icon';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const LoadingIndicator = ({ className, ...other }: Props) => {
  const componentClassName = clsx(styles['loading-indicator'], className, {});
  return (
    <div className={componentClassName} {...other}>
      <Icon
        purpose="decorative"
        name="spinner"
        className={styles['loading-indicator__icon']}
      />
    </div>
  );
};
