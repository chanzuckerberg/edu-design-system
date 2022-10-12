import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
// @ts-expect-error prism.js must be in JS
import Prism from './prism.js';
import { LayoutContainer } from '../../../src/components/LayoutContainer/LayoutContainer';
import { LayoutLinelengthContainer } from '../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
import './prism.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Documentation: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <LayoutContainer>
      <LayoutLinelengthContainer>{children}</LayoutLinelengthContainer>
    </LayoutContainer>
  );
};
