import clsx from 'clsx';
import React from 'react';
import styles from './Popover.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Popover: React.FC<Props> = ({ className, ...other }) => {
  const componentClassName = clsx(styles['popover'], className, {});
  return (
    <div className={componentClassName} {...other}>
      Hello!
    </div>
  );
};
