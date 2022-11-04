import React from 'react';

import AvatarImage from '../AvatarImage';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * An example avatar.
 */
export const Avatar = ({ className, ...other }: Props) => {
  return (
    <div className={className} {...other}>
      <AvatarImage />
    </div>
  );
};
