import type {ReactNode} from 'react';
import React, {useEffect} from 'react';
import {LayoutContainer} from '../../../src/components/LayoutContainer/LayoutContainer';
import {LayoutLinelengthContainer} from '../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
// @ts-expect-error prism.js must be in JS
import Prism from '../Docs/prism';
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
export const GettingStartedDocumentation: React.FC<Props> = ({children}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <LayoutContainer>
      <LayoutLinelengthContainer>{children}</LayoutLinelengthContainer>
    </LayoutContainer>
  );
};
