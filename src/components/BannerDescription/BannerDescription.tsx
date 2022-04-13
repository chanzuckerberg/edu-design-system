import React, { ReactNode } from 'react';
import Text from '../Text';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Children content
   */
  children: ReactNode;
}

/**
 * Used for the title text in the Banner.
 */
export const BannerDescription = ({ children, ...other }: Props) => {
  return <Text {...other}>{children}</Text>;
};
