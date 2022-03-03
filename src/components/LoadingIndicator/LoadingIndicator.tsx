import React from 'react';
import clsx from 'clsx';
import styles from './LoadingIndicator.module.css';
import { Icon } from '../Icon/Icon';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const LoadingIndicator: React.FC<Props> = ({ className, ...other }) => {
  const componentClassName = clsx(styles['loading-indicator'], className, {});
  return (
    <div className={componentClassName} {...other}>
      <Icon
        aria-hidden="true"
        name="spinner"
        className={styles['loading-indicator__icon']}
      />
    </div>
  );
};
