import React, { ReactNode, useEffect } from 'react';
// @ts-expect-error prism.js must be in JS
import { LayoutContainer } from '../../../src/components/LayoutContainer/LayoutContainer';
import { LayoutLinelengthContainer } from '../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
import Prism from '../Docs/prism.js';
import '../Docs/prism.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const GettingStartedDocumentation: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <LayoutContainer>
      <LayoutLinelengthContainer>{children}</LayoutLinelengthContainer>
    </LayoutContainer>
  );
};
