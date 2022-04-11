import clsx from 'clsx';
import React from 'react';

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
export const Avatar = ({ className, ...other }: Props) => {
  const componentClassName = clsx('avatar', className, {});
  return (
    <div className={componentClassName} {...other}>
      <AvatarImage />
    </div>
  );
};
