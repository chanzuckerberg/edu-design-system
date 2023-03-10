import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
// @ts-expect-error prism.js must be in JS
import Prism from './prism';
import { LayoutContainer } from '../../../src/components/LayoutContainer/LayoutContainer';
import { LayoutLinelengthContainer } from '../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
import './prism.css';
import styles from './Documentation.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
}

export const Documentation: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <LayoutContainer className={styles['documentation']}>
      <LayoutLinelengthContainer>{children}</LayoutLinelengthContainer>
    </LayoutContainer>
  );
};
