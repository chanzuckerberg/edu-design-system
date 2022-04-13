import React, { ReactNode } from 'react';
import Heading, { HeadingElement } from '../Heading';

export interface Props {
  /**
   * The element this component will render as
   */
  as?: HeadingElement;
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
export const BannerTitle = ({ as = 'h3', children, ...other }: Props) => {
  return (
    <Heading as={as} size="h5" {...other}>
      {children}
    </Heading>
  );
};
