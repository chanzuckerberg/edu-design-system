import React from 'react';

import AvatarImage from '../AvatarImage';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * ```ts
 * import {Avatar} from "@chanzuckerberg/eds";
 * ```
 *
 * Component that presents the user's avatar image with additional styling passed in.
 */
export const Avatar = ({ className, ...other }: Props) => {
  return (
    <div className={className} {...other}>
      <AvatarImage />
    </div>
  );
};
