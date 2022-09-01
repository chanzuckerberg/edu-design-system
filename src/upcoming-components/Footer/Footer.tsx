import React, { ReactNode } from 'react';
import LayoutContainer from '../../components/LayoutContainer';

export interface Props {
  children: ReactNode /* Child node(s) that can be nested inside component */;
  className?: string /* CSS class names that can be appended to the component. */;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Footer} from "@chanzuckerberg/eds";
 * ```
 *
 * Components thats presents the footer layout with addtional styles passed in props.
 */
export const Footer = ({ children, className, ...other }: Props) => {
  return (
    <footer className={className} role="contentinfo" {...other}>
      <LayoutContainer>{children}</LayoutContainer>
    </footer>
  );
};
