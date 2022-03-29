import clsx from 'clsx';
import React from 'react';
import styles from './Avatar.module.css';

import AvatarImage from '../AvatarImage';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Avatar: React.FC<Props> = ({ className, ...other }) => {
  const componentClassName = clsx(styles['avatar'], className, {});
  return (
    <div className={componentClassName} {...other}>
      <AvatarImage />
    </div>
  );
};
