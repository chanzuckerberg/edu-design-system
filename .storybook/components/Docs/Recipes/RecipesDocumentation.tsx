import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
import { LayoutContainer } from '../../../../src/components/LayoutContainer/LayoutContainer';
import { LayoutLinelengthContainer } from '../../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
// @ts-expect-error prism.js must be in JS
import Prism from '../prism';
import '../prism.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
}

export const RecipesDocumentation: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <LayoutContainer>
      <LayoutLinelengthContainer>{children}</LayoutLinelengthContainer>
    </LayoutContainer>
  );
};
