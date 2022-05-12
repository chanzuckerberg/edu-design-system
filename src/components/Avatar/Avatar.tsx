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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Component that presents the user's avatar image with additional styling passed in.
 */
export const Avatar = ({ className, ...other }: Props) => {
  const componentClassName = clsx('avatar', className, {});
  return (
    <div className={componentClassName} {...other}>
      <AvatarImage />
    </div>
  );
};
